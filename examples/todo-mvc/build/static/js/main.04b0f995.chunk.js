(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,l){e.exports=l(23)},22:function(e,t,l){},23:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),c=l(6),o=l.n(c),r=(l(22),l(5)),m=l.n(r),s=l(4),i=Object(s.a)({all:[],filter:"all",get isEmpty(){return 0===i.all.length},get completed(){return i.all.filter(function(e){return e.completed})},get hasCompleted(){return 0!==i.completed.length},get allCompleted(){return i.all.every(function(e){return e.completed})},set allCompleted(e){i.all.forEach(function(t){t.completed=e})},get active(){return i.all.filter(function(e){return!e.completed})},create:function(e){i.all.push({title:e})},remove:function(e){i.all.splice(e,1)},toggle:function(e){var t=i.all[e];t.completed=!t.completed},toggleAll:function(){i.allCompleted=!i.allCompleted},clearCompleted:function(){i.all=i.active}}),u=i,d=Object(s.b)(function(e){var t=e.id,l=e.title,a=e.completed,c=void 0!==a&&a,o=m()({view:!0,completed:c});return n.a.createElement("li",{className:o},n.a.createElement("input",{className:"toggle",type:"checkbox",checked:c,onChange:function(){return u.toggle(t)}}),n.a.createElement("label",null,l),n.a.createElement("button",{onClick:function(){return u.remove(t)},className:"destroy"}))});function p(e){u.filter=e.target.value}function g(e){13===e.keyCode&&e.target.value&&(u.create(e.target.value),e.target.value="")}var f=Object(s.b)(function(){var e=u.isEmpty,t=u.hasCompleted,l=u.allCompleted,a=u.active,c=u.filter,o=u.toggleAll,r=u.clearCompleted,s=m()({selected:"all"===c}),i=m()({selected:"completed"===c}),f=m()({selected:"active"===c});return n.a.createElement("div",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{onKeyUp:g,className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})),!e&&n.a.createElement("section",{className:"main"},n.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:l,onChange:o}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},u[c].map(function(e,t){return n.a.createElement(d,Object.assign({},e,{id:t,key:t}))}))),!e&&n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},a.length," items left"),n.a.createElement("div",{className:"filters"},n.a.createElement("button",{className:s,value:"all",onClick:p},"All"),n.a.createElement("button",{className:f,value:"active",onClick:p},"Active"),n.a.createElement("button",{className:i,value:"completed",onClick:p},"Completed")),t&&n.a.createElement("button",{className:"clear-completed",onClick:r},"Clear completed")))});o.a.render(n.a.createElement(f,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.04b0f995.chunk.js.map