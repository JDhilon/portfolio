(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{74:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);a(0);var s=a(23),n=a.n(s),i=a(36),r=a(58),o=a(57),c=a(29),l=(a(74),a(1));var j=function(e){return Object(l.jsx)(i.a,{expand:"lg",className:"header",children:Object(l.jsxs)(c.a,{children:[Object(l.jsx)(i.a.Brand,{href:"#home",children:"Jashan Dhilon"}),Object(l.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(r.a,{className:"ms-auto",children:[Object(l.jsx)(r.a.Link,{href:"#contact",children:"Contact"}),Object(l.jsx)(o.a,{title:"Projects",id:"basic-nav-dropdown",children:e.projectNames.map((function(e,t){return console.log(e),Object(l.jsx)(o.a.Item,{href:"#proj"+t,children:e})}))})]})})]})})},d=a(110),h=a(35),u=a.n(h),b=a(65),p=a.n(b),m=a(66),g=a.n(m);a(80);var x=function(){var e=(new Date).getFullYear(),t=Object(d.a)((function(e){return{root:{"&:hover":{color:"#da6d15"},color:"#C06014"}}}))();return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("a",{href:"https://github.com/JDhilon",children:Object(l.jsx)(u.a,{className:t.root})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jashanjot-dhilon-9457b0125/",children:Object(l.jsx)(p.a,{className:t.root})}),Object(l.jsx)("a",{href:"mailto:jdhilondev@gmail.com",children:Object(l.jsx)(g.a,{className:t.root})}),Object(l.jsxs)("p",{children:["Copyright \u24d2 ",e]})]})},O=a(19),f=a(12),v=a(56),w=a(54),k=a.n(w),y=a(55),N=a.n(y);a(84);var D=function(e){var t=Object(d.a)((function(e){return{root:{"&:hover":{color:"#da6d15"},color:"#C06014"}}}))();return e.isLeft?Object(l.jsx)(c.a,{className:"project",id:e.id,children:Object(l.jsxs)(O.a,{children:[Object(l.jsxs)(f.a,{md:{span:3,offset:0},className:"description",children:[Object(l.jsx)(O.a,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)("h1",{children:e.proj.title})})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)("p",{children:e.proj.description})})}),Object(l.jsxs)(O.a,{children:[""===e.proj.links.github?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.github,children:Object(l.jsx)(u.a,{className:t.root})})}),""===e.proj.links.website?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.website,children:Object(l.jsx)(k.a,{className:t.root})})}),""===e.proj.links.youtube?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.youtube,children:Object(l.jsx)(N.a,{className:t.root})})})]})]}),Object(l.jsx)(f.a,{className:"my-auto previewImage",xs:12,md:{span:6,offset:3},children:Object(l.jsx)(v.a,{src:e.proj.image,fluid:!0})})]})}):Object(l.jsx)(c.a,{className:"project",id:e.id,children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(f.a,{className:"my-auto previewImage",xs:12,md:6,children:Object(l.jsx)(v.a,{src:e.proj.image,fluid:!0})}),Object(l.jsxs)(f.a,{md:{span:3,offset:3},className:"description",children:[Object(l.jsx)(O.a,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)("h1",{children:e.proj.title})})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)("p",{children:e.proj.description})})}),Object(l.jsxs)(O.a,{children:[""===e.proj.links.github?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.github,children:Object(l.jsx)(u.a,{className:t.root})})}),""===e.proj.links.website?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.website,children:Object(l.jsx)(k.a,{className:t.root})})}),""===e.proj.links.youtube?null:Object(l.jsx)(f.a,{children:Object(l.jsx)("a",{href:e.proj.links.youtube,children:Object(l.jsx)(N.a,{className:t.root})})})]})]})]})})},T=(a(85),a.p+"static/media/teslagames.ed313a23.jpg"),J=[{title:"ToDo List",description:"An online todo list, with secure authentication. \n            Features include the list being stored via MongoDB to allow users to access it from anywhere, with a secure login for authentication.\n            Development build includes use of Google OAuth2.0 for authentication.\n            The site itself is rendered using EJS and Node.js.",links:{github:"https://github.com/JDhilon/todo-list-v2",website:"https://boiling-hamlet-45674.herokuapp.com/",youtube:""},image:a.p+"static/media/todo.d03f3ee3.png"},{title:"Dungeon Generator",description:"This is a work in progress dungeon generation application for making easy and fun maps for use in tabletop roleplaying games, such as Dungeon and Dragons.\n                    The site is created using React, and allows a user to enter in parameters for random dungeon generation. \n                    Links between rooms are created using a graph data structure and a pseudorandom algorithm for creating a anything from a linear design to a maze-like structure.\n                    Future updates for this project include automatically exporting the finished map to an online TTRPG tool, such as Roll20, and giving users a set of tools to update the generated map.",links:{github:"https://github.com/JDhilon/dungeon-gen-app",website:"https://jdhilon.github.io/dungeon-gen-app/",youtube:""},image:a.p+"static/media/dungeon.e81f2fd0.png"},{title:"Tesla Games",description:"Tesla Games is a car racing and battle computer game, developed as part of a team project.\n            Players are sent into a race course, where they rely on their skillful driving, and clever ability usage to survive until the end. \n            You can play the game either by yourself against a competitive AI, or team up with friends to play a local splitscreen multiplayer game.\n            The game itself is packaged for use on Windows 10, and makes use of libraries such as OpenGL and PhysX. ",links:{github:"https://github.com/JuandeReiset/Tesla-Games",website:"",youtube:"https://www.youtube.com/watch?v=ftquclzoR98&feature=youtu.be"},image:T}];var G=function(){return Object(l.jsxs)("div",{class:"background",children:[Object(l.jsx)(j,{projectNames:J.map((function(e){return e.title}))}),Object(l.jsx)("div",{class:"projectList",children:J.map((function(e,t){return Object(l.jsx)(D,{isLeft:t%2===0,proj:e,id:"proj"+t})}))}),Object(l.jsx)(x,{})]})};a(86);n.a.render(Object(l.jsx)(G,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.a50d133e.chunk.js.map