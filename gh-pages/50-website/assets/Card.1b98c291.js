import{a as g,d as I,r as m,o as h,j as f,b as v,f as l,u as e,v as k,x as j,e as d,g as R,h as S,t as y}from"./vendor.b5bf8515.js";import{_ as C}from"./index.6caa140c.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";import{a as E,g as O}from"./util.298545a0.js";import L from"./LinkIcon.474f1840.js";import T from"./Title.24157f67.js";const A=["src","loading"],B={key:1,class:"mini-web-loader-container"},N=g({props:{src:String,loadInitially:Boolean,observerOptions:{type:Object,default:()=>({root:null,rootMargin:"200px 0px"})}},setup(o){const s=o,p=I(()=>C(()=>import("./Loader.b1e69f45.js"),["assets/Loader.b1e69f45.js","assets/Loader.6508bf6f.css","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.b5bf8515.js"])),_=m(),i=m(!1),t=m(null),u=r=>{var n;r[0].isIntersecting&&((n=t.value)==null||n.disconnect(),i.value=!0)};return h(()=>{if(!s.loadInitially){if("loading"in HTMLImageElement.prototype){i.value=!0;return}return t.value=new IntersectionObserver(u,s.observerOptions),t.value.observe(_.value),()=>{var r;(r=t.value)==null||r.disconnect()}}}),(r,n)=>i.value?(f(),v("img",{key:0,src:s.src,ref:(a,c)=>{c.imgRef=a,_.value=a},loading:o.loadInitially?void 0:"lazy"},null,8,A)):(f(),v("div",B,[l(e(p))]))}});var U=w(N,[["__scopeId","data-v-a132e63a"]]);const D={class:"mini-web-card"},V={class:"mini-web-card-item-front"},$={class:"mini-web-card-item-behind"},z={class:"mini-web-card-link-container"},M=["href"],P=["href"],F=g({props:{cardSourceURL:String,directory:{type:String,default:"javascript"},href:String,cardName:String,cardIndex:Number},setup(o){const s=o,p="https://www.eveningwater.com/my-web-projects/",_="https://github.com/eveningwater/my-web-projects/tree/master/",{cardSourceURL:i,href:t,cardName:u,cardIndex:r}=k(s),n=m(null);return h(()=>{j(()=>{var c;const a=(c=n.value)==null?void 0:c.$el;E(a)?a.classList.add("mini-web-card-hover-title"):a.classList.remove("mini-web-card-hover-title")})}),(a,c)=>(f(),v("div",D,[d("div",V,[l(U,{src:e(O)(o.directory,e(i)),alt:"\u56FE\u7247\u52A0\u8F7D\u4E2D",class:"mini-web-card-img"},null,8,["src"])]),d("div",$,[l(e(T),{level:"2",class:"mini-web-card-title","data-title":e(u),ref:(b,x)=>{x.titleContainer=b,n.value=b}},{default:R(()=>[S(y(e(r)+1)+"."+y(e(u)),1)]),_:1},8,["data-title"]),d("div",z,[d("a",{href:p+e(t),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[l(e(L))],8,M),d("a",{href:_+e(t),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[l(e(L),{type:"githubDProp"})],8,P)])])]))}});var W=w(F,[["__scopeId","data-v-9ac0dfb4"]]);export{W as default};
