(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[0],{246:function(e,t,n){},449:function(e,t){},452:function(e,t){},455:function(e,t){},459:function(e,t){},482:function(e,t){},484:function(e,t){},498:function(e,t){},500:function(e,t){},530:function(e,t){},532:function(e,t){},616:function(e,t){},617:function(e,t){},747:function(e,t){},748:function(e,t,n){"use strict";n.r(t);var s=n(6),c=n.n(s),i=n(234),a=n.n(i),r=(n(246),n(23)),l=n(1),o=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"nav__title",children:Object(l.jsx)(r.b,{to:"/",style:{fontSize:32,fontWeight:700},children:"AvPrint"})}),Object(l.jsx)("div",{className:"menu-btn",onClick:function(){var e=document.querySelector(".menu-btn"),t=document.querySelector(".nav__links");e.classList.toggle("open"),t.classList.toggle("open")},children:Object(l.jsx)("div",{className:"menu-btn__burger"})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav__links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"WHITEPAPER"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"ROADMAP"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"OTHER"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/presale",children:Object(l.jsx)("button",{children:"DAPP"})})})]})})]})},d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("script",{src:"https://kit.fontawesome.com/1b2ce2af7d.js",crossorigin:"anonymous"}),Object(l.jsxs)("main",{className:"main-grid",children:[Object(l.jsxs)("div",{className:"grid-1",children:["Your best ",Object(l.jsx)("span",{className:"grid-1-color",children:"AVAX"})," Reflective token."]}),Object(l.jsxs)("div",{className:"grid-2",children:["Earn up to 12% in AVAX just by holding ",Object(l.jsx)("span",{style:{color:"#0088a9"},children:"$AVPR"})]})]}),Object(l.jsxs)("div",{className:"center-button",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("button",{style:{backgroundColor:"#4d4b4b"},children:"DAPP"})}),Object(l.jsx)(r.b,{to:"/presale",style:{paddingLeft:"10px"},children:Object(l.jsx)("button",{children:"PRESALE"})})]}),Object(l.jsx)("div",{className:"wave",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(l.jsx)("path",{fill:"#f3f4f5","fill-opacity":"1",d:"M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})})}),Object(l.jsx)("div",{className:"grid-tokenomics",children:Object(l.jsxs)("ul",{className:"tokenomics",children:[Object(l.jsx)("h3",{children:"- Tokenomics -"}),Object(l.jsx)("p",{className:"buy-tax",children:"3% Buy Tax"}),Object(l.jsx)("p",{className:"sell-tax",children:"6% Sell Tax"}),Object(l.jsx)("p",{className:"marketing-tax",children:"3% Marketing Tax"})]})}),Object(l.jsx)("div",{className:"down-wave",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(l.jsx)("path",{fill:"#f3f4f5","fill-opacity":"1",d:"M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,96C672,96,768,128,864,133.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})})}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{children:Object(l.jsx)("img",{className:"twitter",src:"https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg",alt:"Twitter"})}),Object(l.jsx)(r.b,{children:Object(l.jsx)("img",{className:"discord",src:"https://cdn.cdnlogo.com/logos/d/64/discord.png",alt:"Discord"})})]})})]})},u=n(16),j=n(40),b=n(15),p=n.n(b),m=(n(256),n(238)),x=n.n(m),h=n(711),y=n(716).MerkleTree,f=n(745),O=function(){window.userWalletAddress=null;var e=0;function t(){return n.apply(this,arguments)}function n(){return(n=Object(j.a)(p.a.mark((function e(){var n,s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("btn-connect"),s=document.getElementById("btn-send"),e.next=4,window.ethereum.request({method:"eth_requestAccounts"}).catch((function(e){console.error(e.message)}));case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return");case 7:window.userWalletAddress=a[0],n.innerText=window.userWalletAddress.substring(0,6)+"...",n.style.background="#b13333",s.addEventListener("click",i),n.removeEventListener("click",t),setTimeout((function(){n.addEventListener("click",c)}),200);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){var e=document.getElementById("btn-connect");window.userWalletAddress=null,e.innerText="Connect",e.style.background="#0088a9",e.removeEventListener("click",c),setTimeout((function(){e.addEventListener("click",t)}),200)}function i(){return a.apply(this,arguments)}function a(){return(a=Object(j.a)(p.a.mark((function t(){var n,s,c,i,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["0xe397c5D7a8B704ffd03fa72DaB73b7fCb1514218","0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2","0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"].map((function(e){return f(e)})),s=new y(n,f,{sortPairs:!0}),c=f(window.userWalletAddress).toString("hex"),i=s.getHexProof(c),"0x6fdC1288607E291EFDce977Fa66DF7967B89Ef33",a=new window.web3.eth.Contract(window.ABI,"0x6fdC1288607E291EFDce977Fa66DF7967B89Ef33"),t.next=9,a.methods.requestAllocation(i).send({from:window.userWalletAddress,value:window.web3.utils.toWei(e,"ether")});case 9:r=t.sent,console.log(r);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=Object(j.a)(p.a.mark((function t(n){var s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("range-indicator").innerText=n.target.value+" AVAX",e=n.target.value.toString(),s=window.data.data.tickers[0].last*e/5e-6,document.getElementById("to-token").innerText="You get: "+s.toFixed(0)+" $AVPR";case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)(Object(j.a)(p.a.mark((function e(){var n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("btn-connect"),s=document.getElementById("btn-send"),window.ethereum){e.next=6;break}return s.style.background="#4d4b4b",s.disabled=!0,e.abrupt("return",!1);case 6:return window.web3=new x.a(window.ethereum),s.style.background="#0088a9",c=new h,e.next=11,c.coins.fetchTickers("avalanche-2",{});case 11:window.data=e.sent,n.addEventListener("click",t);case 13:case"end":return e.stop()}}),e)})))),window.ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"checkForAnormality",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_hardCap",type:"uint256"},{internalType:"uint256",name:"_maxBuy",type:"uint256"},{internalType:"uint256",name:"_minBuy_",type:"uint256"}],name:"modifyParameters",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"_merkleRoot",type:"bytes32"}],name:"newMerkleRoot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32[]",name:"_merkleProof",type:"bytes32[]"}],name:"requestAllocation",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"checkAllocation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getHardCap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuy",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinBuy",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"merkleRoot",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"infos-container",children:[Object(l.jsx)("div",{className:"price glass",children:Object(l.jsx)("p",{className:"info-text",children:"Price: $0.000005"})}),Object(l.jsx)("div",{className:"minmax glass",children:Object(l.jsx)("p",{className:"info-text",children:"Min: 1 AVAX Max: 6 AVAX"})}),Object(l.jsx)("div",{className:"softcap glass",children:Object(l.jsx)("p",{className:"info-text",children:"SoftCap: 600 AVAX"})}),Object(l.jsx)("div",{className:"hardcap glass",children:Object(l.jsx)("p",{className:"info-text",children:"HardCap: 1000 AVAX"})})]}),Object(l.jsxs)("div",{className:"main-container glass",children:[Object(l.jsx)("div",{className:"main-container-title",children:Object(l.jsx)("h1",{children:"PRESALE"})}),Object(l.jsxs)("div",{className:"center-container",children:[Object(l.jsx)("p",{className:"info-text ongoing",children:"LIVE"}),Object(l.jsx)("div",{className:"soft-cap-indicator",children:Object(l.jsx)("p",{className:"indicator-text",children:"| 600 AVAX"})}),Object(l.jsx)("div",{className:"hard-cap-indicator",children:Object(l.jsx)("p",{className:"indicator-text",children:"| 1000 AVAX"})}),Object(l.jsx)("div",{id:"progressbar",children:Object(l.jsx)("div",{})}),Object(l.jsx)("p",{className:"to-token info-text",id:"to-token",children:"You get: 0 $AVPR"}),Object(l.jsx)("input",{type:"range",min:"1",max:"6",value:"1",className:"presale-range",id:"presale-range",onChange:function(e){return r.apply(this,arguments)}}),Object(l.jsx)("p",{className:"presale-range-indicator info-text",id:"range-indicator",children:"6 AVAX"})]}),Object(l.jsxs)("div",{className:"main-container-button",children:[Object(l.jsx)("button",{id:"btn-connect",children:"Connect"}),Object(l.jsx)("button",{id:"btn-send",children:"Send"})]})]}),Object(l.jsx)("script",{src:"init.js"})]})},w=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Add a new blog"})})};var v=function(){return Object(l.jsx)(r.a,{basename:"/",children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/presale",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/dapp",children:Object(l.jsx)(w,{})})]})})]})})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[748,1,2]]]);
//# sourceMappingURL=main.161e4c1d.chunk.js.map