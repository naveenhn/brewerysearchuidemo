(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),u=(n(16),n(1)),i=n(2),s=n(3),m=n(5),o=n(4),h=n(6),d=n(9),p=n.n(d),b=(n(18),"Phoenix"),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"layout",className:"pure-g"},r.a.createElement(E,null),r.a.createElement(v,null))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar pure-u-1 pure-u-md-1-4"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{alt:"Breweries",className:"pure-img-responsive",src:p.a}),r.a.createElement("h2",{className:"brand-tagline"},"Brewery Search Demo ")))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isLoading:!0,items:[],error:null,query:b},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(Object(u.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(Object(u.a)(n))),n.handleSearch=n.handleSearch.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchBreweries()}},{key:"fetchBreweries",value:function(){var e=this;fetch("https://murmuring-basin-65291.herokuapp.com/breweries?page=1&count=15").then(function(e){return e.json()}).then(function(t){return e.setState({items:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"handleInputChange",value:function(e){this.setState({query:e.target.value})}},{key:"handleSearch",value:function(){var e=this;fetch("https://murmuring-basin-65291.herokuapp.com/breweries/search?page=1&count=15&query="+this.state.query).then(function(e){return e.json()}).then(function(t){return e.setState({items:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleSearch()}},{key:"render",value:function(){var e=this.state,t=(e.isLoading,e.items),n=e.error;return r.a.createElement("div",{className:"content pure-u-1 pure-u-md-3-4"},r.a.createElement("div",{class:"content.subheader"},r.a.createElement("h4",null,r.a.createElement("em",null,'"He was a wise man who invented Beer!"     -unknown'))),r.a.createElement("div",{className:"searchform"},r.a.createElement("form",{className:"pure-form",onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("input",{type:"text",className:"pure-input-rounded",placeholder:"search..",onChange:this.handleInputChange})," \xa0",r.a.createElement("button",{type:"button",className:"pure-button pure-button-primary",onClick:this.handleSearch},"Search")))),n?r.a.createElement("p",null,n.message):null,r.a.createElement("div",{className:"results"},r.a.createElement("table",{className:"pure-table pure-table-horizontal"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Street"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Website"))),r.a.createElement("tbody",null,t.map(function(e){var t=e.name,n=e.breweryType,a=e.street,l=e.city,c=e.state,u=e.phone,i=e.websiteUrl;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,u),r.a.createElement("td",null,i))})))),r.a.createElement(g,null))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.a.createElement("ul",null,r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://naveenhn.in/",className:"pure-menu-link"},"About")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"https://github.com/naveenhn/brewerysearchuidemo",className:"pure-menu-link"},"GitHub")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement("a",{href:"http://freedesignfile.com/",className:"pure-menu-link"}," Logo from freedesignfile")))))}}]),t}(a.Component),y=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/retrobeer.cf172707.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.1248ab87.chunk.js.map