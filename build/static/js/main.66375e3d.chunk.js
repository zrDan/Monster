(this["webpackJsonpmonster-energy"]=this["webpackJsonpmonster-energy"]||[]).push([[0],{12:function(e,a,n){e.exports=n(29)},16:function(e,a,n){},23:function(e,a,n){},24:function(e,a,n){},28:function(e,a,n){},29:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),r=n(3),i=n.n(r);n(16);var o=function(){return s.a.createElement("nav",{className:"navigation"},s.a.createElement("div",{className:"brand"},s.a.createElement("img",{src:"/media/monster-energy/monster-energy.png",alt:"monster"})),s.a.createElement("div",{className:"navigation-options"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/news",target:"blank"},"noticias")),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/products/monster-energy",target:"blank"},"productos")),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/promotions",target:"blank"},"promociones")),s.a.createElement("div",{className:"entertainment"},"entretenimiento",s.a.createElement("ul",{className:"dropdown"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/sports/mxgp",target:"blank"},"deportes")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/music",target:"blank"},"musica")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/gaming",target:"blank"},"gaming"))))),s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"serachContainer"},s.a.createElement("div",{className:"textInput"},s.a.createElement("input",{type:"text",name:"",id:""})),s.a.createElement("i",{className:"fas fa-search"}))))},c=n(1);n(23);var l=function(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e.category})),n=function(a){return function(n){n.preventDefault(),e({type:"SET_CATEGORY_STATE",payload:a})}};return Object(t.useEffect)((function(){!function(){var n=document.getElementById("original"),t=document.getElementById("ultra"),s=document.getElementById("juice");"original"===a?(n.classList.add("monster-original-active"),t.classList.remove("monster-ultra-active"),s.classList.remove("monster-juice-active"),e({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-energy-brand.png",description:["\xa1Prueba una de las bebidas mas extremas del planeta, Monster\n    Energy\xae!","Es una mezcla brutal con una combinaci\xf3n ideal de ingredientes con\n    las proporciones exactas para darles el Monster\xae buzz que tanto les\n    gusta a nuestros fans de M\xe9xico. Monster\xae tiene un sabor intenso\n    pero suave.","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders,\n    geeks y hipsters... entonces a ti seguro te encantar\xe1.","Unleash The Beast"]}})):"ultra"===a?(n.classList.remove("monster-original-active"),t.classList.add("monster-ultra-active"),s.classList.remove("monster-juice-active")):(n.classList.remove("monster-original-active"),t.classList.remove("monster-ultra-active"),s.classList.add("monster-juice-active"),e({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/khaos.png",description:["Despu\xe9s de meses en el laboratorio, creamos Juice Monster.","Empezamos con nuestro sabor original de Monster, mezclamos una\n      combinaci\xf3n brutal de jugos naturales y le inyectamos nuestra famosa\n      mezcla.","It\xb4s alive...","KHAOS un h\xedbrido brutal de Jugo y Monster.","\xa130% Jugo - 100% Monster!","ENERGY + JUGO"]}}))}()}),[a]),s.a.createElement("section",null,s.a.createElement("div",{className:"monster-category"},s.a.createElement("div",{id:"ultra",className:"category-option",onClick:n("ultra")},s.a.createElement("img",{src:"/media/monster-ultra/monster-ultra.png",alt:"monster"})),s.a.createElement("div",{id:"original",className:"category-option",onClick:n("original")},s.a.createElement("img",{src:"/media/monster-energy/monster-energy.png",alt:"monster"})),s.a.createElement("div",{id:"juice",className:"category-option",onClick:n("juice")},s.a.createElement("img",{src:"/media/monster-juice/monster-juice.png",alt:"monster"}))))},m=n(5);var d=function(e){var a=e.content,n=void 0===a?[]:a;return s.a.createElement(s.a.Fragment,null,n.map((function(e){return s.a.createElement("p",{key:e},e)})))};var u=function(){var e=Object(c.c)((function(e){return e.monsterInfo})),a=Object(t.useState)(""),n=Object(m.a)(a,2),r=n[0],i=n[1],o=Object(c.b)(),l=function(e){return function(a){a.preventDefault();var n=document.getElementById("monster-energy"),t=document.getElementById("monster-44"),s=document.getElementById("monster-lo-carbs"),r=document.getElementById("monster-zero");"monster-original"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-energy-brand.png",description:["\xa1Prueba una de las bebidas mas extremas del planeta, Monster\n    Energy\xae!","Es una mezcla brutal con una combinaci\xf3n ideal de ingredientes con\n    las proporciones exactas para darles el Monster\xae buzz que tanto les\n    gusta a nuestros fans de M\xe9xico. Monster\xae tiene un sabor intenso\n    pero suave.","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders,\n    geeks y hipsters... entonces a ti seguro te encantar\xe1.","Unleash The Beast"]}}),n.classList.add("active-drink"),n.classList.remove("inactive"),t.classList.remove("active-drink"),t.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-44"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-44.png",description:["Cuando eres Lewis Hamilton, cuatro veces campe\xf3n mundial de F1, la vida se mueve a 15,000RPM y 320 KM/HR, recorrer un mundo en milisegundos necesita una bebida que le siga el paso.",'Ligero, dulce y refrescante, con un final acelerado, "44", te separar\xe1 del resto y te har\xe1 llevar la delantera.',"LH44"]}}),n.classList.remove("active-drink"),n.classList.add("inactive"),t.classList.add("active-drink"),t.classList.remove("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-lo"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-lo-carbs.png",description:["Prueba una de las bebidas m\xe1s extremas del planeta, Monster Energy!\xae","Ahora con bajas calor\xedas, sin sacrificar el sabor... eso es Lo-Carb Monster Energy!\xae","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders, geeks, y hipsters... entonces a ti seguro te encantar\xe1.","Lo Carb"]}}),n.classList.remove("active-drink"),n.classList.add("inactive"),t.classList.remove("active-drink"),t.classList.add("inactive"),s.classList.add("active-drink"),s.classList.remove("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-zero"===e&&(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-absolutely-zero.png",description:["Por a\xf1os, gente ha bombardeado nuestro email pidiendo un Monster\xae con menos calor\xedas. Ya lo tenemos... pero esta no es cualquier bebida!","Ahora, Absolutely Zero, con una composici\xf3n de energ\xeda re-formulada, un nuevo sistema de endulzante, y despu\xe9s de miles de intentos fracasados, \xa1Por fin lo perfeccionamos! ","Sin az\xfacar pero con el mismo Monster\xae buzz...","Absolutely Guaranteed!"]}}),n.classList.remove("active-drink"),n.classList.add("inactive"),t.classList.remove("active-drink"),t.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.add("active-drink"),r.classList.remove("inactive"))}};return Object(t.useEffect)((function(){i(e)}),[e]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description animation-container"},s.a.createElement("div",{className:"brand-banner  animation-container"},s.a.createElement("img",{src:r.cover,alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description  animation-container"},s.a.createElement(d,{content:r.description}))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"monster-energy",className:"active-drink",onClick:l("monster-original")},s.a.createElement("img",{src:"/media/monster-energy/monster-energy-drink.png",alt:"monster"})),s.a.createElement("div",{id:"monster-44",className:"inactive",onClick:l("monster-44")},s.a.createElement("img",{src:"/media/monster-energy/monster-44-drink.png",alt:"monster"})),s.a.createElement("div",{id:"monster-lo-carbs",className:"inactive",onClick:l("monster-lo")},s.a.createElement("img",{src:"/media/monster-energy/monster-lo-carbs-drink.png",alt:"monster"})),s.a.createElement("div",{id:"monster-zero",className:"inactive",onClick:l("monster-zero")},s.a.createElement("img",{src:"/media/monster-energy/monster-absolutely-zero-drink.png",alt:"monster"}))))};var v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description animation-container"},s.a.createElement("div",{className:"brand-banner"},s.a.createElement("img",{src:"/media/monster-ultra/zero-ultra.png",alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description"},s.a.createElement("p",null,"Algunas personas son dificiles de complacer y en cuanto consiguen lo que quieren, siempre desean algo m\xe1s. Nuestros atletas y Monster Girls\u2122 no son la excepci\xf3n... \xfaltimamente nos han enviado algunas indirectas."),s.a.createElement("p",null,"Nos han estado pidiendo una nueva bebida Monster\xae menos dulce, baja en calor\xedas, de sabor m\xe1s ligero, pero con todo el poder de nuestra mezcla Monster\xae."),s.a.createElement("p",null,"Ahora... el blanco es el nuevo negro \xa1No nos contuvimos! Monster Energy Zero Ultra\xae"),s.a.createElement("p",null,s.a.createElement("b",null,"Unleash The Ultra Beast!")))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"zero-ultra",className:"active-drink"},s.a.createElement("img",{src:"/media/monster-ultra/zero-ultra-drink.png",alt:"monster"}))))};var p=function(){var e=Object(c.c)((function(e){return e.monsterInfo})),a=Object(t.useState)(""),n=Object(m.a)(a,2),r=n[0],i=n[1],o=Object(c.b)(),l=function(e){return function(a){a.preventDefault();var n=document.getElementById("khaos"),t=document.getElementById("mango-loco"),s=document.getElementById("pipeline-punch");"monster-khaos"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/khaos.png",description:["Despu\xe9s de meses en el laboratorio, creamos Juice Monster.","Empezamos con nuestro sabor original de Monster, mezclamos una\n      combinaci\xf3n brutal de jugos naturales y le inyectamos nuestra famosa\n      mezcla.","It\xb4s alive...","KHAOS un h\xedbrido brutal de Jugo y Monster.","\xa130% Jugo - 100% Monster!","ENERGY + JUGO"]}}),n.classList.add("active-drink"),n.classList.remove("inactive"),t.classList.remove("active-drink"),t.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive")):"monster-mango"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/mango-loco.png",description:["En v\xedspera del 1 de noviembre a\xf1o tras a\xf1o, amigos y familiares se re\xfanen para celebrar el D\xeda de Muertos.","Ofrendas llenas de misticismo, comida y bebidas atraen las almas de los difuntos para unirse a la celebraci\xf3n.","Mango Loco es una mezcla celestial de jugos ex\xf3ticos que seguramente atraer\xe1 incluso al esp\xedritu m\xe1s obstinado.","ENERGIA QUE DA MIEDO"]}}),n.classList.remove("active-drink"),n.classList.add("inactive"),t.classList.add("active-drink"),t.classList.remove("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive")):"monster-punch"===e&&(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/pipeline-puch.png",description:["Banzai Pipeline es una de las olas m\xe1s famosas del mundo localizada en la legendaria costa norte de la isla hawaiana de Oahu, cobra vida durante algunos meses de cada invierno.","En honor esta \xe9pica fuerza de la naturaleza, creamos Juice Monster Pipeline Punch. La mezcla perfecta de los mejores sabores que Haw\xe1i puede ofrecer: ","maracuy\xe1, naranja y guayaba combinados con nuestra famosa mezcla Monster.","BANZAI !"]}}),n.classList.remove("active-drink"),n.classList.add("inactive"),t.classList.remove("active-drink"),t.classList.add("inactive"),s.classList.add("active-drink"),s.classList.remove("inactive"))}};return Object(t.useEffect)((function(){i(e)}),[e]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description"},s.a.createElement("div",{className:"brand-banner  animation-container"},s.a.createElement("img",{src:r.cover,alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description  animation-container"},s.a.createElement(d,{content:r.description}))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"khaos",className:"active-drink",onClick:l("monster-khaos")},s.a.createElement("img",{src:"/media/monster-juice/khaos-drink.png",alt:"monster"})),s.a.createElement("div",{id:"mango-loco",className:"inactive",onClick:l("monster-mango")},s.a.createElement("img",{src:"/media/monster-juice/mango-loco-drink.png",alt:"monster"})),s.a.createElement("div",{id:"pipeline-punch",className:"inactive",onClick:l("monster-punch")},s.a.createElement("img",{src:"/media/monster-juice/pipeline-punch-drink.png",alt:"monster"}))))};n(24);var g=function(){var e=Object(c.c)((function(e){return e.category}));function a(){return"original"===e?s.a.createElement(u,null):"ultra"===e?s.a.createElement(v,null):s.a.createElement(p,null)}return Object(t.useEffect)((function(){a()}),[e]),s.a.createElement("section",null,s.a.createElement("div",{className:"monster-container"},s.a.createElement("div",{id:"monster-container",className:"monster-presentation"},a())))};var E=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App"},s.a.createElement(o,null),s.a.createElement(l,null),s.a.createElement(g,null)))},b=n(2);n(25);var y=n(4),f=Object(y.b)((function(e,a){switch(e.category,a.type){case"SET_CATEGORY_STATE":return Object(b.a)(Object(b.a)({},e),{},{category:a.payload});case"SET_MONSTER_INFO":var n=a.payload.cover,t=a.payload.description;return Object(b.a)(Object(b.a)({},e),{},{monsterInfo:{cover:n,description:t}});default:return Object(b.a)({},e)}}),{category:"original",monsterInfo:{cover:"",description:[]}});n(28);i.a.render(s.a.createElement(c.a,{store:f},s.a.createElement(E,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.66375e3d.chunk.js.map