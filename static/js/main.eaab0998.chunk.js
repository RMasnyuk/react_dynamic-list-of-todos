(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),i=a.n(l);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(7),s=a(4),c=a(5),d=a(9),u=a(6),m=a(1),h=a(8);a(17);var b=function(e){return o.a.createElement("td",null,e.name)};var p=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.item),o.a.createElement(b,{name:e.name}),o.a.createElement("td",{className:"completed"===e.complete?"completed":"notcompleted"},e.complete))};var f=function(e){var t=e.list.map(function(t){var a=e.users.find(function(e){return e.id===t.userId});return o.a.createElement(p,{key:t.id,item:t.title,name:a.name,complete:t.completed?"completed":"not completed"})});return o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{onClick:e.sort},"Title(click to sort)"),o.a.createElement("td",null,"User"),o.a.createElement("td",null,"Status")),t))},v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={todoList:[],users:[],loaded:!1,isLoading:!1,disabled:!1},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e.sortTable=e.sortTable.bind(Object(m.a)(e)),e.loadData=e.loadData.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"loadData",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"handleClick",value:function(){var e=this;this.setState({isLoading:!0,disabled:!0}),Promise.all([this.loadData("https://jsonplaceholder.typicode.com/todos"),this.loadData("https://jsonplaceholder.typicode.com/users")]).then(function(t){var a=Object(r.a)(t,2),n=a[0],o=a[1];return e.setState({loaded:!0,todoList:n,users:o})})}},{key:"sortTable",value:function(){this.setState({todoList:this.state.todoList.sort(function(e,t){return e.title.localeCompare(t.title)})})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.loaded?o.a.createElement(f,{list:this.state.todoList,users:this.state.users,sort:this.sortTable}):o.a.createElement("div",null,o.a.createElement("button",{onClick:this.handleClick,disabled:this.state.disabled},"Load"),this.state.isLoading?o.a.createElement("div",{id:"load"},"Loading..."):null))}}]),t}(n.Component);i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.eaab0998.chunk.js.map