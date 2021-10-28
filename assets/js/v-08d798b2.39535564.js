"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[3157],{9804:(l,t,n)=>{n.r(t),n.d(t,{data:()=>u});const u={key:"v-08d798b2",path:"/reference/vs-entity-framework.html",title:"与 EntityFramework 比较",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础信息比较",slug:"基础信息比较",children:[]},{level:2,title:".NET ORM 整体功能比较",slug:"net-orm-整体功能比较",children:[]},{level:2,title:".NET ORM CRUD 功能比较",slug:"net-orm-crud-功能比较",children:[]}],filePathRelative:"reference/vs-entity-framework.md",git:{updatedTime:1635428898e3,contributors:[{name:"2881099",email:"2881099@users.noreply.github.com",commits:1}]}}},6843:(l,t,n)=>{n.r(t),n.d(t,{default:()=>Pt});var u=n(6252);const _=(0,u._)("h1",{id:"与-entityframework-比较",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#与-entityframework-比较","aria-hidden":"true"},"#"),(0,u.Uk)(" 与 EntityFramework 比较")],-1),d=(0,u._)("p",null,"为什么要写这篇文章？",-1),r=(0,u._)("p",null,"希望针对 SEO 优化搜索引擎，让更多中国人知道并且使用。目前百度搜索 .NET ORM 全是 sqlsugar，我个人是无语的，每每一个人进群第一件事就是拿来比较，每天要重复回答、重复解答、说服他们。想说服标签是名气大、使用者多的同类型 .NET ORM 非常困难，最多只能让他们勉强接受。",-1),e=(0,u._)("p",null,"FreeSql 不愿做自己发光的金子，希望在 2020年 写下这篇完整一点的 .NET ORM 比较，为准备使用 FreeSql 的朋友解惑，能排上百度搜索引擎当然再好不过了。",-1),o=(0,u._)("p",null,"肯请动一动手指多多转发转发文章，并加上原文链接，谢谢！MarkDown：https://files.cnblogs.com/files/kellynic/ORM_VS.zip",-1),a=(0,u._)("h2",{id:"基础信息比较",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#基础信息比较","aria-hidden":"true"},"#"),(0,u.Uk)(" 基础信息比较")],-1),E=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("th",null,"功能项"),(0,u._)("th",null,"FreeSql"),(0,u._)("th",null,"EFCore"),(0,u._)("th",null,"SqlSugar")])],-1),i=(0,u._)("tr",null,[(0,u._)("td",null,"出生时间"),(0,u._)("td",null,"2018年12月"),(0,u._)("td",null,"2015年(约)"),(0,u._)("td",null,"2014年(约)")],-1),T=(0,u._)("tr",null,[(0,u._)("td",null,"开源协议"),(0,u._)("td",null,"MIT"),(0,u._)("td",null,"Apache-2.0"),(0,u._)("td",null,"Apache-2.0")],-1),O=(0,u._)("td",null,"所属机构",-1),R={href:"https://github.com/dotnetcore",target:"_blank",rel:"noopener noreferrer"},M=(0,u.Uk)("dotnetcore(NCC)"),N=(0,u._)("td",null,"dotnet",-1),s=(0,u._)("td",null,"sunkaixuan(个人)",-1),h=(0,u._)("tr",null,[(0,u._)("td",null,"单元测试数量"),(0,u._)("td",null,"5500+"),(0,u._)("td",null,"很多"),(0,u._)("td",null,"无")],-1),c=(0,u._)("tr",null,[(0,u._)("td",null,"github star"),(0,u._)("td",null,"2.1k+"),(0,u._)("td",null,"9.5k+"),(0,u._)("td",null,"3.1k+")],-1),m=(0,u._)("tr",null,[(0,u._)("td",null,"github issues"),(0,u._)("td",null,"活跃"),(0,u._)("td",null,"活跃"),(0,u._)("td",null,"不活跃")],-1),p=(0,u._)("tr",null,[(0,u._)("td",null,"支持平台"),(0,u._)("td",null,".NET4.0+、.NETCore"),(0,u._)("td",null,".NETCore"),(0,u._)("td",null,".NET4.5+、.NETCore")],-1),S=(0,u._)("tr",null,[(0,u._)("td",null,"支持数据库"),(0,u._)("td",null,"很多，并且行为一致"),(0,u._)("td",null,"很多"),(0,u._)("td",null,"SqlServer/MySql/Sqlite/Oracle")],-1),k=(0,u._)("tr",null,[(0,u._)("td",null,"生命周期"),(0,u._)("td",null,"Singleton"),(0,u._)("td",null,"Scoped"),(0,u._)("td",null,"Scoped")],-1),f=(0,u._)("tr",null,[(0,u._)("td",null,"使用方式"),(0,u._)("td",null,"IFreeSql、Repository"),(0,u._)("td",null,"DbContext"),(0,u._)("td",null,"SugarClient")],-1),g=(0,u.uE)('<p>FreeSql .NET ORM 支持 MySql/SqlServer/PostgreSQL/Oracle/Sqlite/Firebird/达梦/人大金仓/神舟通用/Access。</p><p>.NET ORM 各有自已看家本领，本文主要按 FreeSql 提供的功能进行列举比较，如有冒犯请见谅，也欢迎向 FreeSql 提出功能建议。</p><p>每个功能实现的深度层次不一样（比如 EFCore 支持 SqlServer 2012，FreeSql 支持 SqlServer 2005），很难彻底比较，提示：</p><ul><li>本文比较的功能 FreeSql 每种数据库基本都有提供，不像 EFCore 偏向 SqlServer</li><li>本文只比较官方提供的功能（不包含第三方扩展）</li></ul><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063104631-2088330287.png" alt=""></p><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063148941-1489586974.png" alt=""></p><p><img src="https://img2020.cnblogs.com/blog/31407/202009/31407-20200914063955435-856878176.png" alt=""></p><h2 id="net-orm-整体功能比较" tabindex="-1"><a class="header-anchor" href="#net-orm-整体功能比较" aria-hidden="true">#</a> .NET ORM 整体功能比较</h2>',8),C=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("th",null,"功能项"),(0,u._)("th",null,"FreeSql"),(0,u._)("th",null,"EFCore"),(0,u._)("th",null,"SqlSugar")])],-1),b=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 根据实体类型，创建表结构"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),F=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 根据实体类型，对比表结构"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),q=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 根据实体类型注释，迁移表结构备注"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),U=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst FluentApi"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),y=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst FluentApi 语法兼容 EFCore"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),w=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 实体特性兼容 EFCore"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),D=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 自定义实体特性(Aop)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),W=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CodeFirst 类型转换映射(MapType)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),v=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM DbFirst 根据数据库，生成实体类"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),x=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 导航属性(OneToOne)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),A=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 导航属性(ManyToOne)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),L=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 导航属性(OneToMany)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),I=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 导航属性(ManyToMany)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),P=(0,u.Uk)(".NET ORM 导航属性(Parent) "),Q=(0,u.Uk)("父子关系的实体类"),V=(0,u._)("td",null,"✔",-1),z=(0,u._)("td",null,"-",-1),B=(0,u._)("td",null,"-",-1),H=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 导航属性延时加载、贪婪加载、级联保存"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),Z=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 自定义表达式树解析"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),G=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 全局过滤器"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),J=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 事务"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),K=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 读写分离"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Y=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 分表分库"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),j=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 仓储 Repository"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),X=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 工作单元 UnitOfWork"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),$=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 工作单元管理器 UnitOfWorkManager"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),ll=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM DbContext 状态管理"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),tl=(0,u._)("h2",{id:"net-orm-crud-功能比较",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#net-orm-crud-功能比较","aria-hidden":"true"},"#"),(0,u.Uk)(" .NET ORM CRUD 功能比较")],-1),nl=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("th",null,"功能项"),(0,u._)("th",null,"FreeSql"),(0,u._)("th",null,"EFCore"),(0,u._)("th",null,"SqlSugar")])],-1),ul=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CRUD 时，映射动态表名"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),_l=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CRUD 时，使用参数化 SQL 执行"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),dl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CRUD 时，不使用参数化 SQL 执行(NoneParameter)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),rl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CRUD 时，获取对应的 SQL(ToSql)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),el=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM CRUD 时，统一审计实体属性值(Aop.AuditValue)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),ol=(0,u._)("tr",null,[(0,u._)("td"),(0,u._)("td"),(0,u._)("td"),(0,u._)("td")],-1),al=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入(单条)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),El=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，忽略/指定列"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),il=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，返回影响的行数"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Tl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，返回插入后的自增值"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),Ol=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，返回插入后的记录"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Rl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，Insert Ignore Into"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Ml=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，On Duplicate Key Update"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Nl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 插入时，On Conflict Do Update"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),sl=(0,u.Uk)(".NET ORM 批量插入 "),hl={href:"https://www.cnblogs.com/kellynic/p/10557882.html",target:"_blank",rel:"noopener noreferrer"},cl=(0,u.Uk)("性能测试结果参考文档"),ml=(0,u._)("td",null,"✔",-1),pl=(0,u._)("td",null,"-",-1),Sl=(0,u._)("td",null,"✔",-1),kl=(0,u.Uk)(".NET ORM 批量插入时，自动分批 "),fl=(0,u.Uk)("参考文档"),gl=(0,u._)("td",null,"✔",-1),Cl=(0,u._)("td",null,"-",-1),bl=(0,u._)("td",null,"-",-1),Fl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 批量插入时，使用BulkCopy"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),ql=(0,u._)("tr",null,[(0,u._)("td"),(0,u._)("td"),(0,u._)("td"),(0,u._)("td")],-1),Ul=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新(单条)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),yl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，动态条件(WhereDynamic)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),wl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，根据实体对象更新"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Dl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，根据状态管理只更新有变化的属性"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),Wl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，忽略/指定列"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),vl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，原子性 set num=num+1"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),xl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，指定条件"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Al=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，自动附加全局过滤器条件"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Ll=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，不需要先查询"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Il=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，使用乐观行锁"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),Pl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，使用悲观锁"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Ql=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，返回影响的行数"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Vl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 更新时，返回更新后的记录"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),zl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 批量更新"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Bl=(0,u._)("tr",null,[(0,u._)("td"),(0,u._)("td"),(0,u._)("td"),(0,u._)("td")],-1),Hl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除(单条)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),Zl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，动态条件(WhereDynamic)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Gl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，指定条件"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Jl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，自动附加全局过滤器条件"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Kl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，不需要先查询"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Yl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，返回影响的行数"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),jl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 删除时，返回插入后的记录"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),Xl=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 级联保存"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),$l=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 添加或更新"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),lt=(0,u.Uk)(".NET ORM 添加或更新，自动适配 merge into "),tt=(0,u.Uk)("参考文档"),nt=(0,u._)("td",null,"✔",-1),ut=(0,u._)("td",null,"-",-1),_t=(0,u._)("td",null,"-",-1),dt=(0,u.Uk)(".NET ORM 批量编辑保存 "),rt=(0,u.Uk)("参考文档"),et=(0,u._)("td",null,"✔",-1),ot=(0,u._)("td",null,"✔",-1),at=(0,u._)("td",null,"-",-1),Et=(0,u._)("tr",null,[(0,u._)("td"),(0,u._)("td"),(0,u._)("td"),(0,u._)("td")],-1),it=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询(单条)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),Tt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，分页"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),Ot=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，分页支持 SqlServer2008"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Rt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，动态条件(WhereDynamic)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Mt=(0,u.Uk)(".NET ORM 查询时，动态过滤条件(WhereDynamicFilter) "),Nt=(0,u.Uk)("参考文档"),st=(0,u._)("td",null,"✔",-1),ht=(0,u._)("td",null,"-",-1),ct=(0,u._)("td",null,"✔",-1),mt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，自动附加全局过滤器条件"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),pt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，多表条件传播(WhereCascade)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),St=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，在 lambda 中使用导航属性"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),kt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，用 Dto 映射只需要查询的字段"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"-")],-1),ft=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，传 Sql 作二次查询(WithSql)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),gt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，子查询(Exists)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),Ct=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，子查询(In)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-"),(0,u._)("td",null,"✔")],-1),bt=(0,u.Uk)(".NET ORM 查询时，子查询拼接结果(string.Join) "),Ft=(0,u.Uk)("参考文档"),qt=(0,u._)("td",null,"✔",-1),Ut=(0,u._)("td",null,"-",-1),yt=(0,u._)("td",null,"-",-1),wt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，使用分组聚合(GroupBy/Having)"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔")],-1),Dt=(0,u._)("tr",null,[(0,u._)("td",null,".NET ORM 查询时，使用 Linq To Sql 语法"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"✔"),(0,u._)("td",null,"-")],-1),Wt=(0,u.Uk)(".NET ORM 查询时，针对树形结构表 "),vt=(0,u.Uk)("父子关系的实体类"),xt=(0,u._)("td",null,"✔",-1),At=(0,u._)("td",null,"-",-1),Lt=(0,u._)("td",null,"-",-1),It={},Pt=(0,n(3744).Z)(It,[["render",function(l,t){const n=(0,u.up)("OutboundLink"),It=(0,u.up)("RouterLink");return(0,u.wg)(),(0,u.iD)(u.HY,null,[_,d,r,e,o,a,(0,u._)("table",null,[E,(0,u._)("tbody",null,[i,T,(0,u._)("tr",null,[O,(0,u._)("td",null,[(0,u._)("a",R,[M,(0,u.Wm)(n)])]),N,s]),h,c,m,p,S,k,f])]),g,(0,u._)("table",null,[C,(0,u._)("tbody",null,[b,F,q,U,y,w,D,W,v,x,A,L,I,(0,u._)("tr",null,[(0,u._)("td",null,[P,(0,u.Wm)(It,{to:"/reference/select-as-tree.html"},{default:(0,u.w5)((()=>[Q])),_:1})]),V,z,B]),H,Z,G,J,K,Y,j,X,$,ll])]),tl,(0,u._)("table",null,[nl,(0,u._)("tbody",null,[ul,_l,dl,rl,el,ol,al,El,il,Tl,Ol,Rl,Ml,Nl,(0,u._)("tr",null,[(0,u._)("td",null,[sl,(0,u._)("a",hl,[cl,(0,u.Wm)(n)])]),ml,pl,Sl]),(0,u._)("tr",null,[(0,u._)("td",null,[kl,(0,u.Wm)(It,{to:"/reference/insert.html"},{default:(0,u.w5)((()=>[fl])),_:1})]),gl,Cl,bl]),Fl,ql,Ul,yl,wl,Dl,Wl,vl,xl,Al,Ll,Il,Pl,Ql,Vl,zl,Bl,Hl,Zl,Gl,Jl,Kl,Yl,jl,Xl,$l,(0,u._)("tr",null,[(0,u._)("td",null,[lt,(0,u.Wm)(It,{to:"/reference/insert-or-update.html"},{default:(0,u.w5)((()=>[tt])),_:1})]),nt,ut,_t]),(0,u._)("tr",null,[(0,u._)("td",null,[dt,(0,u.Wm)(It,{to:"/reference/insert-or-update.html"},{default:(0,u.w5)((()=>[rt])),_:1})]),et,ot,at]),Et,it,Tt,Ot,Rt,(0,u._)("tr",null,[(0,u._)("td",null,[Mt,(0,u.Wm)(It,{to:"/reference/select.html"},{default:(0,u.w5)((()=>[Nt])),_:1})]),st,ht,ct]),mt,pt,St,kt,ft,gt,Ct,(0,u._)("tr",null,[(0,u._)("td",null,[bt,(0,u.Wm)(It,{to:"/reference/select-multi-table.html"},{default:(0,u.w5)((()=>[Ft])),_:1})]),qt,Ut,yt]),wt,Dt,(0,u._)("tr",null,[(0,u._)("td",null,[Wt,(0,u.Wm)(It,{to:"/reference/select-as-tree.html"},{default:(0,u.w5)((()=>[vt])),_:1})]),xt,At,Lt])])])],64)}]])},3744:(l,t)=>{t.Z=(l,t)=>{for(const[n,u]of t)l[n]=u;return l}}}]);