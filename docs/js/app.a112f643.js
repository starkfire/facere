(function(t){function a(a){for(var s,r,o=a[0],c=a[1],d=a[2],l=0,u=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(a);while(u.length)u.shift()();return n.push.apply(n,d||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var o=e[r];0!==i[o]&&(s=!1)}s&&(n.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},r={app:0},i={app:0},n=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5ed649de":"6b204da1"}[t]+".js"}function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={"chunk-5ed649de":1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-5ed649de":"1b29c024"}[t]+".css",i=c.p+s,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var d=n[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===s||l===i))return a()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){d=u[o],l=d.getAttribute("data-href");if(l===s||l===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var s=a&&a.target&&a.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],f.parentNode.removeChild(f),e(n)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[t]=0})));var s=i[t];if(0!==s)if(s)a.push(s[2]);else{var n=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=n);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(f);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,e[1](u)}i[t]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var f=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2480:function(t,a,e){"use strict";var s=e("e2ae"),r=e.n(s);r.a},2836:function(t,a,e){"use strict";var s=e("abbf"),r=e.n(s);r.a},2844:function(t,a,e){t.exports=e.p+"img/sgan_3.453a48f9.jpg"},"2d94":function(t,a,e){"use strict";var s=e("f8db"),r=e.n(s);r.a},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var a=i(t);return e(a)}function i(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("9a33");var s=e("f933"),r=(e("1a62"),e("98c5")),i=(e("e7c6"),e("a8ba")),n=(e("de6a"),e("9a63")),o=(e("8fb1"),e("0c63")),c=(e("0032"),e("e32c")),d=(e("6ba6"),e("5efb")),l=(e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("2b0e")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},f=[],v={name:"App"},p=v,b=(e("5c0b"),e("2877")),h=Object(b["a"])(p,u,f,!1,null,null,null),m=h.exports,j=(e("d3b7"),e("8c4f")),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"landing"},[e("div",{staticClass:"hero"},[e("Navbar"),t._m(0),e("Audience")],1),e("SampleGallery"),e("Events"),e("Support"),e("Footer")],1)},y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head"},[e("p",{attrs:{id:"title"}},[t._v("Facere")]),e("p",{attrs:{id:"description"}},[t._v(" Connecting artistic talents to the world ")])])}],_=e("d178"),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"audience"},[e("a-row",{staticClass:"container"},[e("a-col",{attrs:{xs:24,lg:6}},[e("div",{staticClass:"audience-type",attrs:{id:"artists"}},[e("div",{attrs:{id:"overlay"}},[e("div",{attrs:{id:"content"}},[e("p",{attrs:{id:"title"}},[t._v("Artists")]),e("p",{attrs:{id:"description"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. ")])])])])]),e("a-col",{attrs:{xs:24,lg:6}},[e("div",{staticClass:"audience-type",attrs:{id:"musicians"}},[e("div",{attrs:{id:"overlay"}},[e("div",{attrs:{id:"content"}},[e("p",{attrs:{id:"title"}},[t._v("Musicians")]),e("p",{attrs:{id:"description"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. ")])])])])]),e("a-col",{attrs:{xs:24,lg:6}},[e("div",{staticClass:"audience-type",attrs:{id:"content-creators"}},[e("div",{attrs:{id:"overlay"}},[e("div",{attrs:{id:"content"}},[e("p",{attrs:{id:"title"}},[t._v("Content Creators")]),e("p",{attrs:{id:"description"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. ")])])])])]),e("a-col",{attrs:{xs:24,lg:6}},[e("div",{staticClass:"audience-type",attrs:{id:"everyone"}},[e("div",{attrs:{id:"overlay"}},[e("div",{attrs:{id:"content"}},[e("p",{attrs:{id:"title"}},[t._v("Everyone")]),e("p",{attrs:{id:"description"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. ")])])])])])],1)],1)},k=[],x={name:"Audience"},C=x,E=(e("6e3b"),Object(b["a"])(C,w,k,!1,null,"45481da8",null)),O=E.exports,z=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"events"},[s("a-row",[s("a-col",{attrs:{xs:24,lg:8,"data-aos":"fade-right","data-aos-duration":"1500"}},[s("p",{attrs:{id:"title"}},[t._v("Events")]),s("p",{attrs:{id:"description"}},[t._v(" Far away and too busy to attend an event? Featurist lets you buy tickets and attend live events and shows virtually on any device. ")])]),s("a-col",{attrs:{xs:24,lg:16}},[s("div",{staticClass:"events-list"},[s("div",{staticClass:"event"},[s("a-row",{staticClass:"event-one",attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[s("a-col",{attrs:{id:"poster",xs:24,lg:12}},[s("a",{attrs:{id:"sale"}},[t._v("25% Sale")]),s("a",{attrs:{id:"ends-on"}},[s("a-icon",{attrs:{type:"hourglass",id:"sale-icon"}}),t._v(" "+t._s(t.days)+"d : "+t._s(t.hours)+"h : "+t._s(t.minutes)+"m : "+t._s(t.seconds)+"s")],1)]),s("a-col",{attrs:{id:"details",xs:24,lg:12}},[s("p",{attrs:{id:"event-name"}},[t._v("Live: John Doe")]),s("p",{attrs:{id:"event-date"}},[t._v("Dec. 4, 2020 | 8:00PM PHT")]),s("a",{attrs:{id:"reserve"}},[t._v("Reserve (₱ 130.00)")])])],1)],1),s("div",{staticClass:"event"},[s("a-row",{staticClass:"event-two",attrs:{"data-aos":"fade-up","data-aos-delay":"150","data-aos-duration":"1000"}},[s("a-col",{attrs:{id:"poster",xs:24,lg:12}},[s("div",{attrs:{id:"vr-ready"}},[s("img",{attrs:{src:e("ad70")}}),t._v(" VR-READY ")])]),s("a-col",{attrs:{id:"details",xs:24,lg:12}},[s("p",{attrs:{id:"event-name"}},[t._v("P. Roxas Exhibit")]),s("p",{attrs:{id:"event-date"}},[t._v("Nov. 5 - 8, 2020 | 5:00 PM - 08:00PM PHT")]),s("a",{attrs:{id:"reserve"}},[t._v("Reserve (₱ 350.00)")])])],1)],1)])])],1)],1)},S=[],T={name:"Events",data:function(){return{start:"",end:"",interval:"",days:"",minutes:"",hours:"",seconds:""}},mounted:function(){var t=this;this.start=new Date("Sep 14, 2020 06:00:00").getTime(),this.end=new Date("Dec 4, 2020 20:00:00").getTime(),this.timerCount(this.start,this.end),this.interval=setInterval((function(){t.timerCount(t.start,t.end)}),1e3)},methods:{timerCount:function(t,a){var e=(new Date).getTime(),s=t-e,r=a-e;s<0&&r<0?clearInterval(this.interval):s<0&&r>0?this.calcTime(r):s>0&&r>0&&this.calcTime(s)},calcTime:function(t){this.days=Math.floor(t/864e5),this.hours=Math.floor(t%864e5/36e5),this.minutes=Math.floor(t%36e5/6e4),this.seconds=Math.floor(t%6e4/1e3)}}},P=T,A=(e("8c7a"),Object(b["a"])(P,z,S,!1,null,"08b7bda4",null)),F=A.exports,D=e("fd2d"),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gallery"},[e("p",{attrs:{id:"title"}},[t._v("Gallery")]),e("a-row",[e("a-col",{attrs:{xs:1,lg:4}}),e("a-col",{attrs:{xs:22,lg:16}},[e("p",{attrs:{id:"description"}},[t._v("Showcase your artworks through an interactive canvas.")])]),e("a-col",{attrs:{xs:1,lg:4}})],1),e("a-row",{staticClass:"sample-collection"},[e("a-col",{attrs:{xs:24,lg:8}},[e("div",{staticClass:"artwork",attrs:{id:"abstract-one","data-aos":"fade-right","data-aos-duration":"2000"}},[e("div",{staticClass:"overlay"},[e("div",{staticClass:"tooltip"},[e("p",{attrs:{id:"title"}},[t._v("The Winds of Winter")]),e("p",{attrs:{id:"author"}},[t._v("Ramin Djawadi")]),e("div",{staticClass:"stats"},[t._v(" 6,985 "),e("a-icon",{attrs:{id:"like",type:"like"}})],1),e("div",{staticClass:"socials"},[e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"behance",type:"behance"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"dribbble",type:"dribbble"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"instagram",type:"instagram"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"twitter",type:"twitter"}})],1)])])])])]),e("a-col",{attrs:{xs:24,lg:8}},[e("div",{staticClass:"artwork",attrs:{id:"abstract-two","data-aos":"fade-up","data-aos-duration":"2000"}},[e("div",{staticClass:"overlay"},[e("div",{staticClass:"tooltip"},[e("p",{attrs:{id:"title"}},[t._v("Any Colour You Like")]),e("p",{attrs:{id:"author"}},[t._v("Pink Floyd")]),e("div",{staticClass:"stats"},[t._v(" 9,402 "),e("a-icon",{attrs:{id:"like",type:"like"}})],1),e("div",{staticClass:"socials"},[e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"behance",type:"behance"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"dribbble",type:"dribbble"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"instagram",type:"instagram"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"twitter",type:"twitter"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"youtube",type:"youtube"}})],1)])])])])]),e("a-col",{attrs:{xs:24,lg:8}},[e("div",{staticClass:"artwork",attrs:{id:"abstract-three","data-aos":"fade-left","data-aos-duration":"2000"}},[e("div",{staticClass:"overlay"},[e("div",{staticClass:"tooltip"},[e("p",{attrs:{id:"title"}},[t._v("Strawberry Swing")]),e("p",{attrs:{id:"author"}},[t._v("Coldplay")]),e("div",{staticClass:"stats"},[t._v(" 8,325 "),e("a-icon",{attrs:{id:"like",type:"like"}})],1),e("div",{staticClass:"socials"},[e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"behance",type:"behance"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"instagram",type:"instagram"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"twitter",type:"twitter"}})],1),e("a",{attrs:{href:"#"}},[e("a-icon",{attrs:{id:"youtube",type:"youtube"}})],1)])])])])])],1),e("div",{staticClass:"goto-gallery",attrs:{"data-aos":"fade-right","data-aos-duration":"2000"}},[e("a",{attrs:{href:"#"}},[t._v("GO TO GALLERY "),e("a-icon",{attrs:{id:"arrow",type:"arrow-right"}})],1)])],1)},M=[],N={name:"SampleGallery"},$=N,R=(e("2836"),Object(b["a"])($,L,M,!1,null,"d272adf8",null)),G=R.exports,I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"support"},[s("a-row",[s("a-col",{attrs:{xs:24,lg:8,"data-aos":"fade-right","data-aos-duration":"1000"}},[s("p",{attrs:{id:"title"}},[t._v("Support")]),s("p",{attrs:{id:"description"}},[t._v(" Facere will help you grow your audience as an artist and fund your projects. ")]),s("router-link",{attrs:{id:"read-article",to:"/article"}},[s("a-icon",{attrs:{id:"read",type:"read"}}),t._v(" Why be a backer? Read our article. "),s("a-icon",{attrs:{id:"arrow",type:"arrow-right"}})],1)],1),s("a-col",{attrs:{xs:24,lg:15}},[s("div",{staticClass:"feedback"},[s("a-row",{attrs:{id:"feedback-one","data-aos":"fade-left","data-aos-duration":"1000"}},[s("a-col",{attrs:{xs:24,lg:6,id:"head"}},[s("img",{attrs:{src:e("6059")}})]),s("a-col",{attrs:{xs:24,lg:18,id:"content"}},[s("p",{attrs:{id:"name"}},[t._v("John Doe")]),s("p",{attrs:{id:"title"}},[t._v("Painter")]),s("p",{attrs:{id:"comment"}},[t._v(' "I already tried tons of platforms where I can showcase my artworks but none of these platforms really helped me other than Facere." ')])])],1),s("a-row",{attrs:{id:"feedback-two","data-aos":"fade-right","data-aos-duration":"1200"}},[s("a-col",{attrs:{xs:24,lg:18,id:"content"}},[s("p",{attrs:{id:"name"}},[t._v("Jane Doe")]),s("p",{attrs:{id:"title"}},[t._v("Musician")]),s("p",{attrs:{id:"comment"}},[t._v(' "It\'s actually astonishing that Facere is much more effective at growing your audience than any other services." ')])]),s("a-col",{attrs:{xs:24,lg:6,id:"head"}},[s("img",{attrs:{src:e("2844")}})])],1),s("a-row",{attrs:{id:"feedback-three","data-aos":"fade-left","data-aos-duration":"1400"}},[s("a-col",{attrs:{xs:24,lg:6,id:"head"}},[s("img",{attrs:{src:e("9b1b")}})]),s("a-col",{attrs:{xs:24,lg:18,id:"content"}},[s("p",{attrs:{id:"name"}},[t._v("Dylan")]),s("p",{attrs:{id:"title"}},[t._v("Script Kiddie")]),s("p",{attrs:{id:"comment"}},[t._v(" *heavy breathing* ")])])],1)],1)])],1)],1)},J=[],q={name:"Support"},H=q,B=(e("6c77"),Object(b["a"])(H,I,J,!1,null,"7b7752da",null)),U=B.exports,W={name:"Home",components:{Audience:O,Navbar:_["a"],Events:F,Footer:D["a"],SampleGallery:G,Support:U}},Y=W,K=(e("2480"),Object(b["a"])(Y,g,y,!1,null,"5120d345",null)),V=K.exports;l["a"].use(j["a"]);var Q=[{path:"/",component:V,meta:{title:"Facere"}},{path:"/article",component:function(){return e.e("chunk-5ed649de").then(e.bind(null,"3ad6"))},meta:{title:"Facere"}}],X=new j["a"]({base:"",routes:Q});X.beforeEach((function(t,a,e){document.title=t.meta.title,e()}));var Z=X,tt=e("2f62");l["a"].use(tt["a"]);var at=new tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=e("f5af"),st=e.n(et);e("e829");l["a"].config.productionTip=!1,l["a"].use(d["a"]),l["a"].use(c["a"]),l["a"].use(o["a"]),l["a"].use(n["a"]),l["a"].use(i["a"]),l["a"].use(r["a"]),l["a"].use(s["a"]),new l["a"]({created:function(){st.a.init()},router:Z,store:at,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),r=e.n(s);r.a},6059:function(t,a,e){t.exports=e.p+"img/sgan_5.24b71844.jpg"},"6c77":function(t,a,e){"use strict";var s=e("c94e"),r=e.n(s);r.a},"6e3b":function(t,a,e){"use strict";var s=e("d1a5"),r=e.n(s);r.a},"8c7a":function(t,a,e){"use strict";var s=e("ad5b"),r=e.n(s);r.a},"9b1b":function(t,a,e){t.exports=e.p+"img/sgan_4.eae7868a.jpg"},"9c0c":function(t,a,e){},"9e6b":function(t,a,e){"use strict";var s=e("fa84"),r=e.n(s);r.a},abbf:function(t,a,e){},ad5b:function(t,a,e){},ad70:function(t,a,e){t.exports=e.p+"img/virtual-reality.b9c3a840.svg"},c94e:function(t,a,e){},d178:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar"},[e("a-row",[e("a-col",{attrs:{xs:24,lg:6,span:6,id:"logo"}},[e("router-link",{attrs:{to:"/"}},[t._v("Facere")])],1),e("a-col",{attrs:{xs:18,lg:12,id:"nav-buttons"}},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Explore")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Creators")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])])])]),e("a-col",{attrs:{xs:6,lg:6,id:"highlight"}},[e("a",{attrs:{href:"#",id:"auth"}},[t._v("Signup")]),e("a",{attrs:{href:"#",id:"auth"}},[t._v("Login")])])],1)],1)},r=[],i={name:"Navbar"},n=i,o=(e("9e6b"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,"47626ab6",null);a["a"]=c.exports},d1a5:function(t,a,e){},e2ae:function(t,a,e){},f8db:function(t,a,e){},fa84:function(t,a,e){},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("a-row",[e("a-col",{attrs:{id:"left",xs:24,lg:12}},[e("p",{attrs:{id:"logo"}},[t._v("Facere")])]),e("a-col",{attrs:{id:"right",xs:24,lg:12}},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Explore")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Creators")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])])])])],1)],1)},r=[],i={name:"Footer"},n=i,o=(e("2d94"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,"9eb7df4e",null);a["a"]=c.exports}});
//# sourceMappingURL=app.a112f643.js.map