(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),i=(n(14),n(1)),l=n(2),s=n(4),o=n(3),m=n(5),p=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"layout",className:"pure-g"},r.a.createElement(h,null),r.a.createElement(d,null))}}]),t}(a.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar pure-u-1 pure-u-md-1-4"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",{className:"brand-tagline"},"Binge Brewery Search ")))}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={isLoading:!0,items:[],error:null,apiUrl:"https://murmuring-basin-65291.herokuapp.com/breweries?page=1&count=50"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchBreweries()}},{key:"fetchBreweries",value:function(){var e=this;fetch(this.state.apiUrl).then(function(e){return e.json()}).then(function(t){return e.setState({items:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=(e.isLoading,e.items),n=e.error;return r.a.createElement("div",{className:"content pure-u-1 pure-u-md-3-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"searchform"},r.a.createElement("form",{className:"pure-form"},r.a.createElement("fieldset",null,r.a.createElement("input",{type:"text",className:"pure-input-rounded",placeholder:"search.."}),r.a.createElement("button",{type:"submit",className:"pure-button pure-button-primary"},"Search")))),n?r.a.createElement("p",null,n.message):null,r.a.createElement("ul",null,t.map(function(e){e.id;var t=e.name;return r.a.createElement("li",null,t)}))),r.a.createElement(f,null))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.a.createElement("ul",null,r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://naveenhn.in/",className:"pure-menu-link"},"About")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://twitter.com/naveenhn/",className:"pure-menu-link"},"Twitter")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://github.com/naveenhn/",className:"pure-menu-link"},"GitHub")))))}}]),t}(a.Component),b=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.697ba5e7.chunk.js.map