(this["webpackJsonpmonster-energy"]=this["webpackJsonpmonster-energy"]||[]).push([[0],{12:function(e,a,t){e.exports=t(29)},16:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),i=t.n(r);t(16);var o=function(){return s.a.createElement("nav",{className:"navigation"},s.a.createElement("div",{className:"brand"},s.a.createElement("img",{src:"/media/monster-energy/monster-energy.webp",alt:"monster"})),s.a.createElement("div",{className:"navigation-options"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/news",target:"blank"},"noticias")),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/products/monster-energy",target:"blank"},"productos")),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/promotions",target:"blank"},"promociones")),s.a.createElement("div",{className:"entertainment"},"entretenimiento",s.a.createElement("ul",{className:"dropdown"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/sports/mxgp",target:"blank"},"deportes")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/music",target:"blank"},"musica")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.monsterenergy.com/mx/es_mx/gaming",target:"blank"},"gaming"))))),s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"serachContainer"},s.a.createElement("div",{className:"textInput"},s.a.createElement("input",{type:"text",name:"",id:""})),s.a.createElement("i",{className:"fas fa-search"}))))},c=t(1);t(23);var l=function(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e.category})),t=function(a){return function(t){t.preventDefault(),e({type:"SET_CATEGORY_STATE",payload:a})}};return Object(n.useEffect)((function(){!function(){var t=document.getElementById("original"),n=document.getElementById("ultra"),s=document.getElementById("juice");"original"===a?(t.classList.add("monster-original-active"),n.classList.remove("monster-ultra-active"),s.classList.remove("monster-juice-active"),e({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-energy-brand.webp",description:["\xa1Prueba una de las bebidas mas extremas del planeta, Monster\n    Energy\xae!","Es una mezcla brutal con una combinaci\xf3n ideal de ingredientes con\n    las proporciones exactas para darles el Monster\xae buzz que tanto les\n    gusta a nuestros fans de M\xe9xico. Monster\xae tiene un sabor intenso\n    pero suave.","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders,\n    geeks y hipsters... entonces a ti seguro te encantar\xe1.","Unleash The Beast"]}})):"ultra"===a?(t.classList.remove("monster-original-active"),n.classList.add("monster-ultra-active"),s.classList.remove("monster-juice-active")):(t.classList.remove("monster-original-active"),n.classList.remove("monster-ultra-active"),s.classList.add("monster-juice-active"),e({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/khaos.webp",description:["Despu\xe9s de meses en el laboratorio, creamos Juice Monster.","Empezamos con nuestro sabor original de Monster, mezclamos una\n      combinaci\xf3n brutal de jugos naturales y le inyectamos nuestra famosa\n      mezcla.","It\xb4s alive...","KHAOS un h\xedbrido brutal de Jugo y Monster.","\xa130% Jugo - 100% Monster!","ENERGY + JUGO"]}}))}()}),[a]),s.a.createElement("section",null,s.a.createElement("div",{className:"monster-category"},s.a.createElement("div",{id:"ultra",className:"category-option",onClick:t("ultra")},s.a.createElement("img",{src:"/media/monster-ultra/monster-ultra.webp",alt:"monster"})),s.a.createElement("div",{id:"original",className:"category-option",onClick:t("original")},s.a.createElement("img",{src:"/media/monster-energy/monster-energy.webp",alt:"monster"})),s.a.createElement("div",{id:"juice",className:"category-option",onClick:t("juice")},s.a.createElement("img",{src:"/media/monster-juice/monster-juice.webp",alt:"monster"}))))},m=t(5);var d=function(e){var a=e.content,t=void 0===a?[]:a;return s.a.createElement(s.a.Fragment,null,t.map((function(e){return s.a.createElement("p",{key:e},e)})))};var u=function(){var e=Object(c.c)((function(e){return e.monsterInfo})),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],i=t[1],o=Object(c.b)(),l=function(e){return function(a){a.preventDefault();var t=document.getElementById("monster-energy"),n=document.getElementById("monster-44"),s=document.getElementById("monster-lo-carbs"),r=document.getElementById("monster-zero");"monster-original"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-energy-brand.webp",description:["\xa1Prueba una de las bebidas mas extremas del planeta, Monster\n    Energy\xae!","Es una mezcla brutal con una combinaci\xf3n ideal de ingredientes con\n    las proporciones exactas para darles el Monster\xae buzz que tanto les\n    gusta a nuestros fans de M\xe9xico. Monster\xae tiene un sabor intenso\n    pero suave.","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders,\n    geeks y hipsters... entonces a ti seguro te encantar\xe1.","Unleash The Beast"]}}),t.classList.add("active-drink"),t.classList.remove("inactive"),n.classList.remove("active-drink"),n.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-44"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-44.webp",description:["Cuando eres Lewis Hamilton, cuatro veces campe\xf3n mundial de F1, la vida se mueve a 15,000RPM y 320 KM/HR, recorrer un mundo en milisegundos necesita una bebida que le siga el paso.",'Ligero, dulce y refrescante, con un final acelerado, "44", te separar\xe1 del resto y te har\xe1 llevar la delantera.',"LH44"]}}),t.classList.remove("active-drink"),t.classList.add("inactive"),n.classList.add("active-drink"),n.classList.remove("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-lo"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-lo-carbs.webp",description:["Prueba una de las bebidas m\xe1s extremas del planeta, Monster Energy!\xae","Ahora con bajas calor\xedas, sin sacrificar el sabor... eso es Lo-Carb Monster Energy!\xae","Les encanta a los atletas, surfistas, m\xfasicos, skaters, riders, geeks, y hipsters... entonces a ti seguro te encantar\xe1.","Lo Carb"]}}),t.classList.remove("active-drink"),t.classList.add("inactive"),n.classList.remove("active-drink"),n.classList.add("inactive"),s.classList.add("active-drink"),s.classList.remove("inactive"),r.classList.remove("active-drink"),r.classList.add("inactive")):"monster-zero"===e&&(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-energy/monster-absolutely-zero.webp",description:["Por a\xf1os, gente ha bombardeado nuestro email pidiendo un Monster\xae con menos calor\xedas. Ya lo tenemos... pero esta no es cualquier bebida!","Ahora, Absolutely Zero, con una composici\xf3n de energ\xeda re-formulada, un nuevo sistema de endulzante, y despu\xe9s de miles de intentos fracasados, \xa1Por fin lo perfeccionamos! ","Sin az\xfacar pero con el mismo Monster\xae buzz...","Absolutely Guaranteed!"]}}),t.classList.remove("active-drink"),t.classList.add("inactive"),n.classList.remove("active-drink"),n.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive"),r.classList.add("active-drink"),r.classList.remove("inactive"))}};return Object(n.useEffect)((function(){i(e)}),[e]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description animation-container"},s.a.createElement("div",{className:"brand-banner  animation-container"},s.a.createElement("img",{src:r.cover,alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description  animation-container"},s.a.createElement(d,{content:r.description}))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"monster-energy",className:"active-drink",onClick:l("monster-original")},s.a.createElement("img",{src:"/media/monster-energy/monster-energy-drink.webp",alt:"monster"})),s.a.createElement("div",{id:"monster-44",className:"inactive",onClick:l("monster-44")},s.a.createElement("img",{src:"/media/monster-energy/monster-44-drink.webp",alt:"monster"})),s.a.createElement("div",{id:"monster-lo-carbs",className:"inactive",onClick:l("monster-lo")},s.a.createElement("img",{src:"/media/monster-energy/monster-lo-carbs-drink.webp",alt:"monster"})),s.a.createElement("div",{id:"monster-zero",className:"inactive",onClick:l("monster-zero")},s.a.createElement("img",{src:"/media/monster-energy/monster-absolutely-zero-drink.webp",alt:"monster"}))))};var v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description animation-container"},s.a.createElement("div",{className:"brand-banner"},s.a.createElement("img",{src:"/media/monster-ultra/zero-ultra.webp",alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description"},s.a.createElement("p",null,"Algunas personas son dificiles de complacer y en cuanto consiguen lo que quieren, siempre desean algo m\xe1s. Nuestros atletas y Monster Girls\u2122 no son la excepci\xf3n... \xfaltimamente nos han enviado algunas indirectas."),s.a.createElement("p",null,"Nos han estado pidiendo una nueva bebida Monster\xae menos dulce, baja en calor\xedas, de sabor m\xe1s ligero, pero con todo el poder de nuestra mezcla Monster\xae."),s.a.createElement("p",null,"Ahora... el blanco es el nuevo negro \xa1No nos contuvimos! Monster Energy Zero Ultra\xae"),s.a.createElement("p",null,s.a.createElement("b",null,"Unleash The Ultra Beast!")))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"zero-ultra",className:"active-drink"},s.a.createElement("img",{src:"/media/monster-ultra/zero-ultra-drink.webp",alt:"monster"}))))};var p=function(){var e=Object(c.c)((function(e){return e.monsterInfo})),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],i=t[1],o=Object(c.b)(),l=function(e){return function(a){a.preventDefault();var t=document.getElementById("khaos"),n=document.getElementById("mango-loco"),s=document.getElementById("pipeline-punch");"monster-khaos"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/khaos.webp",description:["Despu\xe9s de meses en el laboratorio, creamos Juice Monster.","Empezamos con nuestro sabor original de Monster, mezclamos una\n      combinaci\xf3n brutal de jugos naturales y le inyectamos nuestra famosa\n      mezcla.","It\xb4s alive...","KHAOS un h\xedbrido brutal de Jugo y Monster.","\xa130% Jugo - 100% Monster!","ENERGY + JUGO"]}}),t.classList.add("active-drink"),t.classList.remove("inactive"),n.classList.remove("active-drink"),n.classList.add("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive")):"monster-mango"===e?(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/mango-loco.webp",description:["En v\xedspera del 1 de noviembre a\xf1o tras a\xf1o, amigos y familiares se re\xfanen para celebrar el D\xeda de Muertos.","Ofrendas llenas de misticismo, comida y bebidas atraen las almas de los difuntos para unirse a la celebraci\xf3n.","Mango Loco es una mezcla celestial de jugos ex\xf3ticos que seguramente atraer\xe1 incluso al esp\xedritu m\xe1s obstinado.","ENERGIA QUE DA MIEDO"]}}),t.classList.remove("active-drink"),t.classList.add("inactive"),n.classList.add("active-drink"),n.classList.remove("inactive"),s.classList.remove("active-drink"),s.classList.add("inactive")):"monster-punch"===e&&(o({type:"SET_MONSTER_INFO",payload:{cover:"/media/monster-juice/pipeline-puch.webp",description:["Banzai Pipeline es una de las olas m\xe1s famosas del mundo localizada en la legendaria costa norte de la isla hawaiana de Oahu, cobra vida durante algunos meses de cada invierno.","En honor esta \xe9pica fuerza de la naturaleza, creamos Juice Monster Pipeline Punch. La mezcla perfecta de los mejores sabores que Haw\xe1i puede ofrecer: ","maracuy\xe1, naranja y guayaba combinados con nuestra famosa mezcla Monster.","BANZAI !"]}}),t.classList.remove("active-drink"),t.classList.add("inactive"),n.classList.remove("active-drink"),n.classList.add("inactive"),s.classList.add("active-drink"),s.classList.remove("inactive"))}};return Object(n.useEffect)((function(){i(e)}),[e]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"monster-description"},s.a.createElement("div",{className:"brand-banner  animation-container"},s.a.createElement("img",{src:r.cover,alt:"monster",className:"banner-img"})),s.a.createElement("div",{className:"description  animation-container"},s.a.createElement(d,{content:r.description}))),s.a.createElement("div",{className:"monster-type  animation-container"},s.a.createElement("div",{id:"khaos",className:"active-drink",onClick:l("monster-khaos")},s.a.createElement("img",{src:"/media/monster-juice/khaos-drink.webp",alt:"monster"})),s.a.createElement("div",{id:"mango-loco",className:"inactive",onClick:l("monster-mango")},s.a.createElement("img",{src:"/media/monster-juice/mango-loco-drink.webp",alt:"monster"})),s.a.createElement("div",{id:"pipeline-punch",className:"inactive",onClick:l("monster-punch")},s.a.createElement("img",{src:"/media/monster-juice/pipeline-punch-drink.webp",alt:"monster"}))))};t(24);var E=function(){var e=Object(c.c)((function(e){return e.category}));function a(){return"original"===e?s.a.createElement(u,null):"ultra"===e?s.a.createElement(v,null):s.a.createElement(p,null)}return Object(n.useEffect)((function(){a()}),[e]),s.a.createElement("section",null,s.a.createElement("div",{className:"monster-container"},s.a.createElement("div",{id:"monster-container",className:"monster-presentation"},a())))};var g=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App"},s.a.createElement(o,null),s.a.createElement(l,null),s.a.createElement(E,null)))},b=t(2);t(25);var y=t(4),f=Object(y.b)((function(e,a){switch(e.category,a.type){case"SET_CATEGORY_STATE":return Object(b.a)(Object(b.a)({},e),{},{category:a.payload});case"SET_MONSTER_INFO":var t=a.payload.cover,n=a.payload.description;return Object(b.a)(Object(b.a)({},e),{},{monsterInfo:{cover:t,description:n}});default:return Object(b.a)({},e)}}),{category:"original",monsterInfo:{cover:"",description:[]}});t(28);i.a.render(s.a.createElement(c.a,{store:f},s.a.createElement(g,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e514c862.chunk.js.map