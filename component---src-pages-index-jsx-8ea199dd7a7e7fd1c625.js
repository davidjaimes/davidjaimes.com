(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[230],{2461:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Ve}});var r=t(7294),l=t(5414),i=t(2122),s=t(9756),n=t(5900),o=t.n(n),d=t(9541),c=t(8870),m=t(6132),u=t(9503),f=["bsPrefix","className","variant","as"],v=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.variant,c=e.as,m=void 0===c?"img":c,u=(0,s.Z)(e,f),v=(0,d.vE)(t,"card-img");return r.createElement(m,(0,i.Z)({ref:a,className:o()(n?v+"-"+n:v,l)},u))}));v.displayName="CardImg",v.defaultProps={variant:null};var b=v,p=["bsPrefix","className","bg","text","border","body","children","as"],E=(0,m.Z)("h5"),x=(0,m.Z)("h6"),y=(0,c.Z)("card-body"),N=(0,c.Z)("card-title",{Component:E}),h=(0,c.Z)("card-subtitle",{Component:x}),P=(0,c.Z)("card-link",{Component:"a"}),Z=(0,c.Z)("card-text",{Component:"p"}),w=(0,c.Z)("card-header"),g=(0,c.Z)("card-footer"),C=(0,c.Z)("card-img-overlay"),I=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.bg,c=e.text,m=e.border,f=e.body,v=e.children,b=e.as,E=void 0===b?"div":b,x=(0,s.Z)(e,p),N=(0,d.vE)(t,"card"),h=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return r.createElement(u.Z.Provider,{value:h},r.createElement(E,(0,i.Z)({ref:a},x,{className:o()(l,N,n&&"bg-"+n,c&&"text-"+c,m&&"border-"+m)}),f?r.createElement(y,null,v):v))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=b,I.Title=N,I.Subtitle=h,I.Body=y,I.Link=P,I.Text=Z,I.Header=w,I.Footer=g,I.ImgOverlay=C;var F=I,k=["bsPrefix","className","as"],R=(0,c.Z)("media-body"),L=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,c=void 0===n?"div":n,m=(0,s.Z)(e,k),u=(0,d.vE)(t,"media");return r.createElement(c,(0,i.Z)({},m,{ref:a,className:o()(l,u)}))}));L.displayName="Media",L.Body=R;var S=L,T=["bsPrefix","variant","pill","className","as"],z=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,n=e.pill,c=e.className,m=e.as,u=void 0===m?"span":m,f=(0,s.Z)(e,T),v=(0,d.vE)(t,"badge");return r.createElement(u,(0,i.Z)({ref:a},f,{className:o()(c,v,n&&v+"-pill",l&&v+"-"+l)}))}));z.displayName="Badge",z.defaultProps={pill:!1};var V=z,O=t(5697),j=t.n(O),B=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],M=(j().string,j().bool,j().bool,j().bool,j().bool,r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.fluid,c=e.rounded,m=e.roundedCircle,u=e.thumbnail,f=(0,s.Z)(e,B);t=(0,d.vE)(t,"img");var v=o()(n&&t+"-fluid",c&&"rounded",m&&"rounded-circle",u&&t+"-thumbnail");return r.createElement("img",(0,i.Z)({ref:a},f,{className:o()(l,v)}))})));M.displayName="Image",M.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var q=M,D=t(3201);function H(e){var a=e.post;return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement("hr",null),r.createElement(F,{className:"mt-5 mb-5 border-0 text-dark"},r.createElement(F.Body,{className:"m-0 p-0"},r.createElement(S,null,r.createElement(S.Body,{className:"mb-3"},r.createElement(F.Title,null,r.createElement("a",{href:a.frontmatter.path,className:"text-dark stretched-link"},r.createElement(D.Mp$,{size:25})," ",a.frontmatter.title)),a.frontmatter.badges.map((function(e){return r.createElement(r.Fragment,null,r.createElement(V,{pill:!0,variant:"dark"},e)," ")})),r.createElement(F.Subtitle,{className:"mt-3 text-secondary",style:{fontSize:"11px"}},a.frontmatter.date)),r.createElement(q,{src:a.frontmatter.image.publicURL,rounded:!0,className:"mb-3 border border-dark",width:120,height:90,alt:a.frontmatter.alt})),r.createElement(F.Text,{style:{fontSize:"14px"}},a.excerpt)))))}t(7526);var A=["as","className","type","tooltip"],G=r.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,d=e.type,c=void 0===d?"valid":d,m=e.tooltip,u=void 0!==m&&m,f=(0,s.Z)(e,A);return r.createElement(l,(0,i.Z)({},f,{ref:a,className:o()(n,c+"-"+(u?"tooltip":"feedback"))}))}));G.displayName="Feedback";var U=G,_=r.createContext({controlId:void 0}),J=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],W=r.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,m=e.type,u=void 0===m?"checkbox":m,f=e.isValid,v=void 0!==f&&f,b=e.isInvalid,p=void 0!==b&&b,E=e.isStatic,x=e.as,y=void 0===x?"input":x,N=(0,s.Z)(e,J),h=(0,r.useContext)(_),P=h.controlId,Z=h.custom?[n,"custom-control-input"]:[l,"form-check-input"],w=Z[0],g=Z[1];return l=(0,d.vE)(w,g),r.createElement(y,(0,i.Z)({},N,{ref:a,type:u,id:t||P,className:o()(c,l,v&&"is-valid",p&&"is-invalid",E&&"position-static")}))}));W.displayName="FormCheckInput";var $=W,K=["bsPrefix","bsCustomPrefix","className","htmlFor"],Q=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,c=e.htmlFor,m=(0,s.Z)(e,K),u=(0,r.useContext)(_),f=u.controlId,v=u.custom?[l,"custom-control-label"]:[t,"form-check-label"],b=v[0],p=v[1];return t=(0,d.vE)(b,p),r.createElement("label",(0,i.Z)({},m,{ref:a,htmlFor:c||f,className:o()(n,t)}))}));Q.displayName="FormCheckLabel";var X=Q,Y=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],ee=r.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.inline,m=void 0!==c&&c,u=e.disabled,f=void 0!==u&&u,v=e.isValid,b=void 0!==v&&v,p=e.isInvalid,E=void 0!==p&&p,x=e.feedbackTooltip,y=void 0!==x&&x,N=e.feedback,h=e.className,P=e.style,Z=e.title,w=void 0===Z?"":Z,g=e.type,C=void 0===g?"checkbox":g,I=e.label,F=e.children,k=e.custom,R=e.as,L=void 0===R?"input":R,S=(0,s.Z)(e,Y),T="switch"===C||k,z=T?[n,"custom-control"]:[l,"form-check"],V=z[0],O=z[1];l=(0,d.vE)(V,O);var j=(0,r.useContext)(_).controlId,B=(0,r.useMemo)((function(){return{controlId:t||j,custom:T}}),[j,T,t]),M=T||null!=I&&!1!==I&&!F,q=r.createElement($,(0,i.Z)({},S,{type:"switch"===C?"checkbox":C,ref:a,isValid:b,isInvalid:E,isStatic:!M,disabled:f,as:L}));return r.createElement(_.Provider,{value:B},r.createElement("div",{style:P,className:o()(h,l,T&&"custom-"+C,m&&l+"-inline")},F||r.createElement(r.Fragment,null,q,M&&r.createElement(X,{title:w},I),(b||E)&&r.createElement(U,{type:b?"valid":"invalid",tooltip:y},N))))}));ee.displayName="FormCheck",ee.Input=$,ee.Label=X;var ae=ee,te=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],re=r.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,m=e.isValid,u=e.isInvalid,f=e.lang,v=e.as,b=void 0===v?"input":v,p=(0,s.Z)(e,te),E=(0,r.useContext)(_),x=E.controlId,y=E.custom?[n,"custom-file-input"]:[l,"form-control-file"],N=y[0],h=y[1];return l=(0,d.vE)(N,h),r.createElement(b,(0,i.Z)({},p,{ref:a,id:t||x,type:"file",lang:f,className:o()(c,l,m&&"is-valid",u&&"is-invalid")}))}));re.displayName="FormFileInput";var le=re,ie=["bsPrefix","bsCustomPrefix","className","htmlFor"],se=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,c=e.htmlFor,m=(0,s.Z)(e,ie),u=(0,r.useContext)(_),f=u.controlId,v=u.custom?[l,"custom-file-label"]:[t,"form-file-label"],b=v[0],p=v[1];return t=(0,d.vE)(b,p),r.createElement("label",(0,i.Z)({},m,{ref:a,htmlFor:c||f,className:o()(n,t),"data-browse":m["data-browse"]}))}));se.displayName="FormFileLabel";var ne=se,oe=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],de=r.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,c=e.disabled,m=void 0!==c&&c,u=e.isValid,f=void 0!==u&&u,v=e.isInvalid,b=void 0!==v&&v,p=e.feedbackTooltip,E=void 0!==p&&p,x=e.feedback,y=e.className,N=e.style,h=e.label,P=e.children,Z=e.custom,w=e.lang,g=e["data-browse"],C=e.as,I=void 0===C?"div":C,F=e.inputAs,k=void 0===F?"input":F,R=(0,s.Z)(e,oe),L=Z?[n,"custom"]:[l,"form-file"],S=L[0],T=L[1];l=(0,d.vE)(S,T);var z=(0,r.useContext)(_).controlId,V=(0,r.useMemo)((function(){return{controlId:t||z,custom:Z}}),[z,Z,t]),O=null!=h&&!1!==h&&!P,j=r.createElement(le,(0,i.Z)({},R,{ref:a,isValid:f,isInvalid:b,disabled:m,as:k,lang:w}));return r.createElement(_.Provider,{value:V},r.createElement(I,{style:N,className:o()(y,l,Z&&"custom-file")},P||r.createElement(r.Fragment,null,Z?r.createElement(r.Fragment,null,j,O&&r.createElement(ne,{"data-browse":g},h)):r.createElement(r.Fragment,null,O&&r.createElement(ne,null,h),j),(f||b)&&r.createElement(U,{type:f?"valid":"invalid",tooltip:E},x))))}));de.displayName="FormFile",de.Input=le,de.Label=ne;var ce=de,me=(t(2473),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),ue=r.forwardRef((function(e,a){var t,l,n=e.bsPrefix,c=e.bsCustomPrefix,m=e.type,u=e.size,f=e.htmlSize,v=e.id,b=e.className,p=e.isValid,E=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,h=e.readOnly,P=e.custom,Z=e.as,w=void 0===Z?"input":Z,g=(0,s.Z)(e,me),C=(0,r.useContext)(_).controlId,I=P?[c,"custom"]:[n,"form-control"],F=I[0],k=I[1];if(n=(0,d.vE)(F,k),N)(l={})[n+"-plaintext"]=!0,t=l;else if("file"===m){var R;(R={})[n+"-file"]=!0,t=R}else if("range"===m){var L;(L={})[n+"-range"]=!0,t=L}else if("select"===w&&P){var S;(S={})[n+"-select"]=!0,S[n+"-select-"+u]=u,t=S}else{var T;(T={})[n]=!0,T[n+"-"+u]=u,t=T}return r.createElement(w,(0,i.Z)({},g,{type:m,size:f,ref:a,readOnly:h,id:v||C,className:o()(b,t,E&&"is-valid",y&&"is-invalid")}))}));ue.displayName="FormControl";var fe=Object.assign(ue,{Feedback:U}),ve=["bsPrefix","className","children","controlId","as"],be=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.children,c=e.controlId,m=e.as,u=void 0===m?"div":m,f=(0,s.Z)(e,ve);t=(0,d.vE)(t,"form-group");var v=(0,r.useMemo)((function(){return{controlId:c}}),[c]);return r.createElement(_.Provider,{value:v},r.createElement(u,(0,i.Z)({},f,{ref:a,className:o()(l,t)}),n))}));be.displayName="FormGroup";var pe=be,Ee=t(7408),xe=["as","bsPrefix","column","srOnly","className","htmlFor"],ye=r.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,n=e.bsPrefix,c=e.column,m=e.srOnly,u=e.className,f=e.htmlFor,v=(0,s.Z)(e,xe),b=(0,r.useContext)(_).controlId;n=(0,d.vE)(n,"form-label");var p="col-form-label";"string"==typeof c&&(p=p+" "+p+"-"+c);var E=o()(u,n,m&&"sr-only",c&&p);return f=f||b,c?r.createElement(Ee.Z,(0,i.Z)({ref:a,as:"label",className:E,htmlFor:f},v)):r.createElement(l,(0,i.Z)({ref:a,className:E,htmlFor:f},v))}));ye.displayName="FormLabel",ye.defaultProps={column:!1,srOnly:!1};var Ne=ye,he=["bsPrefix","className","as","muted"],Pe=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,c=void 0===n?"small":n,m=e.muted,u=(0,s.Z)(e,he);return t=(0,d.vE)(t,"form-text"),r.createElement(c,(0,i.Z)({},u,{ref:a,className:o()(l,t,m&&"text-muted")}))}));Pe.displayName="FormText";var Ze=Pe,we=r.forwardRef((function(e,a){return r.createElement(ae,(0,i.Z)({},e,{ref:a,type:"switch"}))}));we.displayName="Switch",we.Input=ae.Input,we.Label=ae.Label;var ge=we,Ce=["bsPrefix","inline","className","validated","as"],Ie=(0,c.Z)("form-row"),Fe=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,c=e.validated,m=e.as,u=void 0===m?"form":m,f=(0,s.Z)(e,Ce);return t=(0,d.vE)(t,"form"),r.createElement(u,(0,i.Z)({},f,{ref:a,className:o()(n,c&&"was-validated",l&&t+"-inline")}))}));Fe.displayName="Form",Fe.defaultProps={inline:!1},Fe.Row=Ie,Fe.Group=pe,Fe.Control=fe,Fe.Check=ae,Fe.File=ce,Fe.Switch=ge,Fe.Label=Ne,Fe.Text=Ze;var ke=Fe,Re=t(6187),Le=t(994),Se=t(428),Te=t(260),ze=t(5216),Ve=function(e){var a=e.data.allMdx.edges,t=(0,r.useState)({filteredPosts:[],query:""}),i=t[0],s=t[1],n=a,o=i.query?i.filteredPosts:n;return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement(l.q,null,r.createElement("html",{lang:"en-us"}),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("meta",{name:"description",content:"Utilization of Data Analysis and Visualization Tools: Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions."}),r.createElement("title",null,"David Jaimes: Husband. Scientist. Trail Runner.")),r.createElement(Te.Z,null),r.createElement(Re.Z,{fluid:!0},r.createElement(Le.Z,{className:"mt-5 justify-content-center ml-0 mr-0"},r.createElement(Ee.Z,{style:{maxWidth:"768px"}},r.createElement("h1",{className:"mt-3"},"Hello there!"),r.createElement("p",{className:"mt-3 mb-5 text-muted"},"Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions."),r.createElement(ke,{className:"d-flex mb-4"},r.createElement(fe,{size:"lg",type:"search",placeholder:"Begin typing to search...",className:"me-2","aria-label":"Search",value:i.query,onChange:function(e){var a=e.target.value,t=n.filter((function(e){var t=e.node.frontmatter,r=t.title,l=t.badges;return e.node.excerpt.toLowerCase().includes(a.toLowerCase())||r.toLowerCase().includes(a.toLowerCase())||l&&l.join("").toLowerCase().includes(a.toLowerCase())}));s({query:a,filteredPosts:t})}})),r.createElement(Se.Z,{variant:"info",className:"mb-4"},o.length," results"),o.map((function(e){return r.createElement(H,{key:e.node.id,post:e.node})})),r.createElement("hr",null)))),r.createElement(ze.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8ea199dd7a7e7fd1c625.js.map