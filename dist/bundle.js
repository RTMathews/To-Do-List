(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.header {\n    font-size: 4rem;\n}\n\n#new-proj-btn {\n    font-size: 2rem;\n    margin-top: 1rem;\n}\n\n.current-project {\n    font-size: 4rem;\n}\n\n#new-task-btn {\n    font-size: 2rem;\n    margin-top: 1rem;\n}\n\n.project-modal {\n    display: none;\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-color: gray;\n}\n\n.project-modal-content {\n    background-color: lightgray;\n    margin: 15% auto;\n    border: 1px solid black;\n    width: 80%;\n}\n\n.proj-close-button {\n    color: gray;\n    float: right;\n    font-size: 1rem;\n}\n\n.proj-close-button:hover,\n.proj-close-button:focus {\n    color: black;\n    cursor: pointer;\n}",""]);const i=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),c=t.n(a),i=t(56),s=t.n(i),u=t(540),l=t.n(u),d=t(113),p=t.n(d),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;let v=[];!function(){let e=document.querySelector("#proj-name").value,n=document.querySelector(".proj-confirm"),t=document.querySelector(".project-modal"),r=document.querySelector(".proj-close-btn"),o=document.querySelector(".proj-list");document.querySelector("#new-proj-btn").addEventListener("click",(()=>{t.style.display="block"})),r.addEventListener("click",(()=>{t.style.display="none"})),n.addEventListener("click",(()=>{v.push(e)})),o.innerHTML=v}()})()})();