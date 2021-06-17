(this.webpackJsonpnetflix_mock=this.webpackJsonpnetflix_mock||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__3mObx",logo:"Header_logo__2ins2"}},18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(5),o=n.n(r),a=(n(18),n(19),n(2)),s=n(1),l=function(){var e=Object(a.c)((function(e){return e.movies.mylist}));return Object(s.jsxs)("footer",{style:{position:"absolute",bottom:"5px",width:"100%"},children:[Object(s.jsx)("h2",{children:"my movie list "}),e.length?Object(s.jsx)("ul",{style:{display:"flex",justifyContent:"space-around"},children:e.map((function(e){return Object(s.jsx)("li",{children:e.title},e.id)}))}):Object(s.jsx)("div",{children:"empty"})]})},m=n(10),u=n.n(m),d=function(){return Object(s.jsx)("header",{className:u.a.header,children:Object(s.jsx)("img",{src:"Netflix-Logo.png",alt:"netflix_logo",className:u.a.logo})})},b=function(){return Object(a.b)()},j=(a.c,n(12)),f=n(3),p=Object(f.c)({name:"movie",initialState:{mylist:[{title:"Futurama",id:"1",img:"http://cdn1.nflximg.net/webp/7621/3787621.webp"},{title:"The Interview",id:"2",img:"http://cdn1.nflximg.net/webp/1381/11971381.webp"},{title:"Gilmore Girls",id:"3",img:"http://cdn1.nflximg.net/webp/7451/11317451.webp"}],recommendations:[{title:"Family Guy",id:"4",img:"http://cdn5.nflximg.net/webp/5815/2515815.webp"},{title:"The Croods",id:"5",img:"http://cdn3.nflximg.net/webp/2353/3862353.webp"},{title:"Friends",id:"6",img:"http://cdn0.nflximg.net/webp/3200/9163200.webp"}]},reducers:{addToMyList:function(e,t){return{mylist:[].concat(Object(j.a)(e.mylist),[t.payload]),recommendations:e.recommendations.filter((function(e){return e.id!==t.payload.id}))}},removeFromMyList:function(e,t){return{mylist:e.mylist.filter((function(e){return e.id!==t.payload.id})),recommendations:[].concat(Object(j.a)(e.recommendations),[t.payload])}}}}),h=p.actions,x=h.addToMyList,v=h.removeFromMyList,O=p.reducer,g=n(4),y=n.n(g),w=function(e){var t=e.title,n=e.img,i=e.btnText,c=e.btnOnClick;return Object(s.jsxs)("div",{className:y.a.card,children:[Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{src:n,alt:t,className:y.a.movieImage}),Object(s.jsx)("figcaption",{className:y.a.movieTitle,children:t})]}),Object(s.jsx)("button",{className:y.a.btn,onClick:c||void 0,children:i})]})},_=n(6),C=n.n(_),T=function(e){var t=e.DisplayName,n=e.movies,c=e.renderBtn,r=Object(i.useMemo)((function(){return n.length}),[n]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:C.a.listTitle,children:t.toUpperCase()}),r?Object(s.jsx)("ul",{className:C.a.listItems,children:n.map((function(e){return Object(s.jsx)("li",{className:C.a.listItem,children:c(e)},e.id)}))}):Object(s.jsxs)("div",{children:["Nothing in ",t.toUpperCase()]})]})},k=function(){var e=Object(a.c)((function(e){return e.movies.mylist})),t=b();return Object(s.jsx)(T,{movies:e,DisplayName:"MY List",renderBtn:function(e){return Object(s.jsx)(w,{title:e.title,img:e.img,btnText:"REMOVE",btnOnClick:function(){t(v(e))}})}})},I=function(){var e=Object(a.c)((function(e){return e.movies.recommendations})),t=b();return Object(s.jsx)(T,{movies:e,DisplayName:"Recommendations",renderBtn:function(e){return Object(s.jsx)(w,{title:e.title,img:e.img,btnText:"ADD",btnOnClick:function(){t(x(e))}})}})};var N=function(){return Object(s.jsxs)("div",{style:{backgroundColor:"black",height:"100vh"},children:[Object(s.jsx)(d,{}),Object(s.jsx)(k,{}),Object(s.jsx)(I,{}),Object(s.jsx)(l,{})]})},D=n(11),M=n.n(D),B=n(13);function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var L=Object(f.b)("counter/fetchCount",function(){var e=Object(B.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(f.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(L.pending,(function(e){e.status="loading"})).addCase(L.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),S=R.actions,A=(S.increment,S.decrement,S.incrementByAmount,R.reducer),E=Object(f.a)({reducer:{counter:A,movies:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(a.a,{store:E,children:Object(s.jsx)(N,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={movieTitle:"Card_movieTitle__2onws",movieImage:"Card_movieImage__1T-Ck",card:"Card_card__3F8np",btn:"Card_btn__1xyvw"}},6:function(e,t,n){e.exports={listItems:"DisplayRow_listItems__2IISl",listItem:"DisplayRow_listItem__TCTfi",listTitle:"DisplayRow_listTitle__n3OIF"}}},[[26,1,2]]]);
//# sourceMappingURL=main.2cf97195.chunk.js.map