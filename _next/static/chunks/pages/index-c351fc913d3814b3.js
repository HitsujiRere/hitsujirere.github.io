(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4382)}])},2785:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(5893),n=s(7294),r=s(1664),i=function(e){var t=(0,n.useState)(),s=t[0],i=t[1];return(0,n.useEffect)((function(){i(document.getElementById(e.to))}),[e.to,s]),(0,l.jsx)(r.default,{href:"/#".concat(e.to),children:(0,l.jsx)("a",{className:"cursor-pointer",onClick:function(t){if(s){var l=document.getElementById("scroll-scapegoat");s.id="",console.log(l),l&&(l.id=e.to),location.hash="#".concat(e.to),s.id=e.to,l&&(l.id="scroll-scapegoat");var n,r=(null!==(n=s.getBoundingClientRect().top)&&void 0!==n?n:0)-0+window.pageYOffset;window.scrollTo({top:r,behavior:"smooth"}),t.preventDefault()}},children:e.children})})},o=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"scroll-scapegoat",className:"fixed"}),(0,l.jsxs)("header",{className:"w-screen p-8 bg-gray-900 md:bg-transparent md:fixed md:flex md:justify-between md:items-center md:z-10",children:[(0,l.jsx)(i,{to:"start",children:(0,l.jsxs)("h1",{className:"text-xl font-bold text-white",children:["Rere","'","s Portfolio"]})}),(0,l.jsxs)("nav",{className:"hidden md:flex md:gap-10",children:[(0,l.jsx)(i,{to:"about",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"ABOUT"})}),(0,l.jsx)(i,{to:"profile",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"PROFILE"})}),(0,l.jsx)(i,{to:"works",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"WORKS"})})]})]})]})}},4382:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var l=s(5893),n=s(9008),r=s(2785),i=(0,s(5152).default)((function(){return s.e(257).then(s.t.bind(s,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},ssr:!1}),o=function(){var e=[],t=0;return(0,l.jsx)(i,{setup:function(t,s){if(t.createCanvas(t.windowWidth,t.windowHeight).parent(s),0===e.length)for(var l=0;l<10;l++)e.push({x:t.random(0,t.width),y:t.height/10*l,angle:t.random(0,t.TWO_PI),angleSpeed:t.random(-5e-4,5e-4),size:t.random(20,100)})},draw:function(s){if(s.background(16),s.millis()>=t+700){t=s.millis();var l=s.random(20,100);e.push({x:s.random(0,s.width),y:-100,angle:s.random(0,s.TWO_PI),angleSpeed:s.random(-5e-4,5e-4),size:l})}e.forEach((function(e){e.y+=3/e.size*s.deltaTime,e.angle+=e.angleSpeed*s.deltaTime,s.push(),s.translate(e.x,e.y),s.rotate(e.angle),s.noStroke(),s.fill("#4e54c880"),s.rectMode(s.CENTER),s.rect(0,0,e.size,e.size,e.size/5),s.pop()}))},windowResized:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight)},className:"fixed inset-0 -z-10 bg-gray-900"})},a=function(){return(0,l.jsxs)("div",{id:"start",children:[(0,l.jsx)(o,{}),(0,l.jsx)("div",{className:"h-screen mx-auto max-w-screen-lg bg-transparent flex items-center px-4",children:(0,l.jsxs)("div",{className:"space-y-5",children:[(0,l.jsxs)("h2",{className:"text-2xl font-light text-yellow-400",children:["Let","'","s go!"]}),(0,l.jsx)("p",{className:"text-5xl font-bold text-white",children:"What will we make with a computer?"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"text-xl font-bold text-gray-400",children:["Hello! I","'","m Dejima Mikihide."]}),(0,l.jsxs)("p",{className:"text-xl font-bold text-gray-400",children:["I","'","m a student studying to become a computer programmer."]})]})]})})]})},c=s(1664),d=s(7294),h=function(){var e=(0,d.useState)(!1),t=e[0],s=e[1];return(0,l.jsx)("div",{id:"about",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,l.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,l.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"ABOUT"}),(0,l.jsxs)("div",{className:"md:flex md:justify-between space-x-1",children:[(0,l.jsxs)("div",{className:"md:w-2/3 space-y-5",children:[(0,l.jsx)("p",{className:"text-5xl tracking-wide font-bold text-white",children:"Rere / Dejima Mikihide"}),(0,l.jsx)("p",{className:"text-sm text-gray-400",children:"\u77f3\u5ddd\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 \u96fb\u5b50\u60c5\u5831\u5de5\u5b66\u79d1 5\u5e74"}),(0,l.jsxs)("div",{className:"text-xl text-gray-200",children:[(0,l.jsx)("p",{children:"\u79c1\u306f\u300c\u597d\u5947\u5fc3\u300d\u304c\u3068\u3066\u3082\u5f37\u304f\u3001\u4f55\u306b\u3067\u3082\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u3002"}),(0,l.jsx)("p",{children:"Processing \u3084 Siv3D \u3001 Unity \u3067\u30b2\u30fc\u30e0\u3092\u4f5c\u3063\u305f\u308a\u3001 Node.js \u3067\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u52c9\u5f37\u3092\u3001 Next.js \u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u52c9\u5f37\u3092\u3057\u3066\u3044\u307e\u3059\u3002"}),(0,l.jsx)("p",{children:"\u307e\u305f\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3092\u4f5c\u3063\u305f\u308a\u3001\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u697d\u3057\u3093\u3067\u3044\u307e\u3059\u3002"}),(0,l.jsx)("p",{children:"\u9ad8\u5c02\u30d7\u30ed\u30b3\u30f32020 \u3084 DCON2021 \u306b\u30c1\u30fc\u30e0\u3067\u51fa\u5834\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u305f\u7d4c\u9a13\u3092\u6d3b\u304b\u3057\u3066\u3001\u30c1\u30fc\u30e0\u5236\u4f5c\u6d3b\u52d5\u3067\u306f\u500b\u4eba\u306e\u9577\u6240\u3092\u6d3b\u304b\u305b\u308b\u30c1\u30fc\u30e0\u3065\u304f\u308a\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002"})]}),(0,l.jsxs)("div",{className:"flex space-x-5",children:[(0,l.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,l.jsx)(c.default,{href:"https://twitter.com/HitsujiRere",children:(0,l.jsxs)("a",{className:"flex",children:[(0,l.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,l.jsx)("path",{d:"M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"})]}),(0,l.jsx)("p",{className:"text-xl",children:"HitsujiRere"})]})})}),(0,l.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,l.jsx)(c.default,{href:"https://github.com/HitsujiRere",children:(0,l.jsxs)("a",{className:"flex",children:[(0,l.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,l.jsx)("path",{d:"M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"})]}),(0,l.jsx)("p",{className:"text-xl",children:"HitsujiRere"})]})})})]}),t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"space-y-5",children:[(0,l.jsx)("h3",{className:"text-2xl font-light text-yellow-400",children:"AWARDS"}),(0,l.jsxs)("div",{className:"text-xl text-gray-200 space-y-2",children:[(0,l.jsx)("p",{children:"\u7b2c2\u56de\u5168\u56fd\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 \u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0\u30b3\u30f3\u30c6\u30b9\u30c82021 : 7\u4f4d"}),(0,l.jsx)("p",{children:"Hokuriku Innovation Trial-2020 : ICT\u307e\u3061\u3065\u304f\u308a\u8cde"}),(0,l.jsx)("p",{children:"\u30d1\u30bd\u30b3\u30f3\u7532\u5b50\u57122020 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u90e8\u9580 : \u672c\u9078\u51fa\u5834"}),(0,l.jsx)("p",{children:"\u5168\u56fd\u9ad8\u5c02\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b3\u30f3\u30c6\u30b9\u30c8 \u7b2c31\u56de\u82eb\u5c0f\u7267\u5927\u4f1a(2020)"}),(0,l.jsx)("p",{className:"pl-10",children:"\u81ea\u7531\u90e8\u9580 : \u7279\u5225\u8cde"}),(0,l.jsx)("p",{className:"pl-10",children:"\u30d1\u30c6\u30f3\u30c8\u5be9\u67fb\u90e8\u9580 : \u5968\u52b1\u8cde"})]})]}),(0,l.jsxs)("div",{className:"space-y-5",children:[(0,l.jsx)("h3",{className:"text-2xl font-light text-yellow-400",children:"CERTIFICATION"}),(0,l.jsx)("div",{className:"text-xl text-gray-200 space-y-2",children:(0,l.jsx)("p",{children:"IT\u30d1\u30b9\u30dd\u30fc\u30c8"})})]})]})]}),(0,l.jsx)("img",{src:"/img/myself.png",className:"w-1/3 h-1/3 hidden md:flex",alt:"My picture",loading:"lazy"})]}),!t&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("div",{className:"px-4 py-2 rounded-xl border-2 border-gray-200 cursor-pointer",onClick:function(){return s(!0)},children:(0,l.jsx)("div",{className:"text-2xl text-gray-200 select-none",children:"MORE"})})})]})})},x=s(3324),j={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"transparent",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#FCD34D"},"hljs-meta-string":{color:"#FCD34D"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}},m=function(e){return(0,l.jsx)(x.Z,{language:e.language,style:j,showLineNumbers:!0,children:e.children})},g="\nclass DejimaMikihide {\n  realName = '\u51fa\u5cf6 \u5e79\u82f1';\n  penName = '\u3072\u3064\u3058 \u308c\u308c';\n  birthday = new Date('2003-3-31');\n  age = ".concat(function(e,t){var s=new Date(t.getFullYear(),e.getMonth(),e.getDate()),l=t.getFullYear()-e.getFullYear();return t>=s?l:l-1}(new Date("2003-3-31"),new Date),";\n  languages = {\n    good: [ 'C', 'C++', 'C#', 'JavaScript', 'Python', ],\n    haveUsed: [ 'Java', 'TypeScript', 'Rust', ],\n    learning: [ 'Dart', 'TypeScript', ],\n    wantToLearn: [ 'Rust', 'Go', ],\n  };\n  frameworks = {\n    good: [ 'Node.js', 'Processing', '.NET Framework', ],\n    haveUsed: [ 'Unity', 'React', 'Next.js', ],\n    learning: [ 'Flutter', 'Unity', ],\n  };\n  skills = {\n    competitiveProgramming: {\n      language: [ 'C++', ],\n      AtCoder: { user: 'Deji', highestRate: 1455 }\n    }\n  };\n}\n").trim(),u=function(){return(0,l.jsx)("div",{id:"profile",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,l.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,l.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"PROFILE"}),(0,l.jsx)("div",{className:"flex justify-center text-lg tracking-wider",children:(0,l.jsx)(m,{language:"javascript",children:g})})]})})},p=function(e){return e.href?(0,l.jsx)(c.default,{href:e.href,children:(0,l.jsx)("a",{className:"h-60",children:(0,l.jsx)("img",{src:e.image,className:"h-full w-full rounded-xl ".concat(e.size," ").concat(e.position," ").concat("object-contain"===e.size&&"bg-gray-100"),alt:"cover image",loading:"lazy"})})}):(0,l.jsx)("div",{className:"h-60",children:(0,l.jsx)("img",{src:e.image,className:"h-full w-full rounded-xl ".concat(e.size," ").concat(e.position," ").concat("object-contain"===e.size&&"bg-gray-100"),alt:"cover image",loading:"lazy"})})},f=function(e){return e.href?(0,l.jsx)(c.default,{href:e.href,children:(0,l.jsx)("a",{className:"h-60 p-4 rounded-xl bg-gray-100 flex items-center",children:(0,l.jsx)("div",{className:"w-full text-center space-y-5 select-none",children:e.children})})}):(0,l.jsx)("div",{className:"h-60 p-4 rounded-xl bg-gray-100 flex items-center",children:(0,l.jsx)("div",{className:"w-full text-center space-y-5 select-none",children:e.children})})},b=function(){var e=(0,d.useState)(!1),t=e[0],s=e[1];return(0,l.jsx)("div",{id:"works",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,l.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,l.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"WORKS"}),(0,l.jsxs)("div",{className:"grid md:grid-cols-2 gap-5 md:gap-20",children:[(0,l.jsx)(p,{href:"/works/my-webpage",image:"/img/my-webpage.png",size:"object-cover",position:"object-top"}),(0,l.jsx)(p,{href:"/works/logic-connect-block",image:"/img/LogicConnectBlock/cover.jpg",size:"object-cover",position:"object-center"}),(0,l.jsx)(p,{href:"/works/oshaberu",image:"/img/oshaberu/logo.png",size:"object-contain",position:"object-center"}),(0,l.jsx)(p,{href:"/works/twattaa",image:"/img/twattaa/1.png",size:"object-cover",position:"object-top"}),(0,l.jsx)(p,{href:"/works/learn-processing",image:"/img/LearnProcessing.png",size:"object-cover",position:"object-top object-left"}),t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(f,{children:[(0,l.jsx)("p",{className:"text-7xl text-black",children:"Fall Texts"}),(0,l.jsx)("p",{className:"text-xl text-black",children:"\u307f\u3093\u306a\u3067\u8a00\u8449\u3092\u964d\u3089\u305b\u3088\u3046"})]}),(0,l.jsx)(p,{image:"/img/shimale_logo.png",size:"object-contain",position:"object-center"}),(0,l.jsx)(p,{image:"/img/siritoriVS.jpg",size:"object-cover",position:"object-top"}),(0,l.jsx)(p,{image:"/img/HexCalcurator.png",size:"object-cover",position:"object-top"}),(0,l.jsx)(p,{image:"/img/just10game.png",size:"object-cover",position:"object-center"}),(0,l.jsx)(p,{image:"/img/yudetamago2.png",size:"object-cover",position:"object-top"})]}):(0,l.jsx)("div",{className:"h-60 p-4 rounded-xl border-2 border-gray-300 flex items-center justify-center cursor-pointer",onClick:function(){return s(!0)},children:(0,l.jsx)("p",{className:"text-3xl text-gray-300 select-none",children:"MORE"})})]})]})})},v=function(){return(0,l.jsx)("header",{className:"p-8 text-center bg-gray-900 hover:bg-gray-800 duration-500",children:(0,l.jsx)("p",{className:"text-xs text-gray-200",children:"DEJIMA MIKIHIDE - 2022"})})},y=function(){return(0,l.jsxs)("div",{children:[(0,l.jsxs)(n.default,{children:[(0,l.jsxs)("title",{children:["Rere","'","s Portfolio"]}),(0,l.jsx)("meta",{name:"description",content:"Rere's Portfolio"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(r.Z,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)(a,{}),(0,l.jsx)(h,{}),(0,l.jsx)(u,{}),(0,l.jsx)(b,{})]}),(0,l.jsx)(v,{})]})}}},function(e){e.O(0,[8,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);