parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W2ED":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"Xy56":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.forward_ref"):60112,s=r?Symbol.for("react.suspense"):60113,a=r?Symbol.for("react.memo"):60115,p=r?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}function x(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var S=b.prototype=new x;S.constructor=b,e(S,m.prototype),S.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,n){var o,u={},f=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(f=""+r.key),r)k.call(r,o)&&!$.hasOwnProperty(o)&&(u[o]=r[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:t,type:e,key:f,ref:c,props:u,_owner:_.current}}function w(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function E(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var R=/\/+/g,P=[];function j(e,r,t,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,r,o,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var c=!1;if(null===e)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return o(u,e,""===r?"."+U(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=r+U(f=e[l],l);c+=A(f,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(f=e.next()).done;)c+=A(f=f.value,i=r+U(f,l++),o,u);else if("object"===f)throw o=""+e,Error(d(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return c}function I(e,r,t){return null==e?0:A(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?E(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function F(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,function(e){return e}):null!=e&&(C(e)&&(e=w(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),I(e,F,r=j(r,u,n,o)),O(r)}var M={current:null};function D(){var e=M.current;if(null===e)throw Error(d(321));return e}var V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};exports.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;I(e,q,r=j(null,null,r,t)),O(r)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var r=[];return L(e,r,null,function(e){return e}),r},only:function(e){if(!C(e))throw Error(d(143));return e}},exports.Component=m,exports.Fragment=o,exports.Profiler=f,exports.PureComponent=b,exports.StrictMode=u,exports.Suspense=s,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,exports.cloneElement=function(r,n,o){if(null==r)throw Error(d(267,r));var u=e({},r.props),f=r.key,c=r.ref,l=r._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,l=_.current),void 0!==n.key&&(f=""+n.key),r.type&&r.type.defaultProps)var i=r.type.defaultProps;for(s in n)k.call(n,s)&&!$.hasOwnProperty(s)&&(u[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)u.children=o;else if(1<s){i=Array(s);for(var a=0;a<s;a++)i[a]=arguments[a+2];u.children=i}return{$$typeof:t,type:r.type,key:f,ref:c,props:u,_owner:l}},exports.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:l,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},exports.createElement=g,exports.createFactory=function(e){var r=g.bind(null,e);return r.type=e,r},exports.createRef=function(){return{current:null}},exports.forwardRef=function(e){return{$$typeof:i,render:e}},exports.isValidElement=C,exports.lazy=function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},exports.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},exports.useCallback=function(e,r){return D().useCallback(e,r)},exports.useContext=function(e,r){return D().useContext(e,r)},exports.useDebugValue=function(){},exports.useEffect=function(e,r){return D().useEffect(e,r)},exports.useImperativeHandle=function(e,r,t){return D().useImperativeHandle(e,r,t)},exports.useLayoutEffect=function(e,r){return D().useLayoutEffect(e,r)},exports.useMemo=function(e,r){return D().useMemo(e,r)},exports.useReducer=function(e,r,t){return D().useReducer(e,r,t)},exports.useRef=function(e){return D().useRef(e)},exports.useState=function(e){return D().useState(e)},exports.version="16.14.0";
},{"object-assign":"W2ED"}],"ccIB":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"Xy56"}],"epB2":[function(require,module,exports) {
"use strict";var t=e(require("react"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){var e=c(t,"string");return"symbol"==r(e)?e:e+""}function c(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function f(t,e,r){return e=y(e),a(t,p()?Reflect.construct(e,r||[],y(t).constructor):e.apply(t,r))}function a(t,e){if(e&&("object"==r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(p=function(){return!!t})()}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}function b(t,e){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var d=function(e){function r(){return n(this,r),f(this,r,arguments)}return s(r,t.default.Component),u(r,[{key:"render",value:function(){return t.default.createElement("div",null," Your App injected to DOM correctly! ")}}])}();function m(){var e=document.createElement("div");e.setAttribute("id","chromeExtensionReactApp"),document.body.appendChild(e),ReactDom.createRoot(e).render(t.default.createElement(d,null))}chrome.runtime.onMessage.addListener(function(t,e,r){t.injectApp&&(m(),r({startedExtension:!0}))});
},{"react":"ccIB"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map