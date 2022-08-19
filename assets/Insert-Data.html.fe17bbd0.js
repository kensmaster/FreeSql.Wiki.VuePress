import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.93274a18.js";const e={},o=t(`<h1 id="insert-data" tabindex="-1"><a class="header-anchor" href="#insert-data" aria-hidden="true">#</a> Insert Data</h1><p>FreeSql provides methods for inserting data in single and batches, and it can also return the inserted records when executed in a specific database.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//Automatically synchronize the entity structure to the database</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Be sure to define as singleton mode</span>

<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newtitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-single-insert" tabindex="-1"><a class="header-anchor" href="#_1-single-insert" aria-hidden="true">#</a> 1. Single Insert</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`, \`CreateTime\`) </span>
<span class="token comment">//VALUES(@Clicks0, @Title0, @CreateTime0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the table has auto-increment columns, <code>id</code> will be returned after inserting data.</p><p>Method 1: (Original)</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">long</span></span> id <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
blog<span class="token punctuation">.</span>Id <span class="token operator">=</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Method 2: (depends on FreeSql.Repository)</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>In the internal implementation, after inserting the data, the self-incremental value will be assigned to <code>blog.Id</code></p></blockquote><h2 id="_2-batch-insert" tabindex="-1"><a class="header-anchor" href="#_2-batch-insert" aria-hidden="true">#</a> 2. Batch Insert</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`, \`CreateTime\`) </span>
<span class="token comment">//VALUES(@Clicks0, @Title0, @CreateTime0), (@Clicks1, @Title1, @CreateTime1), </span>
<span class="token comment">//(@Clicks2, @Title2, @CreateTime2), (@Clicks3, @Title3, @CreateTime3), </span>
<span class="token comment">//(@Clicks4, @Title4, @CreateTime4), (@Clicks5, @Title5, @CreateTime5), </span>
<span class="token comment">//(@Clicks6, @Title6, @CreateTime6), (@Clicks7, @Title7, @CreateTime7), </span>
<span class="token comment">//(@Clicks8, @Title8, @CreateTime8), (@Clicks9, @Title9, @CreateTime9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The errors that are easily caused by adding SqlServer in batches have been resolved:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>The incoming request has too many parameters. The server supports a maximum of 2100 parameters. Reduce the number of parameters and resend the request.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Principle: Split into multiple packages and execute them in transactions.</p></blockquote><p>When inserting large quantities of data, the internal logic is divided and executed in batches. The segmentation rules are as follows:</p><table><thead><tr><th></th><th>Quantity</th><th>Size of Parameters</th></tr></thead><tbody><tr><td>MySql</td><td>5000</td><td>3000</td></tr><tr><td>PostgreSQL</td><td>5000</td><td>3000</td></tr><tr><td>SqlServer</td><td>1000</td><td>2100</td></tr><tr><td>Oracle</td><td>500</td><td>999</td></tr><tr><td>Sqlite</td><td>5000</td><td>999</td></tr></tbody></table><blockquote><p>Quantity: It is the size of each batch of division. For example, a batch of 10,000 pieces of data will be inserted into two batches when mysql is executed.<br> Size of Parameters: the size of the parameter size divided into each batch. For example, when inserting 10,000 pieces of data in batches, each row needs to use 5 parameterizations, which will be divided into 3000/5 for each batch when mysql is executed.</p></blockquote><p>After the execution of the split, when the external transaction is not provided, the internal transaction is opened to achieve insertion integrity. You can also set appropriate values through <code>BatchOptions</code>.</p><p>FreeSql adapts to the use of parameterization and non-parameterization of each data type. It is recommended to turn off the parameterization function for batch insertion and use <code>.NoneParameter()</code> to execute it.</p><h2 id="_3-executesqlbulkcopy-executepgcopy-executemysqlbulkcopy-and-executeoraclebulkcopy" tabindex="-1"><a class="header-anchor" href="#_3-executesqlbulkcopy-executepgcopy-executemysqlbulkcopy-and-executeoraclebulkcopy" aria-hidden="true">#</a> 3. ExecuteSqlBulkCopy, ExecutePgCopy, ExecuteMySqlBulkCopy and ExecuteOracleBulkCopy</h2><p>Bulk Copy operation is implemented in the form of an extension method. For SqlServer/PostgreSQL/MySql/Oracle databases, the available packages are: FreeSql.Provider.SqlServer/FreeSql.Provider.PostgreSQL/FreeSql.Provider.MySqlConnector/FreeSql.Provider.Oracle.</p><h3 id="bulk-insert-test-reference-52-fields" tabindex="-1"><a class="header-anchor" href="#bulk-insert-test-reference-52-fields" aria-hidden="true">#</a> bulk insert test reference (52 fields)</h3><table><thead><tr><th></th><th>18W</th><th>1W</th><th>5K</th><th>2K</th><th>1K</th><th>500</th><th>100</th><th>50</th></tr></thead><tbody><tr><td>MySql 5.5 ExecuteAffrows</td><td>38,481</td><td>2,234</td><td>1,136</td><td>284</td><td>239</td><td>167</td><td>66</td><td>30</td></tr><tr><td>MySql 5.5 ExecuteMySqlBulkCopy</td><td>28,405</td><td>1,142</td><td>657</td><td>451</td><td>435</td><td>592</td><td>47</td><td>22</td></tr><tr><td>SqlServer Express ExecuteAffrows</td><td>402,355</td><td>24,847</td><td>11,465</td><td>4,971</td><td>2,437</td><td>915</td><td>138</td><td>88</td></tr><tr><td>SqlServer Express ExecuteSqlBulkCopy</td><td>21,065</td><td>578</td><td>326</td><td>139</td><td>105</td><td>79</td><td>60</td><td>48</td></tr><tr><td>PostgreSQL 10 ExecuteAffrows</td><td>46,756</td><td>3,294</td><td>2,269</td><td>1,019</td><td>374</td><td>209</td><td>51</td><td>37</td></tr><tr><td>PostgreSQL 10 ExecutePgCopy</td><td>10,090</td><td>583</td><td>337</td><td>136</td><td>88</td><td>61</td><td>30</td><td>25</td></tr></tbody></table><blockquote><p>Explanation of 8W: insert 180000 rows of records, and the number in the table is the execution time (unit: ms)</p></blockquote><h3 id="bulk-insert-test-reference-10-fields" tabindex="-1"><a class="header-anchor" href="#bulk-insert-test-reference-10-fields" aria-hidden="true">#</a> bulk insert test reference (10 fields)</h3><table><thead><tr><th></th><th>18W</th><th>1W</th><th>5K</th><th>2K</th><th>1K</th><th>500</th><th>100</th><th>50</th></tr></thead><tbody><tr><td>MySql 5.5 ExecuteAffrows</td><td>11,171</td><td>866</td><td>366</td><td>80</td><td>83</td><td>50</td><td>24</td><td>34</td></tr><tr><td>MySql 5.5 ExecuteMySqlBulkCopy</td><td>6,504</td><td>399</td><td>257</td><td>116</td><td>87</td><td>100</td><td>16</td><td>16</td></tr><tr><td>SqlServer Express ExecuteAffrows</td><td>47,204</td><td>2,275</td><td>1,108</td><td>488</td><td>279</td><td>123</td><td>35</td><td>16</td></tr><tr><td>SqlServer Express ExecuteSqlBulkCopy</td><td>4,248</td><td>127</td><td>71</td><td>30</td><td>48</td><td>14</td><td>11</td><td>10</td></tr><tr><td>PostgreSQL 10 ExecuteAffrows</td><td>9,786</td><td>568</td><td>336</td><td>157</td><td>102</td><td>34</td><td>9</td><td>6</td></tr><tr><td>PostgreSQL 10 ExecutePgCopy</td><td>4,081</td><td>167</td><td>93</td><td>39</td><td>21</td><td>12</td><td>4</td><td>2</td></tr></tbody></table><blockquote><p>The test results are all based on the same operating system, and all are preheated.</p></blockquote><h2 id="_4-insert-the-specified-columns" tabindex="-1"><a class="header-anchor" href="#_4-insert-the-specified-columns" aria-hidden="true">#</a> 4. Insert the specified columns</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InsertColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Title\`) </span>
<span class="token comment">//VALUES(@Title0), (@Title1), (@Title2), (@Title3), (@Title4), </span>
<span class="token comment">//(@Title5), (@Title6), (@Title7), (@Title8), (@Title9)</span>

