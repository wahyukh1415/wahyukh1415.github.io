(function(t){function e(e){for(var i,s,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n={app:0},r=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"877bda2b"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"ece86119"}[t]+".css",n=o.p+i,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var c=r[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===n))return e()}var m=document.getElementsByTagName("style");for(l=0;l<m.length;l++){c=m[l],d=c.getAttribute("data-href");if(d===i||d===n)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[t],u.parentNode.removeChild(u),a(r)},u.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){s[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t);var m=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",m.name="ChunkLoadError",m.type=i,m.request=s,a[1](m)}n[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var i=a("64a9"),s=a.n(i);s.a},"2b2b":function(t,e,a){"use strict";var i=a("bfaf"),s=a.n(i);s.a},"64a9":function(t,e,a){},bfaf:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"justify-content":"flex-start"}},[a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-shrink"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item mx-0 mx-lg-1"},[a("router-link",{staticClass:"nav-item mx-0 mx-lg-1",attrs:{to:"/"}},[a("span",[a("img",{staticStyle:{width:"60px"},attrs:{src:"/images/aw.png",alt:""}})])])],1),a("li",{staticClass:"nav-item mx-0 mx-lg-1"},[a("router-link",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{to:"/"}},[a("h6",[t._v("Home")])])],1),a("li",{staticClass:"nav-item mx-0 mx-lg-1"},[a("a",[a("router-link",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{to:"/Kontak"}},[a("h6",[t._v("Kontak")])])],1)]),t._m(0)])])])])])]),t._m(1)]),a("router-view")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item mx-0 mx-lg-1"},[a("a")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profil"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"padding-right":"unset"}},[a("div",{staticClass:"shadow bg-white rounded"},[a("div",{staticClass:"bd-example"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/webbanner1.png",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h1",[a("img",{staticStyle:{width:"100px"},attrs:{src:"/images/awan.png",alt:""}})]),a("br"),a("h3",[t._v("Wahyu Kurniawan Hartanto")]),a("h6",[t._v("UI/UX Designer - Front End")]),a("h6",[t._v("Photo Editor and Traveler")])])])])])])])])])])}],r=(a("034f"),a("2877")),l={},o=Object(r["a"])(l,s,n,!1,null,null,null),c=o.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"Profil mt-2 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"shadow bg-white rounded"},[t._m(0),a("div",{staticClass:"col"},[a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("div",{staticClass:"bg-primary p-4 text-center rounded shadow"},[a("img",{staticStyle:{width:"90px"},attrs:{src:"/images/icon.png",alt:""}}),a("h5",{staticClass:"text-white mt-3"},[t._v("Wahyu Kurniawan Hartanto")]),t._m(1),t._m(2),t._m(3),a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg-6",modifiers:{"modal-lg-6":!0}}],staticClass:"view-profil mt-5",attrs:{variant:"outline-light"}},[t._v("View Profil")]),a("b-modal",{attrs:{id:"modal-lg-6",size:"lg",title:"My Profil","hide-header":"","hide-footer":"",centered:""}},[a("div",{staticClass:"profil-cv d-flex align-item-center justify-content-center p-2 shadow"},[a("b-nav",[a("b-nav-item",[a("a",{attrs:{href:"https://github.com/wahyukh1415"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Github1.png",alt:""}}),a("p",[t._v("Github")])])]),a("b-nav-item",[a("a",{attrs:{href:"https://dribbble.com/wahyukh1415"}},[a("span",[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Dribble1.png",alt:""}})]),a("span",[a("p",[t._v("Dribble")])])])]),a("b-nav-item",[a("a",{attrs:{href:"https://www.linkedin.com/in/wahyu-kurniawan-hartanto-634823164/"}},[a("span",[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/linkedin1.png",alt:""}})]),a("p",[t._v("linkedin")]),a("span",[a("p")])])]),a("b-nav-item",[a("a",{attrs:{href:"https://www.instagram.com/wahyukh1415/"}},[a("span",[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Instagram.png",alt:""}})]),a("span",[a("p",[t._v("Instagram")])])])]),a("b-nav-item",[a("a",{attrs:{href:"https://twitter.com/wahyukh1415"}},[a("span",[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/twitter.png",alt:""}})]),a("span",[a("p",[t._v("Instagram")])])])]),a("b-nav-item",[a("a",{attrs:{href:"hhttps://www.facebook.com/awan.escaperboyz"}},[a("span",[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/facebook.png",alt:""}})]),a("span",[a("p",[t._v("Facebook")])])])])],1)],1)])],1)])])])])]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"shadow p-2 mb-2 bg-white rounded"},[t._m(4),a("div",{staticClass:"card shadow"},[t._m(5),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-tittle"},[t._v("Introduction")]),a("p",{staticClass:"card-text"},[t._v("\n                  Wahyu Kurniawan Hartanto has an IT education background, Graduated from Telkom University in 2018,\n                  Wahyu has built his competencies in software development (e.g. Mobile Development, Web Development & Game Development),\n                  UI/UX (User Interface and User Experience) and HCI (Human Computer Interaction).\n                  He is an certified junior programmer from Badan Nasional Sertifikasi Profesi (BNSP) who has knowledge in\n                  Java, C# Programming Language, PHP CodeIgniter, Java Script, Vue JS, HTML, CSS.\n                  Besides programming, He has knowledge UI/UX (e.g. Research, Usability Testing, Adobe XD, Balsamiq, UX Pin).\n                  He has knowledge about Design and use our tools Corel Draw, Adobe Photoshop, Adobe Illustrator.\n                ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg-4",modifiers:{"modal-lg-4":!0}}],attrs:{variant:"primary"}},[t._v("More Info")]),a("b-modal",{attrs:{id:"modal-lg-4",size:"lg",title:"My Profil","hide-header":"","hide-footer":""}},[a("div",{staticClass:"profil-cv d-flex align-item-center justify-content-center p-2 shadow"},[a("p",[t._v("\n                      Wahyu Kurniawan Hartanto has an IT education background, Graduated from Telkom University in 2018,\n                      Wahyu has built his competencies in software development (e.g. Mobile Development, Web Development & Game Development),\n                      UI/UX (User Interface and User Experience) and HCI (Human Computer Interaction).\n                      He is an certified junior programmer from Badan Nasional Sertifikasi Profesi (BNSP) who has knowledge in\n                      Java, C# Programming Language, PHP CodeIgniter, Java Script, Vue JS, HTML, CSS.\n                      Besides programming, He has knowledge UI/UX (e.g. Research, Usability Testing, Adobe XD, Balsamiq, UX Pin).\n                      He has knowledge about Design and use our tools Corel Draw, Adobe Photoshop, Adobe Illustrator.\n                      He loves reading and try to develop a game and design to enhance his skills. besides that he has a hobby play music instrument, design, traveling, play game, soccer and futsal\n                    ")])])])],1)])])])])]),a("div",{staticClass:"main-content mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("div",{staticClass:"shadow mb-4 bg-white rounded"},[a("div",{staticClass:"bd-example"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/research1.png",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("br"),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{variant:"light"}},[a("h3",[t._v("Research")])]),a("b-modal",{attrs:{id:"modal-lg",size:"lg",title:"Research","hide-header":"","hide-footer":""}},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item mt-3"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[a("span",[a("img",{staticStyle:{width:"50px"},attrs:{src:"/images/icon.png",alt:""}})])])],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#","aria-disabled":"true"}},[a("h5",[t._v("Game Belajar Bermain Angklung")])]),a("p",{staticClass:"owner ml-3"},[t._v("By Wahyu Kurniawan Hartanto")])])])]),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"d-flex align-item-center justify-content-center mb-4"}),a("div",{staticClass:"image-research d-flex align-item-center justify-content-center p-2 shadow"},[a("a",{attrs:{href:"https://dribbble.com/shots/7057742-Belajar-Bermain-Angklung"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/GBA.png",alt:""}})])]),a("p",{staticClass:"des mr-4 ml-4 mt-2"},[t._v("\n                            Angklung is a unique Indonesian culture that has been recognized by UNESCO since 2010. One of\n                            preservation of angklung culture, the Bandung city government has made Saung Angklung Udjo as\n                            place to preserve angklung. Along with the development of technology, angklung games for\n                            smartphones have been developed. In term of game, usability aspect is one of the important aspects that connected between users and games. Based on the usability evaluation that using the Quality in Use Integrated Measurement (QUIM) method applied to some applications and angklung games, the average test for all factors has not fulfilled the usability aspect, that caused problems in users experience when using the angklung game application. Therefore, it is necessary to design the user interface for the angklung game application so that it can be used in playing angklung. The method used for designing the user interface of angklung game application is a user centered design method that focuses on characteristics, tasks, environments of users. Based on the evaluation using QUIM Belajar bermain Angklung application is able to meet the requirements and abilities of users, this can be seen from the results of the lowest usability value is 86% which means it has met the usability aspect.\n                          ")]),a("p",{staticClass:"des mr-4 ml-4"},[t._v("\n                            Check Jurnal research in this link:\n                            "),a("span",[a("a",{staticStyle:{color:"blue"},attrs:{href:"https://www.semanticscholar.org/paper/Perancangan-User-Interface-Game-Angklung-dengan-Hartanto-Junaedi/90b01e7c59e0aab150a0b87dc1ac3f263f6dc08d"}},[t._v("semanticscholar")])]),a("span",[t._v(" or ")]),a("span",[a("a",{staticStyle:{color:"blue"},attrs:{href:"https://socj.telkomuniversity.ac.id/ojs/index.php/indojc/article/view/273/"}},[t._v("Indo-JC")])])])])]),a("h5",[t._v("(All About Research)")])],1)])])])])])])]),t._m(6),a("div",{staticClass:"col-4"},[a("div",{staticClass:"shadow mb-4 bg-white rounded"},[a("div",{staticClass:"d-flex align-item-center justify-content-center mb-4"},[a("div",{staticClass:"bd-example"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/profile.jpg",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("br"),a("div",{staticClass:"Provile"},[a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg-1",modifiers:{"modal-lg-1":!0}}],attrs:{variant:"light"}},[a("h3",[t._v("Profile")])]),a("b-modal",{attrs:{id:"modal-lg-1",size:"lg",title:"My Profil","hide-header":"","hide-footer":"",scrollable:""}},[a("div",{staticClass:"profil-cv d-flex align-item-center justify-content-center p-2 shadow"},[a("a",{attrs:{href:"a"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/cvweb.png",alt:""}})])])])],1)]),a("h5",[t._v("(All About Profile and CV)")])])])])])])])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"shadow mb-4 bg-white rounded"},[a("div",{staticClass:"d-flex align-item-center justify-content-center mb-4"},[a("div",{staticClass:"bd-example"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/designer.jpg",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("br"),a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-xl-scrollable-1",modifiers:{"modal-xl-scrollable-1":!0}}],attrs:{variant:"light"}},[a("h3",[t._v("Portofolio")])]),a("b-modal",{attrs:{id:"modal-xl-scrollable-1",scrollable:"",size:"xl",title:"Portofolio","hide-header":"","hide-footer":""}},[a("b-container",{staticClass:"container-fluid p-2 bg-white d-flex align-item-center justify-content-center shadow",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/marraka/mr1.png",alt:"Image 1"}})],1),a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/marraka/mr2.png",alt:"Image 2"}})],1),a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/marraka/mr3.png",alt:"Image 3"}})],1)],1)],1),a("b-container",{staticClass:"container-fluid p-2 bg-white d-flex align-item-center justify-content-center shadow",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/NN/NN2.png",alt:"Image 4"}})],1),a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/NN/NN1.png",alt:"Image 5"}})],1),a("b-col",[a("b-img",{staticStyle:{width:"100%"},attrs:{thumbnail:"",fluid:"",src:"/images/NN/NN3.png",alt:"Image 6"}})],1)],1)],1)],1)],1),a("h5",[t._v("(All About Portofolio)")])])])])])])])])])])])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("h5",{staticClass:"flex-fill text-center mt-2"},[t._v("Profil")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("img",{staticStyle:{width:"40px"},attrs:{src:"/images/flag.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",[t._v("Indonesian")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kontak mt-2 d-flex align-item-center justify-content-center"},[a("div",{staticClass:"row "},[a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://github.com/wahyukh1415"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Github.png",alt:""}})])]),a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://dribbble.com/wahyukh1415"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Dribble.png",alt:""}})])]),a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://www.linkedin.com/in/wahyu-kurniawan-hartanto-634823164/"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/linkedin.png",alt:""}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-item-center justify-content-center"},[a("h5",{staticClass:"flex-fill mt-2 ml-1"},[t._v("About me")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Social Media:")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link mt-2",attrs:{href:"https://www.instagram.com/wahyukh1415/"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/Instagram.png",alt:""}})])]),a("li",{staticClass:"nav-item mt-2"},[a("a",{staticClass:"nav-link",attrs:{href:"https://twitter.com/wahyukh1415"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/twitter.png",alt:""}})])]),a("li",{staticClass:"nav-item mt-2"},[a("a",{staticClass:"nav-link",attrs:{href:"hhttps://www.facebook.com/awan.escaperboyz"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"/images/facebook.png",alt:""}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"})])}],h=a("d225"),g=a("308d"),p=a("6bb5"),v=a("4e2b"),f=a("9ab4"),b=a("60a3"),w=function(t){function e(){return Object(h["a"])(this,e),Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(b["b"]);w=Object(f["a"])([b["a"]],w);var y=w,C=y,k=(a("2b2b"),Object(r["a"])(C,m,u,!1,null,"6a3c87da",null)),x=k.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Crud"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],attrs:{type:"hidden"},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||t.$set(t.form,"id",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.updateSubmit,expression:"!updateSubmit"}],attrs:{type:"submit"}},[t._v("add")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.updateSubmit,expression:"updateSubmit"}],attrs:{type:"button"},on:{click:function(e){return t.update(t.form)}}},[t._v("Update")])]),t._l(t.users,(function(e){return a("ul",{key:e.idd},[a("li",[a("span",[t._v(t._s(e.name))]),t._v("  \n    "),a("button",{on:{click:function(a){return t.edit(e)}}},[t._v("Edit")]),t._v(" ||  "),a("button",{on:{click:function(a){return t.del(e)}}},[t._v("Delete")])])])}))],2)},S=[],j=(a("6b54"),a("7514"),a("b0b4")),P=a("bc3a"),I=a.n(P),E=function(t){function e(){var t;return Object(h["a"])(this,e),t=Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.content=[],t}return Object(v["a"])(e,t),Object(j["a"])(e,[{key:"mounted",value:function(){this.find()}},{key:"find",value:function(){var t=this;I.a.get("http://192.168.100.153:8080").then((function(e){var a=e.data;t.content=a.data})).catch((function(t){alert("Something wrong")}))}},{key:"save",value:function(){var t=this,e={content:Date.now().toString()};I.a.post("http://192.168.100.153:8080",e).then((function(e){t.find()})).catch((function(t){alert("Something wrong")}))}},{key:"update",value:function(){var t=this,e={id:1,content:"Hello word"};I.a.put("http://192.168.100.153:8080",e).then((function(e){t.find()})).catch((function(t){alert("Something wrong")}))}},{key:"remove",value:function(){var t=this;I.a.delete("http://192.168.100.153:8080").then((function(e){t.find()})).catch((function(t){alert("Something wrong")}))}}]),e}(b["b"]),N=E,A=Object(r["a"])(N,_,S,!1,null,null,null),U=A.exports;i["default"].use(d["a"]);var O=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:x},{path:"/axios",name:"Axios",component:U},{path:"/Kontak",name:"Kontak",component:function(){return a.e("about").then(a.bind(null,"0442"))}}]}),H=a("5f5b");a("f9e3"),a("2dd8");i["default"].use(H["a"]),i["default"].config.productionTip=!1,new i["default"]({router:O,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.6d6d7ab2.js.map