(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{3725:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(7294),o=r(3967),l=r.n(o),a=r(8426);let i={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var s=r(3843),c=r(134),u=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...o}=(0,s.FY)(e),{rest:d,...f}=(0,c.F8)(r),{className:p,asChild:v,display:m=i.display.default,...h}=d,b=v?a.g7:"div";return n.createElement(b,{...h,ref:t,className:l()("rt-Box",p,(0,u.g)(m,"rt-r-display"),(0,c.yt)(f),(0,s.we)(o))})});d.displayName="Box"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var n=r(7294),o=r(3967),l=r.n(o),a=r(8426);let i={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var s=r(3843),c=r(134),u=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...o}=(0,s.FY)(e),{rest:d,...f}=(0,c.F8)(r),{className:p,asChild:v,display:m=i.display.default,direction:h=i.direction.default,align:b=i.align.default,justify:g=i.justify.default,wrap:y=i.wrap.default,gap:w=i.gap.default,...S}=d,E=v?a.g7:"div";return n.createElement(E,{...S,ref:t,className:l()("rt-Flex",p,(0,u.g)(m,"rt-r-display"),(0,u.g)(h,"rt-r-fd"),(0,u.g)(b,"rt-r-ai"),(0,u.g)(g,"rt-r-jc",{between:"space-between"}),(0,u.g)(y,"rt-r-fw"),(0,u.g)(w,"rt-r-gap"),(0,c.yt)(f),(0,s.we)(o))})});d.displayName="Flex"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var n=r(7294),o=r(3967),l=r.n(o),a=r(6445),i=r(3356);let s={size:i.S.size,weight:i.S.weight,trim:i.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:i.S.color,highContrast:i.S.highContrast},c=n.forwardRef((e,t)=>{let{children:r,className:o,asChild:i=!1,underline:c=s.underline.default,...u}=e;return n.createElement(a.x,{...u,ref:t,asChild:!0,className:l()("rt-reset","rt-Link",o,`rt-underline-${c}`)},i?r:n.createElement("a",null,r))});c.displayName="Link"},2574:function(e,t,r){"use strict";r.d(t,{x:function(){return Z}});var n=r(7294),o=r(3967),l=r.n(o),a=r(7462),i=r(5320),s=r(9115),c=r(5360),u=r(8771),d=r(9698),f=r(8990),p=r(9981);function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,[t,r]){return Math.min(r,Math.max(t,e))}var v=r(6206);function $6c2e24571c90391f$export$3e6543de14f8614f(e,t){return(0,n.useReducer)((e,r)=>{let n=t[e][r];return null!=n?n:e},e)}let m="ScrollArea",[h,b]=(0,c.b)(m),[g,y]=h(m),w=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:o="hover",dir:l,scrollHideDelay:s=600,...c}=e,[d,p]=(0,n.useState)(null),[v,m]=(0,n.useState)(null),[h,b]=(0,n.useState)(null),[y,w]=(0,n.useState)(null),[S,E]=(0,n.useState)(null),[x,$]=(0,n.useState)(0),[C,_]=(0,n.useState)(0),[T,R]=(0,n.useState)(!1),[P,k]=(0,n.useState)(!1),L=(0,u.e)(t,e=>p(e)),N=(0,f.gm)(l);return(0,n.createElement)(g,{scope:r,type:o,dir:N,scrollHideDelay:s,scrollArea:d,viewport:v,onViewportChange:m,content:h,onContentChange:b,scrollbarX:y,onScrollbarXChange:w,scrollbarXEnabled:T,onScrollbarXEnabledChange:R,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:P,onScrollbarYEnabledChange:k,onCornerWidthChange:$,onCornerHeightChange:_},(0,n.createElement)(i.WV.div,(0,a.Z)({dir:N},c,{ref:L,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})))}),S=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:o,...l}=e,s=y("ScrollAreaViewport",r),c=(0,n.useRef)(null),d=(0,u.e)(t,c,s.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(i.WV.div,(0,a.Z)({"data-radix-scroll-area-viewport":""},l,{ref:d,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},o)))}),E="ScrollAreaScrollbar",x=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=y(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:s}=l,c="horizontal"===e.orientation;return(0,n.useEffect)(()=>(c?i(!0):s(!0),()=>{c?i(!1):s(!1)}),[c,i,s]),"hover"===l.type?(0,n.createElement)($,(0,a.Z)({},o,{ref:t,forceMount:r})):"scroll"===l.type?(0,n.createElement)(C,(0,a.Z)({},o,{ref:t,forceMount:r})):"auto"===l.type?(0,n.createElement)(_,(0,a.Z)({},o,{ref:t,forceMount:r})):"always"===l.type?(0,n.createElement)(T,(0,a.Z)({},o,{ref:t})):null}),$=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=y(E,e.__scopeScrollArea),[i,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=l.scrollArea,t=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(t),c(!0)},handlePointerLeave=()=>{t=window.setTimeout(()=>c(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[l.scrollArea,l.scrollHideDelay]),(0,n.createElement)(s.z,{present:r||i},(0,n.createElement)(_,(0,a.Z)({"data-state":i?"visible":"hidden"},o,{ref:t})))}),C=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=y(E,e.__scopeScrollArea),i="horizontal"===e.orientation,c=$57acba87d6e25586$var$useDebounceCallback(()=>d("SCROLL_END"),100),[u,d]=$6c2e24571c90391f$export$3e6543de14f8614f("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,l.scrollHideDelay,d]),(0,n.useEffect)(()=>{let e=l.viewport,t=i?"scrollLeft":"scrollTop";if(e){let r=e[t],handleScroll=()=>{let n=e[t],o=r!==n;o&&(d("SCROLL"),c()),r=n};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[l.viewport,i,d,c]),(0,n.createElement)(s.z,{present:r||"hidden"!==u},(0,n.createElement)(T,(0,a.Z)({"data-state":"hidden"===u?"hidden":"visible"},o,{ref:t,onPointerEnter:(0,v.M)(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:(0,v.M)(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),_=(0,n.forwardRef)((e,t)=>{let r=y(E,e.__scopeScrollArea),{forceMount:o,...l}=e,[i,c]=(0,n.useState)(!1),u="horizontal"===e.orientation,d=$57acba87d6e25586$var$useDebounceCallback(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(u?e:t)}},10);return $57acba87d6e25586$var$useResizeObserver(r.viewport,d),$57acba87d6e25586$var$useResizeObserver(r.content,d),(0,n.createElement)(s.z,{present:o||i},(0,n.createElement)(T,(0,a.Z)({"data-state":i?"visible":"hidden"},l,{ref:t})))}),T=(0,n.forwardRef)((e,t)=>{let{orientation:r="vertical",...o}=e,l=y(E,e.__scopeScrollArea),i=(0,n.useRef)(null),s=(0,n.useRef)(0),[c,u]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=$57acba87d6e25586$var$getThumbRatio(c.viewport,c.content),f={...o,sizes:c,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function getScrollPosition(e,t){return $57acba87d6e25586$var$getScrollPositionFromPointer(e,s.current,c,t)}return"horizontal"===r?(0,n.createElement)(R,(0,a.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=l.viewport.scrollLeft,t=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,c,l.dir);i.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=getScrollPosition(e,l.dir))}})):"vertical"===r?(0,n.createElement)(P,(0,a.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=l.viewport.scrollTop,t=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,c);i.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=getScrollPosition(e))}})):null}),R=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=y(E,e.__scopeScrollArea),[s,c]=(0,n.useState)(),d=(0,n.useRef)(null),f=(0,u.e)(t,d,i.onScrollbarXChange);return(0,n.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,n.createElement)(N,(0,a.Z)({"data-orientation":"horizontal"},l,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(s.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingRight)}})}}))}),P=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=y(E,e.__scopeScrollArea),[s,c]=(0,n.useState)(),d=(0,n.useRef)(null),f=(0,u.e)(t,d,i.onScrollbarYChange);return(0,n.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,n.createElement)(N,(0,a.Z)({"data-orientation":"vertical"},l,{ref:f,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(s.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingBottom)}})}}))}),[k,L]=h(E),N=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:o,hasThumb:l,onThumbChange:s,onThumbPointerUp:c,onThumbPointerDown:f,onThumbPositionChange:p,onDragScroll:m,onWheelScroll:h,onResize:b,...g}=e,w=y(E,r),[S,x]=(0,n.useState)(null),$=(0,u.e)(t,e=>x(e)),C=(0,n.useRef)(null),_=(0,n.useRef)(""),T=w.viewport,R=o.content-o.viewport,P=(0,d.W)(h),L=(0,d.W)(p),N=$57acba87d6e25586$var$useDebounceCallback(b,10);function handleDragScroll(e){if(C.current){let t=e.clientX-C.current.left,r=e.clientY-C.current.top;m({x:t,y:r})}}return(0,n.useEffect)(()=>{let handleWheel=e=>{let t=e.target,r=null==S?void 0:S.contains(t);r&&P(e,R)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[T,S,R,P]),(0,n.useEffect)(L,[o,L]),$57acba87d6e25586$var$useResizeObserver(S,N),$57acba87d6e25586$var$useResizeObserver(w.content,N),(0,n.createElement)(k,{scope:r,scrollbar:S,hasThumb:l,onThumbChange:(0,d.W)(s),onThumbPointerUp:(0,d.W)(c),onThumbPositionChange:L,onThumbPointerDown:(0,d.W)(f)},(0,n.createElement)(i.WV.div,(0,a.Z)({},g,{ref:$,style:{position:"absolute",...g.style},onPointerDown:(0,v.M)(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),C.current=S.getBoundingClientRect(),_.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",w.viewport&&(w.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,v.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,v.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=_.current,w.viewport&&(w.viewport.style.scrollBehavior=""),C.current=null})})))}),A="ScrollAreaThumb",O=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=L(A,e.__scopeScrollArea);return(0,n.createElement)(s.z,{present:r||l.hasThumb},(0,n.createElement)(z,(0,a.Z)({ref:t},o)))}),z=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:o,...l}=e,s=y(A,r),c=L(A,r),{onThumbPositionChange:d}=c,f=(0,u.e)(t,e=>c.onThumbChange(e)),p=(0,n.useRef)(),m=$57acba87d6e25586$var$useDebounceCallback(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,n.useEffect)(()=>{let e=s.viewport;if(e){let handleScroll=()=>{if(m(),!p.current){let t=$57acba87d6e25586$var$addUnlinkedScrollListener(e,d);p.current=t,d()}};return d(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[s.viewport,m,d]),(0,n.createElement)(i.WV.div,(0,a.Z)({"data-state":c.hasThumb?"visible":"hidden"},l,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o},onPointerDownCapture:(0,v.M)(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),n=e.clientX-r.left,o=e.clientY-r.top;c.onThumbPointerDown({x:n,y:o})}),onPointerUp:(0,v.M)(e.onPointerUp,c.onThumbPointerUp)}))}),j="ScrollAreaCorner",M=(0,n.forwardRef)((e,t)=>{let r=y(j,e.__scopeScrollArea),o=!!(r.scrollbarX&&r.scrollbarY),l="scroll"!==r.type&&o;return l?(0,n.createElement)(D,(0,a.Z)({},e,{ref:t})):null}),D=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...o}=e,l=y(j,r),[s,c]=(0,n.useState)(0),[u,d]=(0,n.useState)(0);return $57acba87d6e25586$var$useResizeObserver(l.scrollbarX,()=>{var e;let t=(null===(e=l.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;l.onCornerHeightChange(t),d(t)}),$57acba87d6e25586$var$useResizeObserver(l.scrollbarY,()=>{var e;let t=(null===(e=l.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;l.onCornerWidthChange(t),c(t)}),s&&u?(0,n.createElement)(i.WV.div,(0,a.Z)({},o,{ref:t,style:{width:s,height:u,position:"absolute",right:"ltr"===l.dir?0:void 0,left:"rtl"===l.dir?0:void 0,bottom:0,...e.style}})):null});function $57acba87d6e25586$var$toInt(e){return e?parseInt(e,10):0}function $57acba87d6e25586$var$getThumbRatio(e,t){let r=e/t;return isNaN(r)?0:r}function $57acba87d6e25586$var$getThumbSize(e){let t=$57acba87d6e25586$var$getThumbRatio(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function $57acba87d6e25586$var$getScrollPositionFromPointer(e,t,r,n="ltr"){let o=$57acba87d6e25586$var$getThumbSize(r),l=t||o/2,a=r.scrollbar.paddingStart+l,i=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport,c=$57acba87d6e25586$var$linearScale([a,i],"ltr"===n?[0,s]:[-1*s,0]);return c(e)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(e,t,r="ltr"){let n=$57acba87d6e25586$var$getThumbSize(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,a=t.content-t.viewport,i="ltr"===r?[0,a]:[-1*a,0],s=$ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,i),c=$57acba87d6e25586$var$linearScale([0,a],[0,l-n]);return c(s)}function $57acba87d6e25586$var$linearScale(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let $57acba87d6e25586$var$addUnlinkedScrollListener=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function loop(){let o={left:e.scrollLeft,top:e.scrollTop},l=r.left!==o.left,a=r.top!==o.top;(l||a)&&t(),r=o,n=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(n)};function $57acba87d6e25586$var$useDebounceCallback(e,t){let r=(0,d.W)(e),o=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,t)},[r,t])}function $57acba87d6e25586$var$useResizeObserver(e,t){let r=(0,d.W)(t);(0,p.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var I=r(269);let B={type:"enum",values:I.yT.radius.values,default:void 0},W={size:{type:"enum",values:["1","2","3"],default:"1",responsive:!0},radius:B,scrollbars:{type:"enum",values:["vertical","horizontal","both"],default:"both"}};var F=r(3843),U=r(6776);let Z=n.forwardRef((e,t)=>{let{rest:r,...o}=(0,F.FY)(e),{className:a,style:i,type:s,scrollHideDelay:c="scroll"!==s?0:void 0,dir:u,size:d=W.size.default,radius:f=W.radius.default,scrollbars:p=W.scrollbars.default,...v}=r;return n.createElement(w,{type:s,scrollHideDelay:c,className:l()("rt-ScrollAreaRoot",a,(0,F.we)(o)),style:i},n.createElement(S,{...v,ref:t,className:"rt-ScrollAreaViewport"}),n.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),"vertical"!==p?n.createElement(x,{"data-radius":f,orientation:"horizontal",className:l()("rt-ScrollAreaScrollbar",(0,U.g)(d,"rt-r-size"))},n.createElement(O,{className:"rt-ScrollAreaThumb"})):null,"horizontal"!==p?n.createElement(x,{"data-radius":f,orientation:"vertical",className:l()("rt-ScrollAreaScrollbar",(0,U.g)(d,"rt-r-size"))},n.createElement(O,{className:"rt-ScrollAreaThumb"})):null,"both"===p?n.createElement(M,{className:"rt-ScrollAreaCorner"}):null)});Z.displayName="ScrollArea"},6293:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var n=r(7294),o=r(3967),l=r.n(o);let a=n.forwardRef((e,t)=>n.createElement("strong",{...e,ref:t,className:l()("rt-Strong",e.className)}));a.displayName="Strong"},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var n=r(6776);let o=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=i.p.default,px:r=i.px.default,py:n=i.py.default,pt:o=i.pt.default,pr:l=i.pr.default,pb:a=i.pb.default,pl:s=i.pl.default,...c}=e;return{p:t,px:r,py:n,pt:o,pr:l,pb:a,pl:s,rest:c}}function withPaddingProps(e){return[(0,n.g)(e.p,"rt-r-p"),(0,n.g)(e.px,"rt-r-px"),(0,n.g)(e.py,"rt-r-py"),(0,n.g)(e.pt,"rt-r-pt"),(0,n.g)(e.pr,"rt-r-pr"),(0,n.g)(e.pb,"rt-r-pb"),(0,n.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let l=["auto","0","50%","100%"],a=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],i={p:{type:"enum",values:o,default:void 0,responsive:!0},px:{type:"enum",values:o,default:void 0,responsive:!0},py:{type:"enum",values:o,default:void 0,responsive:!0},pt:{type:"enum",values:o,default:void 0,responsive:!0},pr:{type:"enum",values:o,default:void 0,responsive:!0},pb:{type:"enum",values:o,default:void 0,responsive:!0},pl:{type:"enum",values:o,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:l,default:void 0,responsive:!0},top:{type:"enum",values:l,default:void 0,responsive:!0},right:{type:"enum",values:l,default:void 0,responsive:!0},bottom:{type:"enum",values:l,default:void 0,responsive:!0},left:{type:"enum",values:l,default:void 0,responsive:!0},width:{type:"enum",values:a,default:void 0,responsive:!0},height:{type:"enum",values:a,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:n=i.position.default,width:o=i.width.default,height:l=i.height.default,inset:a=i.inset.default,top:s=i.top.default,bottom:c=i.bottom.default,left:u=i.left.default,right:d=i.right.default,shrink:f=i.shrink.default,grow:p=i.grow.default,...v}=t;return{...r,position:n,width:o,height:l,inset:a,top:s,bottom:c,left:u,right:d,shrink:f,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,n.g)(e.position,"rt-r-position"),(0,n.g)(e.shrink,"rt-r-fs"),(0,n.g)(e.grow,"rt-r-fg"),(0,n.g)(e.width,"rt-r-w"),(0,n.g)(e.height,"rt-r-h"),(0,n.g)(e.inset,"rt-r-inset"),(0,n.g)(e.top,"rt-r-top"),(0,n.g)(e.bottom,"rt-r-bottom"),(0,n.g)(e.left,"rt-r-left"),(0,n.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},4297:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var n=r(7294),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:s="",children:c,...u},d)=>(0,n.createElement)("svg",{ref:d,...o,width:l,height:l,stroke:r,strokeWidth:i?24*Number(a)/Number(l):a,className:["lucide",`lucide-${toKebabCase(e)}`,s].join(" "),...u},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},9062:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]])},7246:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]])},443:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},3682:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",l="navigate",a="restore",i="server-patch",s="prefetch",c="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(8754),o=n._(r(7294)),l=r(4450),a=r(2227),i=r(4364),s=r(109),c=r(3607),u=r(1823),d=r(9031),f=r(920),p=r(30),v=r(7192),m=r(7498),h=new Set;function prefetch(e,t,r,n,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(i).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,l,i,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(isModifiedEvent(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:i,locale:c,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};u?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:i,children:h,prefetch:b=null,passHref:g,replace:y,shallow:w,scroll:S,locale:E,onClick:x,onMouseEnter:$,onTouchStart:C,legacyBehavior:_=!1,...T}=e;r=h,_&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=o.default.useContext(u.RouterContext),P=o.default.useContext(d.AppRouterContext),k=null!=R?R:P,L=!R,N=!1!==b,A=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:O,as:z}=o.default.useMemo(()=>{if(!R){let e=formatStringOrUrl(a);return{href:e,as:i?formatStringOrUrl(i):e}}let[e,t]=(0,l.resolveHref)(R,a,!0);return{href:e,as:i?(0,l.resolveHref)(R,i):t||e}},[R,a,i]),j=o.default.useRef(O),M=o.default.useRef(z);_&&(n=o.default.Children.only(r));let D=_?n&&"object"==typeof n&&n.ref:t,[I,B,W]=(0,f.useIntersection)({rootMargin:"200px"}),F=o.default.useCallback(e=>{(M.current!==z||j.current!==O)&&(W(),M.current=z,j.current=O),I(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[z,D,O,W,I]);o.default.useEffect(()=>{k&&B&&N&&prefetch(k,O,z,{locale:E},{kind:A},L)},[z,O,B,E,N,null==R?void 0:R.locale,k,L,A]);let U={ref:F,onClick(e){_||"function"!=typeof x||x(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&linkClicked(e,k,O,z,y,w,S,E,L,N)},onMouseEnter(e){_||"function"!=typeof $||$(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&(N||!L)&&prefetch(k,O,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:A},L)},onTouchStart(e){_||"function"!=typeof C||C(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&(N||!L)&&prefetch(k,O,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:A},L)}};if((0,s.isAbsoluteUrl)(z))U.href=z;else if(!_||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);U.href=t||(0,v.addBasePath)((0,c.addLocale)(z,e,null==R?void 0:R.defaultLocale))}return _?o.default.cloneElement(n,U):o.default.createElement("a",{...T,...U},r)}),g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),l="function"==typeof IntersectionObserver,a=new Map,i=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},i.push(r),a.set(r,t),t}function observe(e,t,r){let{id:n,observer:o,elements:l}=createObserver(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:a}=e,i=a||!l,[s,c]=(0,n.useState)(!1),u=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{u.current=e},[]);(0,n.useEffect)(()=>{if(l){if(i||s)return;let e=u.current;if(e&&e.tagName){let n=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,s,u.current]);let f=(0,n.useCallback)(()=>{c(!1)},[]);return[d,s,f]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5170)},5698:function(e,t,r){"use strict";r.d(t,{z:function(){return p}});var n=r(7294);function useButtonType(e){let[t,r]=(0,n.useState)(!e),o=(0,n.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}var[o,l]=(0,r(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=r(296),i=r(5432),s=r(5893);function ButtonIcon(e){let{children:t,className:r,...o}=e,l=(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,i.cx)("chakra-button__icon",r);return(0,s.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:c,children:l})}ButtonIcon.displayName="ButtonIcon";var c=r(295);function ButtonSpinner(e){let{label:t,placement:r,spacing:o="0.5rem",children:l=(0,s.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:u,__css:d,...f}=e,p=(0,i.cx)("chakra-button__spinner",u),v="start"===r?"marginEnd":"marginStart",m=(0,n.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[v]:t?o:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,v,o]);return(0,s.jsx)(a.m.div,{className:p,...f,__css:m,children:l})}function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,n.useMemo)(()=>mergeRefs(...e),e)}ButtonSpinner.displayName="ButtonSpinner";var u=r(5059),d=r(1628),f=r(3179),p=(0,u.G)((e,t)=>{let r=l(),o=(0,d.mq)("Button",{...r,...e}),{isDisabled:c=null==r?void 0:r.isDisabled,isLoading:u,isActive:p,children:v,leftIcon:m,rightIcon:h,loadingText:b,iconSpacing:g="0.5rem",type:y,spinner:w,spinnerPlacement:S="start",className:E,as:x,...$}=(0,f.Lr)(e),C=(0,n.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!r&&{_focus:e}}},[o,r]),{ref:_,type:T}=useButtonType(x),R={rightIcon:h,leftIcon:m,iconSpacing:g,children:v};return(0,s.jsxs)(a.m.button,{ref:useMergeRefs(t,_),as:x,type:null!=y?y:T,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(u),__css:C,className:(0,i.cx)("chakra-button",E),...$,disabled:c||u,children:[u&&"start"===S&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:g,children:w}),u?b||(0,s.jsx)(a.m.span,{opacity:0,children:(0,s.jsx)(ButtonContent,{...R})}):(0,s.jsx)(ButtonContent,{...R}),u&&"end"===S&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:g,children:w})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:r,children:n,iconSpacing:o}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(ButtonIcon,{marginEnd:o,children:t}),n,r&&(0,s.jsx)(ButtonIcon,{marginStart:o,children:r})]})}p.displayName="Button"},3100:function(e,t,r){"use strict";r.d(t,{xu:function(){return a}});var n=r(296),o=r(5059),l=r(5893),a=(0,n.m)("div");a.displayName="Box";var i=(0,o.G)(function(e,t){let{size:r,centerContent:n=!0,...o}=e;return(0,l.jsx)(a,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});i.displayName="Square",(0,o.G)(function(e,t){let{size:r,...n}=e;return(0,l.jsx)(i,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"},1689:function(e,t,r){"use strict";r.d(t,{C:function(){return c}});var n=r(5059),o=r(1628),l=r(3179),a=r(296),i=r(5432),s=r(5893),c=(0,n.G)(function(e,t){let r=(0,o.mq)("Badge",e),{className:n,...c}=(0,l.Lr)(e);return(0,s.jsx)(a.m.span,{ref:t,className:(0,i.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});c.displayName="Badge"},4641:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var n=r(7073),o=r(5059),l=r(5893),a=(0,o.G)((e,t)=>(0,l.jsx)(n.K,{align:"center",...e,direction:"row",ref:t}));a.displayName="HStack"},1669:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(7073),o=r(5059),l=r(5893),a=(0,o.G)((e,t)=>(0,l.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},7073:function(e,t,r){"use strict";r.d(t,{K:function(){return c}});var n=r(296),o=r(5893),StackItem=e=>(0,o.jsx)(n.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=r(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,l.Kn)(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var a="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[a]:mapResponsive(r,e=>n[e])}}function getDividerStyles(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(r,e=>n[e])}}var i=r(5059),s=r(7294);function getValidChildren(e){return s.Children.toArray(e).filter(e=>(0,s.isValidElement)(e))}var c=(0,i.G)((e,t)=>{let{isInline:r,direction:i,align:c,justify:u,spacing:d="0.5rem",wrap:f,children:p,divider:v,className:m,shouldWrapChildren:h,...b}=e,g=r?"row":null!=i?i:"column",y=(0,s.useMemo)(()=>getStackStyles({direction:g,spacing:d}),[g,d]),w=(0,s.useMemo)(()=>getDividerStyles({spacing:d,direction:g}),[d,g]),S=!!v,E=!h&&!S,x=(0,s.useMemo)(()=>{let e=getValidChildren(p);return E?e:e.map((t,r)=>{let n=void 0!==t.key?t.key:r,l=r+1===e.length,a=(0,o.jsx)(StackItem,{children:t},n),i=h?a:t;if(!S)return i;let c=(0,s.cloneElement)(v,{__css:w});return(0,o.jsxs)(s.Fragment,{children:[i,l?null:c]},n)})},[v,w,S,E,h,p]),$=(0,l.cx)("chakra-stack",m);return(0,o.jsx)(n.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:y.flexDirection,flexWrap:f,className:$,__css:S?{}:{[a]:y[a]},...b,children:x})});c.displayName="Stack"},9564:function(e,t,r){"use strict";r.d(t,{x:function(){return c}});var n=r(5059),o=r(1628),l=r(3179),a=r(296),i=r(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var s=r(5893),c=(0,n.G)(function(e,t){let r=(0,o.mq)("Text",e),{className:n,align:c,decoration:u,casing:d,...f}=(0,l.Lr)(e),p=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(a.m.p,{ref:t,className:(0,i.cx)("chakra-text",e.className),...p,...f,__css:r})});c.displayName="Text"}}]);