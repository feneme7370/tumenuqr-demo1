import{u as p,a as f,b,c as v,r as k,d as t,e as r,f as o,_ as y,w,F as i,g as c,h as n,i as l,j as D,o as s,R as C,t as m,k as j,l as $}from"./index-GdkwkJeW.js";const B=n("div",{class:"mb-5 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col"},[n("a",{class:"bg-orange-100 w-full border-2 border-orange-200"},[n("h1",{class:"my-2 text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl"},"Inicio")])],-1),I={key:0,class:"text-center font-bold text-4xl mb-5"},R={class:"flex flex-wrap items-center justify-center gap-3"},S={key:0},V=["onClick"],N=["src"],F={class:"absolute right-0 -bottom-5 left-0 px-1 mx-auto text-center flex items-center justify-center flex-col"},L={class:"bg-orange-100 w-full border-2 border-orange-200 py-1 text-xs tracking-tight leading-none text-gray-800 lg:text-lg"},P={key:0,class:"text-center font-bold text-2xl mb-5"},z={key:0},E={class:"mb-10 max-w-lg mx-auto lg:rounded-md"},q={key:0},A=n("h2",{class:"text-center font-bold text-4xl mb-5"},"Sugeridos",-1),M={__name:"CategoryView",setup(G){const a=p();a.loadDates();const x=f(),g=b(),h=v(),u=g.params.levelId,d=k("");return console.log(u),console.log(d),a||h.push({name:home}),(H,J)=>(s(),t("div",null,[r(y,{class:"mb-10 max-w-lg mx-auto lg:rounded-md",companiesDates:o(a).companiesDates},null,8,["companiesDates"]),r(o(C),{to:{name:"home"}},{default:w(()=>[B]),_:1}),(s(!0),t(i,null,c(o(a).levelsDates,e=>(s(),t("div",{key:e.id},[e.id==o(u)?(s(),t("h2",I,m(e.name),1)):l("",!0)]))),128)),n("div",R,[(s(!0),t(i,null,c(o(a).categoriesDates,e=>(s(),t("div",{key:e.id},[o(a).productsDates.some(_=>_.category_id===e.id)?(s(),t("div",S,[e.level_id==o(u)?(s(),t("div",{key:0,class:"mb-10 bg-center bg-no-repeat w-16 h-16 sm:w-32 sm:h-32 cursor-pointer relative",onClick:_=>d.value=e.id},[n("img",{loading:"lazy",class:"w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-xl",src:o(x).urlBack+e.image_hero_uri+e.image_hero,alt:"imagen portada"},null,8,N),n("div",F,[n("a",L,m(e.name),1)])],8,V)):l("",!0)])):l("",!0)]))),128))]),(s(!0),t(i,null,c(o(a).categoriesDates,e=>(s(),t("div",null,[e.id===d.value?(s(),t("h2",P,m(e.name),1)):l("",!0)]))),256)),(s(!0),t(i,null,c(o(a).productsDates,e=>(s(),t("div",{key:e.id},[e.category_id===d.value?(s(),t("div",z,[r(j,{class:"max-w-lg mx-auto lg:rounded-md",product:e},null,8,["product"])])):l("",!0)]))),128)),n("div",E,[o(a).suggestionsDates[0]?(s(),t("div",q,[A,(s(!0),t(i,null,c(o(a).suggestionsDates,e=>(s(),t("div",{key:e.id,class:"my-2 px-2"},[r($,{product:e.product},null,8,["product"])]))),128))])):l("",!0)]),r(D,{class:"max-w-5xl mx-auto lg:rounded-md",companiesDates:o(a).companiesDates},null,8,["companiesDates"])]))}};export{M as default};
