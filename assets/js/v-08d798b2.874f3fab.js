(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[3157],{9804:(l,t,n)=>{"use strict";n.r(t),n.d(t,{data:()=>m});const m={key:"v-08d798b2",path:"/reference/vs-entity-framework.html",title:"与 EntityFramework 比较",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础信息比较",slug:"基础信息比较",children:[]},{level:2,title:".NET ORM 整体功能比较",slug:"net-orm-整体功能比较",children:[]},{level:2,title:".NET ORM CRUD 功能比较",slug:"net-orm-crud-功能比较",children:[]}],filePathRelative:"reference/vs-entity-framework.md",git:{updatedTime:1624371407e3,contributors:[]}}},3712:(l,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pt});var m=n(6252);const u=(0,m.Wm)("h1",{id:"与-entityframework-比较"},[(0,m.Wm)("a",{class:"header-anchor",href:"#与-entityframework-比较"},"#"),(0,m.Uk)(" 与 EntityFramework 比较")],-1),W=(0,m.Wm)("p",null,"为什么要写这篇文章？",-1),d=(0,m.Wm)("p",null,"希望针对 SEO 优化搜索引擎，让更多中国人知道并且使用。目前百度搜索 .NET ORM 全是 sqlsugar，我个人是无语的，每每一个人进群第一件事就是拿来比较，每天要重复回答、重复解答、说服他们。想说服标签是名气大、使用者多的同类型 .NET ORM 非常困难，最多只能让他们勉强接受。",-1),r=(0,m.Wm)("p",null,"FreeSql 不愿做自己发光的金子，希望在 2020年 写下这篇完整一点的 .NET ORM 比较，为准备使用 FreeSql 的朋友解惑，能排上百度搜索引擎当然再好不过了。",-1),e=(0,m.Wm)("p",null,"肯请动一动手指多多转发转发文章，并加上原文链接，谢谢！MarkDown：https://files.cnblogs.com/files/kellynic/ORM_VS.zip",-1),o=(0,m.Wm)("h2",{id:"基础信息比较"},[(0,m.Wm)("a",{class:"header-anchor",href:"#基础信息比较"},"#"),(0,m.Uk)(" 基础信息比较")],-1),E=(0,m.Wm)("thead",null,[(0,m.Wm)("tr",null,[(0,m.Wm)("th",null,"功能项"),(0,m.Wm)("th",null,"FreeSql"),(0,m.Wm)("th",null,"EFCore"),(0,m.Wm)("th",null,"SqlSugar")])],-1),T=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"出生时间"),(0,m.Wm)("td",null,"2018年12月"),(0,m.Wm)("td",null,"2015年(约)"),(0,m.Wm)("td",null,"2014年(约)")],-1),O=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"开源协议"),(0,m.Wm)("td",null,"MIT"),(0,m.Wm)("td",null,"Apache-2.0"),(0,m.Wm)("td",null,"Apache-2.0")],-1),R=(0,m.Wm)("td",null,"所属机构",-1),M={href:"https://github.com/dotnetcore",target:"_blank",rel:"noopener noreferrer"},a=(0,m.Uk)("dotnetcore(NCC)"),N=(0,m.Wm)("td",null,"dotnet",-1),i=(0,m.Wm)("td",null,"sunkaixuan(个人)",-1),s=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"单元测试数量"),(0,m.Wm)("td",null,"5500+"),(0,m.Wm)("td",null,"很多"),(0,m.Wm)("td",null,"无")],-1),c=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"github star"),(0,m.Wm)("td",null,"2.1k+"),(0,m.Wm)("td",null,"9.5k+"),(0,m.Wm)("td",null,"3.1k+")],-1),h=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"github issues"),(0,m.Wm)("td",null,"活跃"),(0,m.Wm)("td",null,"活跃"),(0,m.Wm)("td",null,"不活跃")],-1),p=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"支持平台"),(0,m.Wm)("td",null,".NET4.0+、.NETCore"),(0,m.Wm)("td",null,".NETCore"),(0,m.Wm)("td",null,".NET4.5+、.NETCore")],-1),S=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"支持数据库"),(0,m.Wm)("td",null,"很多，并且行为一致"),(0,m.Wm)("td",null,"很多"),(0,m.Wm)("td",null,"SqlServer/MySql/Sqlite/Oracle")],-1),k=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"生命周期"),(0,m.Wm)("td",null,"Singleton"),(0,m.Wm)("td",null,"Scoped"),(0,m.Wm)("td",null,"Scoped")],-1),g=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"使用方式"),(0,m.Wm)("td",null,"IFreeSql、Repository"),(0,m.Wm)("td",null,"DbContext"),(0,m.Wm)("td",null,"SugarClient")],-1),f=(0,m.uE)('<p>FreeSql .NET ORM 支持 MySql/SqlServer/PostgreSQL/Oracle/Sqlite/Firebird/达梦/人大金仓/神舟通用/Access。</p><p>.NET ORM 各有自已看家本领，本文主要按 FreeSql 提供的功能进行列举比较，如有冒犯请见谅，也欢迎向 FreeSql 提出功能建议。</p><p>每个功能实现的深度层次不一样（比如 EFCore 支持 SqlServer 2012，FreeSql 支持 SqlServer 2005），很难彻底比较，提示：</p><ul><li>本文比较的功能 FreeSql 每种数据库基本都有提供，不像 EFCore 偏向 SqlServer</li><li>本文只比较官方提供的功能（不包含第三方扩展）</li></ul><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063104631-2088330287.png" alt=""></p><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063148941-1489586974.png" alt=""></p><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063955435-856878176.png" alt=""></p><h2 id="net-orm-整体功能比较"><a class="header-anchor" href="#net-orm-整体功能比较">#</a> .NET ORM 整体功能比较</h2>',8),C=(0,m.Wm)("thead",null,[(0,m.Wm)("tr",null,[(0,m.Wm)("th",null,"功能项"),(0,m.Wm)("th",null,"FreeSql"),(0,m.Wm)("th",null,"EFCore"),(0,m.Wm)("th",null,"SqlSugar")])],-1),F=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 根据实体类型，创建表结构"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),q=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 根据实体类型，对比表结构"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),U=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 根据实体类型注释，迁移表结构备注"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),b=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst FluentApi"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),y=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst FluentApi 语法兼容 EFCore"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),w=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 实体特性兼容 EFCore"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),D=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 自定义实体特性(Aop)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),v=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CodeFirst 类型转换映射(MapType)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),_=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM DbFirst 根据数据库，生成实体类"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),A=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 导航属性(OneToOne)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),L=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 导航属性(ManyToOne)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),I=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 导航属性(OneToMany)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),P=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 导航属性(ManyToMany)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),x=(0,m.Uk)(".NET ORM 导航属性(Parent) "),Q=(0,m.Uk)("父子关系的实体类"),V=(0,m.Wm)("td",null,"✔",-1),z=(0,m.Wm)("td",null,"-",-1),B=(0,m.Wm)("td",null,"-",-1),H=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 导航属性延时加载、贪婪加载、级联保存"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),j=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 自定义表达式树解析"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),G=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 全局过滤器"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),J=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 事务"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),K=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 读写分离"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Y=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 分表分库"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),X=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 仓储 Repository"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Z=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 工作单元 UnitOfWork"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),$=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 工作单元管理器 UnitOfWorkManager"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),ll=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM DbContext 状态管理"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),tl=(0,m.Wm)("h2",{id:"net-orm-crud-功能比较"},[(0,m.Wm)("a",{class:"header-anchor",href:"#net-orm-crud-功能比较"},"#"),(0,m.Uk)(" .NET ORM CRUD 功能比较")],-1),nl=(0,m.Wm)("thead",null,[(0,m.Wm)("tr",null,[(0,m.Wm)("th",null,"功能项"),(0,m.Wm)("th",null,"FreeSql"),(0,m.Wm)("th",null,"EFCore"),(0,m.Wm)("th",null,"SqlSugar")])],-1),ml=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CRUD 时，映射动态表名"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),ul=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CRUD 时，使用参数化 SQL 执行"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),Wl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CRUD 时，不使用参数化 SQL 执行(NoneParameter)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),dl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CRUD 时，获取对应的 SQL(ToSql)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),rl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM CRUD 时，统一审计实体属性值(Aop.AuditValue)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),el=(0,m.Wm)("tr",null,[(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td")],-1),ol=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入(单条)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),El=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，忽略/指定列"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Tl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，返回影响的行数"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Ol=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，返回插入后的自增值"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),Rl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，返回插入后的记录"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Ml=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，Insert Ignore Into"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),al=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，On Duplicate Key Update"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Nl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 插入时，On Conflict Do Update"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),il=(0,m.Uk)(".NET ORM 批量插入 "),sl={href:"https://www.cnblogs.com/kellynic/p/10557882.html",target:"_blank",rel:"noopener noreferrer"},cl=(0,m.Uk)("性能测试结果参考文档"),hl=(0,m.Wm)("td",null,"✔",-1),pl=(0,m.Wm)("td",null,"-",-1),Sl=(0,m.Wm)("td",null,"✔",-1),kl=(0,m.Uk)(".NET ORM 批量插入时，自动分批 "),gl=(0,m.Uk)("参考文档"),fl=(0,m.Wm)("td",null,"✔",-1),Cl=(0,m.Wm)("td",null,"-",-1),Fl=(0,m.Wm)("td",null,"-",-1),ql=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 批量插入时，使用BulkCopy"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Ul=(0,m.Wm)("tr",null,[(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td")],-1),bl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新(单条)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),yl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，动态条件(WhereDynamic)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),wl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，根据实体对象更新"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Dl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，根据状态管理只更新有变化的属性"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),vl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，忽略/指定列"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),_l=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，原子性 set num=num+1"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Al=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，指定条件"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Ll=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，自动附加全局过滤器条件"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Il=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，不需要先查询"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Pl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，使用乐观行锁"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),xl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，使用悲观锁"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Ql=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，返回影响的行数"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Vl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 更新时，返回更新后的记录"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),zl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 批量更新"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Bl=(0,m.Wm)("tr",null,[(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td")],-1),Hl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除(单条)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),jl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，动态条件(WhereDynamic)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Gl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，指定条件"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Jl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，自动附加全局过滤器条件"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Kl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，不需要先查询"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Yl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，返回影响的行数"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Xl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 删除时，返回插入后的记录"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),Zl=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 级联保存"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),$l=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 添加或更新"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),lt=(0,m.Uk)(".NET ORM 添加或更新，自动适配 merge into "),tt=(0,m.Uk)("参考文档"),nt=(0,m.Wm)("td",null,"✔",-1),mt=(0,m.Wm)("td",null,"-",-1),ut=(0,m.Wm)("td",null,"-",-1),Wt=(0,m.Uk)(".NET ORM 批量编辑保存 "),dt=(0,m.Uk)("参考文档"),rt=(0,m.Wm)("td",null,"✔",-1),et=(0,m.Wm)("td",null,"✔",-1),ot=(0,m.Wm)("td",null,"-",-1),Et=(0,m.Wm)("tr",null,[(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td"),(0,m.Wm)("td")],-1),Tt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询(单条)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),Ot=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，分页"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),Rt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，分页支持 SqlServer2008"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Mt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，动态条件(WhereDynamic)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),at=(0,m.Uk)(".NET ORM 查询时，动态过滤条件(WhereDynamicFilter) "),Nt=(0,m.Uk)("参考文档"),it=(0,m.Wm)("td",null,"✔",-1),st=(0,m.Wm)("td",null,"-",-1),ct=(0,m.Wm)("td",null,"✔",-1),ht=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，自动附加全局过滤器条件"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),pt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，多表条件传播(WhereCascade)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),St=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，在 lambda 中使用导航属性"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),kt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，用 Dto 映射只需要查询的字段"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"-")],-1),gt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，传 Sql 作二次查询(WithSql)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),ft=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，子查询(Exists)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Ct=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，子查询(In)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-"),(0,m.Wm)("td",null,"✔")],-1),Ft=(0,m.Uk)(".NET ORM 查询时，子查询拼接结果(string.Join) "),qt=(0,m.Uk)("参考文档"),Ut=(0,m.Wm)("td",null,"✔",-1),bt=(0,m.Wm)("td",null,"-",-1),yt=(0,m.Wm)("td",null,"-",-1),wt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，使用分组聚合(GroupBy/Having)"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔")],-1),Dt=(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,".NET ORM 查询时，使用 Linq To Sql 语法"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"✔"),(0,m.Wm)("td",null,"-")],-1),vt=(0,m.Uk)(".NET ORM 查询时，针对树形结构表 "),_t=(0,m.Uk)("父子关系的实体类"),At=(0,m.Wm)("td",null,"✔",-1),Lt=(0,m.Wm)("td",null,"-",-1),It=(0,m.Wm)("td",null,"-",-1),Pt={render:function(l,t){const n=(0,m.up)("OutboundLink"),Pt=(0,m.up)("RouterLink");return(0,m.wg)(),(0,m.j4)(m.HY,null,[u,W,d,r,e,o,(0,m.Wm)("table",null,[E,(0,m.Wm)("tbody",null,[T,O,(0,m.Wm)("tr",null,[R,(0,m.Wm)("td",null,[(0,m.Wm)("a",M,[a,(0,m.Wm)(n)])]),N,i]),s,c,h,p,S,k,g])]),f,(0,m.Wm)("table",null,[C,(0,m.Wm)("tbody",null,[F,q,U,b,y,w,D,v,_,A,L,I,P,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[x,(0,m.Wm)(Pt,{to:"/reference/select-as-tree.html"},{default:(0,m.w5)((()=>[Q])),_:1})]),V,z,B]),H,j,G,J,K,Y,X,Z,$,ll])]),tl,(0,m.Wm)("table",null,[nl,(0,m.Wm)("tbody",null,[ml,ul,Wl,dl,rl,el,ol,El,Tl,Ol,Rl,Ml,al,Nl,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[il,(0,m.Wm)("a",sl,[cl,(0,m.Wm)(n)])]),hl,pl,Sl]),(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[kl,(0,m.Wm)(Pt,{to:"/reference/insert.html"},{default:(0,m.w5)((()=>[gl])),_:1})]),fl,Cl,Fl]),ql,Ul,bl,yl,wl,Dl,vl,_l,Al,Ll,Il,Pl,xl,Ql,Vl,zl,Bl,Hl,jl,Gl,Jl,Kl,Yl,Xl,Zl,$l,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[lt,(0,m.Wm)(Pt,{to:"/reference/insert-or-update.html"},{default:(0,m.w5)((()=>[tt])),_:1})]),nt,mt,ut]),(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[Wt,(0,m.Wm)(Pt,{to:"/reference/insert-or-update.html"},{default:(0,m.w5)((()=>[dt])),_:1})]),rt,et,ot]),Et,Tt,Ot,Rt,Mt,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[at,(0,m.Wm)(Pt,{to:"/reference/select.html"},{default:(0,m.w5)((()=>[Nt])),_:1})]),it,st,ct]),ht,pt,St,kt,gt,ft,Ct,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[Ft,(0,m.Wm)(Pt,{to:"/reference/select-multi-table.html"},{default:(0,m.w5)((()=>[qt])),_:1})]),Ut,bt,yt]),wt,Dt,(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,[vt,(0,m.Wm)(Pt,{to:"/reference/select-as-tree.html"},{default:(0,m.w5)((()=>[_t])),_:1})]),At,Lt,It])])])],64)}}}}]);