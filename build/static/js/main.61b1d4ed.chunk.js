(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},103:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(100),a(30)),o=a.n(i),u=a(41),s=a(12),m=(a(102),a(103),a(13));a(53);function d(){return l.a.createElement("div",null)}var p=a(146),h=a(150),E=a(151),f=a(164),v=a(156),b=a(162),y=a(27),g=a.n(y),x=g.a.initializeApp({apiKey:"AIzaSyBNNxfF9iveJTKICgukGUwxCsO8cmtLKQE",authDomain:"kumos-f4d9a.firebaseapp.com",databaseURL:"https://kumos-f4d9a.firebaseio.com",projectId:"kumos-f4d9a",storageBucket:"kumos-f4d9a.appspot.com",messagingSenderId:"1044651688607",appId:"1:1044651688607:web:639eb44d36faf9773e98aa",measurementId:"G-75LT4EWR1Z"}),O=g.a.apps.length?g.a.app():x;a(76);function j(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),d=i[0],y=i[1],g=Object(n.useState)(""),x=Object(s.a)(g,2),j=x[0],C=x[1],S=Object(m.h)(),w=O.auth(),T=Object(m.g)();function k(){return(k=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),C(""),e.prev=2,e.next=5,w.signInWithEmailAndPassword(a,d);case 5:"/admin/login"===S.pathname?T.push("/admin"):T.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message),"The email address is already in use by another account."===e.t0.message&&C("email already in use.");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"}},l.a.createElement(p.a,{style:{display:"flex",width:"fit-content"}},l.a.createElement(h.a,null,l.a.createElement(E.a,{color:"black",title:"Log In"}),l.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:function(e){return k.apply(this,arguments)}},l.a.createElement(f.a,{id:"email",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",label:"Email",style:{margin:"10px"},autoComplete:"off"}),l.a.createElement(f.a,{id:"password",type:"password",value:d,onChange:function(e){return y(e.target.value)},variant:"outlined",label:"Password",style:{margin:"10px"}}),j?l.a.createElement(b.a,{severity:"error",style:{margin:"10px",fontSize:"10px",height:"15px"}},j):l.a.createElement(b.a,{severity:"error",style:{display:"none",margin:"10px"}},"Failed"),l.a.createElement(v.a,{variant:"outlined",type:"submit",style:{margin:"10px"}},"Log In")))))}var C=a(163),S=a(157),w=a(161);function T(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),d=i[0],y=i[1],x=Object(n.useState)(""),j=Object(s.a)(x,2),T=j[0],k=j[1],A=Object(n.useState)(""),R=Object(s.a)(A,2),I=R[0],N=R[1],F=Object(n.useState)(""),P=Object(s.a)(F,2),M=P[0],L=P[1],U=Object(n.useState)(""),B=Object(s.a)(U,2),W=B[0],z=B[1],G=Object(n.useState)(""),D=Object(s.a)(G,2),H=D[0],Y=D[1],J=Object(n.useState)("company"),K=Object(s.a)(J,2),Z=K[0],_=K[1],Q=g.a.database(),X=g.a.firestore(),$=O.auth(),q=Object(m.g)();function V(){return(V=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),L("");try{Q.ref("authCode").child(Z).once("value").then((function(e){e.forEach((function(e){if("technician"===Z)e.key===H&&e.val()===d&&($.createUserWithEmailAndPassword(d,T).then((function(e){return $.currentUser.updateProfile({displayName:a})})),$.onAuthStateChanged((function(e){if(e){var t=X.collection("Technicians").doc(e.uid),n={name:a,email:d,phone:I};t.set(n),Q.ref("authCode").child(Z).child(H).remove(),q.push("/")}})));else{var t=e.key;e.forEach(function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.key!==H||n.val()!==d){e.next=4;break}return $.createUserWithEmailAndPassword(d,T),e.next=4,$.onAuthStateChanged((function(e){if(e){var n=X.collection("Companies").doc(t),l={name:a,email:d,phone:I};console.log(l),n.get().then((function(t){t.exists&&n.collection("User").doc(e.uid).set(l)})),Q.ref("authCode").child(Z).child(t).child(H).remove(),q.push("/")}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}))}))}catch(n){console.log(n),"The email address is already in use by another account."===n.message&&L("email already in use.")}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}},l.a.createElement(p.a,{style:{display:"flex",width:"fit-content"}},l.a.createElement(h.a,null,l.a.createElement(E.a,{color:"black",title:"Sign Up"}),l.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:function(e){return V.apply(this,arguments)}},l.a.createElement(f.a,{id:"name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",label:"Name",style:{margin:"8px"}}),l.a.createElement(f.a,{id:"Phone",value:I,onChange:function(e){return N(e.target.value)},variant:"outlined",label:"Phone",style:{margin:"8px"}}),l.a.createElement(f.a,{id:"email",value:d,onChange:function(e){return y(e.target.value)},variant:"outlined",label:"Email",style:{margin:"8px"}}),l.a.createElement("div",{style:{margin:"10px"}},l.a.createElement(C.a,{row:!0,"aria-label":"Type",value:Z,onChange:function(e){_(e.target.value)}},l.a.createElement("label",{style:{margin:"20px 10px"}},"Type"),l.a.createElement(S.a,{value:"company",control:l.a.createElement(w.a,null),label:"Client",style:{margin:"8px"}}),l.a.createElement(S.a,{value:"technician",control:l.a.createElement(w.a,null),label:"Technician",style:{margin:"8px"}}))),l.a.createElement(f.a,{id:"authCode",value:H,onChange:function(e){return Y(e.target.value)},variant:"outlined",label:"Auth Code",style:{margin:"10px"}}),l.a.createElement("div",{display:"flex"},l.a.createElement(f.a,{id:"password",type:"password",value:T,onChange:function(e){return k(e.target.value)},variant:"outlined",label:"Password",style:{margin:"10px"}}),l.a.createElement(f.a,{id:"cPassword",type:"password",value:W,onChange:function(e){return z(e.target.value)},variant:"outlined",label:"Confirm Password",style:{margin:"10px"}})),M?l.a.createElement(b.a,{severity:"error",style:{margin:"10px",fontSize:"10px",height:"15px"}},M):l.a.createElement(b.a,{severity:"error",style:{display:"none",margin:"10px"}},"Failed"),l.a.createElement(v.a,{variant:"outlined",type:"submit",style:{margin:"10px"}},"Sign Up")))))}var k=a(81),A=a.n(k);function R(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],u=i[1],m=A.a.database().ref("authCode"),d={};return l.a.createElement("div",null,"welcome to admin ",a,l.a.createElement(p.a,null,l.a.createElement(E.a,{title:"Register a Technisian"}),l.a.createElement(f.a,{id:"email",type:"email",label:"Email",value:a,onChange:function(e){r(e.target.value)},variant:"outlined"}),l.a.createElement(f.a,{id:"authCode",type:"email",label:"Auth Code",variant:"outlined",disabled:!0,value:o}),l.a.createElement("button",{variant:"",onClick:function(){var e=Math.floor(1e5+9e5*Math.random());u(e),d[e]=a,m.child("technician").update(d)}},"Generate Auth Code")))}var I=a(20),N=a(21),F=a(23),P=a(22),M=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to Electrical")}}]),a}(l.a.Component),L=a(154),U=a(166),B=a(160),W=a(168),z=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleCustomerFilter=function(e){n.setState({customerFilter:e.target.value})},n.handleMachineFilter=function(e){n.setState({machineFilter:e.target.value})},n.handleClear=function(e){n.setState({customerFilter:"",machineFilter:""})},n.state={customerFilter:"",machineFilter:""},n}return Object(N.a)(a,[{key:"render",value:function(){return console.log(this.state.customerFilter,this.state.machineFilter),l.a.createElement("div",{style:{margin:"20px"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(p.a,{variant:"outlined"},l.a.createElement(h.a,{style:{padding:"8px"}},"Home")),l.a.createElement("div",{style:{flexGrow:"1"}}),l.a.createElement(v.a,{variant:"outlined",style:{marginRight:"20px"}},"MY MACHINES"),l.a.createElement(v.a,{variant:"outlined"},"REGISTER MACHINE")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(p.a,{variant:"outlined",style:{width:"100%",margin:"30px 0 30px 0",borderRadius:"10px"}},l.a.createElement(p.a,{style:{height:"50px",width:"100%",borderRadius:"10px 10px 0 0",display:"flex",paddingRight:"40px",columnGap:"40px"}},l.a.createElement("div",{style:{display:"flex",padding:"10px"}},"Filter By:"),l.a.createElement(L.a,null,l.a.createElement(U.a,{style:{width:"200px",fontSize:"10px"},id:"filter-customer"},"CUSTOMER"),l.a.createElement(B.a,{style:{width:"200px",fontSize:"13px",paddingTop:"0"},labelId:"filter-customer",value:this.state.customerFilter,onChange:this.handleCustomerFilter},l.a.createElement(W.a,{value:""},l.a.createElement("em",null,"None")),l.a.createElement(W.a,{value:10},"Ten"),l.a.createElement(W.a,{value:20},"Twenty"),l.a.createElement(W.a,{value:30},"Thirty"))),l.a.createElement(L.a,null,l.a.createElement(U.a,{style:{width:"200px",fontSize:"10px"},id:"filter-customer"},"MACHINE"),l.a.createElement(B.a,{style:{width:"200px",fontSize:"13px",paddingTop:"0"},labelId:"filter-customer",value:this.state.machineFilter,onChange:this.handleMachineFilter},l.a.createElement(W.a,{value:""},l.a.createElement("em",null,"None")),l.a.createElement(W.a,{value:10},"Ten"),l.a.createElement(W.a,{value:20},"Twenty"),l.a.createElement(W.a,{value:30},"Thirty"))),l.a.createElement(v.a,{variant:"text",onClick:this.handleClear},"CLEAR")),l.a.createElement("div",{style:{height:"100px"}}))))}}]),a}(l.a.Component),G=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to clientHome")}}]),a}(l.a.Component),D=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={userType:null},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(e){this.setState({userType:this.props.location.state.id})}},{key:"render",value:function(){return""!==this.state.userType?l.a.createElement("div",{style:{display:"flex",margin:"20px"}},l.a.createElement(p.a,{style:{width:"100%",height:"80vh"}},"Technician"===this.state.userType?l.a.createElement(z,null):l.a.createElement(G,null))):l.a.createElement("div",null)}}]),a}(l.a.Component),H=Object(m.i)(D),Y=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to status")}}]),a}(l.a.Component),J=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to Parameters")}}]),a}(l.a.Component),K=function(e){Object(F.a)(a,e);var t=Object(P.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to Performance")}}]),a}(l.a.Component);function Z(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/"},l.a.createElement(d,null)),l.a.createElement(m.b,{exact:!0,path:"/login"},l.a.createElement(j,null)),l.a.createElement(m.b,{exact:!0,path:"/sign_up"},l.a.createElement(T,null)),l.a.createElement(m.b,{exact:!0,path:"/admin"},l.a.createElement(R,null)),l.a.createElement(m.b,{exact:!0,path:"/admin/login"},l.a.createElement(j,null)),l.a.createElement(m.b,{exact:!0,path:"/info"},l.a.createElement(H,null)),l.a.createElement(m.b,{exact:!0,path:"/electrical"},l.a.createElement(M,null)),l.a.createElement(m.b,{exact:!0,path:"/status"},l.a.createElement(Y,null)),l.a.createElement(m.b,{exact:!0,path:"/performance"},l.a.createElement(K,null)),l.a.createElement(m.b,{exact:!0,path:"/parameters"},l.a.createElement(J,null)))}var _=a(158),Q=a(169),X=a(167),$=a(159),q=a(31);var V=function(){var e=Object(m.g)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),p=d[0],h=d[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),b=f[0],y=f[1],x=Object(m.h)(),O=Object(n.useState)(""),j=Object(s.a)(O,2),C=j[0],S=j[1],w=Object(n.useState)("XYZ"),T=Object(s.a)(w,2),k=T[0],A=T[1],R=Object(n.useState)("INFORMATION"),I=Object(s.a)(R,2),N=I[0],F=I[1],P=Object(n.useState)(""),M=Object(s.a)(P,2),L=M[0],U=M[1];function B(){return(B=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.auth().signOut();case 2:c(!1),"/admin"===x.pathname?e.push("/admin/login"):e.push("/login");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){g.a.auth().onAuthStateChanged((function(e){e?(c(!0),S(e.email),A(e.displayName),g.a.database().ref("users/".concat(e.uid)).once("value").then((function(e){U(e.val().accountType)}))):(c(!1),"/admin"===x.pathname?h(!0):h(!1),"/"===x.pathname?y(!0):y(!1))}))}),[]);var z=p?l.a.createElement(m.a,{to:"admin/login"}):l.a.createElement("div",null,l.a.createElement(v.a,{color:"inherit",component:q.b,to:"/login"},"Login"),l.a.createElement(v.a,{color:"inherit",component:q.b,to:"/sign_up"},"Sign Up")),G=l.a.createElement(Q.a,{alt:C,src:"/avatar.jpg"}),D=l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{display:"flex",style:{marginRight:"10px"}},l.a.createElement("p",{style:{margin:"0",textAlign:"right"}},l.a.createElement("b",null,k)),l.a.createElement(v.a,{style:{padding:"0"},variant:"text",color:"inherit",onClick:function(){return B.apply(this,arguments)},disableElevation:!0,size:"small",className:"button-logout"},"Log Out")),G);if(""!==r){var H="IFORMATION";switch(N){case"INFORMATION":H=l.a.createElement(m.a,{to:{pathname:"/info",state:{id:L}}});break;case"STATUS":H=l.a.createElement(m.a,{to:"/status"});break;case"PERFORMANCE":H=l.a.createElement(m.a,{to:"/performance"});break;case"ELECTRICAL SUPPLY":H=l.a.createElement(m.a,{to:"/electrical"});break;case"PARAMETERS":H=l.a.createElement(m.a,{to:"/parameters"})}return l.a.createElement("div",null,l.a.createElement(_.a,{position:"static",style:{color:"black",backgroundColor:"white",display:"flex",flexDirection:"row"}},l.a.createElement("div",{style:{marginRight:"50px"}},"LOGO"),r?l.a.createElement(X.a,{style:{flexDirection:"row",display:"flex",flexGrow:"1"},onClick:function(e){document.getElementsByClassName("menu-active")[0].classList.remove("menu-active"),e.target.classList.add("menu-active"),F(e.target.getAttribute("label"))}},l.a.createElement(W.a,{className:"menuButton menu-active",label:"INFORMATION"},"INFORMATION"),l.a.createElement(W.a,{className:"menuButton",label:"STATUS"},"STATUS"),l.a.createElement(W.a,{className:"menuButton",label:"PERFORMANCE"},"PERFORMANCE"),l.a.createElement(W.a,{className:"menuButton",label:"ELECTRICAL SUPPLY"},"ELECTRICAL SUPPLY"),l.a.createElement(W.a,{className:"menuButton",label:"PARAMETERS"},"PARAMETERS")):l.a.createElement("div",{style:{flexGrow:"1"}}),l.a.createElement($.a,null,r?D:z)),b?l.a.createElement(m.a,{to:"/login"}):l.a.createElement("div",null),l.a.createElement(Z,null),l.a.createElement("div",null,H))}return l.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q.a,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){},95:function(e,t,a){e.exports=a(117)}},[[95,1,2]]]);
//# sourceMappingURL=main.61b1d4ed.chunk.js.map