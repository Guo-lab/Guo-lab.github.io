"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[355],{1355:(e,a,t)=>{t.r(a),t.d(a,{default:()=>te});var r,s=t(5043),o=t(4819),n=t(3519),i=t(1072),l=t(6221),c=t(8628),d=t(8139),m=t.n(d),f=t(3043),u=t(8279),x=t(182),h=t(8260);function p(e){if((!r&&0!==r||e)&&u.A){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),r=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return r}var b=t(2667),y=t(1456),g=t(8293),N=t(9109),j=t(4232),v=t(7169),A=t(5675),w=t(8072),C=t(7852),R=t(579);const T=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:s="div",...o}=e;return r=(0,C.oU)(r,"modal-body"),(0,R.jsx)(s,{ref:a,className:m()(t,r),...o})}));T.displayName="ModalBody";const S=T;var k=t(1602);const B=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,contentClassName:s,centered:o,size:n,fullscreen:i,children:l,scrollable:c,...d}=e;t=(0,C.oU)(t,"modal");const f=`${t}-dialog`,u="string"===typeof i?`${t}-fullscreen-${i}`:`${t}-fullscreen`;return(0,R.jsx)("div",{...d,ref:a,className:m()(f,r,n&&`${t}-${n}`,o&&`${f}-centered`,c&&`${f}-scrollable`,i&&u),children:(0,R.jsx)("div",{className:m()(`${t}-content`,s),children:l})})}));B.displayName="ModalDialog";const E=B,F=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:s="div",...o}=e;return r=(0,C.oU)(r,"modal-footer"),(0,R.jsx)(s,{ref:a,className:m()(t,r),...o})}));F.displayName="ModalFooter";const P=F;var $=t(1833);const U=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,closeLabel:s="Close",closeButton:o=!1,...n}=e;return t=(0,C.oU)(t,"modal-header"),(0,R.jsx)($.A,{ref:a,...n,className:m()(r,t),closeLabel:s,closeButton:o})}));U.displayName="ModalHeader";const I=U;const z=(0,t(4488).A)("h4"),D=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:s=z,...o}=e;return r=(0,C.oU)(r,"modal-title"),(0,R.jsx)(s,{ref:a,className:m()(t,r),...o})}));D.displayName="ModalTitle";const H=D;function O(e){return(0,R.jsx)(w.A,{...e,timeout:null})}function M(e){return(0,R.jsx)(w.A,{...e,timeout:null})}const L=s.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,style:o,dialogClassName:n,contentClassName:i,children:l,dialogAs:c=E,"data-bs-theme":d,"aria-labelledby":w,"aria-describedby":T,"aria-label":S,show:B=!1,animation:F=!0,backdrop:P=!0,keyboard:$=!0,onEscapeKeyDown:U,onShow:I,onHide:z,container:D,autoFocus:H=!0,enforceFocus:L=!0,restoreFocus:W=!0,restoreFocusOptions:_,onEntered:K,onExit:G,onExiting:X,onEnter:q,onEntering:J,onExited:Q,backdropClassName:V,manager:Y,...Z}=e;const[ee,ae]=(0,s.useState)({}),[te,re]=(0,s.useState)(!1),se=(0,s.useRef)(!1),oe=(0,s.useRef)(!1),ne=(0,s.useRef)(null),[ie,le]=(0,b.A)(),ce=(0,g.A)(a,le),de=(0,y.A)(z),me=(0,C.Wz)();t=(0,C.oU)(t,"modal");const fe=(0,s.useMemo)((()=>({onHide:de})),[de]);function ue(){return Y||(0,A.R)({isRTL:me})}function xe(e){if(!u.A)return;const a=ue().getScrollbarWidth()>0,t=e.scrollHeight>(0,x.A)(e).documentElement.clientHeight;ae({paddingRight:a&&!t?p():void 0,paddingLeft:!a&&t?p():void 0})}const he=(0,y.A)((()=>{ie&&xe(ie.dialog)}));(0,N.A)((()=>{(0,h.A)(window,"resize",he),null==ne.current||ne.current()}));const pe=()=>{se.current=!0},be=e=>{se.current&&ie&&e.target===ie.dialog&&(oe.current=!0),se.current=!1},ye=()=>{re(!0),ne.current=(0,j.A)(ie.dialog,(()=>{re(!1)}))},ge=e=>{"static"!==P?oe.current||e.target!==e.currentTarget?oe.current=!1:null==z||z():(e=>{e.target===e.currentTarget&&ye()})(e)},Ne=(0,s.useCallback)((e=>(0,R.jsx)("div",{...e,className:m()(`${t}-backdrop`,V,!F&&"show")})),[F,V,t]),je={...o,...ee};je.display="block";return(0,R.jsx)(k.A.Provider,{value:fe,children:(0,R.jsx)(v.A,{show:B,ref:ce,backdrop:P,container:D,keyboard:!0,autoFocus:H,enforceFocus:L,restoreFocus:W,restoreFocusOptions:_,onEscapeKeyDown:e=>{$?null==U||U(e):(e.preventDefault(),"static"===P&&ye())},onShow:I,onHide:z,onEnter:(e,a)=>{e&&xe(e),null==q||q(e,a)},onEntering:(e,a)=>{null==J||J(e,a),(0,f.Ay)(window,"resize",he)},onEntered:K,onExit:e=>{null==ne.current||ne.current(),null==G||G(e)},onExiting:X,onExited:e=>{e&&(e.style.display=""),null==Q||Q(e),(0,h.A)(window,"resize",he)},manager:ue(),transition:F?O:void 0,backdropTransition:F?M:void 0,renderBackdrop:Ne,renderDialog:e=>(0,R.jsx)("div",{role:"dialog",...e,style:je,className:m()(r,t,te&&`${t}-static`,!F&&"show"),onClick:P?ge:void 0,onMouseUp:be,"data-bs-theme":d,"aria-label":S,"aria-labelledby":w,"aria-describedby":T,children:(0,R.jsx)(c,{...Z,onMouseDown:pe,className:n,contentClassName:i,children:l})})})})}));L.displayName="Modal";const W=Object.assign(L,{Body:S,Header:I,Title:H,Footer:P,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var _=t(4140);const K=s.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:s="primary",size:o,active:n=!1,disabled:i=!1,className:l,...c}=e;const d=(0,C.oU)(r,"btn"),[f,{tagName:u}]=(0,_.Am)({tagName:t,disabled:i,...c}),x=u;return(0,R.jsx)(x,{...f,...c,ref:a,disabled:i,className:m()(l,d,n&&"active",s&&`${d}-${s}`,o&&`${d}-${o}`,c.href&&i&&"disabled")})}));K.displayName="Button";const G=K;var X=t(8023),q=t.n(X),J=t(2919),Q=t(3910),V=t(7929),Y=(t(7660),t(5724)),Z=t(7570),ee=t(6905);const ae={nameStyle:{marginTop:"20px",fontSize:"1em",marginBottom:"0.5em"},mainContainer:{height:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"50px"},introImageContainer:{margin:"50px 0",justifyContent:"center",display:"flex",width:"100%",flexDirection:"column",alignItems:"center",flex:1.4},image:{maxWidth:"100%",maxHeight:"100%",borderRadius:"50%",height:"auto",objectFit:"cover",marginBottom:"0px"},publicationContainer:{margin:"0px 50px 0 10px",flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.0em",fontWeight:500,padding:"10px",flex:3.5},publicationItem:{marginBottom:"30px",padding:"0px",border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#f9f9f9",paddingRight:"0px"},title:{fontSize:"1.3em",fontWeight:"bold",marginBottom:"10px",fontFamily:"Times New Roman, serif"},authors:{fontSize:"1.0em",marginBottom:"10px",fontFamily:"Times New Roman, serif"},venue:{fontSize:"1em",marginBottom:"10px",color:"#555",fontFamily:"Times New Roman, serif"},year:{fontSize:"0.9em",fontFamily:"Arial, sans-serif"},abstract:{fontSize:"0.7em",color:"#333",fontFamily:"Arial, sans-serif"}};const te=function(e){const{header:a}=e,[t,r]=(0,s.useState)(null),[d,m]=(0,s.useState)(null),[f,u]=(0,s.useState)(!1),[x,h]=(0,s.useState)("");(0,s.useEffect)((()=>{fetch(Y.A.home,{method:"GET"}).then((e=>e.json())).then((e=>{console.log("Fetched home data:",e),r(e)})).catch((e=>e)),fetch(Y.A.publications,{method:"GET"}).then((e=>e.json())).then((e=>{console.log("Fetched publications:",e),m(e)})).catch((e=>e)),console.log(d)}),[]);const p=()=>u(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(J.zW,{children:(0,R.jsx)("div",{className:"section-content-container",children:(0,R.jsx)(n.A,{children:t&&d?(0,R.jsxs)(i.A,{children:[(0,R.jsx)(l.A,{style:ae.introImageContainer,children:(0,R.jsxs)("div",{style:{flexDirection:"row"},children:[(0,R.jsx)("img",{src:null===t||void 0===t?void 0:t.imageSource,alt:"profile",style:ae.image}),(0,R.jsxs)("div",{style:ae.mainContainer,children:[(0,R.jsx)("h5",{style:ae.nameStyle,children:null===t||void 0===t?void 0:t.name}),(0,R.jsx)("div",{style:ae.typewriterContainer,children:(0,R.jsx)(q(),{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles,wrapperClassName:"typewriter"}})}),(0,R.jsx)("div",{children:(0,R.jsx)(Z.default,{})})]})]})}),(0,R.jsx)(l.A,{style:ae.publicationContainer,children:d.publications.slice().reverse().map((e=>(0,R.jsx)(c.A,{style:ae.publicationItem,children:(0,R.jsxs)(c.A.Body,{children:[(0,R.jsx)(c.A.Title,{style:ae.title,children:e.title}),(0,R.jsx)(c.A.Subtitle,{style:ae.authors,children:e.authors}),(0,R.jsx)(c.A.Text,{style:ae.venue,children:e.venue}),(0,R.jsxs)(c.A.Text,{style:ae.year,children:[(0,R.jsx)(Q.g,{icon:V.BEE,style:ae.yearIcon}),"\xa0\xa0",e.date]}),(0,R.jsx)(c.A.Text,{style:ae.abstract,children:(0,R.jsx)(o.$,{children:e.abstract})}),(0,R.jsx)(c.A.Link,{href:e.paperurl,target:"_blank",children:"[Paper Link]"}),e.bib&&(0,R.jsx)(c.A.Link,{href:"#",onClick:()=>{return a=e.bib,h(a),void u(!0);var a},children:"[BibTeX]"})]})},e.id)))})]}):(0,R.jsx)(ee.default,{})})})}),(0,R.jsxs)(W,{show:f,onHide:p,children:[(0,R.jsx)(W.Header,{closeButton:!0,children:(0,R.jsx)(W.Title,{children:"BibTeX Entry"})}),(0,R.jsx)(W.Body,{children:(0,R.jsx)("pre",{children:x})}),(0,R.jsx)(W.Footer,{children:(0,R.jsx)(G,{variant:"secondary",onClick:p,children:"Close"})})]})]})}},8628:(e,a,t)=>{t.d(a,{A:()=>E});var r=t(8139),s=t.n(r),o=t(5043),n=t(7852),i=t(579);const l=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o="div",...l}=e;return r=(0,n.oU)(r,"card-body"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));l.displayName="CardBody";const c=l,d=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o="div",...l}=e;return r=(0,n.oU)(r,"card-footer"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));d.displayName="CardFooter";const m=d;var f=t(1778);const u=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,as:l="div",...c}=e;const d=(0,n.oU)(t,"card-header"),m=(0,o.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(f.A.Provider,{value:m,children:(0,i.jsx)(l,{ref:a,...c,className:s()(r,d)})})}));u.displayName="CardHeader";const x=u,h=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,variant:o,as:l="img",...c}=e;const d=(0,n.oU)(t,"card-img");return(0,i.jsx)(l,{ref:a,className:s()(o?`${d}-${o}`:d,r),...c})}));h.displayName="CardImg";const p=h,b=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o="div",...l}=e;return r=(0,n.oU)(r,"card-img-overlay"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));b.displayName="CardImgOverlay";const y=b,g=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o="a",...l}=e;return r=(0,n.oU)(r,"card-link"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));g.displayName="CardLink";const N=g;var j=t(4488);const v=(0,j.A)("h6"),A=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o=v,...l}=e;return r=(0,n.oU)(r,"card-subtitle"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));A.displayName="CardSubtitle";const w=A,C=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o="p",...l}=e;return r=(0,n.oU)(r,"card-text"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));C.displayName="CardText";const R=C,T=(0,j.A)("h5"),S=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:o=T,...l}=e;return r=(0,n.oU)(r,"card-title"),(0,i.jsx)(o,{ref:a,className:s()(t,r),...l})}));S.displayName="CardTitle";const k=S,B=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,bg:o,text:l,border:d,body:m=!1,children:f,as:u="div",...x}=e;const h=(0,n.oU)(t,"card");return(0,i.jsx)(u,{ref:a,...x,className:s()(r,h,o&&`bg-${o}`,l&&`text-${l}`,d&&`border-${d}`),children:m?(0,i.jsx)(c,{children:f}):f})}));B.displayName="Card";const E=Object.assign(B,{Img:p,Title:k,Subtitle:w,Body:c,Link:N,Text:R,Header:x,Footer:m,ImgOverlay:y})}}]);
//# sourceMappingURL=355.765acfd0.chunk.js.map