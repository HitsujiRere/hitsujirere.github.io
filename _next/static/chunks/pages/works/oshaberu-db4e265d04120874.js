(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{7028:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/oshaberu",function(){return t(5783)}])},4756:function(e,s,t){"use strict";t.d(s,{H3:function(){return l}});var r=t(5893);let l=e=>(0,r.jsx)("h3",{className:"mb-4 text-2xl font-bold text-amber-500",children:e.title})},9813:function(e,s,t){"use strict";t.d(s,{J:function(){return c}});var r=t(5893),l=t(1664),i=t.n(l),n=t(8357),a=t(9352);let c=e=>{let{icon:s,to:t,text:l}=e;return(0,r.jsxs)(i(),{href:t,className:"flex text-green-500 duration-500 hover:text-green-700",target:"__blank",children:[(0,r.jsxs)(n.Pd.Provider,{value:{size:"1.75rem"},children:["github"===s&&(0,r.jsx)(a.ioR,{}),"twitter"===s&&(0,r.jsx)(a.HSY,{}),"external"===s&&(0,r.jsx)(a.uXP,{})]}),(0,r.jsx)("p",{className:"text-lg",children:l})]})}},8467:function(e,s,t){"use strict";t.d(s,{h:function(){return o}});var r=t(5893),l=t(1163),i=t(1664),n=t.n(i),a=t(7294);let c=e=>{let[s,t]=(0,a.useState)(),l=e=>{if(s){var t;let r=null!==(t=s.getBoundingClientRect().top)&&void 0!==t?t:0,l=r-0+window.pageYOffset;window.scrollTo({top:l,behavior:"smooth"}),e.preventDefault()}};return(0,a.useEffect)(()=>{t(document.getElementById(e.to))},[e.to,s]),(0,r.jsx)(n(),{href:e.to?"/#".concat(e.to):"/",className:"cursor-pointer",onClick:l,children:e.children})},o=()=>{let e=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"flex py-2 px-[5vw] max-sm:border-b max-sm:border-y-zinc-100 max-sm:backdrop-blur sm:items-center sm:justify-between sm:py-8",children:[(0,r.jsx)(c,{to:"/"===e.pathname?"start":"",children:(0,r.jsx)("p",{className:"text-xl font-bold text-gray-800 sm:text-2xl",children:"Hitsuji Rere"})}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"hidden sm:flex sm:gap-10",children:[(0,r.jsx)("li",{className:"text-xl font-bold text-gray-800",children:(0,r.jsx)(c,{to:"about",children:"ABOUT"})}),(0,r.jsx)("li",{className:"text-xl font-bold text-gray-800",children:(0,r.jsx)(c,{to:"profile",children:"PROFILE"})}),(0,r.jsx)("li",{className:"text-xl font-bold text-gray-800",children:(0,r.jsx)(c,{to:"works",children:"WORKS"})})]})})]})}},7928:function(e,s,t){"use strict";t.d(s,{i:function(){return o}});var r=t(5893),l=t(9008),i=t.n(l),n=t(4756),a=t(9813),c=t(8467);let o=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:["Hitsuji Rere \uD83D\uDC0F - ",e.name]}),(0,r.jsx)("meta",{name:"description",content:"Rere's Portfolio - ".concat(e.name)}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"flex-col bg-zinc-100 md:flex md:h-screen",children:[(0,r.jsx)("div",{className:"h-max",children:(0,r.jsx)(c.h,{})}),(0,r.jsxs)("main",{className:"flex flex-1 flex-col gap-y-8 gap-x-4 p-4 md:flex-row-reverse md:items-start md:justify-between md:overflow-y-auto",children:[(0,r.jsxs)("div",{className:"space-y-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-thumb-rounded-full md:h-full md:w-2/5 md:overflow-y-auto md:pr-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"mb-8 text-3xl font-bold",children:e.name}),(0,r.jsx)("p",{className:"whitespace-pre-line",children:e.explain})]}),e.charge&&(0,r.jsxs)("div",{children:[(0,r.jsx)(n.H3,{title:"Charge"}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:e.charge})})]}),(e.language||e.framework)&&(0,r.jsxs)("div",{children:[(0,r.jsx)(n.H3,{title:"Language, Frameworks and Library"}),(0,r.jsxs)("div",{className:"space-y-2",children:[e.language&&(0,r.jsx)("p",{children:e.language}),e.framework&&(0,r.jsx)("p",{children:e.framework})]})]}),e.feeling&&(0,r.jsxs)("div",{children:[(0,r.jsx)(n.H3,{title:"Feelings"}),(0,r.jsx)("p",{className:"whitespace-pre-line",children:e.feeling})]}),(e.linkWork||e.linkGitHub)&&(0,r.jsxs)("div",{children:[(0,r.jsx)(n.H3,{title:"Links"}),(0,r.jsxs)("div",{className:"space-y-2",children:[e.linkWork&&(0,r.jsx)(a.J,{text:"Work Website",to:e.linkWork,icon:"external"}),e.linkGitHub&&(0,r.jsx)(a.J,{text:"GitHub Repository",to:e.linkGitHub,icon:"github"})]})]})]}),(0,r.jsx)("div",{className:"space-y-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-thumb-rounded-full md:h-full md:w-3/5 md:overflow-y-auto md:pr-2",children:e.images.map((e,s)=>(0,r.jsx)("img",{src:e,className:"w-full",alt:"work image",loading:"lazy"},s))})]})]})]})},5783:function(e,s,t){"use strict";t.r(s);var r=t(5893),l=t(7928);let i=()=>(0,r.jsx)(l.i,{name:"おしゃべる",explain:"\n        自由な声とおしゃべりできるスマートスピーカーの追加コンテンツです。\n        DCON2021にて発表し、7位を獲得しました。\n      ".trim(),charge:"音声合成, APIサーバ",language:"JavaScript, Python",framework:"Node.js, Tacotron2",feeling:"初めて深層学習を用いたましたが、うまくチームメンバーなどの音声を合成することができました。",linkGitHub:"https://github.com/HitsujiRere/hitsujirere.github.io",images:["/img/oshaberu/cover.png","/img/oshaberu/system.png","/img/oshaberu/voice-1.png","/img/oshaberu/voice-2.png"]});s.default=i}},function(e){e.O(0,[937,636,774,888,179],function(){return e(e.s=7028)}),_N_E=e.O()}]);