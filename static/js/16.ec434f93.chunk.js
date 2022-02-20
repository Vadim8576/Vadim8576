(this.webpackJsonpmovie_info=this.webpackJsonpmovie_info||[]).push([[16],{163:function(e,a,t){"use strict";t.r(a);var l=t(20),r=t(0),s=t.n(r),i=t(1),c=t(2),n=t(3),o=t.n(n),m=(t(93),t(5)),d=t.n(m),b={type:d.a.string.isRequired,as:d.a.elementType},u=s.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,r=e.className,n=e.type,m=Object(c.a)(e,["as","className","type"]);return s.a.createElement(l,Object(i.a)({},m,{ref:a,className:o()(r,n&&n+"-feedback")}))}));u.displayName="Feedback",u.propTypes=b,u.defaultProps={type:"valid"};var f=u,v=s.a.createContext({controlId:void 0}),p=t(6),O=s.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,b=e.isInvalid,u=e.isStatic,f=e.as,O=void 0===f?"input":f,j=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(r.useContext)(v),N=x.controlId;return l=x.custom?Object(p.b)(n,"custom-control-input"):Object(p.b)(l,"form-check-input"),s.a.createElement(O,Object(i.a)({},j,{ref:a,id:t||N,className:o()(m,l,d&&"is-valid",b&&"is-invalid",u&&"position-static")}))}));O.displayName="FormCheckInput",O.defaultProps={type:"checkbox"};var j=O,x=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(c.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(r.useContext)(v),u=b.controlId;return t=b.custom?Object(p.b)(l,"custom-control-label"):Object(p.b)(t,"form-check-label"),s.a.createElement("label",Object(i.a)({},d,{ref:a,htmlFor:m||u,className:o()(n,t)}))}));x.displayName="FormCheckLabel";var N=x,y=s.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,d=e.disabled,b=e.isValid,u=e.isInvalid,O=e.feedback,x=e.className,y=e.style,h=e.title,P=e.type,E=e.label,I=e.children,w=e.custom,C=e.as,F=void 0===C?"input":C,k=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),g="switch"===P||w;l=g?Object(p.b)(n,"custom-control"):Object(p.b)(l,"form-check");var R=Object(r.useContext)(v).controlId,V=Object(r.useMemo)((function(){return{controlId:t||R,custom:g}}),[R,g,t]),L=null!=E&&!1!==E&&!I,S=s.a.createElement(j,Object(i.a)({},k,{type:"switch"===P?"checkbox":P,ref:a,isValid:b,isInvalid:u,isStatic:!L,disabled:d,as:F}));return s.a.createElement(v.Provider,{value:V},s.a.createElement("div",{style:y,className:o()(x,l,g&&"custom-"+P,m&&l+"-inline")},I||s.a.createElement(s.a.Fragment,null,S,L&&s.a.createElement(N,{title:h},E),(b||u)&&s.a.createElement(f,{type:b?"valid":"invalid"},O))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=j,y.Label=N;var h=y,P=s.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,b=e.isInvalid,u=e.lang,f=e.as,O=void 0===f?"input":f,j=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(r.useContext)(v),N=x.controlId;return l=x.custom?Object(p.b)(n,"custom-file-input"):Object(p.b)(l,"form-control-file"),s.a.createElement(O,Object(i.a)({},j,{ref:a,id:t||N,type:"file",lang:u,className:o()(m,l,d&&"is-valid",b&&"is-invalid")}))}));P.displayName="FormFileInput";var E=P,I=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(c.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(r.useContext)(v),u=b.controlId;return t=b.custom?Object(p.b)(l,"custom-file-label"):Object(p.b)(t,"form-file-label"),s.a.createElement("label",Object(i.a)({},d,{ref:a,htmlFor:m||u,className:o()(n,t),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var w=I,C=s.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,d=e.isValid,b=e.isInvalid,u=e.feedback,O=e.className,j=e.style,x=e.label,N=e.children,y=e.custom,h=e.lang,P=e["data-browse"],I=e.as,C=void 0===I?"div":I,F=e.inputAs,k=void 0===F?"input":F,g=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]);l=y?Object(p.b)(n,"custom"):Object(p.b)(l,"form-file");var R=Object(r.useContext)(v).controlId,V=Object(r.useMemo)((function(){return{controlId:t||R,custom:y}}),[R,y,t]),L=null!=x&&!1!==x&&!N,S=s.a.createElement(E,Object(i.a)({},g,{ref:a,isValid:d,isInvalid:b,disabled:m,as:k,lang:h}));return s.a.createElement(v.Provider,{value:V},s.a.createElement(C,{style:j,className:o()(O,l,y&&"custom-file")},N||s.a.createElement(s.a.Fragment,null,y?s.a.createElement(s.a.Fragment,null,S,L&&s.a.createElement(w,{"data-browse":P},x)):s.a.createElement(s.a.Fragment,null,L&&s.a.createElement(w,null,x),S),(d||b)&&s.a.createElement(f,{type:d?"valid":"invalid"},u))))}));C.displayName="FormFile",C.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},C.Input=E,C.Label=w;var F=C,k=(t(66),s.a.forwardRef((function(e,a){var t,l,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,b=e.size,u=e.id,f=e.className,O=e.isValid,j=e.isInvalid,x=e.plaintext,N=e.readOnly,y=e.custom,h=e.as,P=void 0===h?"input":h,E=Object(c.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(r.useContext)(v).controlId;if(n=y?Object(p.b)(m,"custom"):Object(p.b)(n,"form-control"),x)(l={})[n+"-plaintext"]=!0,t=l;else if("file"===d){var w;(w={})[n+"-file"]=!0,t=w}else if("range"===d){var C;(C={})[n+"-range"]=!0,t=C}else if("select"===P&&y){var F;(F={})[n+"-select"]=!0,F[n+"-select-"+b]=b,t=F}else{var k;(k={})[n]=!0,k[n+"-"+b]=b,t=k}return s.a.createElement(P,Object(i.a)({},E,{type:d,ref:a,readOnly:N,id:u||I,className:o()(f,t,O&&"is-valid",j&&"is-invalid")}))})));k.displayName="FormControl",k.Feedback=f;var g=k,R=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.children,m=e.controlId,d=e.as,b=void 0===d?"div":d,u=Object(c.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var f=Object(r.useMemo)((function(){return{controlId:m}}),[m]);return s.a.createElement(v.Provider,{value:f},s.a.createElement(b,Object(i.a)({},u,{ref:a,className:o()(l,t)}),n))}));R.displayName="FormGroup";var V=R,L=["xl","lg","md","sm","xs"],S=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,r=e.as,n=void 0===r?"div":r,m=Object(c.a)(e,["bsPrefix","className","as"]),d=Object(p.b)(t,"col"),b=[],u=[];return L.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+d+i:""+d+i+"-"+a),null!=l&&u.push("order"+i+"-"+l),null!=t&&u.push("offset"+i+"-"+t)})),b.length||b.push(d),s.a.createElement(n,Object(i.a)({},m,{ref:a,className:o.a.apply(void 0,[l].concat(b,u))}))}));S.displayName="Col";var _=S,q=s.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,b=e.className,u=e.htmlFor,f=Object(c.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(r.useContext)(v).controlId;n=Object(p.b)(n,"form-label");var j="col-form-label";"string"===typeof m&&(j=j+"-"+m);var x=o()(b,n,d&&"sr-only",m&&j);return u=u||O,m?s.a.createElement(_,Object(i.a)({as:"label",className:x,htmlFor:u},f)):s.a.createElement(l,Object(i.a)({ref:a,className:x,htmlFor:u},f))}));q.displayName="FormLabel",q.defaultProps={column:!1,srOnly:!1};var A=q,T=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,r=e.as,n=void 0===r?"small":r,m=e.muted,d=Object(c.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.b)(t,"form-text"),s.a.createElement(n,Object(i.a)({},d,{ref:a,className:o()(l,t,m&&"text-muted")}))}));T.displayName="FormText";var G=T,M=s.a.forwardRef((function(e,a){return s.a.createElement(h,Object(i.a)({},e,{ref:a,type:"switch"}))}));M.displayName="Switch",M.Input=h.Input,M.Label=h.Label;var z=M,B=t(38),J=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,r=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,b=Object(c.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),s.a.createElement(d,Object(i.a)({},b,{ref:a,className:o()(r,n&&"was-validated",l&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=Object(B.a)("form-row"),J.Group=V,J.Control=g,J.Check=h,J.File=F,J.Switch=z,J.Label=A,J.Text=G;var D=J,W=t(88),H=t(19),K=t(31),Q=function(e){e.request_token,e.getAuth;var a=e.authentication;Object(l.a)(e,["request_token","getAuth","authentication"]);return s.a.createElement(D,{onSubmit:function(e){e.preventDefault(),a({})}},s.a.createElement(D.Group,{controlId:"formBasicEmail"},s.a.createElement(D.Label,null,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),s.a.createElement(D.Control,{type:"username",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),s.a.createElement(D.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),s.a.createElement(D.Group,{controlId:"formBasicPassword"},s.a.createElement(D.Label,null,"\u041f\u0430\u0440\u043e\u043b\u044c"),s.a.createElement(D.Control,{type:"password",placeholder:"Password"})),s.a.createElement(W.a,{variant:"primary",type:"submit"},"\u0412\u043e\u0439\u0442\u0438"))};a.default=Q=Object(H.b)((function(e){return{request_token:e.auth.request_token}}),{getAuth:K.c,authentication:K.a})(Q)}}]);
//# sourceMappingURL=16.ec434f93.chunk.js.map