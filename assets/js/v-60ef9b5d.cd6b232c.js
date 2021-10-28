"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[3992],{6982:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a={key:"v-60ef9b5d",path:"/en/guide/select.html",title:"Query Data",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Special introduction to WhereDynamicFilter",slug:"special-introduction-to-wheredynamicfilter",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"en/guide/select.md",git:{updatedTime:1635428898e3,contributors:[{name:"2881099",email:"2881099@users.noreply.github.com",commits:1}]}}},1607:(t,e,d)=>{d.r(e),d.d(e,{default:()=>n});const a=(0,d(6252).uE)('<h1 id="query-data" tabindex="-1"><a class="header-anchor" href="#query-data" aria-hidden="true">#</a> Query Data</h1><p>FreeSql has made great efforts in querying data, especially the functions such as chain query syntax, multi-table query, expression function, etc.</p><ul><li><a href="Pagination">《Paging Query》</a></li><li><a href="Query-from-Single-Table">《Query from Single Table》</a></li><li><a href="Query-from-Multi-Tablea">《Query from Multi Tables》</a></li><li><a href="Grouped-Aggregate-Query">《Grouped Aggregate Query》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Linq-to-Sql">《LinqToSql》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li><li><a href="Using-Read-Write-Separation">《Using Read/Write Separation》</a></li><li><a href="Performance">《Performance》</a></li><li><a href="Sharding-Tables-and-Database">《Sharding Tables and Database》</a></li><li><a href="Tenant">《Tenant》</a></li></ul><h2 id="special-introduction-to-wheredynamicfilter" tabindex="-1"><a class="header-anchor" href="#special-introduction-to-wheredynamicfilter" aria-hidden="true">#</a> Special introduction to WhereDynamicFilter</h2><p>The <code>ISelect.WhereDynamicFilter</code> method implements dynamic filter conditions (interacting with the front-end), supported operators:</p><ul><li>Contains/StartsWith/EndsWith/NotContains/NotStartsWith/NotEndsWith: include/not include, <code>like&#39;%xx%&#39;</code>, or <code>like&#39;xx%&#39;</code>, or <code>like&#39;%xx&#39;</code></li><li>Equal/NotEqual</li><li>GreaterThan/GreaterThanOrEqual</li><li>LessThan/LessThanOrEqual</li><li>Range: Range query</li><li>DateRange: date range, with special processing value[1] + 1</li><li>Any/NotAny: Does it match any item in <code>value</code> (to put it bluntly, <code>SQL IN</code>)</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">DynamicFilterInfo</span> dyfilter <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeserializeObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DynamicFilterInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">@&quot;\n{\n  &quot;&quot;Logic&quot;&quot; : &quot;&quot;Or&quot;&quot;,\n  &quot;&quot;Filters&quot;&quot; :\n  [\n    {\n      &quot;&quot;Field&quot;&quot; : &quot;&quot;Code&quot;&quot;, &quot;&quot;Operator&quot;&quot; : &quot;&quot;NotContains&quot;&quot;, &quot;&quot;Value&quot;&quot; : &quot;&quot;val1&quot;&quot;, \n      &quot;&quot;Filters&quot;&quot; : [{ &quot;&quot;Field&quot;&quot; : &quot;&quot;Name&quot;&quot;, &quot;&quot;Operator&quot;&quot; : &quot;&quot;NotStartsWith&quot;&quot;, &quot;&quot;Value&quot;&quot; : &quot;&quot;val2&quot;&quot; }]\n    },\n    {\n      &quot;&quot;Field&quot;&quot; : &quot;&quot;Parent.Code&quot;&quot;, &quot;&quot;Operator&quot;&quot; : &quot;&quot;Equals&quot;&quot;, &quot;&quot;Value&quot;&quot; : &quot;&quot;val11&quot;&quot;,\n      &quot;&quot;Filters&quot;&quot; : [{ &quot;&quot;Field&quot;&quot; : &quot;&quot;Parent.Name&quot;&quot;, &quot;&quot;Operator&quot;&quot; : &quot;&quot;Contains&quot;&quot;, &quot;&quot;Value&quot;&quot; : &quot;&quot;val22&quot;&quot; }]\n    }\n  ]\n}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>VM_District_Parent<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WhereDynamicFilter</span><span class="token punctuation">(</span>dyfilter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//SELECT a.&quot;&quot;Code&quot;&quot;, a.&quot;&quot;Name&quot;&quot;, a.&quot;&quot;ParentCode&quot;&quot;, a__Parent.&quot;&quot;Code&quot;&quot; as4, a__Parent.&quot;&quot;Name&quot;&quot; as5, a__Parent.&quot;&quot;ParentCode&quot;&quot; as6 </span>\n<span class="token comment">//FROM &quot;&quot;D_District&quot;&quot; a </span>\n<span class="token comment">//LEFT JOIN &quot;&quot;D_District&quot;&quot; a__Parent ON a__Parent.&quot;&quot;Code&quot;&quot; = a.&quot;&quot;ParentCode&quot;&quot; </span>\n<span class="token comment">//WHERE (not((a.&quot;&quot;Code&quot;&quot;) LIKE &#39;%val1%&#39;) AND not((a.&quot;&quot;Name&quot;&quot;) LIKE &#39;val2%&#39;) OR a__Parent.&quot;&quot;Code&quot;&quot; = &#39;val11&#39; AND (a__Parent.&quot;&quot;Name&quot;&quot;) LIKE &#39;%val22%&#39;)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>Dynamic sorting: <code>ISelect.OrderByPropertyName(&quot;Parent.Code&quot;)</code></p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Methods</th><th>Return</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>Return the SQL statement to be executed</td></tr><tr><td>ToList</td><td>List&lt;T1&gt;</td><td></td><td>Execute SQL query and return the records of all fields of the <code>T1</code> entity. If there are navigation properties, they will be queried and returned together. If the record does not exist, it will return a list with <code>Count</code> being <code>0</code></td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Execute SQL query, return the record of the specified field, if the record does not exist, return the list with <code>Count</code> as <code>0</code></td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>Execute SQL query, return the record of the field specified by field, and receive it as a tuple or basic type (int, string, long). If the record does not exist, return a list with <code>Count</code> as <code>0</code></td></tr><tr><td>ToOne</td><td>T1</td><td></td><td>Execute SQL query and return the first record of all fields of the <code>T1</code> entity, or <code>null</code> if the record does not exist</td></tr><tr><td>ToAggregate&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Execute SQL query and return the aggregated result of the specified field (suitable for scenarios where <code>GroupBy</code> is not needed)</td></tr><tr><td>Any</td><td>bool</td><td></td><td>Execute SQL query, if there are records, return true, otherwise return false.</td></tr><tr><td>Sum</td><td>T</td><td>Lambda</td><td>Specify a column and calculate the sum.</td></tr><tr><td>Min</td><td>T</td><td>Lambda</td><td>Specify a column and calculate the minimum value.</td></tr><tr><td>Max</td><td>T</td><td>Lambda</td><td>Specify a column and calculate the maximum value.</td></tr><tr><td>Avg</td><td>T</td><td>Lambda</td><td>Specify a column, calculate the average value.</td></tr><tr><td>【Pagination】</td><td></td><td></td><td></td></tr><tr><td>Count</td><td>long</td><td></td><td>The number of queried records</td></tr><tr><td>Count</td><td>&lt;this&gt;</td><td>out long</td><td>The number of queried records, returned in the form of parameter <code>out</code></td></tr><tr><td>Skip</td><td>&lt;this&gt;</td><td>int offset</td><td>Query the number of rows shifted backward</td></tr><tr><td>Offset</td><td>&lt;this&gt;</td><td>int offset</td><td>Query the number of rows shifted backward</td></tr><tr><td>Limit</td><td>&lt;this&gt;</td><td>int limit</td><td>Query a specified amount of data</td></tr><tr><td>Take</td><td>&lt;this&gt;</td><td>int limit</td><td>Query a specified amount of data</td></tr><tr><td>Page</td><td>&lt;this&gt;</td><td>int pageIndex, int pageSize</td><td>Pagination</td></tr><tr><td>【Where】</td><td></td><td></td><td></td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>Supports multi-table query expressions, multiple use is equivalent to <code>AND</code>.</td></tr><tr><td>WhereIf</td><td>&lt;this&gt;</td><td>bool, Lambda</td><td>Support multi-table query expression</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>Native Sql syntax conditions, <code>Where(&quot;id = @id&quot;, new {id = 1 })</code> Note that the prefix <code>@</code> will be <a href="ActiveX-Data-Objects#parameterization">determined according to the specific database</a></td></tr><tr><td>WhereIf</td><td>&lt;this&gt;</td><td>bool, string, parms</td><td>Native Sql syntax conditions, <code>WhereIf(true, &quot;id = @id&quot;, new {id = 1 })</code> Note that the prefix <code>@</code> will be <a href="ActiveX-Data-Objects#parameterization">determined according to the specific database</a></td></tr><tr><td>WhereCascade</td><td>&lt;this&gt;</td><td>Lambda</td><td>When querying multiple tables, add conditions to each table.</td></tr><tr><td>WhereDynamicFilter</td><td>&lt;this&gt;</td><td>DynamicFilterInfo</td><td>Dynamic filter conditions (interact with the front end)</td></tr><tr><td>【Group】</td><td></td><td></td><td></td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>Group by selected column, <code>GroupBy(a =&gt; a.Name)</code></td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>Group by native sql syntax <code>GroupBy(&quot;concat(name, @cc)&quot;, new { cc = 1 })</code>. Note that the prefix <code>@</code> will be <a href="ActiveX-Data-Objects#parameterization">determined according to the specific database</a></td></tr><tr><td>Having</td><td>&lt;this&gt;</td><td>string, parms</td><td>Filter by aggregation conditions of native sql syntax <code>Having(&quot;count(name) = @cc&quot;, new { cc = 1 })</code>. Note that the prefix <code>@</code> will be <a href="ActiveX-Data-Objects#parameterization">determined according to the specific database</a></td></tr><tr><td>Distinct</td><td>&lt;this&gt;</td><td></td><td><code>.Distinct().ToList(x =&gt; x.GroupName)</code> is to perform <code>DISTINCT</code> for the specified field.</td></tr><tr><td>【Order】</td><td></td><td></td><td></td></tr><tr><td>OrderBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>Sort by column, <code>OrderBy(a =&gt; a.Time)</code>, can be used multiple times</td></tr><tr><td>OrderByDescending</td><td>&lt;this&gt;</td><td>Lambda</td><td>按列倒向排序，OrderByDescending(a =&gt; a.Time)</td></tr><tr><td>OrderBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法排序，OrderBy(&quot;count(name) + @cc&quot;, new { cc = 1 })</td></tr><tr><td>OrderByPropertyName</td><td>string, bool</td><td></td><td>Sort by attribute name string (support navigation attributes)</td></tr><tr><td>【Join】</td><td></td><td></td><td></td></tr><tr><td>LeftJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>Left-join query, you can use navigation properties, or specify the associated entity type</td></tr><tr><td>InnerJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>Inner-join query, you can use navigation properties, or specify the associated entity type</td></tr><tr><td>RightJoin</td><td>&lt;this&gt;</td><td>Lambda</td><td>Right-join query, you can use navigation properties, or specify the associated entity type</td></tr><tr><td>LeftJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>Left-join query, using native sql syntax, <code>LeftJoin(&quot;type b on b.id = a.id and b.clicks&gt; @clicks&quot;, new {clicks = 1 })</code></td></tr><tr><td>InnerJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>Inner-join query, using native sql syntax, <code>InnerJoin(&quot;type b on b.id = a.id and b.clicks &gt; @clicks&quot;, new { clicks = 1 })</code></td></tr><tr><td>RightJoin</td><td>&lt;this&gt;</td><td>string, parms</td><td>Right-join query, using native sql syntax, <code>RightJoin(&quot;type b on b.id = a.id and b.clicks &gt; @clicks&quot;, new { clicks = 1 })</code></td></tr><tr><td>From</td><td>&lt;this&gt;</td><td>Lambda</td><td>Multi-table query, more than 3 tables will be very convenient to use (currently supports up to 10 tables by design)</td></tr><tr><td>【Other】</td><td></td><td></td><td></td></tr><tr><td>As</td><td>&lt;this&gt;</td><td>string alias = &quot;a&quot;</td><td>Specify alias</td></tr><tr><td>Master</td><td>&lt;this&gt;</td><td></td><td>Specify query from the main database (default query from the slave database)</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>Command timeout setting (seconds)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>Set the transaction object</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>Set the connection object</td></tr><tr><td>WithLock</td><td>&lt;this&gt;</td><td>Enum</td><td>Specific settings such as SqlServer <code>NoLock</code></td></tr><tr><td>ForUpdate</td><td>&lt;this&gt;</td><td>bool</td><td>Exclusive update lock, adapted to different databases, see notes for details</td></tr><tr><td>AsQueryable</td><td>IQueryable</td><td></td><td>Convert <code>ISelect</code> to <code>IQueryable</code>. This method is mainly used for extensions, for example: Abp&#39;s <code>IRepository GetAll()</code> interface method needs to return an <code>IQueryable</code> object. Note: <code>IQueryable</code> method is more polluted, please try to avoid this conversion.</td></tr><tr><td>InsertInto</td><td>int</td><td>string, Lambda</td><td>Convert the query to <code>INSERT INTO tableName SELECT ... FROM t</code> and perform the insert.</td></tr><tr><td>ToUpdate</td><td>IUpdate&lt;TEntity&gt;</td><td>-</td><td>Convert the query to <code>IUpdate&lt;TEntity&gt;</code></td></tr><tr><td>ToDelete</td><td>IDelete&lt;TEntity&gt;</td><td>-</td><td>Convert the query to <code>IDelete&lt;TEntity&gt;</code></td></tr><tr><td>ToTreeList</td><td>List&lt;TEntity&gt;</td><td>-</td><td>Return the data of the parent-child relationship in the form of a TreeList</td></tr><tr><td>AsTreeCte</td><td>ISelect</td><td>(up, pathSelector, level)</td><td>Recursively query the parent-child relationship table</td></tr></tbody></table>',10),o={},n=(0,d(3744).Z)(o,[["render",function(t,e){return a}]])},3744:(t,e)=>{e.Z=(t,e)=>{for(const[d,a]of e)t[d]=a;return t}}}]);