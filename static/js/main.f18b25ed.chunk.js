(this["webpackJsonpreact-d3"]=this["webpackJsonpreact-d3"]||[]).push([[0],{1:function(e,a,r){e.exports={superHeroContainer:"SuperHeroCard_superHeroContainer__2NufH",propertyName:"SuperHeroCard_propertyName__N5CBo",propertyValue:"SuperHeroCard_propertyValue__1rmRb",imageHolder:"SuperHeroCard_imageHolder__bNqj3"}},22:function(e,a,r){},23:function(e,a,r){},24:function(e,a,r){},42:function(e,a,r){"use strict";r.r(a);var s=r(0),c=r(3),t=r.n(c),n=r(13),l=r.n(n),o=(r(22),r.p,r(23),r(16)),p=r(15),i=r(1),j=r.n(i);var d=function(e){return Object(s.jsx)(c.Fragment,{children:Object(s.jsxs)("div",{className:j.a.superHeroContainer,children:[Object(s.jsx)("div",{className:j.a.imageHolder,children:Object(s.jsx)("img",{src:e.image.url,alt:"profile-pic"})}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"ID"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.id})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Name"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.name})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Full Name"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography["full-name"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Alter Egos"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography["alter-egos"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Aliases"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography.aliases.toString()})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Place of Birth"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography["place-of-birth"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"First Appearance"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography["first-appearance"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Publisher"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography.publisher})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("span",{className:j.a.propertyName,children:"Alignment"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.biography.alignment})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Gender"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance.gender})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("span",{className:j.a.propertyName,children:"Race"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance.race})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Height"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance.height.toString()})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Weight"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance.weight.toString()})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Eye Color"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance["eye-color"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Hair Color"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.appearance["hair-color"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Work"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.work.occupation})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Base"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.work.base})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Group Affiliation"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.connections["group-affiliation"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:j.a.propertyName,children:"Relatives"})," ",Object(s.jsx)("span",{className:j.a.propertyValue,children:e.connections.relatives})]})]})]})})},h=(r(24),r(14)),b=r.n(h);function m(e){var a=Object(c.useState)({}),r=Object(p.a)(a,2);r[0],r[1];return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("button",{onClick:function(e){b.a.get("https://superheroapi.com/api.php/3441310675917369/"+Math.floor(729*Math.random()),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS","Access-Control-Allow-Headers":"Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization","Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:"Random Super Hero"}),Object(s.jsx)(d,Object(o.a)({},{response:"success",id:"10",name:"Agent Bob",powerstats:{intelligence:"10",strength:"8",speed:"13",durability:"5",power:"5",combat:"20"},biography:{"full-name":"Bob","alter-egos":"No alter egos found.",aliases:["Bob","agent of Hydra","Bob","agent of A.I.M"],"place-of-birth":"-","first-appearance":"Cable & Deadpool #38 (May, 2007)",publisher:"Marvel Comics",alignment:"good"},appearance:{gender:"Male",race:"Human",height:["5'10","178 cm"],weight:["181 lb","81 kg"],"eye-color":"Brown","hair-color":"Brown"},work:{occupation:"Mercenary, janitor; former pirate, terrorist",base:"Mobile; formerly Manhattan, Hellcarrier"},connections:{"group-affiliation":"A.I.M., Deadpool; formerly Agency X, Hydra",relatives:"Allison (ex-wife); Terry and Howie (sons)"},image:{url:"https://www.superherodb.com/pictures2/portraits/10/100/10255.jpg"}}))]})}var u=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,43)).then((function(a){var r=a.getCLS,s=a.getFID,c=a.getFCP,t=a.getLCP,n=a.getTTFB;r(e),s(e),c(e),t(e),n(e)}))};l.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),O()}},[[42,1,2]]]);
//# sourceMappingURL=main.f18b25ed.chunk.js.map