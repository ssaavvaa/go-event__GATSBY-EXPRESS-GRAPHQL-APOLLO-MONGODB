(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{242:function(e,t,a){"use strict";a.r(t);a(36),a(5),a(254),a(160),a(162),a(37);var n=a(2),r=a.n(n),l=a(249),s=a(248),c=a(114),u=a(243),i=a(253),o=(a(293),a(20),a(267)),m=a.n(o),g=(a(263),a(244));function d(e,t,a,n,r,l,s){try{var c=e[l](s),u=c.value}catch(i){return void a(i)}c.done?t(u):Promise.resolve(u).then(n,r)}var v=Object(g.a)(function(e){var t=Object(n.useState)({message:""}),a=t[0],l=t[1],s=function(t){var a,n;t().then((a=m.a.mark(function t(a){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.data,l({message:""}),e.refetch();case 3:case"end":return t.stop()}},t)}),n=function(){var e=this,t=arguments;return new Promise(function(n,r){var l=a.apply(e,t);function s(e){d(l,n,r,s,c,"next",e)}function c(e){d(l,n,r,s,c,"throw",e)}s(void 0)})},function(e){return n.apply(this,arguments)}))},i=e.eventId,o=(e.getCurrentUser||"").username,g=a.message;return null!==e.getCurrentUser?r.a.createElement(n.Fragment,null,r.a.createElement(c.c,{mutation:u.j,variables:{username:o,eventId:i,message:g}},function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"bottom_messages"},r.a.createElement("input",{value:g,onChange:function(e){return function(e){var t=e.target.value;l({message:t})}(e)},type:"text",placeholder:"type your message"}),r.a.createElement("button",{onClick:function(){return s(e)},type:"submit"}," send message")))})):r.a.createElement("div",{className:"bottom_unAuth"},"LogIn to send messages")}),E=a(252),p=[];t.default=Object(g.a)(function(e){Object(n.useEffect)(function(){p=[],console.log(e),e.reFetchObservableQueries()},[]);var t=e.location.search.split("?_id=")[1];return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"sign-in"}),r.a.createElement(c.d,{query:u.f,variables:{_id:t}},function(e){var a=e.data,l=e.loading,s=e.error;if(l)return r.a.createElement(i.a,null);if(s)return r.a.createElement(E.a,{error:s});if(void 0===a)return r.a.createElement("div",{className:"deleted_page"},r.a.createElement("p",null,"THIS EVENT WAS DELETED BY CREATOR!"));var o=a.getEvent,m=o.messages,g=o.heading;return console.log(a),r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"main_heading_chat"},g),r.a.createElement("p",{className:"event_chat"},"Event Chat"),r.a.createElement("div",{className:"chat_window"},!m.length&&r.a.createElement("p",{className:"no_message"},"No message was created yet"),m.map(function(e){return r.a.createElement("div",{key:e._id,className:"message"},r.a.createElement("span",null,r.a.createElement("small",null,e.username)),":"," ",r.a.createElement("span",null,r.a.createElement("small",null,new Date(Number(e.createDate)).toDateString(),"__",new Date(Number(e.createDate)).getHours().toString().padStart(2,"0")," ",":",new Date(Number(e.createDate)).getMinutes().toString().padStart(2,"0")," ",":",new Date(Number(e.createDate)).getSeconds().toString().padStart(2,"0")," ")),r.a.createElement("p",null,r.a.createElement("strong",null,e.message)))}),r.a.createElement(c.e,{subscription:u.i,variables:{eventId:t}},function(e){var t=e.data;return e.loading,e.error,void 0!==t?(p.push(t.comment),p.map(function(e){return r.a.createElement("div",{key:e._id,className:"message"},r.a.createElement("span",null,r.a.createElement("small",null,e.username)),":"," ",r.a.createElement("span",null,r.a.createElement("small",null,new Date(Number(e.createDate)).toDateString(),"__",new Date(Number(e.createDate)).getHours().toString().padStart(2,"0")," ",":",new Date(Number(e.createDate)).getMinutes().toString().padStart(2,"0")," ",":",new Date(Number(e.createDate)).getSeconds().toString().padStart(2,"0")," ")),r.a.createElement("p",null,r.a.createElement("strong",null,e.message)))})):r.a.createElement("span",{className:"display_none"})})),r.a.createElement(v,{eventId:t}))}))})},254:function(e,t,a){"use strict";var n=a(16),r=a(255),l=a(159),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);n(n.P+n.F*s,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},255:function(e,t,a){var n=a(26),r=a(256),l=a(44);e.exports=function(e,t,a,s){var c=String(l(e)),u=c.length,i=void 0===a?" ":String(a),o=n(t);if(o<=u||""==i)return c;var m=o-u,g=r.call(i,Math.ceil(m/i.length));return g.length>m&&(g=g.slice(0,m)),s?g+c:c+g}},256:function(e,t,a){"use strict";var n=a(45),r=a(44);e.exports=function(e){var t=String(r(this)),a="",l=n(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}}}]);
//# sourceMappingURL=component---src-pages-event-index-js-993c9df4429e7558ff11.js.map