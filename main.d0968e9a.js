parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return n(t)||e(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,r){if(t){if("string"==typeof t)return o(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,r):void 0}}function e(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return o(t)}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,e=new Array(r);a<r;a++)e[a]=t[a];return e}var i=document.querySelectorAll("li[data-salary]"),s=document.querySelector("ul");function l(r){t(r).map(function(t){t.dataset.salary=t.dataset.salary.replace(",",".").slice(1)})}function c(r){var a=t(r).sort(function(t,r){return r.dataset.salary-t.dataset.salary});s.append.apply(s,t(a))}function u(r){var a=[],e={};t(r).map(function(t){var r=t.dataset.salary.replace(".",",");t.dataset.salary="$".concat(r)});for(var n=0,o=t(r);n<o.length;n++){var i=o[n];e={name:i.innerText,position:i.dataset.position,salary:i.dataset.salary,age:i.dataset.age},a.push(e)}return a}l(i),c(i),u(i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d0968e9a.js.map