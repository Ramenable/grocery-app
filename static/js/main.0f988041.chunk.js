(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[0],{104:function(e,t,a){e.exports=a(134)},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n,o,r,c=a(0),l=a.n(c),i=a(10),s=a.n(i),m=(a(109),a(110),a(184)),u=a(198),d=a(50),p=a(13),f=a(28),g=a(15),h=a.n(g),y=a(83),b=a(27),E=(a(112),a(199)),x=a(43),v=a(185),w=a(186),k=a(187),C=a(188),j=a(84),O=a(201),B=a(190),N=a(57),R=a.n(N),I=a(89),S=a.n(I),V=a(189),z=a(203),G=a(23),T=a.n(G);function F(){var e=Object(y.a)(["\n  label.focused {\n    color: #ffffff;\n  }\n  .MuiOutlinedInput-root {\n    fieldset {\n      border-color: #83A3BC;\n    }\n    &:hover fieldset {\n      border-color: #294662;\n    }\n    &.Mui-focused fieldset {\n      border-color: #294662;\n    }\n  }\n  textInputStyle: {\n    color: 'white',\n  }\n"]);return F=function(){return e},e}function W(){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("roomCodeVal").value,o=document.getElementById("userNameVal").value,t=[document.getElementById("userNameVal").value],e.next=5,T.a.post("http://localhost:5000/rooms/addRoom",{roomCode:document.getElementById("roomCodeVal").value,members:t,numMembers:1}).then((function(e){console.log(e),n=!1})).catch((function(e){console.log(e),n=!0}));case 5:if(e.sent,!0!==n){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,T.a.post("http://localhost:5000/users/makeUser",{username:document.getElementById("userNameVal").value,roomCode:document.getElementById("roomCodeVal").value}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 10:e.sent;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return D.apply(this,arguments)}function D(){return(D=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("roomCodeVal").value,o=document.getElementById("userNameVal").value,e.next=4,T.a.post("https://grocerynode.herokuapp.com/users/makeUser",{username:document.getElementById("userNameVal").value,roomCode:document.getElementById("roomCodeVal").value}).then((function(e){console.log(e),n=!0})).catch((function(e){console.log(e),n=!1}));case 4:if(e.sent,!1!==n){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,T.a.post("https://grocerynode.herokuapp.com/rooms/updateRoom",{username:document.getElementById("userNameVal").value,roomCode:document.getElementById("roomCodeVal").value}).then((function(e){console.log(e),n=!0})).catch((function(e){console.log(e),n=!1}));case 9:e.sent;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("roomCodeVal").value,o=document.getElementById("userNameVal").value,e.next=4,T.a.post("https://grocerynode.herokuapp.com/users/returnUser",{username:document.getElementById("userNameVal").value,roomCode:document.getElementById("roomCodeVal").value}).then((function(e){console.log(e),n=!0})).catch((function(e){console.log(e),n=!1}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=Object(j.a)(E.a)(F()),H=Object(m.a)((function(e){return{root:{border:0,borderRadius:5,boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",color:"white",height:500,width:400,margin:"auto",marginTop:"5%",padding:"0 30px",display:"flex",flexDirection:"column",justifyContent:"center"},centeredcard:{display:"flex",flexDirection:"column",justifyContent:"center"},title:{fontSize:40,fontFamily:"Raleway",color:"#444444"},titlecontent:{marginBottom:-20},textbox:{padding:10,marginTop:"1%",marginBottom:"1%"},centered:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}}));var J,P,$,_,K=function(){var e=Object(p.f)(),t=H(),a=function(){var t=Object(b.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:t.sent,!0===n?g():(a="/RoomLobby/"+r,e.push(a,{number:r,user:o}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(b.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:t.sent,!1===n?G():(a="/RoomLobby/"+r,e.push(a,{number:r,user:o}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(b.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:t.sent,!1===n?J():(a="/RoomLobby/"+r,e.push(a,{number:r,user:o}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=l.a.useState(!1),m=Object(f.a)(s,2),u=m[0],d=m[1],g=function(){d(!0)},y=function(e,t){"clickaway"!==t&&d(!1)},E=l.a.useState(!1),j=Object(f.a)(E,2),N=j[0],I=j[1],G=function(){I(!0)},T=function(e,t){"clickaway"!==t&&I(!1)},F=l.a.useState(!1),M=Object(f.a)(F,2),D=M[0],U=M[1],J=function(){U(!0)},P=function(e,t){"clickaway"!==t&&U(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{className:t.root,variant:"outlined"},l.a.createElement(w.a,null,l.a.createElement(k.a,{container:!0,alignContent:"center",spacing:3},l.a.createElement("div",{className:t.centered},l.a.createElement(k.a,{item:!0,xs:12,className:t.titlecontent,align:"center",style:{marginBottom:10,marginTop:10}},l.a.createElement(x.a,{variant:"h4",className:t.title},"Group Groceries")),l.a.createElement(k.a,{item:!0,xs:12,className:t.textbox,align:"center"},l.a.createElement(q,{id:"userNameVal",label:"Name",variant:"outlined"})),l.a.createElement(k.a,{item:!0,xs:12,className:t.textbox,align:"center"},l.a.createElement(q,{id:"roomCodeVal",label:"Room Code",variant:"outlined"})),l.a.createElement(k.a,{item:!0,xs:12,align:"center"},l.a.createElement(C.a,{variant:"outlined",bordercolor:"white",onClick:a,style:{marginBottom:10,marginTop:10}},"Create Room")),l.a.createElement(k.a,{item:!0,xs:12,align:"center"},l.a.createElement(C.a,{variant:"outlined",bordercolor:"white",onClick:c,style:{marginBottom:10,marginTop:10}},"Join Room")),l.a.createElement(k.a,{item:!0,xs:12,align:"center"},l.a.createElement(C.a,{variant:"outlined",bordercolor:"white",onClick:i,style:{marginBottom:10,marginTop:10}},"Re-enter Room")))))),l.a.createElement(z.a,{title:"Made by Abel, Ellie, John,and Nelson",style:{marginRight:"2%",marginBottom:"1%"}},l.a.createElement(V.a,{className:t.absolute},l.a.createElement(S.a,{color:"primary"}))),l.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:u,autoHideDuration:6e3,onClose:y,message:"The room already exists",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{size:"small","aria-label":"close",color:"inherit",onClick:y},l.a.createElement(R.a,{fontSize:"small"})))}),l.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:N,autoHideDuration:6e3,onClose:T,message:"This user already exists or the room doesn't exist",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{size:"small","aria-label":"close",color:"inherit",onClick:T},l.a.createElement(R.a,{fontSize:"small"})))}),l.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:D,autoHideDuration:6e3,onClose:P,message:"User not found",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{size:"small","aria-label":"close",color:"inherit",onClick:P},l.a.createElement(R.a,{fontSize:"small"})))}))},Q=a(202),X=a(197),Y=a(195),Z=a(196),ee=a(194),te=a(136),ae=a(183),ne=a(192),oe=a(193),re=a(191),ce=a(90),le=a.n(ce);function ie(){return(ie=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("https://grocerynode.herokuapp.com/groceries/addGrocery",{name:document.getElementById("name").value,roomCode:J,message:document.getElementById("message").value,requester:_}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,e.next=3,T.a.post("https://grocerynode.herokuapp.com/groceries/deleteGrocery",{id:a}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=Object(m.a)((function(e){return{root:{width:"100%",minWidth:300,maxWidth:800,borderRadius:5,boxShadow:"0px 5px 5px 2px rgba(0, 0, 0, .3)",backgroundColor:e.palette.background.paper,flexGrow:1},fullScreen:{flexGrow:1},fill:{width:"100%",flexGrow:1},textMem:{color:"#222222",fontFamily:"Raleway",fontSize:20},text:{color:"#222222",fontFamily:"Raleway",fontWeight:"bold",fontSize:30},textReq:{color:"#222222",fontFamily:"Raleway",fontStyle:"italic",fontSize:20},title:{color:"#444444",fontFamily:"Raleway",fontSize:43},centered:{display:"flex",flexDirection:"column",justifyContent:"center"}}}));var ue=function(){var e=Object(p.f)(),t=me(),a=Object(p.g)();_=a.state.user,J=a.state.number;var n=Object(c.useState)([]),o=Object(f.a)(n,2),r=o[0],i=o[1],s=Object(c.useState)([]),m=Object(f.a)(s,2),u=m[0],d=m[1],g=Object(c.useState)(!1),h=Object(f.a)(g,2),y=h[0],b=h[1];Object(c.useEffect)((function(){T.a.get("https://grocerynode.herokuapp.com/rooms/getRoom?room="+encodeURIComponent(a.state.number),!1).then((function(e){console.log(e.data),P=e.data[0].members,i(P)})).catch((function(e){console.log(e)}))}),[a.state.number]),Object(c.useEffect)((function(){u.length&&!y||T.a.get("https://grocerynode.herokuapp.com/groceries/getGroceries?room="+encodeURIComponent(a.state.number),!1).then((function(e){for(var t in $=[],e.data)$.push(e.data[t]);d($)})).catch((function(e){console.log(e)}))}),[y,u,a.state.number]);var v=l.a.useState(!1),w=Object(f.a)(v,2),j=w[0],O=w[1],N=function(){O(!1)};return l.a.createElement(k.a,{container:!0,spacing:4,style:{marginTop:"3%",marginLeft:"8%"},className:t.fullScreen},l.a.createElement(k.a,{item:!0,xl:3},l.a.createElement("div",{className:t.root},l.a.createElement(x.a,{variant:"h3",className:t.title,style:{marginLeft:"8%"}},"Member List"),l.a.createElement(re.a,null),l.a.createElement(te.a,{style:{maxHeight:550,overflow:"auto"}},l.a.createElement(ae.a,null,r.map((function(e,a){return l.a.createElement(ne.a,{key:a,item:e,className:t.centered},l.a.createElement(oe.a,{classes:{primary:t.textMem},primary:e}))}))))),l.a.createElement("div",{className:t.root,style:{marginTop:"5%"}},l.a.createElement(C.a,{fullWidth:!0,variant:"outlined",color:"secondary",bordercolor:"white",onClick:function(){e.push("/")}},"Go Back"))),l.a.createElement(k.a,{item:!0,xl:9,className:t.fullScreen},l.a.createElement("div",{className:t.root},l.a.createElement(x.a,{variant:"h3",className:t.title,style:{marginLeft:"35%"}},"Grocery List"),l.a.createElement(re.a,null),l.a.createElement(te.a,{style:{maxHeight:550,overflow:"auto"}},l.a.createElement(ae.a,null,u.map((function(e,a){return l.a.createElement(ne.a,{key:a,item:e,className:t.centered},l.a.createElement(k.a,{container:!0,spacing:3},l.a.createElement(k.a,{item:!0,xs:6,style:{overflow:"hidden"}},l.a.createElement(oe.a,{classes:{primary:t.text},primary:e.name,secondary:e.message})),l.a.createElement(k.a,{item:!0,xs:4},l.a.createElement(oe.a,{classes:{primary:t.textReq},style:{marginTop:"6%"},primary:"Requested by: "+e.requester})),l.a.createElement(k.a,{item:!0,xs:2},l.a.createElement(B.a,{"aria-label":"cancel",style:{width:"70%",height:"70%",marginTop:"3%"},onClick:function(){return function(e){return se.apply(this,arguments)}(e._id)}},l.a.createElement(le.a,{style:{width:"70%",height:"70%"}})))))})))),l.a.createElement(C.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){O(!0)}},"Add grocery"),l.a.createElement(Q.a,{open:j,onClose:N,"aria-labelledby":"form-dialog-title"},l.a.createElement(ee.a,{id:"form-dialog-title"},"Add a Grocery"),l.a.createElement(Y.a,null,l.a.createElement(Z.a,null,"Put the grocery name and a message if you want!"),l.a.createElement(E.a,{autoFocus:!0,margin:"dense",id:"name",label:"Grocery Name",type:"typename",fullWidth:!0}),l.a.createElement(E.a,{autoFocus:!0,margin:"dense",id:"message",label:"Message (optional)",type:"typemessage",fullWidth:!0})),l.a.createElement(X.a,null,l.a.createElement(C.a,{onClick:N,color:"primary"},"Cancel"),l.a.createElement(C.a,{onClick:function(){O(!1),function(){ie.apply(this,arguments)}(),b(!0)},color:"primary"},"Add"))))))},de=a(91),pe=Object(m.a)((function(e){return{root:{flexGrow:1,border:0,borderRadius:3,color:"white",height:"100%",padding:"0 30px"},paper:{padding:e.spacing(2),textAlign:"center",color:"#213651"}}})),fe=Object(de.a)();var ge=function(){var e=pe();return fe.push("/"),l.a.createElement(d.a,{history:fe},l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{maxWidth:"xl"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:K}),l.a.createElement(p.a,{exact:!0,path:"/roomlobby/:number",component:ue})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.0f988041.chunk.js.map