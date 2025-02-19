"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{9205:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:l?24*Number(u)/Number(o):u,className:i("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...c}=n;return(0,r.createElement)(u,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),l),...c})});return n.displayName="".concat(e),n}},2451:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},407:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},2489:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6741:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},8575:function(e,t,n){n.d(t,{F:function(){return i},e:function(){return a}});var r=n(2265);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function a(...e){return r.useCallback(i(...e),e)}},3966:function(e,t,n){n.d(t,{b:function(){return a},k:function(){return i}});var r=n(2265),o=n(7437);function i(e,t){let n=r.createContext(t),i=e=>{let{children:t,...i}=e,a=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:a,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function a(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let a=r.createContext(i),u=n.length;n=[...n,i];let l=t=>{let{scope:n,children:i,...l}=t,c=n?.[e]?.[u]||a,s=r.useMemo(()=>l,Object.values(l));return(0,o.jsx)(c.Provider,{value:s,children:i})};return l.displayName=t+"Provider",[l,function(n,o){let l=o?.[e]?.[u]||a,c=r.useContext(l);if(c)return c;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},2841:function(e,t,n){let r;n.d(t,{x8:function(){return tc},VY:function(){return ta},dk:function(){return tl},aV:function(){return ti},h_:function(){return to},fC:function(){return tn},Dx:function(){return tu},xz:function(){return tr}});var o,i,a,u,l,c,s,d,f=n(2265),p=n(6741),v=n(8575),m=n(3966),h=n(9255),g=n(886),y=n(6840),b=n(6606),E=n(7437),w="dismissableLayer.update",C=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),N=f.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:l,onDismiss:c,...d}=e,m=f.useContext(C),[h,g]=f.useState(null),N=null!==(r=null==h?void 0:h.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,M]=f.useState({}),S=(0,v.e)(t,e=>g(e)),O=Array.from(m.layers),[k]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),D=O.indexOf(k),P=h?O.indexOf(h):-1,L=m.layersWithOutsidePointerEventsDisabled.size>0,T=P>=D,A=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,b.W)(e),o=f.useRef(!1),i=f.useRef(()=>{});return f.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){R("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!T||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},N),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,b.W)(e),o=f.useRef(!1);return f.useEffect(()=>{let e=e=>{e.target&&!o.current&&R("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(null==u||u(e),null==l||l(e),e.defaultPrevented||null==c||c())},N);return!function(e,t=globalThis?.document){let n=(0,b.W)(e);f.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==m.layers.size-1||(null==i||i(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},N),f.useEffect(()=>{if(h)return o&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(s=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(h)),m.layers.add(h),x(),()=>{o&&1===m.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=s)}},[h,N,o,m]),f.useEffect(()=>()=>{h&&(m.layers.delete(h),m.layersWithOutsidePointerEventsDisabled.delete(h),x())},[h,m]),f.useEffect(()=>{let e=()=>M({});return document.addEventListener(w,e),()=>document.removeEventListener(w,e)},[]),(0,E.jsx)(y.WV.div,{...d,ref:S,style:{pointerEvents:L?T?"auto":"none":void 0,...e.style},onFocusCapture:(0,p.M)(e.onFocusCapture,j.onFocusCapture),onBlurCapture:(0,p.M)(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:(0,p.M)(e.onPointerDownCapture,A.onPointerDownCapture)})});function x(){let e=new CustomEvent(w);document.dispatchEvent(e)}function R(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,y.jH)(i,a):i.dispatchEvent(a)}N.displayName="DismissableLayer",f.forwardRef((e,t)=>{let n=f.useContext(C),r=f.useRef(null),o=(0,v.e)(t,r);return f.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,E.jsx)(y.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var M="focusScope.autoFocusOnMount",S="focusScope.autoFocusOnUnmount",O={bubbles:!1,cancelable:!0},k=f.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[u,l]=f.useState(null),c=(0,b.W)(o),s=(0,b.W)(i),d=f.useRef(null),p=(0,v.e)(t,e=>l(e)),m=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(r){let e=function(e){if(m.paused||!u)return;let t=e.target;u.contains(t)?d.current=t:L(d.current,{select:!0})},t=function(e){if(m.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||L(d.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&L(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,m.paused]),f.useEffect(()=>{if(u){T.add(m);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(M,O);u.addEventListener(M,c),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(D(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(u))}return()=>{u.removeEventListener(M,c),setTimeout(()=>{let t=new CustomEvent(S,O);u.addEventListener(S,s),u.dispatchEvent(t),t.defaultPrevented||L(null!=e?e:document.body,{select:!0}),u.removeEventListener(S,s),T.remove(m)},0)}}},[u,c,s,m]);let h=f.useCallback(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=D(e);return[P(t,e),P(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(i,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,m.paused]);return(0,E.jsx)(y.WV.div,{tabIndex:-1,...a,ref:p,onKeyDown:h})});function D(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function P(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}k.displayName="FocusScope";var T=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=A(r,e)).unshift(e)},remove(e){var t;null===(t=(r=A(r,e))[0])||void 0===t||t.resume()}});function A(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var j=n(4887),W=n(1188),I=f.forwardRef((e,t)=>{var n,r;let{container:o,...i}=e,[a,u]=f.useState(!1);(0,W.b)(()=>u(!0),[]);let l=o||a&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return l?j.createPortal((0,E.jsx)(y.WV.div,{...i,ref:t}),l):null});I.displayName="Portal";var F=n(1599),_=0;function B(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function U(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var Z="right-scroll-bar-position",z="width-before-scroll-bar";function $(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,X=new WeakMap,Y=(void 0===o&&(o={}),(void 0===i&&(i=function(e){return e}),a=[],u=!1,l={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=i(e,u);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){u=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=V({async:!0,ssr:!1},o),l),H=function(){},q=f.forwardRef(function(e,t){var n,r,o,i,a=f.useRef(null),u=f.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),l=u[0],c=u[1],s=e.forwardProps,d=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,N=U(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[a,t],r=function(e){return n.forEach(function(t){return $(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,K(function(){var e=X.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||$(e,null)}),r.forEach(function(e){t.has(e)||$(e,o)})}X.set(i,n)},[n]),i),R=V(V({},N),l);return f.createElement(f.Fragment,null,m&&f.createElement(g,{sideCar:Y,removeScrollBar:v,shards:h,noIsolation:y,inert:b,setCallbacks:c,allowPinchZoom:!!E,lockRef:a,gapMode:C}),s?f.cloneElement(f.Children.only(d),V(V({},R),{ref:x})):f.createElement(void 0===w?"div":w,V({},R,{className:p,ref:x}),d))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:z,zeroRight:Z};var G=function(e){var t=e.sideCar,n=U(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,V({},n))};G.isSideCarExport=!0;var J=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=d||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Q=function(){var e=J();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ee=function(){var e=Q();return function(t){return e(t.styles,t.dynamic),null}},et={left:0,top:0,right:0,gap:0},en=function(e){return parseInt(e||"",10)||0},er=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[en(n),en(r),en(o)]},eo=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return et;var t=er(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ei=ee(),ea="data-scroll-locked",eu=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(ea,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(Z," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(z," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(Z," .").concat(Z," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(z," .").concat(z," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ea,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},el=function(){var e=parseInt(document.body.getAttribute(ea)||"0",10);return isFinite(e)?e:0},ec=function(){f.useEffect(function(){return document.body.setAttribute(ea,(el()+1).toString()),function(){var e=el()-1;e<=0?document.body.removeAttribute(ea):document.body.setAttribute(ea,e.toString())}},[])},es=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ec();var i=f.useMemo(function(){return eo(o)},[o]);return f.createElement(ei,{styles:eu(i,!t,o,n?"":"!important")})},ed=!1;if("undefined"!=typeof window)try{var ef=Object.defineProperty({},"passive",{get:function(){return ed=!0,!0}});window.addEventListener("test",ef,ef),window.removeEventListener("test",ef,ef)}catch(e){ed=!1}var ep=!!ed&&{passive:!1},ev=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},em=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eh(e,r)){var o=eg(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eh=function(e,t){return"v"===e?ev(t,"overflowY"):ev(t,"overflowX")},eg=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ey=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=eg(e,l),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&eh(e,l)&&(f+=h,p+=m),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},eb=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eE=function(e){return[e.deltaX,e.deltaY]},ew=function(e){return e&&"current"in e?e.current:e},eC=0,eN=[],ex=(c=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(eC++)[0],i=f.useState(ee)[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ew),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var o,i=eb(e),u=n.current,l="deltaX"in e?e.deltaX:u[0]-i[0],c="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=em(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=em(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return ey(p,t,e,"h"===p?l:c,!0)},[]),l=f.useCallback(function(e){if(eN.length&&eN[eN.length-1]===i){var n="deltaY"in e?eE(e):eb(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(ew).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=f.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),s=f.useCallback(function(e){n.current=eb(e),r.current=void 0},[]),d=f.useCallback(function(t){c(t.type,eE(t),t.target,u(t,e.lockRef.current))},[]),p=f.useCallback(function(t){c(t.type,eb(t),t.target,u(t,e.lockRef.current))},[]);f.useEffect(function(){return eN.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ep),document.addEventListener("touchmove",l,ep),document.addEventListener("touchstart",s,ep),function(){eN=eN.filter(function(e){return e!==i}),document.removeEventListener("wheel",l,ep),document.removeEventListener("touchmove",l,ep),document.removeEventListener("touchstart",s,ep)}},[]);var v=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(es,{gapMode:e.gapMode}):null)},Y.useMedium(c),G),eR=f.forwardRef(function(e,t){return f.createElement(q,V({},e,{ref:t,sideCar:ex}))});eR.classNames=q.classNames;var eM=new WeakMap,eS=new WeakMap,eO={},ek=0,eD=function(e){return e&&(e.host||eD(e.parentNode))},eP=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eD(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eO[n]||(eO[n]=new WeakMap);var i=eO[n],a=[],u=new Set,l=new Set(o),c=function(e){!e||u.has(e)||(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eM.get(e)||0)+1,c=(i.get(e)||0)+1;eM.set(e,l),i.set(e,c),a.push(e),1===l&&o&&eS.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),ek++,function(){a.forEach(function(e){var t=eM.get(e)-1,o=i.get(e)-1;eM.set(e,t),i.set(e,o),t||(eS.has(e)||e.removeAttribute(r),eS.delete(e)),o||e.removeAttribute(n)}),--ek||(eM=new WeakMap,eM=new WeakMap,eS=new WeakMap,eO={})}},eL=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eP(r,o,n,"aria-hidden")):function(){return null}},eT=n(7495),eA="Dialog",[ej,eW]=(0,m.b)(eA),[eI,eF]=ej(eA),e_=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!0}=e,u=f.useRef(null),l=f.useRef(null),[c=!1,s]=(0,g.T)({prop:r,defaultProp:o,onChange:i});return(0,E.jsx)(eI,{scope:t,triggerRef:u,contentRef:l,contentId:(0,h.M)(),titleId:(0,h.M)(),descriptionId:(0,h.M)(),open:c,onOpenChange:s,onOpenToggle:f.useCallback(()=>s(e=>!e),[s]),modal:a,children:n})};e_.displayName=eA;var eB="DialogTrigger",eV=f.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(eB,n),i=(0,v.e)(t,o.triggerRef);return(0,E.jsx)(y.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e4(o.open),...r,ref:i,onClick:(0,p.M)(e.onClick,o.onOpenToggle)})});eV.displayName=eB;var eU="DialogPortal",[eZ,ez]=ej(eU,{forceMount:void 0}),e$=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=eF(eU,t);return(0,E.jsx)(eZ,{scope:t,forceMount:n,children:f.Children.map(r,e=>(0,E.jsx)(F.z,{present:n||i.open,children:(0,E.jsx)(I,{asChild:!0,container:o,children:e})}))})};e$.displayName=eU;var eK="DialogOverlay",eX=f.forwardRef((e,t)=>{let n=ez(eK,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eF(eK,e.__scopeDialog);return i.modal?(0,E.jsx)(F.z,{present:r||i.open,children:(0,E.jsx)(eY,{...o,ref:t})}):null});eX.displayName=eK;var eY=f.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(eK,n);return(0,E.jsx)(eR,{as:eT.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,E.jsx)(y.WV.div,{"data-state":e4(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eH="DialogContent",eq=f.forwardRef((e,t)=>{let n=ez(eH,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eF(eH,e.__scopeDialog);return(0,E.jsx)(F.z,{present:r||i.open,children:i.modal?(0,E.jsx)(eG,{...o,ref:t}):(0,E.jsx)(eJ,{...o,ref:t})})});eq.displayName=eH;var eG=f.forwardRef((e,t)=>{let n=eF(eH,e.__scopeDialog),r=f.useRef(null),o=(0,v.e)(t,n.contentRef,r);return f.useEffect(()=>{let e=r.current;if(e)return eL(e)},[]),(0,E.jsx)(eQ,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,p.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,p.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,p.M)(e.onFocusOutside,e=>e.preventDefault())})}),eJ=f.forwardRef((e,t)=>{let n=eF(eH,e.__scopeDialog),r=f.useRef(!1),o=f.useRef(!1);return(0,E.jsx)(eQ,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eQ=f.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...a}=e,u=eF(eH,n),l=f.useRef(null),c=(0,v.e)(t,l);return f.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:B()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:B()),_++,()=>{1===_&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),_--}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(k,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,E.jsx)(N,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":e4(u.open),...a,ref:c,onDismiss:()=>u.onOpenChange(!1)})}),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(te,{titleId:u.titleId}),(0,E.jsx)(tt,{contentRef:l,descriptionId:u.descriptionId})]})]})}),e0="DialogTitle",e1=f.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e0,n);return(0,E.jsx)(y.WV.h2,{id:o.titleId,...r,ref:t})});e1.displayName=e0;var e2="DialogDescription",e6=f.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e2,n);return(0,E.jsx)(y.WV.p,{id:o.descriptionId,...r,ref:t})});e6.displayName=e2;var e5="DialogClose",e8=f.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e5,n);return(0,E.jsx)(y.WV.button,{type:"button",...r,ref:t,onClick:(0,p.M)(e.onClick,()=>o.onOpenChange(!1))})});function e4(e){return e?"open":"closed"}e8.displayName=e5;var e7="DialogTitleWarning",[e9,e3]=(0,m.k)(e7,{contentName:eH,titleName:e0,docsSlug:"dialog"}),te=e=>{let{titleId:t}=e,n=e3(e7),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return f.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},tt=e=>{let{contentRef:t,descriptionId:n}=e,r=e3("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return f.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},tn=e_,tr=eV,to=e$,ti=eX,ta=eq,tu=e1,tl=e6,tc=e8},9255:function(e,t,n){n.d(t,{M:function(){return l}});var r,o=n(2265),i=n(1188),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function l(e){let[t,n]=o.useState(a());return(0,i.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},1599:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(8575),i=n(1188),a=e=>{var t,n;let a,l;let{present:c,children:s}=e,d=function(e){var t,n;let[o,a]=r.useState(),l=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(l.current);s.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=s.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,i.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(l.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!c.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(s.current=u(l.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(c),f="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),p=(0,o.e)(d.ref,(a=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?f.ref:(a=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof s||d.isPresent?r.cloneElement(f,{ref:p}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},6840:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return l}});var r=n(2265),o=n(4887),i=n(7495),a=n(7437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},7495:function(e,t,n){n.d(t,{g7:function(){return a}});var r=n(2265),o=n(8575),i=n(7437),a=r.forwardRef((e,t)=>{let{children:n,...o}=e,a=r.Children.toArray(n),l=a.find(c);if(l){let e=l.props.children,n=a.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(u,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(u,{...o,ref:t,children:n})});a.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,a;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref,l=function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props);return n.type!==r.Fragment&&(l.ref=t?(0,o.F)(t,u):u),r.cloneElement(n,l)}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return r.isValidElement(e)&&e.type===l}},6606:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},886:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),o=n(6606);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,a=r.useRef(i),u=(0,o.W)(t);return r.useEffect(()=>{a.current!==i&&(u(i),a.current=i)},[i,a,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=u?e:i,c=(0,o.W)(n);return[l,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else a(t)},[u,e,a,c])]}},1188:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);