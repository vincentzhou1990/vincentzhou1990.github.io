(self.webpackChunkyuzhouu=self.webpackChunkyuzhouu||[]).push([[227],{3470:function(n,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return k}});var t=a(2122),r=a(9756),o=(a(7294),a(3905)),l=["components"],p={slug:"monorepo-with-lerna-and-yarn",title:"Monorepo with lerna and yarn",author:"Yuzhouu",author_title:"\u65b0\u4e1c\u65b9\u4f18\u79c0\u6bd5\u4e1a\u751f",author_url:"https://github.com/yuzhouu",author_image_url:"https://avatars.githubusercontent.com/u/7315454?v=4",tags:["monorepo","lerna","yarn"]},s=void 0,i={permalink:"/blog/monorepo-with-lerna-and-yarn",editUrl:"https://github.com/yuzhouu/yuzhouu.github.io/edit/master/blog/2021-02-14-monorepo-with-lerna-and-yarn.md",source:"@site/blog/2021-02-14-monorepo-with-lerna-and-yarn.md",title:"Monorepo with lerna and yarn",description:"\u76f4\u63a5\u5728 lerna.json \u4e2d\u58f0\u660e packages: ...]\uff0clerna bootstrap \u65f6\u4f1a\u4e3a\u6bcf\u4e2a repo \u5355\u72ec\u88c5\u4f9d\u8d56\uff0c\u5728\u4f7f\u7528 react \u65f6\u5c31\u53ef\u80fd\u9047\u5230[invalid hook call warning\u9519\u8bef\uff0c\u539f\u56e0\u6392\u9664\u9519\u8bef\u7684\u4f7f\u7528\u4e86 hooks\uff0c\u5c31\u53ea\u6709\u4f7f\u7528\u4e86\u591a\u4e2a react \u5305\u3002",date:"2021-02-14T00:00:00.000Z",formattedDate:"February 14, 2021",tags:[{label:"monorepo",permalink:"/blog/tags/monorepo"},{label:"lerna",permalink:"/blog/tags/lerna"},{label:"yarn",permalink:"/blog/tags/yarn"}],readingTime:.68,truncated:!0},u=[{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],c={toc:u};function k(n){var e=n.components,a=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76f4\u63a5\u5728 lerna.json \u4e2d\u58f0\u660e packages: ","[...]","\uff0clerna bootstrap \u65f6\u4f1a\u4e3a\u6bcf\u4e2a repo \u5355\u72ec\u88c5\u4f9d\u8d56\uff0c\u5728\u4f7f\u7528 react \u65f6\u5c31\u53ef\u80fd\u9047\u5230",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/warnings/invalid-hook-call-warning.html"},"invalid hook call warning"),"\u9519\u8bef\uff0c\u539f\u56e0\u6392\u9664\u9519\u8bef\u7684\u4f7f\u7528\u4e86 hooks\uff0c\u5c31\u53ea\u6709\u4f7f\u7528\u4e86\u591a\u4e2a react \u5305\u3002\n\u770b\u4e86\u4e0b\u5806\u6808\uff0c\u6709\u4e24\u4e2a repo \u4f7f\u7528\u4e86\u81ea\u5df1 node_modules \u4e2d\u7684 react\u3002"),(0,o.kt)("p",null,"\u76f4\u63a5",(0,o.kt)("inlineCode",{parentName:"p"},"lerna bootstrap --hoist"),"\uff0clerna \u4e0a\u6765\u5c31\u662f\u4e00\u4e2a\u62a5\u9519",(0,o.kt)("inlineCode",{parentName:"p"},"hoist is not supported with --npm-client=yarn, use yarn workspaces instead"),", \u540c\u65f6\u7ed9\u51fa\u4e86\u4e00\u4e2a\u63d0\u793a",(0,o.kt)("inlineCode",{parentName:"p"},"A guide is available at https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/"),"\u3002"),(0,o.kt)("p",null,"\u597d\u5427\u7167\u63d0\u793a\u4e2d\u6539\u4e86\u4e00\u4e0b\uff0c\u5728 lerna.json \u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},'"useWorkspaces": true'),"\uff0c\u540c\u65f6\u5c06 packages \u5b57\u6bb5\u4ece lerna.json \u4e2d\u79fb\u5230 package.json \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#workspaces"},"workspaces")," \u5b57\u6bb5\uff0c\u7136\u540e lerna bootstrap\uff0c\u8fd9\u91cc yarn \u5168\u6743\u63a5\u624b\u4e86\u4f9d\u8d56\u5b89\u88c5\uff0c\u5171\u540c\u4f9d\u8d56\u5168\u88c5\u5728\u4e86\u6839\u76ee\u5f55\uff0c\u95ee\u9898\u89e3\u51b3\u3002"),(0,o.kt)("p",null,"\u4fee\u6539\u524d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// lerna.json\n{\n  "version": "0.0.0",\n  "npmClient": "yarn",\n  "packages": [\n    "packages/*",\n    "site"\n  ],\n}\n\n//package.sjon\n{\n  //...\n}\n')),(0,o.kt)("p",null,"\u4fee\u6539\u540e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// lerna.json\n{\n  "version": "0.0.0",\n  "npmClient": "yarn",\n  "useWorkspaces": true\n}\n\n//package.sjon\n{\n  //...\n  "workspaces": [\n    "packages/*",\n    "site"\n  ],\n}\n')),(0,o.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("p",null,"\u8fd9\u91cc\u63d0\u4e00\u4e0b\uff0c\u5982\u679c\u4f60\u6709 package \u4f7f\u7528\u4e86 webpack \u6253\u5305\uff0c\u7136\u540e\u4f7f\u7528\u4e86",(0,o.kt)("strong",{parentName:"p"},"webpack-node-externals"),"\u6392\u9664 node_modules \u4e2d\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u9700\u8981\u4fee\u6539 webpack-node-externals \u7684\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"{ modulesFromFile: true }"),"\u3002\u56e0\u4e3a webpack-node-externals \u4f1a\u904d\u5386\u9879\u76ee\u4e0b\u7684 node_modules \u4e0b\u7684\u4f9d\u8d56\u540d\u79f0\uff0c\n\u4f5c\u4e3a\u6392\u9664\u4f9d\u636e\uff0c\u4f46\u662f\u6211\u4eec\u7684\u90e8\u5206\u4f9d\u8d56\u88ab\u5b89\u88c5\u5230\u4e86\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u6240\u4ee5 webpack-node-externals \u4f1a\u5931\u6548\u3002\u8fd9\u91cc\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"modulesFromFile: true"),"\u544a\u8bc9\nwebpack-node-externals \u76f4\u63a5\u53bb package.json \u4e2d\u627e\u4f9d\u8d56\u540d\u79f0\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"moduleDir"),"\uff0c\u544a\u8bc9 webpack-node-externals \u53bb\u54ea\u91cc\u627e\n\u5b89\u88c5\u7684\u4f9d\u8d56\u5305"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/warnings/invalid-hook-call-warning.html"},"https://reactjs.org/warnings/invalid-hook-call-warning.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/"},"https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/"))))}k.isMDXComponent=!0}}]);