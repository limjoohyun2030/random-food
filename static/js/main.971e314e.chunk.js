(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,o){e.exports={header:"header_header__m3SYP",leftbox:"header_leftbox__2iO45",title:"header_title__3on4u",foodIcon:"header_foodIcon__lQnTW",reloadBox:"header_reloadBox__2OoDl",reloadBtn:"header_reloadBtn__2bmN1",spin:"header_spin__1aP_t",like:"header_like__2A3_Q",logout:"header_logout__Uq8E4"}},15:function(e,t,o){e.exports={section:"food_detail_section__1BYkb",detail:"food_detail_detail__3Z-uT",title:"food_detail_title__36ueN",dishTypes:"food_detail_dishTypes__15IMP",instructions:"food_detail_instructions__2PFoc"}},17:function(e,t,o){e.exports={box:"food_item_box__uBsKN",food:"food_item_food__36t_-",img:"food_item_img__2LPGT",title:"food_item_title__QYCCo"}},23:function(e,t,o){e.exports={app:"app_app__39-cA",content:"app_content__11Wkf",list:"app_list__1mW6y",root:"app_root__24CXf"}},24:function(e,t,o){e.exports={foodBox:"food_list_foodBox__1ikCP",foods:"food_list_foods__1fXdi"}},25:function(e,t,o){e.exports={login:"login_login__1hoOo",list:"login_list__p9K4f",item:"login_item__2jQiQ",button:"login_button__11kG4"}},40:function(e,t,o){},46:function(e,t,o){},57:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),i=o(29),a=o.n(i),s=(o(40),o(18)),r=o(35),d=o(3),u=o(23),l=o.n(u),f=o(15),j=o.n(f),h=o(2),_=function(e){var t=e.food;return Object(h.jsxs)("section",{className:j.a.section,children:[Object(h.jsx)("img",{src:t.image,alt:""}),Object(h.jsxs)("div",{className:j.a.detail,children:[Object(h.jsxs)("div",{className:j.a.title,children:["Name : ",t.title]}),Object(h.jsxs)("div",{className:j.a.dishTypes,children:["DishTypes : ",t.dishTypes]}),Object(h.jsxs)("div",{className:j.a.instructions,children:["Instructions : ",t.instructions]})]})]})},b=o(17),m=o.n(b),p=c.a.forwardRef((function(e,t){var o=e.food,n=e.onFoodClick;return Object(h.jsxs)("div",{className:m.a.box,onClick:function(){return n(o)},ref:t,children:[Object(h.jsx)("div",{className:m.a.food,children:Object(h.jsx)("img",{className:m.a.img,src:o.image,alt:"food"})}),Object(h.jsx)("p",{className:m.a.title,children:o.title})]})})),O=o(24),x=o.n(O),g=c.a.forwardRef((function(e,t){var o=e.foods,n=e.onFoodClick;return Object(h.jsx)("section",{className:x.a.foodBox,children:Object(h.jsx)("ul",{className:x.a.foods,children:o&&o.map((function(e){return Object(h.jsx)(p,{food:e,onFoodClick:n,ref:t},e.id)}))})})})),v=o(13),N=o.n(v),k=function(e){var t=e.onRefreshClick,o=e.onLogout;return Object(h.jsxs)("header",{className:N.a.header,children:[Object(h.jsxs)("div",{className:N.a.leftbox,children:[Object(h.jsx)("h1",{className:N.a.title,children:"Random Food"}),Object(h.jsx)("button",{className:N.a.reloadBox,onClick:t,children:"Refresh"})]}),Object(h.jsx)("div",{className:N.a.rightbox,children:o&&Object(h.jsx)("button",{className:N.a.logout,onClick:o,children:"Logout"})})]})},C=o(30),y=o(25),S=o.n(y),B=function(e){var t=e.authService,o=Object(d.f)(),n=function(e){o.push({pathname:"/random-food/home",state:{id:e}})};return Object(C.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(h.jsxs)("section",{className:S.a.login,children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("button",{className:S.a.button,onClick:function(){t.login().then((function(e){return n(e.user.uid)}))},children:"Login by Google"})]})},w=(o(46),function(e){var t=e.authService,o=e.onRefreshClick,c=Object(d.f)();return Object(n.useEffect)((function(){t.onAuthChange((function(e){e||c.push("/random-food/")}))})),Object(h.jsx)("div",{children:Object(h.jsx)(k,{onLogout:function(){t.logout()},onRefreshClick:o})})});var R=function(e){var t=e.authService,o=Object(n.useRef)(),c=Object(n.useState)([]),i=Object(s.a)(c,2),a=i[0],u=i[1],f=Object(n.useState)(),j=Object(s.a)(f,2),b=j[0],m=j[1],p=Object(n.useState)(!1),O=Object(s.a)(p,2),x=O[0],v=O[1],N=Object(n.useState)(!1),k=Object(s.a)(N,2),C=k[0],y=k[1],S=function(e){m(e)},R=function(){y((function(e){return!e}))};return Object(n.useEffect)((function(){var e=new Headers;e.append("Content-Type","application/json"),fetch("https://api.spoonacular.com/recipes/random?number=4&apiKey=92cedfb0b9e844679738e6c6c90cd453",{method:"GET",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return u(e.recipes)})).catch((function(e){return console.log("error",e)}))}),[C]),Object(n.useEffect)((function(){var e=function(e){x&&o.current&&!o.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[x]),Object(h.jsx)("div",{className:l.a.app,children:Object(h.jsx)(r.a,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/random-food/",render:function(){return Object(h.jsx)(B,{authService:t})}}),Object(h.jsx)(d.a,{path:"/random-food/home",render:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{onRefreshClick:R,authService:t}),Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{children:x&&Object(h.jsx)(_,{food:b})}),Object(h.jsx)("div",{className:l.a.list,onClick:function(){return v((function(e){return!e}))},children:Object(h.jsx)(g,{foods:a,onFoodClick:S,ref:o})})]})]})}}),Object(h.jsx)(d.a,{path:"*",children:Object(h.jsx)("h2",{children:"Page Not Found"})})]})})})},T=o(33),A=o(34),E=o(14),L=o.n(E),I=L.a.initializeApp({apiKey:"AIzaSyDV6slT6gC3_LAiY8BfntgtyOB1wzkRESU",authDomain:"random-food-78556.firebaseapp.com",databaseURL:"https://random-food-78556-default-rtdb.firebaseio.com/",projectId:"random-food-78556",appId:"1:656523554283:web:3ea66f5582c2e2bb553dae"}),P=new(function(){function e(){Object(T.a)(this,e)}return Object(A.a)(e,[{key:"login",value:function(){var e=new L.a.auth.GoogleAuthProvider;return I.auth().signInWithPopup(e)}},{key:"logout",value:function(){L.a.auth().signOut()}},{key:"onAuthChange",value:function(e){L.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),e}());a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{authService:P})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.971e314e.chunk.js.map