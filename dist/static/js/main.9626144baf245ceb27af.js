webpackJsonp([0],{0:function(t,e,n){n("hwd0"),t.exports=n("NHnr")},"2Em0":function(t,e){t.exports={panel:"Ac1n-dHJBITb0KN3bLkPY_0",content:"_36EXYySYhSR0L3GH_935Rp_0",more:"_1ctzGAyOz7NSL6T-XR9VUg_0"}},"4NUe":function(t,e){},"5gTs":function(t,e){},Dl8P:function(t,e){},G1Pu:function(t,e){},GkKK:function(t,e){},HbLH:function(t,e){t.exports={panel:"_2ZUB2MeLb_GsH8cxHamXIO_0"}},KiFH:function(t,e){},LdlK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/xf8"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("span",{staticClass:"log"},[e("a",{staticClass:"register"},[this._v("注册")]),this._v(" | \n    "),e("a",{staticClass:"login"},[this._v("登陆")])]),this._v(" "),e("button",{staticClass:"appDownload btn"},[this._v("APP下载")])])}]};var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.navi},t._l(t.list,function(e,i){return n("li",{key:i,class:t.$style.linkWrapper},[n("router-link",{class:t.$style.link,attrs:{to:{path:e.href}}},[n("img",{class:t.$style.img,attrs:{src:e.src,alt:""}}),t._v(" "),n("p",{class:t.$style.title},[t._v(t._s(e.title))])])],1)}),0)},staticRenderFns:[]};var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.copyright},[n("div",{class:t.$style.viewend},[n("div",{class:t.$style.versions},[n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"}}),t._v(" "),n("p",{class:t.$style.text},[t._v("客户端")])]),t._v(" "),n("div",{class:t.$style.versions},[n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"}}),t._v(" "),n("p",{class:t.$style.text},[t._v("触屏版")])]),t._v(" "),n("div",{class:t.$style.versions},[n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"}}),t._v(" "),n("p",{class:t.$style.text},[t._v("电脑版")])])]),t._v(" "),n("div",{class:t.$style.cprs},[t._v("Copyright © 2004-2017 京东JD.com 版权所有")]),t._v(" "),n("div",{class:t.$style.warning},[t._v("投资有风险，购买需谨慎")]),t._v(" "),n("div",{class:t.$style.agreement},[t._v("京东金融平台服务协议")]),t._v(" "),n("div",{class:t.$style.privacy},[t._v("京东金融隐私政策")]),t._v(" "),n("div",{class:t.$style.blank})])},staticRenderFns:[]};var c={name:"App",components:{"v-header":n("C7Lr")({},s,!1,function(t){n("Dl8P")},"data-v-2158bdc5",null).exports,"v-navi":n("C7Lr")({data:function(){return{list:[{title:"首页",href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60"},{title:"理财",href:"/finance",src:"//img12.360buyimg.com/jrpmobile/jfs/t1/93/2/15333/2159/5bda590eE721487cd/85ef52d2b68205ef.png?width=60&height=60"},{title:"白条",href:"/loan",src:"//img12.360buyimg.com/jrpmobile/jfs/t1/9698/36/4230/594/5bda5919Ec55e200a/dd949177311f04e7.png?width=60&height=60"},{title:"众筹",href:"/founding",src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/4948/14/14022/816/5bda5924Eb28b0d4c/fde0775f7c0e197d.png?width=60&height=60"},{title:"我的",href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60"}]}}},r,!1,function(t){this.$style=n("syV7")},null,null).exports,"v-copy":n("C7Lr")({data:function(){return{}}},a,!1,function(t){this.$style=n("qKTd")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-header"),this._v(" "),e("router-view"),this._v(" "),e("v-copy"),this._v(" "),e("v-navi")],1)},staticRenderFns:[]};var o=n("C7Lr")(c,l,!1,function(t){n("LdlK")},null,null).exports,d=n("KGCO"),m=n("DMPO"),u={props:{cname:{type:String,default:""},options:{type:Object,default:function(){return{autoplay:!0,loop:!0,pagination:{el:".swiper-gahination"},notNextTick:!1}}},items:{type:Array,default:function(){return[]}}},data:function(){return{}},components:{swiper:m.swiper,swiperSlide:m.swiperSlide}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.cname},[n("swiper",{attrs:{options:t.options,"not-next-tick":t.options.notNextTick}},[t._l(t.items,function(t,e){return n("swiper-slide",{key:e},[n("router-link",{attrs:{to:{name:t.href}}},[n("img",{attrs:{src:t.src}})])],1)}),t._v(" "),t.options.pagination?n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)],1)},staticRenderFns:[]};var f=n("C7Lr")(u,p,!1,function(t){n("G1Pu")},null,null).exports,h={components:{slider:f},data:function(){return{enters:[{href:"/index",title:"优惠券",src:"//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132"},{href:"/index",title:"领红包",src:"//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132"},{href:"/index",title:"抢钢镚",src:"//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132"},{href:"/index",title:"领京豆",src:"//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132"},{href:"/index",title:"白条提额",src:"//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135"}],items:[{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320"},{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320"},{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320"}]}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("slider",{attrs:{items:t.items,cname:t.$style.slider}}),t._v(" "),n("section",{class:t.$style.list},t._l(t.enters,function(e){return n("div",{key:e.src,class:t.$style.item},[n("router-link",{attrs:{to:{path:e.href}}},[n("img",{attrs:{src:e.src,alt:"item.title"}}),t._v(" "),n("h4",[t._v(t._s(e.title))])])],1)}),0)],1)},staticRenderFns:[]};var v=n("C7Lr")(h,_,!1,function(t){this.$style=n("O82Z")},null,null).exports,g={props:{title:{type:String,default:""},cname:{type:String,default:""}},data:function(){return{panelClass:"panel"}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{class:[this.panelClass.cname]},[e("h4",[this._v("-"+this._s(this.title)+"-")]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var y=n("C7Lr")(g,b,!1,function(t){n("Twef")},"data-v-208362ae",null).exports,x={data:function(){return{title:"新手特权"}},components:{panel:y}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("panel",{class:t.$style.panel,attrs:{title:"新手特权"}},[n("section",{class:t.$style.content},[n("div",{class:t.$style.item},[n("h4",[t._v("\n          下载APP\n          "),n("span",{class:t.$style.red},[t._v("送888元礼包")])]),t._v(" "),n("p",{class:t.$style.gray},[t._v("新手专享")]),t._v(" "),n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100",alt:""}})]),t._v(" "),n("div",{class:t.$style.item},[n("ul",[n("li",[n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200",alt:""}}),t._v(" "),n("h4",{class:t.$style.red},[t._v("立领128礼包")]),t._v(" "),n("p",{class:t.$style.gray},[t._v("立即开通")])]),t._v(" "),n("li",[n("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100",alt:""}}),t._v(" "),n("h4",[t._v("\n              打白条\n              "),n("span",{class:t.$style.red},[t._v("享免息")])]),t._v(" "),n("p",{class:t.$style.gray},[t._v("立即开通享豪礼")])])])])])])],1)},staticRenderFns:[]};var j={props:{},data:function(){return{}},components:{panel:y}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("panel",{class:this.$style.panel,attrs:{title:"急速借贷"}},[e("router-link",{attrs:{to:{path:"/index"}}},[e("img",{attrs:{src:"//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"}})])],1)},staticRenderFns:[]};var N={props:{},data:function(){return{items:[{title:"定期理财",sub:"理财首选",rate:"5.60%",desc:"历史年化回报率"},{title:"小白理财",sub:"理财首选",rate:"4.22%",desc:"7日年化收益率"},{title:"月月盈",sub:"养老保障",rate:"5%",desc:"七日年化收益率"},{title:"小白基金",sub:"天天赚钱",rate:"4.27%",desc:"7日年化收益率"}]}},components:{panel:y}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{class:t.$style.panel,attrs:{title:"理财精选"}},[n("div",{class:t.$style.content},t._l(t.items,function(e,i){return n("dl",{key:i,class:t.$style.item},[n("dt",[t._v("\n        "+t._s(e.title)+"\n        "),n("span",[t._v(t._s(e.sub))])]),t._v(" "),n("dd",[t._v(t._s(e.rate))]),t._v(" "),n("dd",[t._v(t._s(e.desc))])])}),0)])},staticRenderFns:[]};var E={data:function(){return{cname:"goods",options:{slidesPerView:2.3,spaceBetween:30,freeMode:!0,autoplay:!1},items:[{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421"},{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421"},{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421"},{href:"/index",src:"//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421"}]}},components:{panel:y,slider:f}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{class:t.$style.panel,attrs:{title:"新品推荐"}},[n("section",{class:t.$style.content},[n("a",{class:t.$style.more},[t._v("更多尖货>")]),t._v(" "),n("slider",{class:t.cname,attrs:{options:t.options,items:t.items}})],1)])},staticRenderFns:[]};var k={data:function(){return{}},components:{panel:y}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("panel",{class:this.$style.panel,attrs:{title:"生活服务"}})},staticRenderFns:[]};var R={data:function(){return{}},components:{indexSlider:v,novice:n("C7Lr")(x,w,!1,function(t){this.$style=n("tE4r")},null,null).exports,loanbanner:n("C7Lr")(j,$,!1,function(t){this.$style=n("jNtu")},null,null).exports,financeselect:n("C7Lr")(N,C,!1,function(t){this.$style=n("eSNc")},null,null).exports,newgoods:n("C7Lr")(E,L,!1,function(t){this.$style=n("2Em0"),n("5gTs")},null,null).exports,service:n("C7Lr")(k,F,!1,function(t){this.$style=n("HbLH")},null,null).exports}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("indexSlider"),this._v(" "),this._m(0),this._v(" "),e("novice"),this._v(" "),e("loanbanner"),this._v(" "),e("financeselect"),this._v(" "),e("newgoods"),this._v(" "),e("service")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-content"}),this._v(" "),e("div",{staticClass:"swiper-links"})])}]};var S=n("C7Lr")(R,P,!1,function(t){n("Rf6k")},"data-v-56208966",null).exports,H={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"finance"},[this._v("\n  finance here\n")])},staticRenderFns:[]};var A=n("C7Lr")({},H,!1,function(t){n("KiFH")},"data-v-49c0d1f4",null).exports,K={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loan"},[this._v("\n  loan\n")])},staticRenderFns:[]};var I=n("C7Lr")({},K,!1,function(t){n("GkKK")},"data-v-fbf33450",null).exports,G={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"founding"},[this._v("\n  founding\n")])},staticRenderFns:[]};var O=n("C7Lr")({},G,!1,function(t){n("4NUe")},"data-v-ea6e0f50",null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user"})},staticRenderFns:[]};n("C7Lr")({},T,!1,function(t){n("jHi1")},"data-v-ff343dfa",null).exports;i.a.use(d.a);var B=new d.a({routes:[{name:"home",path:"/",component:S},{name:"/index",path:"/index",component:S},{name:"index",path:"/index",component:S},{name:"finance",path:"/finance",component:A},{name:"loan",path:"/loan",component:I},{name:"founding",path:"/founding",component:O},{name:"user",path:"/user",component:S},{path:"/*",redirect:"/index"}]});n("uIYl");i.a.config.productionTip=!1,new i.a({el:"#app",router:B,components:{App:o},template:"<App/>"})},O82Z:function(t,e){t.exports={slider:"PLIDH5-5z62vNwf2n2KIk_0",list:"_39P1yhzbh4SoW29wHtj7Q8_0",item:"jXbNmoMvdBNha6td1phmC_0"}},Rf6k:function(t,e){},Twef:function(t,e){},eSNc:function(t,e){t.exports={panel:"_22hcruZXPQrX-sFsMYpX2p_0",content:"_2Yoomgv63nWfAF351Xv3Np_0",item:"_3ZFvP2oYw_IisxFm3OtQMG_0"}},hwd0:function(t,e){!function(t,e){"use strict";var n={};!function(){var i=e.querySelector('meta[name="viewport"]'),s=e.querySelector('meta[name="hotcss"]'),r=t.devicePixelRatio||1,a=540,c=0;if(r=r>=3?3:r>=2?2:1,s){var l=s.getAttribute("content");if(l){var o=l.match(/initial\-dpr=([\d\.]+)/);o&&(r=parseFloat(o[1]));var d=l.match(/max\-width=([\d\.]+)/);d&&(a=parseFloat(d[1]));var m=l.match(/design\-width=([\d\.]+)/);m&&(c=parseFloat(m[1]))}}e.documentElement.setAttribute("data-dpr",r),n.dpr=r,e.documentElement.setAttribute("max-width",a),n.maxWidth=a,c&&e.documentElement.setAttribute("design-width",c),n.designWidth=c;var u=1/r,p="width=device-width, initial-scale="+u+", minimum-scale="+u+", maximum-scale="+u+", user-scalable=no";i?i.setAttribute("content",p):((i=e.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content",p),e.head.appendChild(i))}(),n.px2rem=function(t,e){return e||(e=parseInt(n.designWidth,10)),320*parseInt(t,10)/e/20},n.rem2px=function(t,e){return e||(e=parseInt(n.designWidth,10)),20*t*e/320},n.mresize=function(){var i=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(n.maxWidth&&i/n.dpr>n.maxWidth&&(i=n.maxWidth*n.dpr),!i)return!1;e.documentElement.style.fontSize=20*i/320+"px",n.callback&&n.callback()},n.mresize(),t.addEventListener("resize",function(){clearTimeout(n.tid),n.tid=setTimeout(n.mresize,33)},!1),t.addEventListener("load",n.mresize,!1),setTimeout(function(){n.mresize()},333),t.hotcss=n}(window,document)},jHi1:function(t,e){},jNtu:function(t,e){t.exports={panel:"v548OPqdJGj1jA7FoQA-9_0"}},qKTd:function(t,e){t.exports={copyright:"_3HsDbBXNgkB6UAv1xmOIMa_0",viewend:"_3Zp0A9S5HplajrBLPznhNi_0",versions:"_1ulE4mh5iS900l4cBN2QPN_0",text:"_37q1JY1DqYSsiOJFJBSk_g_0",cprs:"_2TluwM9Z0L5Gj6SNApGi0B_0",warning:"_2HH2y4nkkP516wGCk650go_0",agreement:"_3K-SYUWBGUmKMWUTMgKcd6_0",privacy:"_3baqAXOeBir9BEv1x-4E-N_0",blank:"_1yRDeQV1wq8KZbBpSIh8ul_0"}},syV7:function(t,e){t.exports={navi:"_2C-uromwbh8_Ezsfs_tow__0",linkWrapper:"_1QTtINyPo4QwNbIIx1rL8S_0",link:"lVXsaD6DaDKmGcdrpU-Zi_0",title:"_1WFmBdL2PONKNeKxFWJGbq_0",img:"_2Cr10cIzL5heu5D7HGmqx2_0"}},tE4r:function(t,e){t.exports={panel:"_1u3jpLRQ_gr8x6pXj4ccIr_0",content:"_3-OeIgrCvSdYgSGwROI6VR_0",item:"_1-iPHYxnPE3vfV0PsI5LOV_0",red:"_3d89DdHP0drBm75Z0O46re_0",gray:"_2bqM5k_3RZKJ6FF_NporT1_0"}},uIYl:function(t,e){}},[0]);
//# sourceMappingURL=main.9626144baf245ceb27af.js.map