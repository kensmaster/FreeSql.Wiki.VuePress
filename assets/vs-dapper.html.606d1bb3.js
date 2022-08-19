import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o,c as i,a as n,b as t,w as e,d as c,e as s}from"./app.93274a18.js";const u={},r=c(`<h1 id="\u4E0E-dapper-\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u4E0E-dapper-\u6BD4\u8F83" aria-hidden="true">#</a> \u4E0E Dapper \u6BD4\u8F83</h1><p>\u4F17\u6240\u5468\u77E5 Dapper \u662F .NET \u4E0B\u6700\u8F7B\u6700\u5FEB\u7684 ORM\uFF0C\u5B83\u662F\u559C\u6B22\u5199 SQL \u7801\u519C\u7684\u798F\u97F3\uFF0C\u76F8\u5BF9\u4E8E SqlHelper \u5B83\u66F4\u52A0\u65B9\u4FBF\uFF0C\u636E\u7EDF\u8BA1 10 \u4E2A .NETer \u6709 9 \u4E2A \u7528\u8FC7 Dapper\u3002</p><p>\u8FD9\u7BC7\u6587\u7AE0\u4E3A\u51C6\u5907\u4F7F\u7528 FreeSql \u7684\u670B\u53CB\u89E3\u60D1\uFF0C\u5BF9\u6BD4 Dapper \u6709\u4F55\u4F18\u52BF\uFF0C\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 FreeSql\uFF1F\u5E0C\u671B\u672C\u6587\u5185\u5BB9\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\u3002</p><h2 id="\u5173\u4E8E\u6027\u80FD-\u8F93\u4E86" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6027\u80FD-\u8F93\u4E86" aria-hidden="true">#</a> \u5173\u4E8E\u6027\u80FD\uFF08\u8F93\u4E86\uFF09</h2><p>Dapper + SQL \u662F\u5927\u5BB6\u4E00\u822C\u6240\u7528\u7684\u65B9\u5F0F\uFF0C\u6027\u80FD\u5BF9\u6BD4\u4E3B\u8981\u4F53\u73B0\u5728\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><p>1\u3001\u6267\u884C\u524D\uFF0C\u8868\u8FBE\u5F0F\u6811\u89E3\u6790\uFF0C\u62FC\u63A5 SQL \u7684\u6D88\u8017\uFF1A</p><ul><li>Dapper \u51E0\u4E4E\u6CA1\u6709\u6D88\u8017\uFF1B</li><li>FreeSql \u4F1A\u5B58\u5728\u9012\u5F52\u89E3\u6790\u3001\u5BF9\u8C61\u62C6\u7BB1\u7B49\u64CD\u4F5C\uFF1B</li></ul><p>\u4ECE\u9879\u76EE\u5DE5\u7A0B\u53EF\u7EF4\u62A4\u6027\u89D2\u5EA6\u770B\uFF0C\u8FD9\u4E00\u70B9\u6027\u80FD\u635F\u5931\u662F\u80FD\u88AB\u5BB9\u5FCD\u7684\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684\u6D4B\u8BD5\u7ED3\u679C\u3002</p><p>2\u3001\u6267\u884C\u540E\uFF0C\u8FD4\u56DE\u6570\u636E\u8F6C\u6362\u4E3A List\uFF1A</p><ul><li>Dapper \u91C7\u7528 Emit \u6784\u9020\u59D4\u6258\u5E76\u7F13\u5B58\uFF0C\u6027\u80FD\u63A5\u8FD1\u539F\u751F\u4EE3\u7801\uFF1B</li><li>FreeSql \u91C7\u7528 ExpressionTree \u6784\u9020\u59D4\u6258\u5E76\u7F13\u5B58\uFF0C\u4E3A\u4E86\u6620\u5C04\u7C7B\u578B\u66F4\u52A0\u6613\u7528\u4F7F\u7528\u4E86\u4E00\u70B9\u88C5\u7BB1\u64CD\u4F5C\uFF0C\u6027\u80FD\u6BD4 Dapper \u7565\u4F4E\uFF1B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">BenchmarkDotNet</span><span class="token operator">=</span>v0.12.1, <span class="token assign-left variable">OS</span><span class="token operator">=</span>Windows <span class="token number">10.0</span>.19044
Intel Core i7-8700K CPU <span class="token number">3</span>.70GHz <span class="token punctuation">(</span>Coffee Lake<span class="token punctuation">)</span>, <span class="token number">1</span> CPU, <span class="token number">12</span> logical and <span class="token number">6</span> physical cores
.NET Core <span class="token assign-left variable">SDK</span><span class="token operator">=</span><span class="token number">6.0</span>.100
  <span class="token punctuation">[</span>Host<span class="token punctuation">]</span>     <span class="token builtin class-name">:</span> .NET Core <span class="token number">5.0</span>.11 <span class="token punctuation">(</span>CoreCLR <span class="token number">5.0</span>.1121.47308, CoreFX <span class="token number">5.0</span>.1121.47308<span class="token punctuation">)</span>, X64 RyuJIT DEBUG
  Job-LEQVAV <span class="token builtin class-name">:</span> .NET Core <span class="token number">5.0</span>.11 <span class="token punctuation">(</span>CoreCLR <span class="token number">5.0</span>.1121.47308, CoreFX <span class="token number">5.0</span>.1121.47308<span class="token punctuation">)</span>, X64 RyuJIT DEBUG

<span class="token assign-left variable">BuildConfiguration</span><span class="token operator">=</span>Debug  <span class="token assign-left variable">InvocationCount</span><span class="token operator">=</span><span class="token number">1</span>  <span class="token assign-left variable">UnrollFactor</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>size</th><th style="text-align:right;">Mean</th><th style="text-align:right;">Error</th><th style="text-align:right;">StdDev</th><th style="text-align:right;">Median</th><th style="text-align:right;">Rank</th></tr></thead><tbody><tr><td>FreeSqlSelect</td><td>1</td><td style="text-align:right;">271.6 us</td><td style="text-align:right;">14.03 us</td><td style="text-align:right;">41.16 us</td><td style="text-align:right;">272.6 us</td><td style="text-align:right;">2</td></tr><tr><td>SqlSugarSelect</td><td>1</td><td style="text-align:right;">323.5 us</td><td style="text-align:right;">15.75 us</td><td style="text-align:right;">45.18 us</td><td style="text-align:right;">314.9 us</td><td style="text-align:right;">3</td></tr><tr><td>EfCoreSelect</td><td>1</td><td style="text-align:right;">392.8 us</td><td style="text-align:right;">17.61 us</td><td style="text-align:right;">49.39 us</td><td style="text-align:right;">376.2 us</td><td style="text-align:right;">4</td></tr><tr><td>DapperSelete</td><td>1</td><td style="text-align:right;">215.9 us</td><td style="text-align:right;">11.88 us</td><td style="text-align:right;">33.52 us</td><td style="text-align:right;">213.8 us</td><td style="text-align:right;">1</td></tr><tr><td>FreeSqlSelect</td><td>500</td><td style="text-align:right;">811.8 us</td><td style="text-align:right;">18.86 us</td><td style="text-align:right;">55.02 us</td><td style="text-align:right;">798.5 us</td><td style="text-align:right;">5</td></tr><tr><td>SqlSugarSelect</td><td>500</td><td style="text-align:right;">1,148.6 us</td><td style="text-align:right;">53.94 us</td><td style="text-align:right;">157.34 us</td><td style="text-align:right;">1,116.3 us</td><td style="text-align:right;">7</td></tr><tr><td>EfCoreSelect</td><td>500</td><td style="text-align:right;">1,310.2 us</td><td style="text-align:right;">89.90 us</td><td style="text-align:right;">262.25 us</td><td style="text-align:right;">1,219.3 us</td><td style="text-align:right;">8</td></tr><tr><td>DapperSelete</td><td>500</td><td style="text-align:right;">942.1 us</td><td style="text-align:right;">18.46 us</td><td style="text-align:right;">42.05 us</td><td style="text-align:right;">931.1 us</td><td style="text-align:right;">6</td></tr></tbody></table><blockquote><p>\u5982\u4E0A\u6D4B\u8BD5 Top1\u3001Top500 \u5355\u8868\u67E5\u8BE2\u6C34\u5E73\u7ED3\u679C</p></blockquote><blockquote><p>\u6D4B\u8BD5\u6CE8\u610F IFreeSql \u662F\u5355\u4F8B\u6A21\u5F0F\u8BBE\u8BA1\uFF0C\u8BF7\u52FF\u91CD\u590D\u521B\u5EFA\uFF0C\u6D4B\u8BD5\u524D\u8BF7\u9884\u70ED</p></blockquote><p>\u6D4B\u8BD5\u7ED3\u679C\u662F us \u7EA7\u522B\u7684\u6162\uFF0C\u80FD\u63A5\u53D7\uFF0C\u56E0\u4E3A\u6570\u636E\u5E93\u7684\u4E0A\u9650\u5E76\u53D1\u74F6\u9888\u6BD4\u8F83\u4F4E\uFF08\u51E0\u4E07\u7684\u6C34\u5E73\uFF09\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u8FD9\u4E00\u70B9\u6D88\u8017\u8FDC\u4E0D\u662F\u95EE\u9898\u3002</p><p>\u6700\u6015\u65B9\u6CD5\u6216\u8BBE\u8BA1\u9519\u4E86\u5BFC\u81F4\u7684\u6162\uFF0C\u90A3\u6162\u5C31\u662F\u79D2\u7EA7\u4EE5\u4E0A\u7684\u6162\u4E86\uFF0C\u65E0\u529B\u56DE\u5929\u3002</p><h2 id="\u5173\u4E8E\u529F\u80FD-\u8D62\u4E86" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u529F\u80FD-\u8D62\u4E86" aria-hidden="true">#</a> \u5173\u4E8E\u529F\u80FD\uFF08\u8D62\u4E86\uFF09</h2><p>Dapper \u51E0\u4E4E\u53EA\u6709\u6267\u884C SQL \u7684\u529F\u80FD\uFF0C\u5E02\u9762\u4E0A\u6709\u4E00\u4E9B\u57FA\u4E8E Dapper \u505A\u7684\u8F7B\u91CF\u7EA7 ORM\uFF0C\u53EF\u4EE5\u5BF9\u5B9E\u4F53\u5BF9\u8C61\u8FDB\u884C CRUD \u64CD\u4F5C\uFF0C\u652F\u6301\u7684\u6570\u636E\u5E93\u6709\u9650\u3002</p><p>Dapper \u5728\u529F\u80FD\u65B9\u9762\u51E0\u4E4E\u5B8C\u8D25\u4E8E FreeSql\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>CodeFirst\uFF1ADapper \u4E0D\u652F\u6301\uFF1B</li><li>\u7C7B\u578B\u6620\u5C04\uFF1ADapper \u5728\u4E0D\u540C\u6570\u636E\u5E93\u4E4B\u95F4\u7684\u7C7B\u578B\u6620\u5C04\u5BB9\u6613\u62A5\u9519\u3002\u6BD4\u5982\u5B9E\u4F53\u7C7B\u5C5E\u6027\u662F string\uFF0C\u4F46\u662F\u6570\u636E\u5E93\u7C7B\u578B\u662F int\uFF0C\u975E\u5E38\u5BB9\u6613\u62A5\u9519\uFF0C\u8FD9\u4E0D\u662F\u6760\uFF0C\u771F\u5B9E\u9879\u76EE\u4E2D\u6709\u5F88\u591A\u975E\u7B49\u6620\u5C04\u7C7B\u578B\u5B58\u5728\uFF1B</li><li>\u8868\u8FBE\u5F0F\u6811\uFF1ADapper \u4E0D\u652F\u6301\u5BFC\u822A\u5C5E\u6027\u3001\u81EA\u5B9A\u4E49\u89E3\u6790\u3001\u4EE5\u53CA\u7279\u522B\u7684\u89E3\u6790\uFF1B</li><li>\u5BFC\u822A\u5C5E\u6027\uFF1ADapper \u4E0D\u652F\u6301\uFF1B</li><li>\u6279\u91CF\u63D2\u5165\uFF1ADapper \u9700\u8981\u81EA\u5DF1\u5199 SQL \u6216\u8005\u5F15\u5165\u7B2C\u4E09\u65B9\u5305\uFF0CFreeSql \u81EA\u5E26\u96C6\u6210\uFF1B</li><li>\u6279\u91CF\u66F4\u65B0\uFF1ADapper \u9700\u8981\u81EA\u5DF1\u5199 SQL\uFF0CFreeSql \u81EA\u5E26\u96C6\u6210\uFF1B</li><li>\u5DE5\u4F5C\u5355\u5143\uFF1ADapper \u9700\u8981\u5F15\u5165\u7B2C\u4E09\u65B9\u5305\uFF0CFreeSql \u81EA\u5E26\u96C6\u6210\uFF1B</li><li>\u8BFB\u5199\u5206\u79BB\uFF1A\uFF1F\uFF1F</li><li>\u5168\u5C40\u8FC7\u6EE4\uFF1A\uFF1F\uFF1F</li></ul><p>\u7B49\u7B49\u3002\u3002\u3002</p><p>FreeSql \u8D62\u5728\u529F\u80FD\u4E30\u5BCC\uFF0C\u7ED9\u4F7F\u7528\u8005\u63D0\u4F9B\u6700\u5927\u4FBF\u5229\uFF0C\u4F60\u51C6\u5907\u597D\u5165\u5751\u4E86\u5417\uFF1F</p><h2 id="\u5982\u4F55\u63A5\u5165-\u8001\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63A5\u5165-\u8001\u9879\u76EE" aria-hidden="true">#</a> \u5982\u4F55\u63A5\u5165\uFF08\u8001\u9879\u76EE\uFF09</h2><p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u6B63\u5728\u4F7F\u7528 Dapper\uFF0C\u8BF7\u770B\u4EE5\u4E0B\u6210\u672C\u6700\u4F4E\u7684\u63A5\u5165\u65B9\u6CD5\u3002</p><p>FreeSql \u652F\u6301\u8C03\u7528 SQL/\u5B58\u50A8\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E5F\u4E3A IDbConnection/IDbTransaction \u63D0\u4F9B\u6269\u5C55\u65B9\u6CD5 Select/Delete/Insert/Update/InsertOrUpdate\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u4EE5\u6570\u636E\u5E93 SqlServer \u8BBF\u95EE\u4E3A\u4F8B\uFF0C\u53EA\u9700\u8981\u5B89\u88C5\u5DF2\u7ECF\u5212\u5206\u597D\u7684\u5C0F\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Provider.SqlServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Install-Package FreeSql.Provider.SqlServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u5EFA\u7ACB\u5B9E\u4F53\u7C7B</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestConnectionExt</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> createTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF1A\u5F00\u59CB CRUD</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connectString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestConnectionExt<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connectString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestConnectionExt</span> <span class="token punctuation">{</span> title <span class="token operator">=</span> <span class="token string">&quot;testinsert&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connectString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestConnectionExt<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> xxx<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token string">&quot;testupdated&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connectString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestConnectionExt<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> xxx<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u6216\u66F4\u65B0\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connectString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestConnectionExt<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u6DFB\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u3001\u67E5\u8BE2\uFF0C\u5DF2\u7ECF\u652F\u6301\u5B9E\u4F53\u7C7B\u64CD\u4F5C\uFF0C\u5E76\u4E14\u652F\u6301\u6279\u91CF\u63D2\u5165\u3001\u6279\u91CF\u66F4\u65B0\u3001\u6279\u91CF\u5220\u9664\u3001\u591A\u8868\u67E5\u8BE2\u3001\u5BFC\u822A\u5C5E\u6027\u67E5\u8BE2\u3002</p><p>\u53EF\u4EE5\u4EAB\u7528 FreeSql \u51E0\u4E4E\u6240\u6709\u529F\u80FD\u3002</p><p>\u601D\u8003\uFF1A\u4F7F\u7528\u8FD9\u79CD API \u8C8C\u4F3C\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u63A5\u5165\u5230 abp vnext \u4E2D\uFF1F</p><h2 id="\u5B66\u4E60\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60\u6307\u5357" aria-hidden="true">#</a> \u5B66\u4E60\u6307\u5357</h2><p>FreeSql \u662F\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\uFF08O/RM\uFF09\u7EC4\u4EF6\uFF0C\u652F\u6301 .NET Core 2.1+\u3001.NET Framework 4.0+ \u4EE5\u53CA Xamarin\u3002</p><ul><li>\u{1F6E0} \u652F\u6301 CodeFirst \u6A21\u5F0F\uFF0C\u5373\u4FBF\u4F7F\u7528 Access \u6570\u636E\u5E93\u4E5F\u652F\u6301\u6570\u636E\u8FC1\u79FB\uFF1B</li><li>\u{1F4BB} \u652F\u6301 DbFirst \u6A21\u5F0F\uFF0C\u652F\u6301\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u5B9E\u4F53\u7C7B\uFF0C\u6216\u4F7F\u7528\u5B9E\u4F53\u7C7B\u751F\u6210\u5DE5\u5177\u751F\u6210\u5B9E\u4F53\u7C7B\uFF1B</li><li>\u26F3 \u652F\u6301 \u6DF1\u5165\u7684\u7C7B\u578B\u6620\u5C04\uFF0C\u6BD4\u5982 PgSql \u7684\u6570\u7EC4\u7C7B\u578B\u7B49\uFF1B</li><li>\u2712 \u652F\u6301 \u4E30\u5BCC\u7684\u8868\u8FBE\u5F0F\u51FD\u6570\uFF0C\u4EE5\u53CA\u7075\u6D3B\u7684\u81EA\u5B9A\u4E49\u89E3\u6790\uFF1B</li><li>\u{1F3C1} \u652F\u6301 \u5BFC\u822A\u5C5E\u6027\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u591A\u8D2A\u5A6A\u52A0\u8F7D\uFF0C\u4EE5\u53CA\u5EF6\u65F6\u52A0\u8F7D\uFF1B</li><li>\u{1F4C3} \u652F\u6301 \u8BFB\u5199\u5206\u79BB\u3001\u5206\u8868\u5206\u5E93\u3001\u8FC7\u6EE4\u5668\u3001\u4E50\u89C2\u9501\u3001\u60B2\u89C2\u9501\uFF1B</li><li>\u{1F333} \u652F\u6301 MySql/SqlServer/PostgreSQL/Oracle/Sqlite/Firebird/\u8FBE\u68A6/\u4EBA\u5927\u91D1\u4ED3/\u795E\u821F\u901A\u7528/\u5357\u5927\u901A\u7528/\u7FF0\u9AD8/Access \u7B49\u6570\u636E\u5E93\uFF1B</li></ul><h4 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h4>`,42),d=s("\u300A\u5B66\u4E60 FreeSql \u4E4B\u4E00\uFF1A\u6DFB\u52A0\u6570\u636E\u300B"),k=s("\u300A\u5B66\u4E60 FreeSql \u4E4B\u4E8C\uFF1A\u5220\u9664\u6570\u636E\u300B"),h=s("\u300A\u5B66\u4E60 FreeSql \u4E4B\u4E09\uFF1A\u4FEE\u6539\u6570\u636E\u300B"),g=s("\u300A\u5B66\u4E60 FreeSql \u4E4B\u56DB\uFF1A\u67E5\u8BE2\u6570\u636E\u300B"),m=s("\u300A\u4ED3\u50A8\u5C42 Repository\u300B"),v=n("h4",{id:"\u8FDB\u9636",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8FDB\u9636","aria-hidden":"true"},"#"),s(" \u8FDB\u9636")],-1),b=s("\u300ACodeFirst \u6A21\u5F0F\u5F00\u53D1\u4ECB\u7ECD\u300B"),y=s("\u300ACodeFirst \u6A21\u5F0F\u4E4B\u4E00\uFF1A\u5B9E\u4F53\u7279\u6027\u300B"),f=s("\u300ACodeFirst \u6A21\u5F0F\u4E4B\u4E8C\uFF1AFluentApi\u300B"),x=s("\u300ACodeFirst \u6A21\u5F0F\u4E4B\u4E09\uFF1A\u81EA\u5B9A\u4E49\u7279\u6027\u300B"),_=s("\u300ACodeFirst \u6A21\u5F0F\u4E4B\u56DB\uFF1A\u7C7B\u578B\u6620\u5C04\u300B"),S=s("\u300ACodeFirst \u6A21\u5F0F\u4E4B\u4E94\uFF1A\u8FC1\u79FB\u7ED3\u6784\u300B"),w=s("\u300ADbFirst \u6A21\u5F0F\u5F00\u53D1\u4ECB\u7ECD\u300B"),q=n("h4",{id:"\u9AD8\u7EA7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9AD8\u7EA7","aria-hidden":"true"},"#"),s(" \u9AD8\u7EA7")],-1),C=s("\u300A\u6570\u636E\u5E93\u4E8B\u52A1\u300B"),D=s("\u300A\u4F7F\u7528\u8BFB\u5199\u5206\u79BB\u300B"),F=s("\u300A\u5206\u8868\u5206\u5E93\u300B"),E=s("\u300A\u591A\u79DF\u6237\u300B"),T=s("\u300A\u8FD4\u56DE\u6570\u636E\u300B"),L=s("\u300A\u4F18\u5316\u4E4B\uFF1A\u5EF6\u65F6\u52A0\u8F7D\u300B"),I=s("\u300A\u4F18\u5316\u4E4B\uFF1A\u8D2A\u5A6A\u52A0\u8F7D\u300B"),N=s("\u300AExpression \u8868\u8FBE\u5F0F\u51FD\u6570\u300B"),R=s("\u300AAOP\u300B");function B(A,U){const a=l("RouterLink");return o(),i("div",null,[r,n("ul",null,[n("li",null,[t(a,{to:"/guide/insert.html"},{default:e(()=>[d]),_:1})]),n("li",null,[t(a,{to:"/guide/delete.html"},{default:e(()=>[k]),_:1})]),n("li",null,[t(a,{to:"/guide/update.html"},{default:e(()=>[h]),_:1})]),n("li",null,[t(a,{to:"/guide/select.html"},{default:e(()=>[g]),_:1})]),n("li",null,[t(a,{to:"/guide/repository.html"},{default:e(()=>[m]),_:1})])]),v,n("ul",null,[n("li",null,[t(a,{to:"/guide/code-first.html"},{default:e(()=>[b]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"/guide/entity-attribute.html"},{default:e(()=>[y]),_:1})]),n("li",null,[t(a,{to:"/guide/fluent-api.html"},{default:e(()=>[f]),_:1})]),n("li",null,[t(a,{to:"/guide/custom-attribute.html"},{default:e(()=>[x]),_:1})]),n("li",null,[t(a,{to:"/guide/type-mapping.html"},{default:e(()=>[_]),_:1})]),n("li",null,[t(a,{to:"/guide/code-first.html#%E8%BF%81%E7%A7%BB%E7%BB%93%E6%9E%84"},{default:e(()=>[S]),_:1})])])])]),n("ul",null,[n("li",null,[t(a,{to:"/guide/db-first.html"},{default:e(()=>[w]),_:1})])]),q,n("ul",null,[n("li",null,[t(a,{to:"/guide/transaction.html"},{default:e(()=>[C]),_:1})]),n("li",null,[t(a,{to:"/guide/read-write-splitting.html"},{default:e(()=>[D]),_:1})]),n("li",null,[t(a,{to:"/guide/sharding.html"},{default:e(()=>[F]),_:1})]),n("li",null,[t(a,{to:"/guide/multi-tenancy.html"},{default:e(()=>[E]),_:1})]),n("li",null,[t(a,{to:"/guide/select-return-data.html"},{default:e(()=>[T]),_:1})]),n("li",null,[t(a,{to:"/guide/select-lazy-loading.html"},{default:e(()=>[L]),_:1})]),n("li",null,[t(a,{to:"/guide/select-include.html"},{default:e(()=>[I]),_:1})]),n("li",null,[t(a,{to:"/guide/expression-function.html"},{default:e(()=>[N]),_:1})]),n("li",null,[t(a,{to:"/guide/aop.html"},{default:e(()=>[R]),_:1})])])])}var O=p(u,[["render",B],["__file","vs-dapper.html.vue"]]);export{O as default};
