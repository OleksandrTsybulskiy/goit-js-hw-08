!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=a.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,O={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),message:document.querySelector("textarea")},T="feedback-form-state",h={};O.form.addEventListener("input",n((function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),(j=JSON.parse(localStorage.getItem(T)))&&(h=JSON.parse(j)||{},O.input.value=j.email||0,O.message.value=j.message||0),O.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(localStorage.removeItem(T),console.log({email:n.value,message:r.value}),""===O.input.value||""===O.message.value)return void alert("Please, fill in all fields");O.form.reset()}))}();
//# sourceMappingURL=03-feedback.87b79a8d.js.map
