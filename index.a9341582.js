function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},s=t.parcelRequire2041;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){let t=i[e];delete i[e];let s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){i[e]=t},t.parcelRequire2041=s);var n;s.register("joh2e",(function(e,t){var a,i,s,n,r;a=e.exports,i="getBundleURL",s=()=>r,n=e=>r=e,Object.defineProperty(a,i,{get:s,set:n,enumerable:!0,configurable:!0});var o=null;function d(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return o||(o=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return d(e[0])}return"/"}()),o}})),n=s("joh2e").getBundleURL()+"ultimate-html.86cbcaef.jpg";var r;r=s("joh2e").getBundleURL()+"beginning-cpp.f818a640.jpg";var o;o=s("joh2e").getBundleURL()+"web-developer.8c0d6b90.jpg";var d;d=s("joh2e").getBundleURL()+"complete-javascript.834806d1.jpg";var l;l=s("joh2e").getBundleURL()+"javascript-wired-parts.0db9296d.jpg";var c;c=s("joh2e").getBundleURL()+"advanced-css.87075601.jpg";var g;g=s("joh2e").getBundleURL()+"javascript-advanced.7e135b41.jpg";var u;u=s("joh2e").getBundleURL()+"react-guide.74551698.jpg";var h;h=s("joh2e").getBundleURL()+"responsive-web.2c354b0c.jpg";var v;v=s("joh2e").getBundleURL()+"understanding-typescript.16f37c04.jpg";var p;p=s("joh2e").getBundleURL()+"git-and-github.2637f82f.jpg";const f={ultimateHtml:e(n),beginningCpp:e(r),webDeveloper:e(o),completeJavascript:e(d),javascriptWeirdParts:e(l),advancedCss:e(c),javascriptAdvanced:e(g),reactGuide:e(u),responsiveWeb:e(h),understandingTypescript:e(v),gitAndGithub:e(p)};class m{closeModal(){this.modal.classList.add("modal-hidden")}openModal(){this.modal.classList.remove("modal-hidden")}changeImageSrc(e){this.image.setAttribute("src",e)}configure(){this.modal.addEventListener("click",this.closeModal.bind(this))}constructor(){this.modal=document.querySelector(".modal"),this.image=this.modal.querySelector(".modal__image"),this.configure()}}new class{isOpen(){return"true"===this.nav.getAttribute("aria-expanded")}slideNavItemIn(e,t){setTimeout((()=>{e.style.transform="translateX(0)"}),t)}slideNavItemOut(e,t){setTimeout((()=>{e.style.transform="translateX(100%)"}),t)}toggleNav(){this.isOpen()?(this.nav.setAttribute("aria-expanded","false"),Array.from(this.navItems).reverse().forEach(((e,t)=>{this.slideNavItemOut(e,100*t)})),this.toggleNavBtn.classList.remove("closed")):(this.nav.style.display="block",this.nav.setAttribute("aria-expanded","true"),this.navItems.forEach(((e,t)=>{this.slideNavItemIn(e,100*t)})),this.toggleNavBtn.classList.add("closed"))}configure(){window.matchMedia("(hover: hover)").matches||(this.toggleNavBtn.addEventListener("click",this.toggleNav.bind(this)),this.navItems.forEach((e=>{e.addEventListener("click",(()=>{this.toggleNav()}))})))}constructor(){this.toggleNavBtn=document.getElementById("toggle-nav"),this.nav=document.getElementById("nav"),this.navItems=document.querySelectorAll(".header__list-item"),this.configure()}},new class{openModal(e){if(e.target.classList.contains("certificates__button")){const t=e.target.dataset.img;this.modal.changeImageSrc(this.imgSrcs[t]),this.modal.openModal()}}configure(){this.list.addEventListener("click",this.openModal.bind(this))}constructor(e){this.list=document.querySelector(".certificates__list"),this.imgSrcs=e,this.modal=new m,this.configure()}}(f);
//# sourceMappingURL=index.a9341582.js.map
