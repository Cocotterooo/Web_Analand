(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{947:function(e,t,n){"use strict";n.d(t,{Vq:function(){return ec}});var r=n(7294),a=n(3967),o=n.n(a),i=n(7462),c=n(6206),l=n(8771),u=n(5360),s=n(1276),d=n(7342),f=n(8083),p=n(5420),v=n(2651),m=n(9115),g=n(5320),h=n(7552),b=n(6223),y=n(3541),$=n(8426);let E="Dialog",[w,C]=(0,u.b)(E),[S,R]=w(E),k=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=R("DialogTrigger",n),u=(0,l.e)(t,o.triggerRef);return(0,r.createElement)(g.WV.button,(0,i.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(o.open)},a,{ref:u,onClick:(0,c.M)(e.onClick,o.onOpenToggle)}))}),_="DialogPortal",[M,T]=w(_,{forceMount:void 0}),D="DialogOverlay",x=(0,r.forwardRef)((e,t)=>{let n=T(D,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,c=R(D,e.__scopeDialog);return c.modal?(0,r.createElement)(m.z,{present:a||c.open},(0,r.createElement)(O,(0,i.Z)({},o,{ref:t}))):null}),O=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=R(D,n);return(0,r.createElement)(b.Z,{as:$.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,r.createElement)(g.WV.div,(0,i.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(o.open)},a,{ref:t,style:{pointerEvents:"auto",...a.style}})))}),A="DialogContent",N=(0,r.forwardRef)((e,t)=>{let n=T(A,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,c=R(A,e.__scopeDialog);return(0,r.createElement)(m.z,{present:a||c.open},c.modal?(0,r.createElement)(F,(0,i.Z)({},o,{ref:t})):(0,r.createElement)(L,(0,i.Z)({},o,{ref:t})))}),F=(0,r.forwardRef)((e,t)=>{let n=R(A,e.__scopeDialog),a=(0,r.useRef)(null),o=(0,l.e)(t,n.contentRef,a);return(0,r.useEffect)(()=>{let e=a.current;if(e)return(0,y.Ry)(e)},[]),(0,r.createElement)(I,(0,i.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,c.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,c.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,c.M)(e.onFocusOutside,e=>e.preventDefault())}))}),L=(0,r.forwardRef)((e,t)=>{let n=R(A,e.__scopeDialog),a=(0,r.useRef)(!1),o=(0,r.useRef)(!1);return(0,r.createElement)(I,(0,i.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let c=t.target,l=null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(c);l&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),I=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:c,...u}=e,s=R(A,n),d=(0,r.useRef)(null),v=(0,l.e)(t,d);return(0,h.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(p.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:c},(0,r.createElement)(f.XB,(0,i.Z)({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(s.open)},u,{ref:v,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),W="DialogTitle",P=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=R(W,n);return(0,r.createElement)(g.WV.h2,(0,i.Z)({id:o.titleId},a,{ref:t}))}),B=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=R("DialogDescription",n);return(0,r.createElement)(g.WV.p,(0,i.Z)({id:o.descriptionId},a,{ref:t}))}),j=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,o=R("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,i.Z)({type:"button"},a,{ref:t,onClick:(0,c.M)(e.onClick,()=>o.onOpenChange(!1))}))});function $5d3850c4d0b4e6c7$var$getState(e){return e?"open":"closed"}let[Z,z]=(0,u.k)("DialogTitleWarning",{contentName:A,titleName:W,docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:o,onOpenChange:i,modal:c=!0}=e,l=(0,r.useRef)(null),u=(0,r.useRef)(null),[f=!1,p]=(0,d.T)({prop:a,defaultProp:o,onChange:i});return(0,r.createElement)(S,{scope:t,triggerRef:l,contentRef:u,contentId:(0,s.M)(),titleId:(0,s.M)(),descriptionId:(0,s.M)(),open:f,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:c},n)},$5d3850c4d0b4e6c7$export$602eac185826482c=e=>{let{__scopeDialog:t,forceMount:n,children:a,container:o}=e,i=R(_,t);return(0,r.createElement)(M,{scope:t,forceMount:n},r.Children.map(a,e=>(0,r.createElement)(m.z,{present:n||i.open},(0,r.createElement)(v.h,{asChild:!0,container:o},e))))},Y={size:{type:"enum",values:["1","2","3","4"],default:"3",responsive:!0}};var X=n(6776),H=n(3416),V=n(617),K=n(7361),U=n(8291),G=n(6679);H.b.values;let q={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...H.b,default:"bold"},align:V.L,trim:K.a,color:U.m,highContrast:G.B};var Q=n(3843);let J=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,Q.FY)(e),{children:i,className:c,asChild:l=!1,as:u="h1",size:s=q.size.default,weight:d=q.weight.default,align:f=q.align.default,trim:p=q.trim.default,color:v=q.color.default,highContrast:m=q.highContrast.default,...g}=n;return r.createElement($.g7,{"data-accent-color":v,...g,ref:t,className:o()("rt-Heading",c,(0,X.g)(s,"rt-r-size"),(0,X.g)(d,"rt-r-weight"),(0,X.g)(f,"rt-r-ta"),(0,X.g)(p,"rt-r-lt"),{"rt-high-contrast":m},(0,Q.we)(a))},l?i:r.createElement(u,null,i))});J.displayName="Heading";var ee=n(6445),et=n(5722);let DialogRoot=e=>r.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,{...e,modal:!0});DialogRoot.displayName="DialogRoot";let en=r.forwardRef((e,t)=>r.createElement(k,{...e,ref:t,asChild:!0}));en.displayName="DialogTrigger";let er=r.forwardRef((e,t)=>{let{className:n,forceMount:a,container:i,size:c=Y.size.default,...l}=e;return r.createElement($5d3850c4d0b4e6c7$export$602eac185826482c,{container:i,forceMount:a},r.createElement(et.Q2,{asChild:!0},r.createElement(x,{className:"rt-DialogOverlay"},r.createElement(N,{...l,ref:t,className:o()("rt-DialogContent",n,(0,X.g)(c,"rt-r-size"))}))))});er.displayName="DialogContent";let ea=r.forwardRef((e,t)=>r.createElement(P,{asChild:!0},r.createElement(J,{size:"5",mb:"3",trim:"start",...e,ref:t})));ea.displayName="DialogTitle";let eo=r.forwardRef((e,t)=>r.createElement(B,{asChild:!0},r.createElement(ee.x,{as:"p",size:"3",...e,ref:t})));eo.displayName="DialogDescription";let ei=r.forwardRef((e,t)=>r.createElement(j,{...e,ref:t,asChild:!0}));ei.displayName="DialogClose";let ec=Object.assign({},{Root:DialogRoot,Trigger:en,Content:er,Title:ea,Description:eo,Close:ei})},6445:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(7294),a=n(3967),o=n.n(a),i=n(8426),c=n(3356),l=n(3843),u=n(6776);let s=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,l.FY)(e),{children:s,className:d,asChild:f=!1,as:p="span",size:v=c.S.size.default,weight:m=c.S.weight.default,align:g=c.S.align.default,trim:h=c.S.trim.default,color:b=c.S.color.default,highContrast:y=c.S.highContrast.default,...$}=n;return r.createElement(i.g7,{"data-accent-color":b,...$,ref:t,className:o()("rt-Text",d,(0,u.g)(v,"rt-r-size"),(0,u.g)(m,"rt-r-weight"),(0,u.g)(g,"rt-r-ta"),(0,u.g)(h,"rt-r-lt"),{"rt-high-contrast":y},(0,l.we)(a))},f?s:r.createElement(p,null,s))});s.displayName="Text"},3356:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});var r=n(3416),a=n(617),o=n(7361),i=n(8291),c=n(6679);let l={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:r.b,align:a.L,trim:o.a,color:i.m,highContrast:c.B}},6776:function(e,t,n){"use strict";function withBreakpoints(e,t="",n){var r,a,o,i;let c=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let i=null===(r=e[o])||void 0===r?void 0:r.toString(),l=null==i?void 0:i.startsWith("-"),u=""===t?"":"-",s=l?`-${t}`:t,d=l?null==i?void 0:i.substring(1):i;if(void 0===d)continue;let f=null!==(a=null==n?void 0:n[d])&&void 0!==a?a:d,p="initial"===o?`${s}${u}${f}`:`${o}:${s}${u}${f}`;c.push(p)}}if("string"==typeof e){let r=e.startsWith("-"),a=""===t?"":"-",i=r?`-${t}`:t,l=r?e.substring(1):e,u=null!==(o=null==n?void 0:n[l])&&void 0!==o?o:l;c.push(`${i}${a}${u}`)}if("boolean"==typeof e){let r=""===t?"":"-",a=e.toString(),o=null!==(i=null==n?void 0:n[a])&&void 0!==i?i:a;c.push(`${t}${r}${o}`)}return c.join(" ")}n.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(269);let a={type:"enum",values:r.yT.accentColor.values,default:void 0}},6679:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});let r={type:"boolean",default:void 0}},7361:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});let r={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},3843:function(e,t,n){"use strict";n.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var r=n(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],o={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=o.m.default,mx:n=o.mx.default,my:r=o.my.default,mt:a=o.mt.default,mr:i=o.mr.default,mb:c=o.mb.default,ml:l=o.ml.default,...u}=e;return{m:t,mx:n,my:r,mt:a,mr:i,mb:c,ml:l,rest:u}}function withMarginProps(e){return[(0,r.g)(e.m,"rt-r-m"),(0,r.g)(e.mx,"rt-r-mx"),(0,r.g)(e.my,"rt-r-my"),(0,r.g)(e.mt,"rt-r-mt"),(0,r.g)(e.mr,"rt-r-mr"),(0,r.g)(e.mb,"rt-r-mb"),(0,r.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},617:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});let r={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},3416:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});let r={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},3541:function(e,t,n){"use strict";n.d(t,{Ry:function(){return hideOthers}});var r=new WeakMap,a=new WeakMap,o={},i=0,unwrapHost=function(e){return e&&(e.host||unwrapHost(e.parentNode))},applyAttributeToOthers=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=unwrapHost(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});o[n]||(o[n]=new WeakMap);var u=o[n],s=[],d=new Set,f=new Set(l),keep=function(e){!e||d.has(e)||(d.add(e),keep(e.parentNode))};l.forEach(keep);var deep=function(e){!e||f.has(e)||Array.prototype.forEach.call(e.children,function(e){if(d.has(e))deep(e);else try{var t=e.getAttribute(c),o=null!==t&&"false"!==t,i=(r.get(e)||0)+1,l=(u.get(e)||0)+1;r.set(e,i),u.set(e,l),s.push(e),1===i&&o&&a.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return deep(t),d.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,o=u.get(e)-1;r.set(e,t),u.set(e,o),t||(a.has(e)||e.removeAttribute(c),a.delete(e)),o||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,a=new WeakMap,o={})}},hideOthers=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),applyAttributeToOthers(r,a,n,"aria-hidden")):function(){return null}}},5711:function(e,t,n){"use strict";n.d(t,{Z:function(){return createLucideIcon}});var r=n(7294),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:l="",children:u,...s},d)=>(0,r.createElement)("svg",{ref:d,...a,width:o,height:o,stroke:n,strokeWidth:c?24*Number(i)/Number(o):i,className:["lucide",`lucide-${toKebabCase(e)}`,l].join(" "),...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n}},9894:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r.Z)("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},9008:function(e,t,n){e.exports=n(9201)},6223:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r,a,o,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function __spreadArray(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var i=n(7294),c="right-scroll-bar-position",l="width-before-scroll-bar";function assignRef(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}function useCallbackRef(e,t){var n=(0,i.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(value){var r=n.value;r!==value&&(n.value=value,n.callback(value,r))}}}})[0];return n.callback=t,n.facade}var u="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,s=new WeakMap;function useMergeRefs(e,t){var n=useCallbackRef(t||null,function(t){return e.forEach(function(e){return assignRef(e,t)})});return u(function(){var t=s.get(n);if(t){var r=new Set(t),a=new Set(e),o=n.current;r.forEach(function(e){a.has(e)||assignRef(e,null)}),a.forEach(function(e){r.has(e)||assignRef(e,o)})}s.set(n,e)},[e]),n}function ItoI(e){return e}var d=(void 0===r&&(r={}),(a=function innerCreateMedium(e,t){void 0===t&&(t=ItoI);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var a=t(e,r);return n.push(a),function(){n=n.filter(function(e){return e!==a})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var a=n;n=[],a.forEach(e),t=n}var executeQueue=function(){var n=t;t=[],n.forEach(e)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),n={push:function(e){t.push(e),cycle()},filter:function(e){return t=t.filter(e),n}}}}}(null)).options=__assign({async:!0,ssr:!1},r),a),nothing=function(){},f=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),a=r[0],o=r[1],c=e.forwardProps,l=e.children,u=e.className,s=e.removeScrollBar,f=e.enabled,p=e.shards,v=e.sideCar,m=e.noIsolation,g=e.inert,h=e.allowPinchZoom,b=e.as,y=void 0===b?"div":b,$=__rest(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),E=useMergeRefs([n,t]),w=__assign(__assign({},$),a);return i.createElement(i.Fragment,null,f&&i.createElement(v,{sideCar:d,removeScrollBar:s,shards:p,noIsolation:m,inert:g,setCallbacks:o,allowPinchZoom:!!h,lockRef:n}),c?i.cloneElement(i.Children.only(l),__assign(__assign({},w),{ref:E})):i.createElement(y,__assign({},w,{className:u,ref:E}),l))});f.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},f.classNames={fullWidth:l,zeroRight:c};var SideCar=function(e){var t=e.sideCar,n=__rest(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,__assign({},n))};function exportSidecar(e,t){return e.useMedium(t),SideCar}function makeStyleTag(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}function injectStyles(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function insertStyleTag(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}SideCar.isSideCarExport=!0;var stylesheetSingleton=function(){var e=0,t=null;return{add:function(n){0==e&&(t=makeStyleTag())&&(injectStyles(t,n),insertStyleTag(t)),e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},styleHookSingleton=function(){var e=stylesheetSingleton();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},styleSingleton=function(){var e=styleHookSingleton();return function(t){return e(t.styles,t.dynamic),null}},p={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],a=t["padding"===e?"paddingRight":"marginRight"];return[parse(n),parse(r),parse(a)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return p;var t=getOffset(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},v=styleSingleton(),m="data-scroll-locked",getStyles=function(e,t,n,r){var a=e.left,o=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(m,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(m,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},getCurrentUseCounter=function(){var e=parseInt(document.body.getAttribute(m)||"0",10);return isFinite(e)?e:0},useLockAttribute=function(){i.useEffect(function(){return document.body.setAttribute(m,(getCurrentUseCounter()+1).toString()),function(){var e=getCurrentUseCounter()-1;e<=0?document.body.removeAttribute(m):document.body.setAttribute(m,e.toString())}},[])},RemoveScrollBar=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r;useLockAttribute();var o=i.useMemo(function(){return getGapWidth(a)},[a]);return i.createElement(v,{styles:getStyles(o,!t,a,n?"":"!important")})},g=!1;if("undefined"!=typeof window)try{var h=Object.defineProperty({},"passive",{get:function(){return g=!0,!0}});window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch(e){g=!1}var b=!!g&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var r=getScrollVariables(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,a){var o,i=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),c=i*r,l=n.target,u=t.contains(l),s=!1,d=c>0,f=0,p=0;do{var v=getScrollVariables(e,l),m=v[0],g=v[1]-v[2]-i*m;(m||g)&&elementCouldBeScrolled(e,l)&&(f+=g,p+=m),l=l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(a&&0===f||!a&&c>f)?s=!0:!d&&(a&&0===p||!a&&-c>p)&&(s=!0),s},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},y=0,$=[],E=exportSidecar(d,function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(y++)[0],o=i.useState(function(){return styleSingleton()})[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=__spreadArray([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var a,o=getTouchXY(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-o[0],u="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=locationCouldBeScrolled(d,s);if(!f)return!0;if(f?a=d:(a="v"===d?"h":"v",f=locationCouldBeScrolled(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=a),!a)return!0;var p=r.current||a;return handleScroll(p,t,e,"h"===p?l:u,!0)},[]),u=i.useCallback(function(e){if($.length&&$[$.length-1]===o){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var a=(c.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(a.length>0?l(e,a[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,a){var o={name:e,delta:n,target:r,should:a};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),d=i.useCallback(function(e){n.current=getTouchXY(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,getDeltaXY(t),t.target,l(t,e.lockRef.current))},[]),p=i.useCallback(function(t){s(t.type,getTouchXY(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return $.push(o),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",u,b),document.addEventListener("touchmove",u,b),document.addEventListener("touchstart",d,b),function(){$=$.filter(function(e){return e!==o}),document.removeEventListener("wheel",u,b),document.removeEventListener("touchmove",u,b),document.removeEventListener("touchstart",d,b)}},[]);var v=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(o,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,v?i.createElement(RemoveScrollBar,{gapMode:"margin"}):null)}),w=i.forwardRef(function(e,t){return i.createElement(f,__assign({},e,{ref:t,sideCar:E}))});w.classNames=f.classNames;var C=w},7552:function(e,t,n){"use strict";n.d(t,{EW:function(){return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c}});var r=n(7294);let a=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:$3db38b7d1fb3fe6a$var$createFocusGuard()),a++,()=>{1===a&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),a--}},[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},5420:function(e,t,n){"use strict";n.d(t,{M:function(){return d}});var r=n(7462),a=n(7294),o=n(8771),i=n(5320),c=n(9698);let l="focusScope.autoFocusOnMount",u="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:p,onUnmountAutoFocus:v,...m}=e,[g,h]=(0,a.useState)(null),b=(0,c.W)(p),y=(0,c.W)(v),$=(0,a.useRef)(null),E=(0,o.e)(t,e=>h(e)),w=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(d){function handleFocusIn(e){if(w.paused||!g)return;let t=e.target;g.contains(t)?$.current=t:$d3863c46a17e8a28$var$focus($.current,{select:!0})}function handleFocusOut(e){if(w.paused||!g)return;let t=e.relatedTarget;null===t||g.contains(t)||$d3863c46a17e8a28$var$focus($.current,{select:!0})}function handleMutations(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&$d3863c46a17e8a28$var$focus(g)}document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut);let e=new MutationObserver(handleMutations);return g&&e.observe(g,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut),e.disconnect()}}},[d,g,w.paused]),(0,a.useEffect)(()=>{if(g){f.add(w);let e=document.activeElement,t=g.contains(e);if(!t){let t=new CustomEvent(l,s);g.addEventListener(l,b),g.dispatchEvent(t),t.defaultPrevented||($d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(g)),{select:!0}),document.activeElement===e&&$d3863c46a17e8a28$var$focus(g))}return()=>{g.removeEventListener(l,b),setTimeout(()=>{let t=new CustomEvent(u,s);g.addEventListener(u,y),g.dispatchEvent(t),t.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=e?e:document.body,{select:!0}),g.removeEventListener(u,y),f.remove(w)},0)}}},[g,b,y,w]);let C=(0,a.useCallback)(e=>{if(!n&&!d||w.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[a,o]=$d3863c46a17e8a28$var$getTabbableEdges(t),i=a&&o;i?e.shiftKey||r!==o?e.shiftKey&&r===a&&(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(o,{select:!0})):(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(a,{select:!0})):r===t&&e.preventDefault()}},[n,d,w.paused]);return(0,a.createElement)(i.WV.div,(0,r.Z)({tabIndex:-1},m,{ref:E,onKeyDown:C}))});function $d3863c46a17e8a28$var$focusFirst(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if($d3863c46a17e8a28$var$focus(r,{select:t}),document.activeElement!==n)return}function $d3863c46a17e8a28$var$getTabbableEdges(e){let t=$d3863c46a17e8a28$var$getTabbableCandidates(e),n=$d3863c46a17e8a28$var$findVisible(t,e),r=$d3863c46a17e8a28$var$findVisible(t.reverse(),e);return[n,r]}function $d3863c46a17e8a28$var$getTabbableCandidates(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $d3863c46a17e8a28$var$findVisible(e,t){for(let n of e)if(!$d3863c46a17e8a28$var$isHidden(n,{upTo:t}))return n}function $d3863c46a17e8a28$var$isHidden(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function $d3863c46a17e8a28$var$isSelectableInput(e){return e instanceof HTMLInputElement&&"select"in e}function $d3863c46a17e8a28$var$focus(e,{select:t=!1}={}){if(e&&e.focus){let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&$d3863c46a17e8a28$var$isSelectableInput(e)&&t&&e.select()}}let f=$d3863c46a17e8a28$var$createFocusScopesStack();function $d3863c46a17e8a28$var$createFocusScopesStack(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=$d3863c46a17e8a28$var$arrayRemove(e,t)).unshift(t)},remove(t){var n;null===(n=(e=$d3863c46a17e8a28$var$arrayRemove(e,t))[0])||void 0===n||n.resume()}}}function $d3863c46a17e8a28$var$arrayRemove(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}function $d3863c46a17e8a28$var$removeLinks(e){return e.filter(e=>"A"!==e.tagName)}},2729:function(e,t,n){"use strict";function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return _tagged_template_literal}})}}]);