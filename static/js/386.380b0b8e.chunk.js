"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[386],{2554:function(e,t,r){r.d(t,{F4:function(){return l},iv:function(){return i},tZ:function(){return u}});var n=r(2564),a=r(2791),o=(r(2561),r(9140)),u=(r(3361),r(2110),function(e,t){var r=arguments;if(null==t||!n.h.call(t,"css"))return a.createElement.apply(void 0,r);var o=r.length,u=new Array(o);u[0]=n.E,u[1]=(0,n.c)(e,t);for(var i=2;i<o;i++)u[i]=r[i];return a.createElement.apply(null,u)});function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.O)(t)}var l=function(){var e=i.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},948:function(e,t,r){r.d(t,{h3:function(){return T}});var n,a=r(2791);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function u(){}function i(e){return!!(e||"").match(/\d/)}function l(e){return null===e||void 0===e}function s(e){return l(e)||function(e){return"number"===typeof e&&isNaN(e)}(e)||"number"===typeof e&&!isFinite(e)}function c(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function f(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function v(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function d(e,t){return Array(t+1).join(e)}function g(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var u=1+o,i=(a=a.replace(".","")).length;return u<0?a="0."+d("0",Math.abs(u))+a:u>=i?a+=d("0",u-i):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function m(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=f(e),o=a.beforeDecimal,u=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(u||"0")),s=(u.length<=t?"0."+u:l.toFixed(t)).split(".");return""+(i?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0])+(n?".":"")+v(s[1]||"",t,r)}function p(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function h(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}function S(e){return Math.max(e.selectionStart,e.selectionEnd)}function y(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function b(e,t,r,n){var a,o,u,i=e.length;if(a=t,o=0,u=i,t=Math.min(Math.max(a,o),u),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=i&&!r[t];)t++;t>i&&(t=r.lastIndexOf(!0))}return-1===t&&(t=i),t}function w(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(i(e[r])||i(e[r-1]));return t}function x(e,t,r,n,o,i){void 0===i&&(i=u);var c=function(e){var t=(0,a.useRef)(e);t.current=e;var r=(0,a.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e,t){var r,a;return s(e)?(a="",r=""):"number"===typeof e||t?(a="number"===typeof e?g(e):e,r=n(a)):(a=o(e,void 0),r=n(a)),{formattedValue:r,numAsString:a}})),f=(0,a.useState)((function(){return c(l(e)?t:e,r)})),v=f[0],d=f[1],m=e,p=r;l(e)&&(m=v.numAsString,p=!0);var h=c(m,p);return(0,a.useMemo)((function(){d(h)}),[h.formattedValue]),[v,function(e,t){e.formattedValue!==v.formattedValue&&d({formattedValue:e.formattedValue,numAsString:e.value}),i(e,t)}]}function V(e){return e.replace(/[^0-9]/g,"")}function N(e){return e}function O(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var l=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=N);var v=e.removeFormatting;void 0===v&&(v=V);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,y=e.isAllowed,O=e.onChange;void 0===O&&(O=u);var D=e.onKeyDown;void 0===D&&(D=u);var E=e.onMouseUp;void 0===E&&(E=u);var A=e.onFocus;void 0===A&&(A=u);var C=e.onBlur;void 0===C&&(C=u);var T=e.value,B=e.getCaretBoundary;void 0===B&&(B=w);var j=e.isValidInputCharacter;void 0===j&&(j=i);var R=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),k=x(T,d,Boolean(g),f,v,m),I=k[0],F=I.formattedValue,M=I.numAsString,P=k[1],_=(0,a.useRef)({formattedValue:F,numAsString:M}),W=function(e,t){_.current={formattedValue:e.formattedValue,numAsString:e.value},P(e,t)},K=(0,a.useState)(!1),L=K[0],U=K[1],G=(0,a.useRef)(null),Z=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return U(!0),function(){clearTimeout(Z.current.setCaretTimeout),clearTimeout(Z.current.focusTimeout)}}),[]);var $=f,q=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},z=function(e,t,r){0===e.selectionStart&&e.selectionEnd===e.value.length||(p(e,t),Z.current.setCaretTimeout=setTimeout((function(){e.value===r&&e.selectionStart!==e.selectionEnd&&p(e,t)}),0))},H=function(e,t,r){return b(e,t,B(e),r)},J=function(e,t,r){var n=B(t),a=function(e,t,r,n,a,o){var u=h(r,e),i=u.from,l=u.to;if(i.end-i.start===1&&i.end===l.end&&l.end===n)return n;var s=a.findIndex((function(e){return e})),c=e.slice(0,s);t||r.startsWith(c)||(r=c+r,n+=c.length);for(var f=r.length,v=e.length,d={},g=new Array(f),m=0;m<f;m++){g[m]=-1;for(var p=0,S=v;p<S;p++)if(r[m]===e[p]&&!0!==d[p]){g[m]=p,d[p]=!0;break}}for(var y=n;y<f&&(-1===g[y]||!o(r[y]));)y++;var b=y===f||-1===g[y]?v:g[y];for(y=n-1;y>0&&-1===g[y];)y--;var w=-1===y||-1===g[y]?0:g[y]+1;return w>b?b:n-w<b-n?w:b}(t,F,e,r,n,j);return a=b(t,a,n)};(0,a.useEffect)((function(){var e=_.current,t=e.formattedValue,r=e.numAsString;F===t||F===M&&t===r||W(q(F,M),{event:void 0,source:n.props})}),[F,M]);var Q=G.current?S(G.current):void 0;("undefined"!==typeof window?a.useLayoutEffect:a.useEffect)((function(){var e=G.current;if(F!==_.current.formattedValue&&e){var t=J(_.current.formattedValue,F,Q);e.value=F,z(e,t,F)}}),[F]);var X=function(e,t,r){var n=h(F,e),a=Object.assign(Object.assign({},n),{lastValue:F}),o=v(e,a),u=$(o);if(o=v(u,void 0),y&&!y(q(u,o))){var i=t.target,l=S(i),s=J(e,F,l);return i.value=F,z(i,s,F),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,u=e.numAsString,i=e.caretPos;if(r){if(void 0===i&&n){var l=e.inputValue||r.value,s=S(r);r.value=t,i=J(l,t,s)}r.value=t,n&&void 0!==i&&z(r,i,t)}t!==F&&W(q(t,u),{event:o,source:a})}({formattedValue:u,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0},Y=!L||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",ee=Object.assign({inputMode:Y},R,{type:t,value:F,onChange:function(e){var t=e.target.value;X(t,e,n.event)&&O(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,u.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var i=t;if("ArrowLeft"===n||"ArrowRight"===n)(i=H(u,t,"ArrowLeft"===n?"left":"right"))!==t&&e.preventDefault();else"Delete"!==n||j(u[t])?"Backspace"!==n||j(u[t])||(i=H(u,t,"left")):i=H(u,t,"right");i!==t&&z(r,i,u),e.isUnitTestRun&&z(r,i,u),D(e)}else D(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=H(a,r);o!==r&&z(t,o,a)}E(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;G.current=t,Z.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=H(a,r);o===r||0===r&&n===a.length||z(t,o,a),A(e)}),0)},onBlur:function(e){G.current=null,clearTimeout(Z.current.focusTimeout),clearTimeout(Z.current.setCaretTimeout),C(e)}});if("text"===r)return s?a.createElement(a.Fragment,null,s(F,R)||null):a.createElement("span",Object.assign({},R,{ref:c}),F);if(l){var te=l;return a.createElement(te,Object.assign({},ee,{ref:c}))}return a.createElement("input",Object.assign({},ee,{ref:c}))}function D(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var u=t.allowNegative,i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=E(t),s=l.thousandSeparator,c=l.decimalSeparator,d=0!==r&&-1!==e.indexOf(".")||r&&n,g=f(e,u),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=v(p,r,!!n)),s&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,s,i)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(d&&c||"")+p}function E(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function A(e,t,r){var n;void 0===t&&(t=y(e));var a=r.allowNegative,o=r.prefix;void 0===o&&(o="");var u=r.suffix;void 0===u&&(u="");var l=r.decimalScale,s=t.from,v=t.to,d=v.start,g=v.end,m=E(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,S=e[g]===h;if(i(e)&&(e===o||e===u)&&""===t.lastValue)return e;if(g-d===1&&-1!==p.indexOf(e[d])){var b=0===l?"":h;e=e.substring(0,d)+b+e.substring(d+1,e.length)}var w=function(e,t,r){var n=!1,a=!1;o.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):u.startsWith("-")&&e.length===u.length?n=!1:"-"===e[0]&&(n=!0);var i=n?1:0;return a&&(i=2),i&&(e=e.substring(i),t-=i,r-=i),{value:e,start:t,end:r,hasNegation:n}},x=w(e,d,g),V=x.hasNegation;e=(n=x).value,d=n.start,g=n.end;var N=w(t.lastValue,s.start,s.end),O=N.start,D=N.end,A=N.value,C=e.substring(d,g);!(e.length&&A.length&&(O>A.length-u.length||D<o.length))||C&&u.startsWith(C)||(e=A);var T=0;e.startsWith(o)?T+=o.length:d<o.length&&(T=d),g-=T;var B=(e=e.substring(T)).length,j=e.length-u.length;e.endsWith(u)?B=j:(g>j||g>e.length-u.length)&&(B=g),e=e.substring(0,B),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(V?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+c(e),t?"g":void 0)}(h,!0))||[]).join("");var R=e.indexOf(h),k=f(e=e.replace(new RegExp(c(h),"g"),(function(e,t){return t===R?".":""})),a),I=k.beforeDecimal,F=k.afterDecimal,M=k.addNegation;return v.end-v.start<s.end-s.start&&""===I&&S&&!parseFloat(F)&&(e=M?"-":""),e}function C(e){e=function(e){var t=E(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(e);var t=e.decimalSeparator;void 0===t&&(t=".");e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,c=e.allowLeadingZeros,f=e.onKeyDown;void 0===f&&(f=u);var v=e.onBlur;void 0===v&&(v=u);var d=e.thousandSeparator,h=e.decimalScale,S=e.fixedDecimalScale,y=e.prefix;void 0===y&&(y="");var b=e.defaultValue,w=e.value,V=e.valueIsNumericString,N=e.onValueChange,O=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),C=function(t){return D(t,e)},T=function(t,r){return A(t,r,e)},B=l(w)?b:w,j=null!==V&&void 0!==V?V:function(e,t,r){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&!(null===r||void 0===r?void 0:r.match(/\d/))&&"string"===typeof e&&!isNaN(Number(e))}(B,y,r);l(w)?l(b)||(j=V||"number"===typeof b):j=V||"number"===typeof w;var R=function(e){return s(e)?e:("number"===typeof e&&(e=g(e)),j&&"number"===typeof h?m(e,h,Boolean(S)):e)},k=x(R(w),R(b),Boolean(j),C,T,N),I=k[0],F=I.numAsString,M=I.formattedValue,P=k[1];return Object.assign(Object.assign({},O),{value:M,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===t||i(e)},onValueChange:P,format:C,removeFormatting:T,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}(t,e)},onKeyDown:function(t){var r=t.target,n=t.key,o=r.selectionStart,u=r.selectionEnd,i=r.value;if(void 0===i&&(i=""),o===u){"Backspace"===n&&"-"===i[0]&&o===y.length+1&&a&&p(r,1);var l=E(e),s=l.decimalSeparator,c=l.allowedDecimalSeparators;"Backspace"===n&&i[o-1]===s&&h&&S&&(p(r,o-1),t.preventDefault()),(null===c||void 0===c?void 0:c.includes(n))&&i[o]===s&&p(r,o+1);var v=!0===d?",":d;"Backspace"===n&&i[o-1]===v&&p(r,o-1),"Delete"===n&&i[o]===v&&p(r,o+1),f(t)}else f(t)},onBlur:function(t){var r=F;if(r.match(/\d/g)||(r=""),c||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),S&&h&&(r=m(r,h,S)),r!==F){var a=D(r,e);P({formattedValue:a,value:r,floatValue:parseFloat(r)},{event:t,source:n.event})}v(t)}})}function T(e){var t=C(e);return a.createElement(O,Object.assign({},t))}!function(e){e.event="event",e.props="prop"}(n||(n={}))}}]);
//# sourceMappingURL=386.380b0b8e.chunk.js.map