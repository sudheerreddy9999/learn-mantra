import{g as u,o,c as n,a as t,b as h}from"./index-HbdsxRpI.js";const f={class:"m-0"},v=t("div",null,[t("h1",{class:"text-2xl text-center font-bold xl:text-4xl"},"Rock Paper Scissors")],-1),g={class:"flex justify-evenly"},k=t("br",null,null,-1),p={class:"flex justify-center ml-16"},b={key:0},y=t("p",{class:"text-2xl text-center font-bold xl:text-4xl text-orange-400"},"It's a Tie!",-1),w=[y],j={key:1},C=t("h1",{class:"text-2xl text-center font-bold xl:text-4xl text-green-900"},"Congratulations You Won ",-1),B=[C],S={key:2},T={key:0},I=t("h1",{class:"text-2xl text-center font-bold xl:text-4xl text-blue-400"},"Start the Game",-1),M=[I],V={key:1},W=t("h1",{class:"text-2xl text-center font-bold xl:text-4xl text-red-400"},"Oops! Computer Wins!",-1),D=[W],E=t("br",null,null,-1),F={class:"flex justify-center"},G={class:"w-5/12"},N=["src"],d="https://img.icons8.com/stickers/100/hand-rock-skin-type-1.png",_="https://img.icons8.com/fluency/48/paper-hand.png",x="https://img.icons8.com/emoji/48/victory-hand-emoji.png",R={__name:"DayThree",setup(O){let a="";const r=u(!0),l=u(!1),c=u(0);function i(e){c.value=e,setTimeout(m,100)}function m(){const e=Math.floor(Math.random()*3)+1;switch(e){case 1:a=d;break;case 2:a=_;break;case 3:a=x;break;default:console.log("Something went wrong")}c.value===e?l.value=null:c.value===1&&e===3||c.value===2&&e===1||c.value===3&&e===2?l.value=!0:l.value=!1,r.value=!1}return(e,s)=>(o(),n("div",f,[v,t("div",g,[t("button",{onClick:s[0]||(s[0]=()=>i(1)),class:"w-5/12"},[t("img",{src:d,class:"w-5/12 m-auto"})]),t("button",{onClick:s[1]||(s[1]=()=>i(2)),class:"w-5/12"},[t("img",{src:_,class:"w-5/12 m-auto"})]),t("button",{onClick:s[2]||(s[2]=()=>i(3)),class:"w-5/12"},[t("img",{src:x,class:"w-5/12 m-auto"})])]),k,t("div",p,[l.value===null?(o(),n("div",b,w)):l.value?(o(),n("div",j,B)):(o(),n("div",S,[r.value?(o(),n("div",T,M)):(o(),n("div",V,D))]))]),E,t("div",F,[t("button",G,[t("img",{src:h(a),class:"w-5/12 m-auto"},null,8,N)])])]))}};export{R as default};