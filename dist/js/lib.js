var Zepto=function(){function t(t){return null==t?String(t):V[Y.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[c(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=M.createElement(t),M.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?N.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||G(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),G(e[E])&&!G(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==b&&(t[E]=e[E])}function m(t,e){return null==e?T(t):T(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)w(t.childNodes[n],e)}var b,E,T,j,S,C,P=[],N=P.slice,O=P.filter,M=window.document,L={},A={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,_=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,k=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],q=M.createElement("table"),I=M.createElement("tr"),H={tr:M.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:I,th:I,"*":M.createElement("div")},U=/complete|loaded|interactive/,X=/^[\w-]*$/,V={},Y=V.toString,B={},J=M.createElement("div"),W={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return B.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~B.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},B.fragment=function(t,e,n){var i,r,a;return _.test(t)&&(i=T(M.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace($,"<$1></$2>")),e===b&&(e=Z.test(t)&&RegExp.$1),e in H||(e="*"),a=H[e],a.innerHTML=""+t,i=T.each(N.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=T(i),T.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},B.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},B.isZ=function(t){return t instanceof B.Z},B.init=function(t,n){var i;if(!t)return B.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))i=B.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return T(n).find(t);i=B.qsa(M,t)}else{if(e(t))return T(M).ready(t);if(B.isZ(t))return t;if(G(t))i=s(t);else if(r(t))i=[t],t=null;else if(Z.test(t))i=B.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return T(n).find(t);i=B.qsa(M,t)}}return B.Z(i,t)},T=function(t,e){return B.init(t,e)},T.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},B.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=X.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=M.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=G,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},T.camelCase=S,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return O.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(N.apply(this,arguments))},ready:function(t){return U.test(M.readyState)&&M.body?t(T):M.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===b?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(O.call(this,function(e){return B.matches(e,t)}))},add:function(t,e){return T(C(this.concat(T(t,e))))},is:function(t){return this.length>0&&B.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):T(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return r(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return P.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(B.qsa(this[0],t)):this.map(function(){return B.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=T(t));n&&!(r?r.indexOf(n)>=0:B.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)v(this,E,t[E]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=W[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(k,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?x(i):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[S(e)]||r.getPropertyValue(e);if(G(e)){var o={};return T.each(G(e)?e:[e],function(t,e){o[e]=i.style[S(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?a+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){j=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||j.push(t)},this),j.length&&y(this,n+(n?" ":"")+j.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===b?y(this,""):(j=y(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),void y(this,j.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=T(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!R.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(r){var o,a=this[0];return r===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,g(this,r,e,a[t]()))})}}),F.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,r,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:B.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(M.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return T(t).remove();r.insertBefore(t,e),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),B.Z.prototype=T.fn,B.uniq=C,B.deserializeValue=x,T.zepto=B,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==E?"json":w.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?d(e,u,i,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",T="text/html",j=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n);var u=n.dataType,p=/\?.+=\?/.test(n.url);if(p&&(u="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==u)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var d,v=n.accepts[u],y={},x=function(t,e){y[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr(),E=b.setRequestHeader;if(r&&r.promise(b),n.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&x("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)x(g,n.headers[g]);if(b.setRequestHeader=x,b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(d);var e,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==w){u=u||l(n.mimeType||b.getResponseHeader("content-type")),e=b.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=b.responseXML:"json"==u&&(e=j.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",b,n,r):a(e,b,n,r)}else s(b.statusText||null,b.status?"error":"abort",b,n,r)}},o(b,n)===!1)return b.abort(),s(null,"abort",b,n,r),b;if(n.xhrFields)for(g in n.xhrFields)b[g]=n.xhrFields[g];var T="async"in n?n.async:!0;b.open(n.type,n.url,T,n.username,n.password);for(g in y)E.apply(b,y[g]);return n.timeout>0&&(d=setTimeout(function(){b.onreadystatechange=c,b.abort(),s(null,"timeout",b,n,r)},n.timeout)),b.send(n.data?n.data:null),b},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(x,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,g,v,y=0,x=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(v=a(e,"down"))||o(e))&&(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),h.x1=g.pageX,h.y1=g.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(v=a(t,"move"))||o(t))&&(g=v?t:t.touches[0],i(),h.x2=g.pageX,h.y2=g.pageY,y+=Math.abs(h.x1-h.x2),x+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(v=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>x?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=x=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},g=document.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(m,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",y[a=d+"transition-property"]=y[s=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:r===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,g){var x,w,b,E={},T="",j=this,S=t.fx.transitionEnd,C=!1;if(r===e&&(r=t.fx.speeds._default/1e3),g===e&&(g=0),t.fx.off&&(r=0),"string"==typeof i)E[l]=i,E[f]=r+"s",E[p]=g+"s",E[h]=d||"linear",S=t.fx.animationEnd;else{w=[];for(x in i)v.test(x)?T+=x+"("+i[x]+") ":(E[x]=i[x],w.push(n(x)));T&&(E[o]=T,w.push(o)),r>0&&"object"==typeof i&&(E[a]=w.join(", "),E[s]=r+"s",E[c]=g+"s",E[u]=d||"linear")}return b=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,b)}else t(this).unbind(S,b);C=!0,t(this).css(y),m&&m.call(this)},r>0&&(this.bind(S,b),setTimeout(function(){C||b.call(j)},1e3*(r+g)+25)),this.size()&&this.get(0).clientLeft,this.css(E),0>=r&&setTimeout(function(){j.each(function(){b.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function i(e,i,r,o){return n(e,i,0,r,function(){a.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto);
;(function($){
	$.audio=function(){
		var oAudio=$("#audio");
		oAudio[0].play();
		$(".music").addClass('rotate');
		var clickEvent=$.testBrowser().mobile ? 'tap' : 'click';
		$(".music").on(clickEvent,function(){
			if($(this).hasClass('rotate')){
				oAudio[0].pause();
				$("#music-box").addClass('bg-none');
			}
			else{
				oAudio[0].play();
				$("#music-box").removeClass('bg-none');
			}
			$(this).toggleClass('rotate');
		});
	};
})(Zepto);
/*页面的预加载,包括bootstrap,preload,init*/
;(function($) {
	var canvas = $("canvas#pre");
	var proSpan = $("#preNum");
	canvas[0].width = canvas.parent().width();
	canvas[0].height = canvas.parent().height() * 0.2;
	var cnt = canvas[0].getContext("2d");
	var loadCnt = 0,
		progress = 0;
	var preloadTimer = null;
	$.preload = function(imgArr) {
		var len = imgArr.length;
		pre();
		function pre(){
			var img=new Image();
			img.onload=function(){
				if(loadCnt>=len-1){
					loadCnt++;
					progress=Math.floor(loadCnt/len*100);
					$.init();
				}
				else{
					loadCnt++;
					progress=Math.floor(loadCnt/len*100);
					pre();
				}
				proSpan.text([progress,'%'].join(''));
				drawCircle(canvas[0].height/2-8,loadCnt/len*360);
			};
			img.src=imgArr[loadCnt];
		}
	};

	$.init = function() {
		$(".preload").fadeOut(function(){
			$(".preload").remove();
			$(".page").eq(0).addClass('current').fadeIn(function(){
				$("#music-box").fadeIn();
				$.scroll();
			});
		});
	};

	function drawCircle(radio, arc) {
		cnt.clearRect(0,0,canvas[0].width,canvas[0].height);
		cnt.beginPath();
		cnt.strokeStyle = "#ff6b00";
		cnt.lineWidth = 2;
		cnt.arc(canvas[0].width / 2, canvas[0].height / 2, radio, 0, arc * Math.PI / 180);
		cnt.stroke();
	}
})(Zepto);
$(function(){
	var originW=640,
	originH=1026,
	baseFontSize=40;/*等比缩放的文字大小1rem就是当前宽度除以设计图宽度*40得到的*/
	
	centerPage();
	var debounceTimer=null;
	$(window).on('resize',function(){
		clearTimeout(debounceTimer);
		debounceTimer=setTimeout(centerPage,40);
	});
	/*当屏幕宽度大于高度时,保持高度100%,
	当屏幕高度大于宽度时,保持宽度100%
	而另外一个的尺寸则按照设计图的尺寸(640*1026)与当前100%的值进行等比例缩放,
	同时变化的还有html的font-size,html的fontsize是基于scaleWidth的*/
	function centerPage(){
		var originRadio=originW/originH;
		var absHeight=$("#pageList").height();
		var absWidth=$("#pageList").width();
		var absRadio=absWidth/absHeight;
		//计算重置样式,首先保证高度100%,宽度按比例缩放
		var resizeH=absHeight;
		var resizeW=originW*absHeight/originH;
		if(resizeW>=absWidth){//当意识到宽度大于屏幕宽度时,保证宽度100%,高度按比例缩放
			resizeW=absWidth;
			resizeH=originH*absWidth/originW;
		}
		$(".page-inner").css({
			'width':resizeW,
			'height':resizeH,
			'margin-left':-resizeW/2,
			'margin-top':-resizeH/2
		});
		$('html').css('font-size',[baseFontSize*resizeW/originW,'px'].join(''));
	}
});
;(function($){
	$.testBrowser=function(){
			var bw=navigator.userAgent;
			//判断所有移动端
			function isMobile(){
				return /AppleWebKit.*Mobile/i.test(bw) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/i.test(bw);
			}
			//判断是否微信
			function isWeixin(){
				return /MicroMessenger/i.test(bw);
			}

			//判断是否安卓
			function isAndroid(){
				return /Android/i.test(bw);
			}

			//判断是否苹果
			function isIOS(){
				return /iPhone|iPod|iPad/i.test(bw);
			}

			return {
					mobile:isMobile(),
					ios:isIOS(),
					android:isAndroid(),
					weChat:isWeixin()
			};
	};
})(Zepto);
/*自定义swiper事件
这里的swiper事件是基于浏览器的判断
当用户使用的是PC浏览器的时候,使用mouse事件模拟swiper
当用户使用的是移动端浏览器的时候,使用zepto的swiperLeft、swiperRight、swiperUp、swiperDown
*/
;(function($){
		$(document).on('touchmove MSPointerMove pointermove', function(e){
			e.preventDefault();
    });
		//给元素绑定模拟的swiper事件
		$.fn.bindSwiper=function(opt){
			var defaults={
				offset:0.1//滑动偏移量10%
			};
			opt=$.extend(defaults,opt);
			var obj=$(this);
			var w=obj.width(),h=obj.height();
			var startX,startY,endX,endY,disX,dixY;

			obj.on('mousedown',function(e){
				startX=e.clientX;
				startY=e.clientY;
			})
			.on('mousemove',function(e){
				if(e.preventDefault){
					e.preventDefault();
				}
				else{
					e.returnValue=false;
				}
				return false;
			})
			.on('mouseup',function(e){
				endX=e.clientX;
				endY=e.clientY;
				disX=endX-startX;
				disY=endY-startY;
				var arcAngle=Math.atan(disY/disX);/*用+-0.5、判断角度是否过半*/
				if(!isNaN(arcAngle)){
					if(Math.abs(arcAngle)<=0.5){//左右滑屏
						if(disX>=w*opt.offset){//trigger swiperRight
							obj.trigger('swipeRight');
						}
						if(disX<=0 && Math.abs(disX)>w*opt.offset){
							obj.trigger('swipeLeft');
						}
					}
					else{//上下滑屏
						if(disY>=h*opt.offset){
							obj.trigger('swipeDown');	
						}
						if(disY<=0 && Math.abs(disY)>h*opt.offset){
							obj.trigger('swipeUp');
						}
					}
				}
			});
	};
})(Zepto);
/*将scroll注册成插件,可以直接通过$.scroll()调用*/
;(function($){
	$.scroll=function(){
		var $pages=$(".page");
		var len=$pages.length;
		var nxt=0;
		var isSwipe=false;
		if(!$.testBrowser().mobile){/*非移动端,给它绑定模拟touch事件*/
			$pages.bindSwiper();
		}
		/*zepto的animate可以直接使用css3的transform属性,当动画时间设置为0的时候,会直接将css转变为当前属性,而不会产生动画,这一点要注意,不能使用.css()方法来设置*/
		// $pages.animate({'translate3d':'0,100%,0'},0);
		// $(".current").animate({'translate3d':'0,0,0'},0);

		playAnimate( $(".current"),'in');
		$(".current")
		.live('swipeUp',function(){
			var $cur=$(this);
			var preNxt=$(this).index()+1;
			nxt=preNxt > len-1 ? 0 :preNxt;
			if(!$cur.data('disup')){/*根据自定义属性的disup与disdown来判断是否可以滚动*/
				if($cur.data('hasleave')){
					playAnimate($cur,'out',function(){
						swipePage('up');
					});
				}
				else{
					swipePage('up');
				}
			}
		})
		.live('swipeDown',function(){
			$("#arrow").show();
			var $cur=$(this);
			var preNxt=$(this).index()-1;
			nxt=preNxt < 0 ? len-1 : preNxt;
			if(!$cur.data('disdown')){/*根据自定义属性的disup与disdown来判断是否可以滚动*/
				if($cur.data('hasleave')){
					playAnimate($cur,'out',function(){
						swipePage('down');
					});
				}
				else{
					swipePage('down');
				}
			}
		})
		.live('scrollReady',function(){
			var oAni=$(this).find('.ani');
			oAni.length &&
			oAni.css({
				'animation':'',
				'-webkit-animation':''
			}).hide();
			setTimeout(function(){
				$(".current")[0].className='page';
			},50);
		});

		$(".preCurrent")
		.live('scrollReady',function(){
			if($(this).data('disup')){
				$("#arrow").hide();
			}
			playAnimate($(this),'in',function(){
				isSwipe=false;
				setTimeout(function(){
					$(".preCurrent")[0].className='page current';
				},50);
			});
		});

		/*
		滑屏函数
		@obj:当前dom
		@nxt:下一个的索引
		@direc:滑动方向
		*/
		function swipePage(direc){
			if(!isSwipe){
				isSwipe=true;
				switch(direc){
					case 'up':
					$(".current")
					.animate({translate3d:'0,0,0'},0,function(){
						$(this).animate({translate3d:'0,-100%,0'},400);
					});
					$pages.eq(nxt).addClass('preCurrent')
					.animate({translate3d:'0,100%,0'},0,function(){
						$(this).animate({translate3d:'0,0,0'},400,function(){
							$(".current").trigger('scrollReady');
							$(this).trigger('scrollReady');
						});
					});
					break;
					case 'down':
					$(".current")
					.animate({translate3d:'0,0,0'},0,function(){
						$(this).animate({translate3d:'0,100%,0'},400);
					});
					
					$pages.eq(nxt).addClass('preCurrent')
					.animate({translate3d:'0,-100%,0'},0,function(){
						$(this).animate({translate3d:'0,0,0'},400,function(){
							$(".current").trigger('scrollReady');
							$(this).trigger('scrollReady');
						});
					});
					break;
				}
			}
		}

		/*播放动画函数*/
		function playAnimate(obj,inOut,cb){
			var oAnis=$(obj).find('.ani').filter('[data-'+inOut+']');
			var len=oAnis.length;
			var cnt=0;
			oAnis.each(function(idx,ele){
				if($(ele).data(inOut)){
					$(ele).css({
						'-webkit-animation':$(ele).data(inOut),
						'animation':$(ele).data(inOut)
					});
				}
				$(ele).one('webkitAnimationEnd animationend',function(){
					if(cnt>=len-1){
						cb && cb.call();
					}
					else{
						cnt++;
					}
				});
			});
			oAnis.css('display','block');
		}
	};
})(Zepto);