(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),u=(a(15),a(1)),i=a(2),m=a(4),s=a(3),o=a(5),h=a(8),p=a.n(h),d=(a(17),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"layout",className:"pure-g"},r.a.createElement(E,null),r.a.createElement(f,null))}}]),t}(n.Component)),E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar pure-u-1 pure-u-md-1-4"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{alt:"Breweries",className:"pure-img-responsive",src:p.a}),r.a.createElement("h2",{className:"brand-tagline"},"Brewery Search Demo ")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={isLoading:!0,items:[],error:null,apiUrl:"https://murmuring-basin-65291.herokuapp.com/breweries?page=1&count=25"},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchBreweries()}},{key:"fetchBreweries",value:function(){var e=this;fetch(this.state.apiUrl).then(function(e){return e.json()}).then(function(t){return e.setState({items:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=(e.isLoading,e.items),a=e.error;return r.a.createElement("div",{className:"content pure-u-1 pure-u-md-3-4"},r.a.createElement("div",null,r.a.createElement("div",{class:"content.subheader"},r.a.createElement("h1",null,"Next Beer!")),r.a.createElement("div",{className:"searchform"},r.a.createElement("form",{className:"pure-form"},r.a.createElement("fieldset",null,r.a.createElement("input",{type:"text",className:"pure-input-rounded",placeholder:"search.."})," \xa0",r.a.createElement("button",{type:"submit",className:"pure-button pure-button-primary"},"Search")))),a?r.a.createElement("p",null,a.message):null,r.a.createElement("table",{class:"pure-table pure-table-horizontal"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Website"))),r.a.createElement("tbody",null,t.map(function(e){e.id;var t=e.name,a=e.city,n=e.state,l=e.phone,c=e.websiteUrl;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c))})))),r.a.createElement(b,null))}}]),t}(n.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.a.createElement("ul",null,r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://naveenhn.in/",className:"pure-menu-link"},"About")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://twitter.com/naveenhn/",className:"pure-menu-link"},"Twitter")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://github.com/naveenhn/",className:"pure-menu-link"},"GitHub")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"http://freedesignfile.com/",className:"pure-menu-link"}," Logo from freedesignfile")))))}}]),t}(n.Component),v=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/retrobeer.cf172707.png"},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.0e0a0925.chunk.js.map