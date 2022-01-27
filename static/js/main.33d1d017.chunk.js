(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(7),r=s.n(c),i=(s(13),s(0));function o(){return Object(i.jsx)("nav",{className:"blue-grey darken-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#!",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"page-footer blue-grey darken-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=s(2),d=s(3),j=s(5),b=s(4),v=s(8);function u(e){var t=e.Title,s=e.Year,a=e.imdbID,n=e.Type,c=e.Poster;return Object(i.jsxs)("div",{id:a,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===c?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x420?text=".concat(t),alt:""}):Object(i.jsx)("img",{className:"activator",src:c,alt:""})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[s," ",Object(i.jsx)("span",{className:"right",children:n})]})]})]})}function p(e){var t=e.moviesList,s=void 0===t?[]:t;return Object(i.jsx)("div",{className:"moviesList",children:s.length?s.map((function(e){return Object(i.jsx)(u,Object(v.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found"})})}var m=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"iron man",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e.handleSort=function(t){e.props.sortMovies(e.state.search,e.state.type)},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]})]}),Object(i.jsx)("div",{className:"sortData",children:Object(i.jsx)("button",{className:"btn sort-btn",onClick:this.handleSort,children:"Sort by date"})})]})})}}]),s}(n.a.Component);function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x="64205d2",f=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={moviesList:[],sortList:[],loading:!0,direction:!0},e.searchMovies=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iron man",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==s?"&type=".concat(s):"")).then((function(e){return e.json()})).then((function(t){return e.setState({moviesList:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e.sortMovies=function(){!0===e.state.direction?e.setState({sortList:e.state.moviesList.sort((function(e,t){return e.Year>t.Year?1:e.Year<t.Year?-1:0}))}):e.setState({sortList:e.state.moviesList.reverse((function(e,t){return e.Year>t.Year?1:e.Year<t.Year?-1:0}))}),e.setState({direction:!1===e.state.direction})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=iron man")).then((function(e){return e.json()})).then((function(t){return e.setState({moviesList:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.moviesList,s=e.loading,a=e.sortList,n=e.direction;return console.log(a,n),Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(m,{searchMovies:this.searchMovies,sortMovies:this.sortMovies}),s?Object(i.jsx)(O,{}):Object(i.jsx)(p,{moviesList:t})]})}}]),s}(n.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33d1d017.chunk.js.map