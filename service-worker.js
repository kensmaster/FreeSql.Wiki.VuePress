if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"b276d1317146722047e8790d5aba54ba"},{url:"android-chrome-192x192.png",revision:"5c5a418d7c29275f4ae6ddfcae7a2090"},{url:"android-chrome-512x512.png",revision:"dbcaf7855b3bf777e1650fcfb2533b4f"},{url:"apple-touch-icon.png",revision:"328875080674ea578a41a970f9bf2d29"},{url:"assets/css/styles.6ba0f1c9.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/2961.0ce30789.js",revision:null},{url:"assets/js/3616.cd778d95.js",revision:null},{url:"assets/js/5205.88f8ed55.js",revision:null},{url:"assets/js/9299.d8f6858d.js",revision:null},{url:"assets/js/app.377e991b.js",revision:null},{url:"assets/js/runtime~app.e5a11045.js",revision:null},{url:"assets/js/v-08d798b2.c6b4e87d.js",revision:null},{url:"assets/js/v-0921d17b.977ed7f6.js",revision:null},{url:"assets/js/v-0a96cd2d.a8fe93f2.js",revision:null},{url:"assets/js/v-0ce4876c.13a868ab.js",revision:null},{url:"assets/js/v-100fe338.0bffdb45.js",revision:null},{url:"assets/js/v-10da9644.71ffdd4b.js",revision:null},{url:"assets/js/v-135e4503.b8859c31.js",revision:null},{url:"assets/js/v-13d6e5f6.72ce4685.js",revision:null},{url:"assets/js/v-19d84912.a152c90f.js",revision:null},{url:"assets/js/v-19eea59d.42390a0f.js",revision:null},{url:"assets/js/v-1cad7b10.948d209e.js",revision:null},{url:"assets/js/v-1d73af95.06e871f8.js",revision:null},{url:"assets/js/v-22df3c61.48308ff1.js",revision:null},{url:"assets/js/v-24de54ee.a095a987.js",revision:null},{url:"assets/js/v-2648ac1a.112684c1.js",revision:null},{url:"assets/js/v-275e2a2f.5ffe33d0.js",revision:null},{url:"assets/js/v-29d78daa.7c42d261.js",revision:null},{url:"assets/js/v-2b3a8924.9940111e.js",revision:null},{url:"assets/js/v-2d0a870d.05d825c7.js",revision:null},{url:"assets/js/v-3706649a.650d0c56.js",revision:null},{url:"assets/js/v-3bb27ea9.98361087.js",revision:null},{url:"assets/js/v-3d21f522.22eadab2.js",revision:null},{url:"assets/js/v-3e6e95f0.634112c9.js",revision:null},{url:"assets/js/v-466b2cb2.714632ed.js",revision:null},{url:"assets/js/v-52acee36.1db6e99d.js",revision:null},{url:"assets/js/v-578131e6.d3316d85.js",revision:null},{url:"assets/js/v-5ccd7e2c.10dc5d7c.js",revision:null},{url:"assets/js/v-5d526c16.68ed6e68.js",revision:null},{url:"assets/js/v-5fa3f531.a135505a.js",revision:null},{url:"assets/js/v-6059229c.68c38e0f.js",revision:null},{url:"assets/js/v-60c55912.8a4aa74d.js",revision:null},{url:"assets/js/v-68763ece.972413df.js",revision:null},{url:"assets/js/v-6879b57d.41837aa9.js",revision:null},{url:"assets/js/v-6cdf9fd9.e4b277e8.js",revision:null},{url:"assets/js/v-6ce48554.71f5dae1.js",revision:null},{url:"assets/js/v-6dc1ceac.ba6276a3.js",revision:null},{url:"assets/js/v-6e61f61e.48216930.js",revision:null},{url:"assets/js/v-786147a6.3b189e73.js",revision:null},{url:"assets/js/v-7919c9a2.ea474dd4.js",revision:null},{url:"assets/js/v-7aa8fa6a.ee5f8378.js",revision:null},{url:"assets/js/v-8daa1a0e.7e1431c7.js",revision:null},{url:"assets/js/v-945cf558.9621c5fc.js",revision:null},{url:"assets/js/v-9d397e8e.97f38756.js",revision:null},{url:"assets/js/v-a1a49808.bfc1ff18.js",revision:null},{url:"assets/js/v-aa863f00.a53ff7c2.js",revision:null},{url:"assets/js/v-aaf75552.16782a9d.js",revision:null},{url:"assets/js/v-b147b508.215412ea.js",revision:null},{url:"assets/js/v-bb011780.f9b242f9.js",revision:null},{url:"assets/js/v-ca9835b8.5887754b.js",revision:null},{url:"assets/js/v-cc6d4d78.551b775b.js",revision:null},{url:"assets/js/v-d6ed953a.ddf0925a.js",revision:null},{url:"assets/js/v-e45cc9ec.c2497e1d.js",revision:null},{url:"assets/js/v-e6412400.4cd76100.js",revision:null},{url:"assets/js/v-fb0f0066.0e9df8e5.js",revision:null},{url:"assets/js/v-fffb8e28.8f65d805.js",revision:null},{url:"contributing.html",revision:"fade6bd0814e30c951d80cc5f7978f47"},{url:"en/guide/index.html",revision:"5f92faced2216cb6459ebeb44af60a75"},{url:"en/index.html",revision:"276983ac16bd14ae6ed3103bea19fa6b"},{url:"favicon-16x16.png",revision:"85e898664445fdc5f71a2cca96278f52"},{url:"favicon-32x32.png",revision:"376de207c8dd3f4c2baa4445600d07cb"},{url:"guide/ado.html",revision:"7f6fb3e70d318caa9e29cea4cd1b875d"},{url:"guide/aop.html",revision:"725ca67871e868da5fee347220ed9928"},{url:"guide/BaseEntity.html",revision:"276adf12b2c838bc12d7bd4819c608cb"},{url:"guide/cascade-saving.html",revision:"cc7844092c0e5e229539cef5015dc517"},{url:"guide/code-first.html",revision:"07f6000460e134e3c30f2f9cdddedbc1"},{url:"guide/config-entity-from-db-first.html",revision:"842d30ca44f5981b7b9c1bf9bfd7f60a"},{url:"guide/custom-attribute.html",revision:"7a72657ceb21390a028ae104431d41ff"},{url:"guide/db-context.html",revision:"f4604a31927792eb03d180edccdb7925"},{url:"guide/db-first.html",revision:"e652f810f5a4fd6f5bead541727bae0e"},{url:"guide/delegate.html",revision:"aa58c2540e91bc3c27d5665ba7387db6"},{url:"guide/delete.html",revision:"c84365567e1978e821ca2bc62dcda061"},{url:"guide/entity-attribute.html",revision:"5d823ed464497fa1f5147f4380844b74"},{url:"guide/expression-function.html",revision:"de63f3ded8e89762e4d59eef075e3dff"},{url:"guide/filters.html",revision:"07a67b1e82ed6b415ef205738ea4f0bc"},{url:"guide/fluent-api.html",revision:"53e4d3f213caf8fea51c3b92f6b19114"},{url:"guide/getting-started.html",revision:"318c76a7c71c65cd383aa228dbd799cc"},{url:"guide/ifreesql-context.html",revision:"399ac0caf0093085737911c4f587e739"},{url:"guide/index.html",revision:"23a4d648e8312dc0133937f04baba61d"},{url:"guide/insert-or-update.html",revision:"79f49e97c53dbb684c212dd720379826"},{url:"guide/insert.html",revision:"46b769b83e84810075eef2293d6eab99"},{url:"guide/install.html",revision:"abdf561b6dbbaff48b4020a64662138b"},{url:"guide/linq-to-sql.html",revision:"e656a3d7eea4638376f1abf4c7ba4cb5"},{url:"guide/more.html",revision:"f0872eb97e41249092c3233676992424"},{url:"guide/multi-tenancy.html",revision:"dce0e6c56b352aab3d6403ada2f5e2f0"},{url:"guide/navigate-attribute.html",revision:"9586f136b6efdaa869e3988081119d52"},{url:"guide/paging.html",revision:"730c3a6e1631405e068a17a85fb13a80"},{url:"guide/performance.html",revision:"999fd79414ee26887c19b258528ab400"},{url:"guide/read-write-splitting.html",revision:"b8f85d53fdf89f2c32c847d128937b8f"},{url:"guide/repository.html",revision:"3ac0695723a613fa7ba1d9ff58f8eb1b"},{url:"guide/select-as-tree.html",revision:"75f05ec368b737dc06f6ca7d0c092c76"},{url:"guide/select-group-by.html",revision:"4f9ccd33bacae26a9a3acc9a3b059a47"},{url:"guide/select-include.html",revision:"c1b1f191cdf5ec0e7bb605f841e034b0"},{url:"guide/select-lazy-loading.html",revision:"23920aa6bbea834b70777c6d921d0d75"},{url:"guide/select-multi-table.html",revision:"73df480a743323cfc0b4f0d3360224c8"},{url:"guide/select-return-data.html",revision:"aa14c39be7383225fce1547e01effd2b"},{url:"guide/select-single-table.html",revision:"8ef2447447378092b09cd7ccc0d4fbb0"},{url:"guide/select.html",revision:"08144a56a3bcb9e966d74d67729a2f5e"},{url:"guide/sharding.html",revision:"c3c1d5b998922c6c601f40ee621e03c1"},{url:"guide/transaction.html",revision:"54d7104314508738d192e43592912247"},{url:"guide/type-mapping.html",revision:"201766b7beb9efbc12e36de63d4ba450"},{url:"guide/unit-of-work.html",revision:"7830618d2b197ec780b4bf9c374b7cae"},{url:"guide/update.html",revision:"edf752b912287337d83ca6c451ca45d4"},{url:"guide/withsql.html",revision:"317028c4eb94918fa27799cb69e025cf"},{url:"index.html",revision:"4ad0a6de0b6fc7f8fd36e0679b84b55f"},{url:"logo.png",revision:"994ed032d78dce0ef491b36fa4dc95d8"},{url:"mstile-150x150.png",revision:"905e91d3fe4a006d32a842f1e4473456"},{url:"reference/api.html",revision:"10803fbf9f75eed848ea9591be56f50f"},{url:"reference/awesome-freesql.html",revision:"43d13e8441691665a3ba002d7ae13f3f"},{url:"reference/change-log.html",revision:"4a2c3d536a7fc7d1f33eb13e4a1b64bd"},{url:"reference/donation.html",revision:"0671e4091a34388cd9f6ba881a8c9843"},{url:"reference/faq.html",revision:"e37de301311967c1ec3b5f2a086aea56"},{url:"reference/vs-dapper.html",revision:"741f5f782a429bd25178780426fa509c"},{url:"reference/vs-entity-framework.html",revision:"d7986e26cf4bd8e4cc19928c60ec8c56"},{url:"wechat_qrcode.jpg",revision:"44d32d516f6ed4cfe9aa55eac560ea74"}],{})}));
