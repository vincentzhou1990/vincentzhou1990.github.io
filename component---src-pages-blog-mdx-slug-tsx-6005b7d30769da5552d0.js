(self.webpackChunkordinary_days=self.webpackChunkordinary_days||[]).push([[672],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9100:function(t,e,r){var n=r(9489),o=r(7067);function i(e,r,a){return o()?(t.exports=i=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.default=t.exports,t.exports.__esModule=!0),i.apply(null,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},8047:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(6771),o=r(7294),i=r(6725),a=r(2535),c=r(1091),l=r(1069),s=r(5444),u=r(3431);var p=(0,n.Z)("ul",{target:"e1mopddz1"})({name:"9kh76v",styles:"margin:var(--spacing-0);padding:var(--spacing-0);display:flex;flex-wrap:wrap;justify-content:space-between;padding:0;li{list-style:none;&:last-of-type{text-align:right;}a{color:var(--color-text-light);display:block;border-radius:3px;border:1px solid var(--color-border);padding:var(--spacing-2) var(--spacing-5);text-decoration:none;font-size:var(--fontSize-0);transition:0.3s ease border-color,0.2s ease color;&:hover{color:var(--color-primary);border-color:var(--color-primary);}}}"}),d=(0,n.Z)("div",{target:"e1mopddz0"})({name:"bksz7m",styles:"font-weight:var(--fontWeight-semibold);font-size:var(--fontSize-1);color:var(--color-primary)"}),f=function(t){var e=t.postNav;return(0,u.tZ)(p,null,(0,u.tZ)("li",null,e.newer&&(0,u.tZ)(s.Link,{to:"/blog/"+e.newer.slug,rel:"prev"},(0,u.tZ)("div",null,"上一篇"),(0,u.tZ)(d,null,"« ",e.newer.frontmatter.title))),(0,u.tZ)("li",null,e.older&&(0,u.tZ)(s.Link,{to:"/blog/"+e.older.slug,rel:"next"},(0,u.tZ)("div",null,"下一篇"),(0,u.tZ)(d,null,e.older.frontmatter.title," »"))))},m=r(4735);function v(t){var e=t.getBoundingClientRect();return e.top===e.bottom?v(t.parentNode):e}function h(t){var e,r=t.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3, .anchor.anchor__h4")),o=n.find((function(t){return v(t).top>=r}));return o?function(t){return t.top>0&&t.bottom<window.innerHeight/2}(v(o))?o:null!==(e=n[n.indexOf(o)-1])&&void 0!==e?e:null:n[n.length-1]}var g=function(t){var e=t.linkClassName,r=t.linkActiveClassName,n=t.anchorTopOffset,i=(0,o.useRef)(void 0);(0,o.useEffect)((function(){function t(){var t=function(t){return Array.from(document.getElementsByClassName(t))}(e),o=h({anchorTopOffset:n}),a=t.find((function(t){return o&&o.id===function(t){return decodeURIComponent(t.href.substring(t.href.indexOf("#")+1))}(t)}));t.forEach((function(t){!function(t,e){if(e){var n;i.current&&i.current!==t&&(null===(n=i.current)||void 0===n||n.classList.remove(r)),t.classList.add(r),i.current=t}else t.classList.remove(r)}(t,t===a)}))}return document.addEventListener("scroll",t),document.addEventListener("resize",t),t(),function(){document.removeEventListener("scroll",t),document.removeEventListener("resize",t)}}),[])};var y="toc-link",x="toc-link--active",b=(0,n.Z)("ul",{target:"ej990vg1"})("margin:var(--spacing-0);padding:var(--spacing-2);padding-left:",(function(t){return t.isChild?"var(--spacing-4)":"var(--spacing-2)"}),";li{list-style:none;}a{color:var(--color-text-light);text-decoration:none;&:hover{color:var(--color-primary);}}a.",x,"{color:var(--color-primary);}"),Z=function t(e){var r=e.toc,n=e.isChild,o=void 0!==n&&n;return r&&r.length?(0,u.tZ)(b,{isChild:o},r.map((function(e){return(0,u.tZ)("li",{key:e.url},(0,u.tZ)(s.Link,{to:e.url,className:y},e.title),(0,u.tZ)(t,{isChild:!0,toc:e.items}))}))):null},_=(0,n.Z)("div",{target:"ej990vg0"})({name:"1czhaam",styles:"position:sticky;top:var(--spacing-10);min-width:10rem;max-width:20rem;margin-left:var(--spacing-3);padding-left:var(--spacing-2);border-left:1px solid var(--color-border);font-size:var(--fontSize-0)"}),w=function(t){var e=t.toc;return g({linkClassName:y,linkActiveClassName:x,anchorTopOffset:40}),(0,u.tZ)(_,null,(0,u.tZ)(Z,{toc:e}))},O=r(4983),j=r(7462),k=r(8650),C=r.n(k),M=(0,o.memo)((function(t){return(0,u.tZ)("h2",(0,j.Z)({className:"anchor anchor__h2"},t,{id:C()(t.children,{remove:/[.\\]+/g,lower:!0})}))})),N=(0,o.memo)((function(t){return(0,u.tZ)("h3",(0,j.Z)({className:"anchor anchor__h3"},t,{id:C()(t.children,{remove:/[.\\]+/g,lower:!0})}))})),A=(0,o.memo)((function(t){return(0,u.tZ)("h4",(0,j.Z)({className:"anchor anchor__h4"},t,{id:C()(t.children,{remove:/[.\\]+/g,lower:!0})}))}));function E(t){var e=t.children;return(0,u.tZ)(O.MDXProvider,{components:{h2:M,h3:N,h4:A}},e)}var P=function(t){var e=t.repo,r=t.issueTerm,n=void 0===r?"pathname":r,i=t.label,a=void 0===i?"comment":i,c=t.theme,l=void 0===c?"github-light":c,s=t.crossorigin,p=void 0===s?"anonymous":s,d=t.async,f=void 0===d||d,m=o.createRef();return(0,o.useEffect)((function(){for(;m.current.firstChild;)m.current.removeChild(m.current.firstChild);var t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:e,"issue-term":n,label:a,theme:l,crossorigin:p,async:f}).forEach((function(e){var r=e[0],n=e[1];t.setAttribute(r,n)})),m.current.appendChild(t)}),[]),(0,u.tZ)("div",{id:"utterances_container",ref:m})};var R=(0,n.Z)("div",{target:"eha5sdm0"})({name:"kaeryg",styles:"margin:var(--spacing-0) auto;padding:var(--spacing-10) var(--spacing-5);display:flex;justify-content:center;article{min-width:0;}.blog-post{max-width:var(--maxWidth-post);}.toc-container{@media (max-width: 48rem){display:none;}@media (min-width: 70.5rem){width:1px;}}"}),S=function(t){var e=t.data,r=e.mdx;return(0,u.tZ)(c.Z,null,(0,u.tZ)(l.Z,{title:r.frontmatter.title,description:r.excerpt}),(0,u.tZ)(R,null,(0,u.tZ)("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},(0,u.tZ)("header",null,(0,u.tZ)("h1",{itemProp:"headline"},r.frontmatter.title),(0,u.tZ)("div",null,r.frontmatter.date),(0,u.tZ)(a.Z,null)),(0,u.tZ)(E,null,(0,u.tZ)(i.MDXRenderer,{itemProp:"articleBody"},r.body)),(0,u.tZ)("hr",null),(0,u.tZ)("footer",null,(0,u.tZ)(m.Z,{tags:r.frontmatter.tags})),(0,u.tZ)(f,{postNav:r.postNav})),(0,u.tZ)("div",{className:"toc-container"},(0,u.tZ)(w,{toc:r.tableOfContents.items}))),(0,u.tZ)(P,{repo:e.site.siteMetadata.githubRepo}))}},6725:function(t,e,r){var n=r(3395);t.exports={MDXRenderer:n}},3395:function(t,e,r){var n=r(9100),o=r(319),i=r(9713),a=r(7316),c=["scope","children"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7294),p=r(4983).mdx,d=r(9480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=a(t,c),l=d(e),f=u.useMemo((function(){if(!r)return null;var t=s({React:u,mdx:p},l),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return u.createElement(f,s({},i))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-6005b7d30769da5552d0.js.map