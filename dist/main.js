!function(e){var l={};function c(o){if(l[o])return l[o].exports;var r=l[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=l,c.d=function(e,l,o){c.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,l){if(1&l&&(e=c(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var r in e)c.d(o,r,function(l){return e[l]}.bind(null,r));return o},c.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(l,"a",l),l},c.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},c.p="",c(c.s=0)}([function(e,l){!function(){const e=document.querySelector(".board");"87654321".split("").forEach((l,c)=>{const o=`<div class="row-${l}"></div>`;e.insertAdjacentHTML("beforeend",o);const r=document.querySelector(`.row-${l}`);r.classList.add("board-row");"abcdefgh".split("").forEach(e=>{let l="",o=c%2==0;const t="abcdefgh".indexOf(e)%2==0;l=o?t?`<div class="col-${e} white board-square"></div>`:`<div class="col-${e} black board-square"></div>`:t?`<div class="col-${e} black board-square"></div>`:`<div class="col-${e} white board-square"></div>`,r.insertAdjacentHTML("beforeend",l)})})}(),function(){const e=document.querySelector(".row-2").children;[...Array(e.length).keys()].forEach(l=>{e[l].append("P")});const l=document.querySelector(".row-7").children;[...Array(l.length).keys()].forEach(e=>{l[e].append("P")}),[document.querySelector(".row-1 .col-a"),document.querySelector(".row-8 .col-a"),document.querySelector(".row-1 .col-h"),document.querySelector(".row-8 .col-h")].forEach(e=>e.append("R")),[document.querySelector(".row-1 .col-b"),document.querySelector(".row-1 .col-g"),document.querySelector(".row-8 .col-b"),document.querySelector(".row-8 .col-g")].forEach(e=>e.append("H")),[document.querySelector(".row-1 .col-c"),document.querySelector(".row-1 .col-f"),document.querySelector(".row-8 .col-c"),document.querySelector(".row-8 .col-f")].forEach(e=>e.append("B")),[document.querySelector(".row-1 .col-d"),document.querySelector(".row-8 .col-e")].forEach(e=>e.append("Q")),[document.querySelector(".row-1 .col-e"),document.querySelector(".row-8 .col-d")].forEach(e=>e.append("K*"))}();let c=0,o="",r="",t="Player 1";document.addEventListener("click",e=>{if(0===c)o=e.target,o.classList.add("selected-piece"),c+=1;else if(1===c){const l=o.textContent;o.textContent="",o.classList.remove("selected-piece"),r=e.target,r.textContent=l,r.classList.add("selected-move"),c+=1}else{"Player 1"===t&&(t="Player 2"),"Player 2"===t&&(t="Player 1"),c=0,r.classList.remove("selected-move");const e=document.querySelector(".player-info");e.textContent="",e.textContent=t+"turn"}});board={a1:{classSelector:".row-1 .col-a",piece:null},b1:{classSelector:".row-1 .col-b",piece:null},c1:{classSelector:".row-1 .col-c",piece:null},d1:{classSelector:".row-1 .col-d",piece:null},e1:{classSelector:".row-1 .col-e",piece:null},f1:{classSelector:".row-1 .col-f",piece:null},g1:{classSelector:".row-1 .col-g",piece:null},h1:{classSelector:".row-1 .col-h",piece:null},a2:{classSelector:".row-2 .col-a",piece:null},b2:{classSelector:".row-2 .col-b",piece:null},c2:{classSelector:".row-2 .col-c",piece:null},d2:{classSelector:".row-2 .col-d",piece:null},e2:{classSelector:".row-2 .col-e",piece:null},f2:{classSelector:".row-2 .col-f",piece:null},g2:{classSelector:".row-2 .col-g",piece:null},h2:{classSelector:".row-2 .col-h",piece:null},a3:{classSelector:".row-3 .col-a",piece:null},b3:{classSelector:".row-3 .col-b",piece:null},c3:{classSelector:".row-3 .col-c",piece:null},d3:{classSelector:".row-3 .col-d",piece:null},e3:{classSelector:".row-3 .col-e",piece:null},f3:{classSelector:".row-3 .col-f",piece:null},g3:{classSelector:".row-3 .col-g",piece:null},h3:{classSelector:".row-3 .col-h",piece:null},a4:{classSelector:".row-4 .col-a",piece:null},b4:{classSelector:".row-4 .col-b",piece:null},c4:{classSelector:".row-4 .col-c",piece:null},d4:{classSelector:".row-4 .col-d",piece:null},e4:{classSelector:".row-4 .col-e",piece:null},f4:{classSelector:".row-4 .col-f",piece:null},g4:{classSelector:".row-4 .col-g",piece:null},h4:{classSelector:".row-4 .col-h",piece:null},a5:{classSelector:".row-5 .col-a",piece:null},b5:{classSelector:".row-5 .col-b",piece:null},c5:{classSelector:".row-5 .col-c",piece:null},d5:{classSelector:".row-5 .col-d",piece:null},e5:{classSelector:".row-5 .col-e",piece:null},f5:{classSelector:".row-5 .col-f",piece:null},g5:{classSelector:".row-5 .col-g",piece:null},h5:{classSelector:".row-5 .col-h",piece:null},a6:{classSelector:".row-6 .col-a",piece:null},b6:{classSelector:".row-6 .col-b",piece:null},c6:{classSelector:".row-6 .col-c",piece:null},d6:{classSelector:".row-6 .col-d",piece:null},e6:{classSelector:".row-6 .col-e",piece:null},f6:{classSelector:".row-6 .col-f",piece:null},g6:{classSelector:".row-6 .col-g",piece:null},h6:{classSelector:".row-6 .col-h",piece:null},a7:{classSelector:".row-7 .col-a",piece:null},b7:{classSelector:".row-7 .col-b",piece:null},c7:{classSelector:".row-7 .col-c",piece:null},d7:{classSelector:".row-7 .col-d",piece:null},e7:{classSelector:".row-7 .col-e",piece:null},f7:{classSelector:".row-7 .col-f",piece:null},g7:{classSelector:".row-7 .col-g",piece:null},h7:{classSelector:".row-7 .col-h",piece:null},a8:{classSelector:".row-8 .col-a",piece:null},b8:{classSelector:".row-8 .col-b",piece:null},c8:{classSelector:".row-8 .col-c",piece:null},d8:{classSelector:".row-8 .col-d",piece:null},e8:{classSelector:".row-8 .col-e",piece:null},f8:{classSelector:".row-8 .col-f",piece:null},g8:{classSelector:".row-8 .col-g",piece:null},h8:{classSelector:".row-8 .col-h",piece:null}},console.log(board.a2.classSelector)}]);