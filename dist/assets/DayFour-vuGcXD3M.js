import{u as l}from"./counter-aGPaPyOV.js";import{o as a,c as i,a as e,l as c,t as d,b as n,h as _,m as p,w as h,f,F as v,r as b}from"./index-_M8sABAn.js";const g={class:"userMainContainer"},y={class:"userMain"},$={class:"users"},U={class:"userInfo"},x=e("span",{class:"formSpan"},"userName : ",-1),F={class:"userInfo"},S=e("span",{class:"formSpan"},"age :",-1),N={__name:"EmitComponent",props:["user"],emits:["userDeleteValue"],setup(r,{emit:s}){const{user:u}=r,t=l();return console.log(u.value),(o,m)=>(a(),i("div",g,[e("div",y,[e("div",$,[e("p",U,[x,c(d(r.user.name),1)]),e("p",F,[S,c(" "+d(r.user.age),1)]),e("button",{onClick:m[0]||(m[0]=()=>n(t).deleteDay4User(r.user.id)),class:"deleteButton"},"delete")])])]))}},C={class:"emitFormContainer"},D=e("h2",null,"Add User",-1),V={class:"form-container"},B={class:"form-group"},I=e("label",{for:"name",class:"myLabel"},"Name:",-1),M={class:"form-group"},k=e("label",{for:"age",class:"myLabel"},"Age:",-1),A=e("button",{type:"submit",class:"formButton"},"Submit",-1),w={__name:"EmitFormComponent",setup(r){const s=l();return(u,t)=>(a(),i("div",C,[D,e("form",{onSubmit:t[2]||(t[2]=h((...o)=>n(s).onFormUserSubmit&&n(s).onFormUserSubmit(...o),["prevent"]))},[e("div",V,[e("div",B,[I,_(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>n(s).userName=o),class:"emitInput"},null,512),[[p,n(s).userName]])]),e("div",M,[k,_(e("input",{type:"text",id:"age","onUpdate:modelValue":t[1]||(t[1]=o=>n(s).userAge=o),class:"emitInput"},null,512),[[p,n(s).userAge]])])]),A],32)]))}},E={class:"dayFourMain"},L={class:"form4"},q={__name:"DayFour",setup(r){const s=l();return(u,t)=>(a(),i("div",null,[e("div",E,[e("div",L,[f(w)]),(a(!0),i(v,null,b(n(s).day4userData,o=>(a(),i("div",{key:o.id,class:"userItems"},[f(N,{user:o},null,8,["user"])]))),128))])]))}};export{q as default};