<span class="token class-name"><span class="token keyword">var</span></span> t4 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InsertColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span><span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Clicks <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`) </span>
<span class="token comment">//VALUES(@Clicks0, @Title0), (@Clicks1, @Title1), (@Clicks2, @Title2), </span>
<span class="token comment">//(@Clicks3, @Title3), (@Clicks4, @Title4), (@Clicks5, @Title5), </span>
<span class="token comment">//(@Clicks6, @Title6), (@Clicks7, @Title7), (@Clicks8, @Title8), </span>
<span class="token comment">//(@Clicks9, @Title9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ignore-the-specified-columns" tabindex="-1"><a class="header-anchor" href="#_5-ignore-the-specified-columns" aria-hidden="true">#</a> 5. Ignore the specified columns</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t5 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`) </span>
<span class="token comment">//VALUES(@Clicks0, @Title0), (@Clicks1, @Title1), (@Clicks2, @Title2), </span>
<span class="token comment">//(@Clicks3, @Title3), (@Clicks4, @Title4), (@Clicks5, @Title5), </span>
<span class="token comment">//(@Clicks6, @Title6), (@Clicks7, @Title7), (@Clicks8, @Title8), </span>
<span class="token comment">//(@Clicks9, @Title9)</span>

<span class="token class-name"><span class="token keyword">var</span></span> t6 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> a<span class="token punctuation">.</span>CreateTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">///INSERT INTO \`Topic\`(\`Clicks\`) </span>
<span class="token comment">//VALUES(@Clicks0), (@Clicks1), (@Clicks2), (@Clicks3), (@Clicks4), </span>
<span class="token comment">//(@Clicks5), (@Clicks6), (@Clicks7), (@Clicks8), (@Clicks9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-column-insertion-priority" tabindex="-1"><a class="header-anchor" href="#_6-column-insertion-priority" aria-hidden="true">#</a> 6. Column Insertion Priority</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>All Columns <span class="token operator">&lt;</span> <span class="token return-type class-name">Specified</span> columns <span class="token punctuation">(</span>InsertColumns<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token return-type class-name">Ignored</span> Columns <span class="token punctuation">(</span>IgnoreColumns<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Without using <code>InsertColumns/IgnoreColumns</code>, all columns of the entity will be inserted into the database;</li><li>Otherwise, when using <code>InsertColumns</code> and not using <code>IgnoreColumns</code>, only the specified columns are inserted into the database;</li><li>Otherwise, in the case of using <code>IgnoreColumns</code>, only unspecified columns are inserted into the database.</li></ul><h2 id="_7\u3001dictionary-insert" tabindex="-1"><a class="header-anchor" href="#_7\u3001dictionary-insert" aria-hidden="true">#</a> 7\u3001Dictionary Insert</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token function">InsertDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-import-table-data" tabindex="-1"><a class="header-anchor" href="#_8-import-table-data" aria-hidden="true">#</a> 8. Import table data</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span></span> affrows <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">InsertInto</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic2</span>
  <span class="token punctuation">{</span>
    Title <span class="token operator">=</span> a<span class="token punctuation">.</span>Title
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>Topic2<span class="token punctuation">\`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>Title<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>Clicks<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>CreateTime<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>Title<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;0001-01-01 00:00:00&#39;</span> 
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>Topic<span class="token punctuation">\`</span></span> a 
<span class="token keyword">limit</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: Because <code>Clicks</code> and <code>CreateTime</code> are not selected, it&#39;ll use the value set by the target entity attribute <code>[Column(InsertValueSql = xx)]</code>, or the default value of <code>C#</code> of the target entity attribute.</p><h2 id="_8-insert-ignore-into-mysql-only" tabindex="-1"><a class="header-anchor" href="#_8-insert-ignore-into-mysql-only" aria-hidden="true">#</a> 8. <code>Insert Ignore Into</code> (MySql only)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MySqlIgnoreInto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">///INSERT IGNORE INTO \`Topic\`(\`Clicks\`) </span>
<span class="token comment">//VALUES(@Clicks0), (@Clicks1), (@Clicks2), (@Clicks3), (@Clicks4), </span>
<span class="token comment">//(@Clicks5), (@Clicks6), (@Clicks7), (@Clicks8), (@Clicks9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Database-Transaction">\u300ADatabase Transaction\u300B</a></li><li><a href="Delete-Data">\u300AFreeSql 101, Part 2: Delete Data\u300B</a></li><li><a href="Update-Data">\u300AFreeSql 101, Part 3: Update Data\u300B</a></li><li><a href="Query-Data">\u300AFreeSql 101, Part 4: Query Data\u300B</a></li><li><a href="Repository-Layer">\u300ARepository Layer\u300B</a></li><li><a href="Filters-and-Global-Filters">\u300AFilters and Global Filters\u300B</a></li><li><a href="Sharding-Tables-and-Database">\u300ASharding Tables and Database\u300B</a></li><li><a href="Tenant">\u300ATenant\u300B</a></li></ul><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Methods</th><th>Return</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>AppendData</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>Append the entity to be inserted</td></tr><tr><td>InsertIdentity</td><td>&lt;this&gt;</td><td>None</td><td>Specify the insert auto-increment column</td></tr><tr><td>InsertColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>Specify the inserted columns</td></tr><tr><td>IgnoreColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>Specify the ignored columns</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>Command timeout setting (seconds)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>Set transaction object</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>Set the connection object</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>Return the SQL statement to be executed.</td></tr><tr><td><a href="%e6%b7%bb%e5%8a%a0%e6%88%96%e4%bf%ae%e6%94%b9">OnDuplicateKeyUpdate</a></td><td>OnDuplicateKeyUpdate&lt;T1&gt;</td><td>None</td><td>MySql only. <code>On Duplicate Key Update</code></td></tr><tr><td><a href="%e6%b7%bb%e5%8a%a0%e6%88%96%e4%bf%ae%e6%94%b9">OnConflictDoUpdate</a></td><td>OnConflictDoUpdate&lt;T1&gt;</td><td>None</td><td>PostgreSQL only. <code>On Conflict Do Update</code></td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>Execute SQL and return the number of rows affected.</td></tr><tr><td>ExecuteIdentity</td><td>long</td><td></td><td>Execute SQL and return the incremented value.</td></tr><tr><td>ExecuteInserted</td><td>List&lt;T1&gt;</td><td></td><td>Execute SQL and return the inserted records.</td></tr><tr><td>ExecuteSqlBulkCopy</td><td>void</td><td></td><td>SqlServer only. To execute BulkCopy to import data in batches, you need to reference <code>FreeSql.Provider.SqlServer</code></td></tr><tr><td>ExecutePgCopy</td><td>void</td><td></td><td>PostgreSQL only. To execute BulkCopy to import data in batches, you need to reference <code>FreeSql.Provider.PostgreSQL</code></td></tr><tr><td>ExecuteMySqlBulkCopy</td><td>void</td><td></td><td>MySql only. To execute BulkCopy to import data in batches, you need to reference <code>FreeSql.Provider.MysqlConnector</code></td></tr><tr><td>ExecuteOracleBulkCopy</td><td>void</td><td></td><td>Oracle only. To execute BulkCopy to import data in batches, you need to reference <code>FreeSql.Provider.Oracle</code></td></tr><tr><td>ExecuteDmBulkCopy</td><td>void</td><td></td><td>Dameng database only. To execute BulkCopy to import data in batches, you need to reference <code>FreeSql.Provider.Dameng</code></td></tr></tbody></table>`,46),p=[o];function c(i,l){return s(),a("div",null,p)}var u=n(e,[["render",c],["__file","Insert-Data.html.vue"]]);export{u as default};
