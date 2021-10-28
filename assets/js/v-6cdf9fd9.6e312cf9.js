"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[1554],{6397:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-6cdf9fd9",path:"/guide/multi-tenancy.html",title:"多租户",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"什么是多租户",slug:"什么是多租户",children:[]},{level:3,title:"方案一：按租户字段区分",slug:"方案一-按租户字段区分",children:[]},{level:3,title:"WhereCascade",slug:"wherecascade",children:[]},{level:3,title:"方案二：按租户分表",slug:"方案二-按租户分表",children:[]},{level:3,title:"方案三：按租户分库",slug:"方案三-按租户分库",children:[]},{level:3,title:"多表查询",slug:"多表查询",children:[]},{level:3,title:"实现全局控制租户",slug:"实现全局控制租户",children:[]}],filePathRelative:"guide/multi-tenancy.md",git:{updatedTime:1635428898e3,contributors:[{name:"2881099",email:"2881099@users.noreply.github.com",commits:1}]}}},7247:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(6252);const p=(0,e.uE)('<h1 id="多租户" tabindex="-1"><a class="header-anchor" href="#多租户" aria-hidden="true">#</a> 多租户</h1><h3 id="什么是多租户" tabindex="-1"><a class="header-anchor" href="#什么是多租户" aria-hidden="true">#</a> 什么是多租户</h3><p>维基百科：“软件多租户是指一种软件架构，在这种软件架构中，软件的一个实例运行在服务器上并且为多个租户服务”。一个租户是一组共享该软件实例特定权限的用户。有了多租户架构，软件应用被设计成为每个租户提供一个 专用的实例包括该实例的数据的共享，还可以共享配置，用户管理，租户自己的功能和非功能属性。多租户和多实例架构相比，多租户分离了代表不同的租户操作的多个实例。</p><p>多租户用于创建Saas（Software as-a service）应用（云处理）。</p><h3 id="方案一-按租户字段区分" tabindex="-1"><a class="header-anchor" href="#方案一-按租户字段区分" aria-hidden="true">#</a> 方案一：按租户字段区分</h3><p>FreeSql.Repository 实现了 filter（过滤与验证）功能，如：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> topicRepos <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>TerantId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用 topicRepos 对象进行 CURD 方法：</p><ul><li>在查询/修改/删除时附加此条件，从而达到不会修改 TerantId != 1 的数据；</li><li>在添加时，使用表达式验证数据的合法性，若不合法则抛出异常；</li></ul><p>利用这个功能，我们可以很方便的实现数据分区，达到租户的目的。</p><h3 id="wherecascade" tabindex="-1"><a class="header-anchor" href="#wherecascade" aria-hidden="true">#</a> WhereCascade</h3><p>多表查询时，像isdeleted每个表都给条件，挺麻烦的。WhereCascade使用后生成sql时，所有表都附上这个条件。多表租户条件也可以这样解决。</p><p>如：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">LeftJoin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">WhereCascade</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>得到的 SQL：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token keyword">FROM</span> t1\n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> t2 <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">(</span>t2<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> \n<span class="token keyword">WHERE</span> t1<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>实体可附加表达式时才生效，支持子表查询。单次查询使用的表数目越多收益越大。</p><p>可应用范围：</p><ul><li>子查询，一对多、多对多、自定义的子查询；</li><li>Join 查询，导航属性、自定义的Join查询；</li><li>Include/IncludeMany 的子集合查询；</li></ul><blockquote><p>暂时不支持【延时属性】的广播；</p></blockquote><blockquote><p>此功能和【过滤器】不同，用于单次多表查询条件的传播；</p></blockquote><h3 id="方案二-按租户分表" tabindex="-1"><a class="header-anchor" href="#方案二-按租户分表" aria-hidden="true">#</a> 方案二：按租户分表</h3><p>FreeSql.Repository 实现了 分表功能，如：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tenantId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> reposTopic <span class="token operator">=</span> orm<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">tenantId</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面我们得到一个仓储按租户分表，使用它 CURD 最终会操作 Topic_1 表。</p>',25),t=(0,e.Uk)("更多说明参考："),o=(0,e.Uk)("《FreeSql.Repository 仓储》"),c=(0,e._)("h3",{id:"方案三-按租户分库",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#方案三-按租户分库","aria-hidden":"true"},"#"),(0,e.Uk)(" 方案三：按租户分库")],-1),l=(0,e.Uk)("与方案二相同，只是表存储的位置不同，请查看 "),u=(0,e.Uk)("《FreeSql.Repository 仓储》"),i=(0,e.Uk)("、"),r=(0,e.Uk)("《分表分库》"),k=(0,e.Uk)("。"),d=(0,e.uE)('<h3 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h3><p>分表下的租户也支持多表查询，得益于 FreeSql 提供的优良基础。这部份仍然在 FreeSql.Repository 扩展库中实现的。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tenantId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">//联表查询也支持</span>\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> oldname<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">tenantId</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">LeftJoin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TopicType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId <span class="token operator">==</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上述代码的使用，将两个设置好的租户仓储合并起来查询，查询租户1下的 topic + topictype 数据，执行的 SQL语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token keyword">FROM</span> <span class="token string">&quot;Topic_1&quot;</span> a \n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token string">&quot;TopicType_1&quot;</span> b <span class="token keyword">ON</span> a<span class="token punctuation">.</span><span class="token string">&quot;TypeId&quot;</span> <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="实现全局控制租户" tabindex="-1"><a class="header-anchor" href="#实现全局控制租户" aria-hidden="true">#</a> 实现全局控制租户</h3><p>FreeSql.Repository Autofac 注入方式实现了全局【过滤与验证】的设定，方便租户功能的设计；</p>',7),h=(0,e.Uk)("具体可参考："),m=(0,e.Uk)("《过滤器》"),g={},b=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("blockquote",null,[(0,e._)("p",null,[t,(0,e.Wm)(a,{to:"/guide/repository.html"},{default:(0,e.w5)((()=>[o])),_:1})])]),c,(0,e._)("p",null,[l,(0,e.Wm)(a,{to:"/guide/repository.html"},{default:(0,e.w5)((()=>[u])),_:1}),i,(0,e.Wm)(a,{to:"/guide/sharding.html"},{default:(0,e.w5)((()=>[r])),_:1}),k]),d,(0,e._)("p",null,[h,(0,e.Wm)(a,{to:"/guide/filters.html"},{default:(0,e.w5)((()=>[m])),_:1})])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);