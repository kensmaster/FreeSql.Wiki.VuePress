(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[6533],{5146:(l,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>u});const u={key:"v-6e61f61e",path:"/guide/select.html",title:"查询",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"特别介绍 WhereDynamicFilter",slug:"特别介绍-wheredynamicfilter",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"guide/select.md",git:{updatedTime:1626269506e3,contributors:[]}}},9814:(l,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>Wl});var u=t(6252);const a=(0,u.uE)('<h1 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h1><p>FreeSql 在查询数据下足了功夫，链式查询语法、多表查询、表达式函数支持得非常到位。</p><ul><li>分页查询</li><li>单表查询</li><li>多表查询</li><li>分组聚合查询</li><li>返回数据</li><li>LinqToSql</li><li>仓储层 Repository</li><li>过滤器</li><li>延时加载</li><li>贪婪加载</li><li>表达式函数</li><li>读写分离</li><li>性能</li><li>分表分库</li><li>多租户</li></ul><h2 id="特别介绍-wheredynamicfilter" tabindex="-1"><a class="header-anchor" href="#特别介绍-wheredynamicfilter" aria-hidden="true">#</a> 特别介绍 WhereDynamicFilter</h2><p>ISelect.WhereDynamicFilter 方法实现动态过滤条件（与前端交互），支持的操作符：</p><ul><li>Contains/StartsWith/EndsWith/NotContains/NotStartsWith/NotEndsWith：包含/不包含，like &#39;%xx%&#39;，或者 like &#39;xx%&#39;，或者 like &#39;%xx&#39;</li><li>Equal/NotEqual：等于/不等于</li><li>GreaterThan/GreaterThanOrEqual：大于/大于等于</li><li>LessThan/LessThanOrEqual：小于/小于等于</li><li>Range：范围查询</li><li>DateRange：日期范围，有特殊处理 value[1] + 1</li><li>Any/NotAny：是否符合 value 中任何一项（直白的说是 SQL IN）</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">DynamicFilterInfo</span> dyfilter <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeserializeObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DynamicFilterInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">@&quot;\n{\n  &quot;&quot;Logic&quot;&quot; : &quot;&quot;Or&quot;&quot;,\n  &quot;&quot;Filters&quot;&quot; :\n  [\n    {\n      &quot;&quot;Field&quot;&quot; : &quot;&quot;Code&quot;&quot;,\n      &quot;&quot;Operator&quot;&quot; : &quot;&quot;NotContains&quot;&quot;,\n      &quot;&quot;Value&quot;&quot; : &quot;&quot;val1&quot;&quot;,\n      &quot;&quot;Filters&quot;&quot; :\n      [\n        {\n          &quot;&quot;Field&quot;&quot; : &quot;&quot;Name&quot;&quot;,\n          &quot;&quot;Operator&quot;&quot; : &quot;&quot;NotStartsWith&quot;&quot;,\n          &quot;&quot;Value&quot;&quot; : &quot;&quot;val2&quot;&quot;,\n        }\n      ]\n    },\n    {\n      &quot;&quot;Field&quot;&quot; : &quot;&quot;Parent.Code&quot;&quot;,\n      &quot;&quot;Operator&quot;&quot; : &quot;&quot;Equals&quot;&quot;,\n      &quot;&quot;Value&quot;&quot; : &quot;&quot;val11&quot;&quot;,\n      &quot;&quot;Filters&quot;&quot; :\n      [\n        {\n          &quot;&quot;Field&quot;&quot; : &quot;&quot;Parent.Name&quot;&quot;,\n          &quot;&quot;Operator&quot;&quot; : &quot;&quot;Contains&quot;&quot;,\n          &quot;&quot;Value&quot;&quot; : &quot;&quot;val22&quot;&quot;,\n        }\n      ]\n    }\n  ]\n}\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>VM_District_Parent<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WhereDynamicFilter</span><span class="token punctuation">(</span>dyfilter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//SELECT a.&quot;&quot;Code&quot;&quot;, a.&quot;&quot;Name&quot;&quot;, a.&quot;&quot;ParentCode&quot;&quot;, a__Parent.&quot;&quot;Code&quot;&quot; as4, a__Parent.&quot;&quot;Name&quot;&quot; as5, a__Parent.&quot;&quot;ParentCode&quot;&quot; as6 </span>\n<span class="token comment">//FROM &quot;&quot;D_District&quot;&quot; a </span>\n<span class="token comment">//LEFT JOIN &quot;&quot;D_District&quot;&quot; a__Parent ON a__Parent.&quot;&quot;Code&quot;&quot; = a.&quot;&quot;ParentCode&quot;&quot; </span>\n<span class="token comment">//WHERE (not((a.&quot;&quot;Code&quot;&quot;) LIKE &#39;%val1%&#39;) AND not((a.&quot;&quot;Name&quot;&quot;) LIKE &#39;val2%&#39;) OR a__Parent.&quot;&quot;Code&quot;&quot; = &#39;val11&#39; AND (a__Parent.&quot;&quot;Name&quot;&quot;) LIKE &#39;%val22%&#39;)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><blockquote><p>动态排序：ISelect.OrderByPropertyName(&quot;Parent.Code&quot;)</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>',9),s=(0,u.Wm)("thead",null,[(0,u.Wm)("tr",null,[(0,u.Wm)("th",null,"方法"),(0,u.Wm)("th",null,"返回值"),(0,u.Wm)("th",null,"参数"),(0,u.Wm)("th",null,"描述")])],-1),e=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToSql"),(0,u.Wm)("td",null,"string"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"返回即将执行的SQL语句")],-1),m=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToList"),(0,u.Wm)("td",null,"List<T1>"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"执行SQL查询，返回 T1 实体所有字段的记录，若存在导航属性则一起查询返回，记录不存在时返回 Count 为 0 的列表")],-1),o=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToList<T>"),(0,u.Wm)("td",null,"List<T>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"执行SQL查询，返回指定字段的记录，记录不存在时返回 Count 为 0 的列表")],-1),i=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToList<T>"),(0,u.Wm)("td",null,"List<T>"),(0,u.Wm)("td",null,"string field"),(0,u.Wm)("td",null,"执行SQL查询，返回 field 指定字段的记录，并以元组或基础类型(int,string,long)接收，记录不存在时返回 Count 为 0 的列表")],-1),d=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToOne"),(0,u.Wm)("td",null,"T1"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"执行SQL查询，返回 T1 实体所有字段的第一条记录，记录不存在时返回 null")],-1),r=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToAggregate<T>"),(0,u.Wm)("td",null,"List<T>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"执行SQL查询，返回指定字段的聚合结果（适合不需要 GroupBy 的场景）")],-1),W=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Any"),(0,u.Wm)("td",null,"bool"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"执行SQL查询，是否有记录")],-1),p=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Sum"),(0,u.Wm)("td",null,"T"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"指定一个列求和")],-1),c=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Min"),(0,u.Wm)("td",null,"T"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"指定一个列求最小值")],-1),q=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Max"),(0,u.Wm)("td",null,"T"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"指定一个列求最大值")],-1),b=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Avg"),(0,u.Wm)("td",null,"T"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"指定一个列求平均值")],-1),h=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【分页】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),k=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Count"),(0,u.Wm)("td",null,"long"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"查询的记录数量")],-1),g=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Count"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"out long"),(0,u.Wm)("td",null,"查询的记录数量，以参数out形式返回")],-1),L=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Skip"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int offset"),(0,u.Wm)("td",null,"查询向后偏移行数")],-1),y=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Offset"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int offset"),(0,u.Wm)("td",null,"查询向后偏移行数")],-1),T=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Limit"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int limit"),(0,u.Wm)("td",null,"查询多少条数据")],-1),f=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Take"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int limit"),(0,u.Wm)("td",null,"查询多少条数据")],-1),C=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Page"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int pageIndex, int pageSize"),(0,u.Wm)("td",null,"分页")],-1),S=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【条件】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),I=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Where"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"支持多表查询表达式，多次使用相当于AND")],-1),v=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WhereIf"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"bool, Lambda"),(0,u.Wm)("td",null,"支持多表查询表达式")],-1),N=(0,u.Wm)("td",null,"Where",-1),D=(0,u.Wm)("td",null,"<this>",-1),F=(0,u.Wm)("td",null,"string, parms",-1),_=(0,u.Uk)('原生sql语法条件，Where("id = @id", new { id = 1 } ,'),O=(0,u.Uk)("注意前缀@,根据具体数据库决定"),P=(0,u.Uk)(" 其他地方不再说明。同理 )"),E=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WhereIf"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"bool, string, parms"),(0,u.Wm)("td",null,'原生sql语法条件，WhereIf(true, "id = @id", new { id = 1 }')],-1),w=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WhereCascade"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"实现多表查询时，向每个表中附加条件")],-1),x=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WhereDynamicFilter"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"DynamicFilterInfo"),(0,u.Wm)("td",null,"动态过滤条件(与前端交互)")],-1),A=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【分组】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),B=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"GroupBy"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"按选择的列分组，GroupBy(a => a.Name)")],-1),Q=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"GroupBy"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'按原生sql语法分组，GroupBy("concat(name, @cc)", new { cc = 1 })')],-1),R=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Having"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'按原生sql语法聚合条件过滤，Having("count(name) = @cc", new { cc = 1 })')],-1),J=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Disdinct"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td"),(0,u.Wm)("td",null,".Distinct().ToList(x => x.GroupName) 是对指定字段")],-1),G=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【排序】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),V=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"OrderBy"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"按列排序，OrderBy(a => a.Time)，可多次使用")],-1),M=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"OrderByDescending"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"按列倒向排序，OrderByDescending(a => a.Time)")],-1),H=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"OrderBy"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'按原生sql语法排序，OrderBy("count(name) + @cc", new { cc = 1 })')],-1),U=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"OrderByPropertyName"),(0,u.Wm)("td",null,"string, bool"),(0,u.Wm)("td",null,"按属性名字符串排序（支持导航属性）"),(0,u.Wm)("td")],-1),z=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【联表】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),K=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"LeftJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"左联查询，可使用导航属性，或指定关联的实体类型")],-1),j=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"InnerJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"联接查询，可使用导航属性，或指定关联的实体类型")],-1),Y=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"RightJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"右联查询，可使用导航属性，或指定关联的实体类型")],-1),X=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"LeftJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'左联查询，使用原生sql语法，LeftJoin("type b on b.id = a.id and b.clicks > ?clicks", new { clicks = 1 })')],-1),Z=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"InnerJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'联接查询，使用原生sql语法，InnerJoin("type b on b.id = a.id and b.clicks > ?clicks", new { clicks = 1 })')],-1),$=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"RightJoin"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"string, parms"),(0,u.Wm)("td",null,'右联查询，使用原生sql语法，RightJoin("type b on b.id = a.id and b.clicks > ?clicks", new { clicks = 1 })')],-1),ll=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"From"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Lambda"),(0,u.Wm)("td",null,"多表查询，3个表以上使用非常方便，目前设计最大支持10个表")],-1),nl=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"【其他】"),(0,u.Wm)("td"),(0,u.Wm)("td"),(0,u.Wm)("td")],-1),tl=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"As"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,'string alias = "a"'),(0,u.Wm)("td",null,"指定别名")],-1),ul=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"Master"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"指定从主库查询（默认查询从库）")],-1),al=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"CommandTimeout"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"int"),(0,u.Wm)("td",null,"命令超时设置(秒)")],-1),sl=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WithTransaction"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"DbTransaction"),(0,u.Wm)("td",null,"设置事务对象")],-1),el=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WithConnection"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"DbConnection"),(0,u.Wm)("td",null,"设置连接对象")],-1),ml=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"WithLock"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"Enum"),(0,u.Wm)("td",null,"SqlServer NoLock 等特有的设置")],-1),ol=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ForUpdate"),(0,u.Wm)("td",null,"<this>"),(0,u.Wm)("td",null,"bool"),(0,u.Wm)("td",null,"排他更新锁，对不同的数据库已作适配，详细说明见注释")],-1),il=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"AsQueryable"),(0,u.Wm)("td",null,"IQueryable"),(0,u.Wm)("td"),(0,u.Wm)("td",null,"将 ISelect 转换为 IQueryable，此方法主要用于扩展，比如：abp IRepository GetAll() 接口方法需要返回 IQueryable 对象。注意：IQueryable 方法污染较为严重，请尽量避免此转换")],-1),dl=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"ToTreeList()"),(0,u.Wm)("td",null,"List<TEntity>"),(0,u.Wm)("td",null,"无"),(0,u.Wm)("td",null,"将父子关系的数据以 TreeList 的形式返回")],-1),rl=(0,u.Wm)("tr",null,[(0,u.Wm)("td",null,"AsTreeCte()"),(0,u.Wm)("td",null,"ISelect"),(0,u.Wm)("td",null,"(up, pathSelector, level)"),(0,u.Wm)("td",null,"递归查询父子关系表")],-1),Wl={render:function(l,n){const t=(0,u.up)("RouterLink");return(0,u.wg)(),(0,u.j4)(u.HY,null,[a,(0,u.Wm)("table",null,[s,(0,u.Wm)("tbody",null,[e,m,o,i,d,r,W,p,c,q,b,h,k,g,L,y,T,f,C,S,I,v,(0,u.Wm)("tr",null,[N,D,F,(0,u.Wm)("td",null,[_,(0,u.Wm)(t,{to:"/guide/ado.html#%E5%8F%82%E6%95%B0%E5%8C%96"},{default:(0,u.w5)((()=>[O])),_:1}),P])]),E,w,x,A,B,Q,R,J,G,V,M,H,U,z,K,j,Y,X,Z,$,ll,nl,tl,ul,al,sl,el,ml,ol,il,dl,rl])])],64)}}}}]);