(this.webpackJsonpmovie_info=this.webpackJsonpmovie_info||[]).push([[5],{141:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru",a={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"};return""===e?null:new Date(e).toLocaleString(t,a)}},142:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(11),i=(a(143),a(141));t.a=function(e){var t=e.data,a=e.type,r=e.id,l=6,m=t?t.length:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",c={};return"movie cast"===a.context&&(c={title:"\u0410\u043a\u0442\u0435\u0440\u044b",text:{name:"name",job:"character"},img:{property:"profile_path",no_photo:"/img/no_photo.jpg",path:"https://image.tmdb.org/t/p/w138_and_h175_face"},target:"/people/",more_link:"/casts/",type:a.view}),"movie crew"===a.context&&(c={title:"\u0421\u044a\u0435\u043c\u043e\u0447\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430",text:{name:"name",job:"job"},img:{property:"profile_path",no_photo:"/img/no_photo.jpg",path:"https://image.tmdb.org/t/p/w138_and_h175_face"},target:"/people/",more_link:"/crew/",type:a.view}),"people cast"===a.context&&(c={title:"\u0424\u0438\u043b\u044c\u043c\u044b",text:{name:"title",job:"character"},img:{property:"poster_path",no_photo:"/img/no_poster.jpg",path:"https://image.tmdb.org/t/p/w500"},target:"/movie-info/",more_link:"/people-filmography/",type:a.view}),"people crew"===a.context&&(c={title:"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u043b(\u0430) \u0443\u0447\u0430\u0441\u0442\u0438\u0435",text:{name:"title",job:"job"},img:{property:"poster_path",no_photo:"/img/no_poster.jpg",path:"https://image.tmdb.org/t/p/w500"},target:"/movie-info/",more_link:"/people-crew/",type:a.view}),n.a.createElement(n.a.Fragment,null,"  ",m>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"credits_tittle bg-primary"},n.a.createElement("span",{className:"text-white"},c.title,":")),n.a.createElement("div",{className:c.type+"_list_wrap border"},t&&t.map((function(e,t){return r||(l=m),t<l?n.a.createElement("div",{key:t,className:c.type+"_list border"},n.a.createElement("div",{className:c.type+"_photo"},n.a.createElement(o.b,{to:c.target+e.id,className:"link"},n.a.createElement("img",{className:"border",src:e[c.img.property]?c.img.path+e[c.img.property]:c.img.no_photo,alt:"\u043f\u0440\u043e\u0444\u0430\u0439\u043b"}))),n.a.createElement("div",{className:"list_text"},n.a.createElement("div",null,n.a.createElement(o.b,{to:c.target+e.id,className:"link"},e[c.text.name]&&e[c.text.name])),n.a.createElement("div",null,n.a.createElement("i",null,e[c.text.job]&&e[c.text.job])),"people cast"===a.context||"people crew"===a.context?n.a.createElement("div",null,n.a.createElement("i",null,Object(i.a)(e.release_date))):"")):null})),t&&t.length>l?r&&n.a.createElement("div",{className:c.type+"_list border"},n.a.createElement(o.b,{to:c.more_link+r,className:"link"},"\u0415\u0449\u0435...")):"",t&&0===t.length&&"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")))}},143:function(e,t,a){},144:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(0),o=a.n(n),i=a(19),l=a(15),m=a(11),c=a(28),p=a(35),s=(a(144),a(142)),g=function(e){var t=e.getCredits,a=e.getDetails,i=e.movie_info,l=e.credits,c=Object(r.a)(e,["getCredits","getDetails","movie_info","credits"]);return console.log(l),Object(n.useEffect)((function(){var e=c.match.params.movie_id;a(e),t(e)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"realeases_header border"},o.a.createElement("div",{className:"realeases_poster"},o.a.createElement(m.b,{to:"/movie-info/".concat(c.match.params.movie_id),className:"link"},o.a.createElement("img",{src:i.poster_path?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(i.poster_path):"/img/no_poster.jpg",alt:"\u043f\u043e\u0441\u0442\u0435\u0440"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f")),o.a.createElement("div",{className:"realeases_text"},o.a.createElement("h4",null,i.title)),o.a.createElement("br",null)),o.a.createElement(s.a,{id:null,data:l.cast,type:{context:"movie cast",view:"vertical"}}))};g=Object(l.d)(Object(i.b)((function(e){return{movie_info:e.movies.movie_info,credits:e.movies.credits}}),{getCredits:p.c,getDetails:p.d}),c.g)(g),t.default=g}}]);
//# sourceMappingURL=5.2a8fbb45.chunk.js.map