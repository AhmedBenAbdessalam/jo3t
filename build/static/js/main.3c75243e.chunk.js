(this.webpackJsonpjo3t=this.webpackJsonpjo3t||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__1B1zh",image:"recipe_image__2HWwT",calories_icon:"recipe_calories_icon__32Bhu"}},,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(3)),s=a.n(o),l=a(6),m=a(2),u=(a(14),a(1)),p=a.n(u),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("img",{className:p.a.image,src:n,alt:""}),c.a.createElement("p",null,c.a.createElement("img",{className:p.a.calories_icon,src:"/jo3t/calories.svg"}),Math.round(a)),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))))},h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],p=o[1],h=Object(n.useState)("Beef"),g=Object(m.a)(h,2),d=g[0],b=g[1];Object(n.useEffect)((function(){E()}),[d]);var E=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("fed6c45f","&app_key=").concat("f47a2a953b6d5195abee62f29101cb9c"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{className:"App-logo",src:"/jo3t/logo.png"})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(u),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3c75243e.chunk.js.map