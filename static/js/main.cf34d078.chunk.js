(this.webpackJsonpfifaresults=this.webpackJsonpfifaresults||[]).push([[0],{145:function(e,t,n){},153:function(e,t){},155:function(e,t){},166:function(e,t){},168:function(e,t){},193:function(e,t){},195:function(e,t){},196:function(e,t){},201:function(e,t){},203:function(e,t){},209:function(e,t){},211:function(e,t){},230:function(e,t){},242:function(e,t){},245:function(e,t){},293:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(40),s=n.n(o),r=(n(145),n(16)),c=n.n(r),l=n(32),u=n(34),h=n(11),d=n(42),p=n(69),j=n.n(p),b=n(41),f=n(130),m=n(131),g=n(139),O=n(138),x=function(e){return e.hscore>e.ascore?e.hteam:e.ascore>e.hscore?e.ateam:"tie"},v=n(1),w=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).componentDidMount=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://matchhistoryapi.herokuapp.com/getUsers/test").then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&i.setState({users:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),i.onDatabaseChange=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://matchhistoryapi.herokuapp.com/getUsers/".concat(t.target.value)).then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&i.setState({users:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.onOptionChange=function(e){"database"===e.target.id&&i.onDatabaseChange(e),i.setState(Object(b.a)({},e.target.id,e.target.value)),i.setState({needConfirm:!1})},i.onSubmitResult=function(){var e=i.state,t=e.hteam,n=e.ateam,a=e.team1,o=e.team2,s=e.hscore,r=e.ascore,c=e.winner,l=e.database;t&&n&&a&&o&&c?(fetch("https://matchhistoryapi.herokuapp.com/createMatch",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user1:t,user2:n,team1:a,team2:o,result1:s,result2:r,winner:c,league:l})}).catch((function(e){return console.log("oops")})),i.setState={hteam:"",ateam:"",team1:"",team2:"",hscore:0,ascore:0,winner:"",needConfirm:!1},alert("Match loaded to database")):alert("Missing data")},i.onScoreVerification=function(){i.setState({winner:x(i.state)}),i.setState({needConfirm:!0})},i.state={database:"test",leagueOptions:["test","mmpdobles","mmpfutboltenis","mmp2021"],users:[],hteam:"",ateam:"",team1:"",team2:"",hscore:0,ascore:0,winner:"",needConfirm:!1},i}return Object(m.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("article",{className:"br3 white pa3 ma2 bw1 ba shadow-5 dt dt--fixed w-auto fl center",children:[Object(v.jsx)("h1",{children:"Load Match"}),Object(v.jsx)("select",{id:"database",onChange:this.onOptionChange,children:this.state.leagueOptions.map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))}),Object(v.jsxs)("main",{className:"b flex pa2",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Player Name"}),Object(v.jsx)("input",{type:"text",id:"hteam",onChange:this.onOptionChange}),Object(v.jsxs)("select",{type:"text",id:"hteam",onChange:this.onOptionChange,children:[this.state.users.map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)})),Object(v.jsx)("option",{value:"null",defaultValue:!0,children:" "},"1")]}),Object(v.jsx)("p",{children:"Team"}),Object(v.jsx)("input",{type:"text",id:"team1",onChange:this.onOptionChange}),Object(v.jsx)("p",{children:"Score"}),Object(v.jsx)("input",{type:"number",id:"hscore",onChange:this.onOptionChange})]}),Object(v.jsx)("h2",{className:"pa3",children:"VS"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Player Name"}),Object(v.jsx)("input",{type:"text",id:"ateam",onChange:this.onOptionChange}),Object(v.jsxs)("select",{type:"text",id:"ateam",onChange:this.onOptionChange,children:[this.state.users.map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)})),Object(v.jsx)("option",{value:"null",defaultValue:!0,children:" "},"1")]}),Object(v.jsx)("p",{children:"Team"}),Object(v.jsx)("input",{type:"text",id:"team2",onChange:this.onOptionChange}),Object(v.jsx)("p",{children:"Score"}),Object(v.jsx)("input",{type:"number",id:"ascore",onChange:this.onOptionChange})]})]}),Object(v.jsxs)("h2",{children:["Winner: ",this.state.winner]}),this.state.needConfirm?Object(v.jsx)("input",{className:"b br3 ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib",type:"submit",value:"Confirm",onClick:this.onSubmitResult}):Object(v.jsx)("input",{className:"b br3 ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib",type:"submit",value:"Submit",onClick:this.onScoreVerification})]})}}]),n}(a.a.Component),y=w,C=function(e){var t,n=e.isAdmin,i=e.setIsOpen,a=e.onRouteChange,o=e.isSignedIn,s=e.loginWithPopup,r=e.logout,c=e.user;return t=n?Object(v.jsx)("p",{onClick:function(){return a("load")},className:"f3 link dim white underline pa3 pointer",children:"Load Match"}):o?Object(v.jsx)("p",{onClick:i,className:"f3 link dim white underline pa3",children:"Admin"}):Object(v.jsx)("p",{onClick:function(){return s()},className:"f3 link dim white underline pa3 pointer",children:"Sign In"}),Object(v.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(v.jsxs)("p",{className:"f3 white pa3 absolute left-0",children:["Hello ",c.name]}),Object(v.jsx)("p",{onClick:function(){return a("home")},className:"f3 link dim white underline pa3 pointer",children:"Home"}),t,o?Object(v.jsx)("p",{onClick:function(){return r({returnTo:"https://igvdev.github.io/FIFAResultHistory/"})},className:"f3 link dim white underline pa3 pointer",children:"Sign Out"}):null]})},S=n(132),k=n.n(S),N=n(44),A=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(!1),s=Object(h.a)(o,2),r=s[0],c=s[1],l=Object(i.useState)(""),u=Object(h.a)(l,2),d=u[0],p=u[1];Object(i.useEffect)((function(){c(!0),fetch("https://matchhistoryapi.herokuapp.com/getStandings/".concat(d)).then((function(e){return e.json()})).then((function(e){a(e),c(!1)})).catch((function(e){return console.log(e)}))}),[d]);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{style:{flex:1,height:window.innerHeight-200},children:[Object(v.jsxs)("select",{id:"database",onChange:function(e){return p(e.target.value)},children:[Object(v.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Select Database"}),["test","mmp","mmpdobles","mmpfutboltenis","mmp2021"].map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))]}),""===d?Object(v.jsx)("h1",{children:"(\u2022_\u2022)"}):Object(v.jsx)(k.a,{progressPending:r,progressComponent:Object(v.jsx)("div",{style:{padding:100},children:Object(v.jsx)(N.WaveLoading,{size:"large"})}),title:"Standings",columns:[{name:"Name",selector:"name",sortable:!0},{name:"Points",selector:"points",sortable:!0,right:!0},{name:"P",selector:"gamesPlayed",sortable:!0,right:!0},{name:"W",selector:"gamesWon",sortable:!0,right:!0},{name:"D",selector:"gamesTied",sortable:!0,right:!0},{name:"L",selector:"gamesLost",sortable:!0,right:!0},{name:"%",selector:"winpercent",sortable:!0,right:!0},{name:"GF",selector:"goalsFor",sortable:!0,right:!0},{name:"GA",selector:"goalsAgainst",sortable:!0,right:!0},{name:"GD",selector:"goalDif",sortable:!0,right:!0}],data:n,theme:"dark",responsive:!0})]})})},W=n(136),P=(n(292),n(293),n(294),j.a.genSaltSync(10)),I={matches:[],route:"home",isSignedIn:!1,user:{name:"Guest",email:""}},F=function(){var e=Object(d.b)(),t=e.loginWithPopup,n=e.logout,a=e.isAuthenticated,o=e.user,s=Object(i.useState)(!1),r=Object(h.a)(s,2),p=r[0],b=r[1],f=Object(i.useState)(I),m=Object(h.a)(f,2),g=m[0],O=m[1],x=Object(i.useState)(!1),w=Object(h.a)(x,2),S=w[0],k=w[1],F=Object(i.useState)(""),L=Object(h.a)(F,2),M=L[0],R=L[1],T=Object(i.useState)(!1),D=Object(h.a)(T,2),E=D[0],U=D[1],H=function(e){e&&O(Object(u.a)(Object(u.a)({},g),{},{isSignedIn:a,user:{name:e.given_name,email:e.email}}))};Object(i.useEffect)((function(){H(o)}),[o]);var J,V=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),t=j.a.hashSync(M,P),e.next=4,fetch("https://peaceful-wildwood-69585.herokuapp.com/admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:g.user.email,password:t})}).then((function(e){200===e.status&&(U(!0),k(!1)),b(!1)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(g.route){case"home":J=Object(v.jsx)(A,{});break;case"load":J=Object(v.jsx)(y,{})}return Object(v.jsxs)("div",{className:"App white",children:[Object(v.jsx)(C,{isSignedIn:g.isSignedIn,isAdmin:E,setIsOpen:k,onRouteChange:function(e){O(Object(u.a)(Object(u.a)({},g),{},{route:e}))},loginWithPopup:t,logout:n,loadUser:H,user:g.user}),Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)(W.a,{open:S,onClose:function(){return k(!1)},center:!0,children:p?Object(v.jsx)("div",{style:{padding:100},children:Object(v.jsx)(N.WaveLoading,{size:"large"})}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Password:"}),Object(v.jsx)("input",{type:"password",onChange:function(e){return R(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&V()}}),Object(v.jsx)("button",{onClick:V,children:"Login"})]})}),J]})]})},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(v.jsx)(d.a,{clientId:"6olnEN1eSbfsiKTF9iMFEeUJMDLY8Mtt",domain:"dev-bowof--q.us.auth0.com",redirectUri:window.location.origin,children:Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(F,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/FIFAResultHistory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/FIFAResultHistory","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[295,1,2]]]);
//# sourceMappingURL=main.cf34d078.chunk.js.map