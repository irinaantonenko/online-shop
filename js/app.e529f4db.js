(function(){var t={3034:function(t,e,a){"use strict";var o=a(9242),r=a(3396);const i={id:"app"};function c(t,e,a,o,c,n){const s=(0,r.up)("catalog-wrapper");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(s)])}const n={class:"catalog-wrapper"};function s(t,e,a,o,i,c){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(s)])}var l={name:"CatalogWrapper"},p=a(89);const u=(0,p.Z)(l,[["render",s]]);var m=u,_={name:"App",components:{CatalogWrapper:m}};const d=(0,p.Z)(_,[["render",c]]);var g=d,h=(a(7658),a(65)),C=a(6943);const T=(0,h.MT)({state:{products:[{image:"1.jpg",name:"T-shirt Puma Ess Logo Tee",price:1500,article:"T1",available:!0,category:"Male",quantity:1},{image:"2.jpg",name:"T-shirt New Balance NB Essentials",price:1200,article:"T2",available:!0,category:"Female",quantity:1},{image:"3.jpg",name:"T-shirt Nike W Nsw Essntl Tee",price:980,article:"T3",available:!1,category:"Female",quantity:1},{image:"4.jpg",name:"T-shirt Puma Ess Logo Tee",price:1680,article:"T4",available:!0,category:"Male",quantity:1},{image:"5.jpg",name:"T-shirt Puma Ess Puma Tee W",price:1900,article:"T5",available:!1,category:"Female",quantity:1},{image:"6.jpg",name:"T-shirt ASICS Core Asics Top",price:1799,article:"T6",available:!0,category:"Female",quantity:1},{image:"7.jpg",name:"T-shirt Adidas Ent22 Tee",price:1399,article:"T7",available:!0,category:"Male",quantity:1},{image:"8.jpg",name:"T-shirt Puma Active Ess Tee Poly",price:1449,article:"T8",available:!0,category:"Female",quantity:1},{image:"9.jpg",name:"T-shirt Puma Ess Small Logo Tee",price:999,article:"T9",available:!0,category:"Female",quantity:1}],cart:[],searchQuery:""},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let a=!1;t.cart.map((function(t){t.article===e.article&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--},SET_SEARCH_QUERY:(t,e)=>{t.searchQuery=e}},actions:{GET_PRODUCTS_FROM_API({commit:t}){return(0,C.Z)("http://localhost:3000/products",{methods:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))},ADD_TO_CART({commit:t},e){t("SET_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},GET_SEARCH_QUERY({commit:t},e){t("SET_SEARCH_QUERY",e)}},getters:{PRODUCTS(t){return t.products},CART(t){return t.cart},SEARCH_QUERY(t){return t.searchQuery}}});var f=T;const v=(0,o.ri)({});v.use(T);var E=a(2483),w=a(7139);const y={class:"catalog"},R={class:"catalog__link link"},A=(0,r._)("i",{class:"material-icons"},"shopping_basket",-1),P={class:"catalog__cart-qty"},b=(0,r._)("h1",null,"Catalog",-1),D={class:"catalog__filters"},O={class:"catalog__list"};function S(t,e,a,o,i,c){const n=(0,r.up)("router-link"),s=(0,r.up)("catalog-notification"),l=(0,r.up)("catalog-select"),p=(0,r.up)("catalog-search"),u=(0,r.up)("catalog-item");return(0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)(n,{to:{name:"cart"}},{default:(0,r.w5)((()=>[(0,r._)("div",R,[A,(0,r._)("p",P,(0,w.zw)(t.CART.length),1)])])),_:1}),b,(0,r.Wm)(s,{messages:i.messages},null,8,["messages"]),(0,r._)("div",D,[(0,r.Wm)(l,{options:i.categories,selected:i.selected,onSelect:c.sortByCategories},null,8,["options","selected","onSelect"]),(0,r.Wm)(p)]),(0,r._)("div",O,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.filteredProducts,(t=>((0,r.wg)(),(0,r.j4)(u,{key:t.article,product_data:t,onAddToCart:c.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}a(541);const k={class:"catalog-item"},I={class:"catalog-item__popup"},j={class:"catalog-item__image-wrap"},M=["src"],N={class:"catalog-item__content"},U={class:"catalog-item__name"},F={class:"catalog-item__price"},q={class:"catalog-item__price"},H={class:"catalog-item__image-wrap"},Q=["src"],B={class:"catalog-item__name"},W={class:"catalog-item__price"},z={class:"catalog-item__btns"};function Y(t,e,o,i,c,n){const s=(0,r.up)("catalog-popup");return(0,r.wg)(),(0,r.iD)("div",k,[c.isPopupVisible?((0,r.wg)(),(0,r.j4)(s,{key:0,rightBtnPopup:"Add to cart","popup-title":o.product_data.name,onClosePopup:n.closePopup,onRightBtnAction:n.addToCart},{default:(0,r.w5)((()=>[(0,r._)("div",I,[(0,r._)("div",j,[(0,r._)("img",{class:"catalog-item__image",src:a(990)("./"+o.product_data.image),alt:"img"},null,8,M)]),(0,r._)("div",N,[(0,r._)("p",U,(0,w.zw)(o.product_data.article),1),(0,r._)("p",F,"Price: "+(0,w.zw)(o.product_data.price)+" UAH",1),(0,r._)("p",q,(0,w.zw)(o.product_data.category),1)])])])),_:1},8,["popup-title","onClosePopup","onRightBtnAction"])):(0,r.kq)("",!0),(0,r._)("div",H,[(0,r._)("img",{class:"catalog-item__image",src:a(990)("./"+o.product_data.image),alt:"img"},null,8,Q)]),(0,r._)("p",B,(0,w.zw)(o.product_data.name),1),(0,r._)("p",W,"Price: "+(0,w.zw)(o.product_data.price)+" UAH",1),(0,r._)("div",z,[(0,r._)("button",{class:"catalog-item__show-info btn",onClick:e[0]||(e[0]=(...t)=>n.showPopup&&n.showPopup(...t))}," Show info "),(0,r._)("button",{class:"catalog-item__btn btn",onClick:e[1]||(e[1]=(...t)=>n.addToCart&&n.addToCart(...t))}," Add to cart ")])])}const x={class:"catalog-popup__wrapper",ref:"popup_wrapper"},L={class:"catalog-popup"},V={class:"catalog-popup__header"},Z={class:"catalog-popup__content"},G={class:"catalog-popup__footer"};function $(t,e,a,o,i,c){return(0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("div",L,[(0,r._)("div",V,[(0,r._)("span",null,(0,w.zw)(a.popupTitle),1),(0,r._)("span",null,[(0,r._)("i",{class:"material-icons catalog-popup__icon",onClick:e[0]||(e[0]=(...t)=>c.closePopup&&c.closePopup(...t))}," close ")])]),(0,r._)("div",Z,[(0,r.WI)(t.$slots,"default")]),(0,r._)("div",G,[(0,r._)("button",{class:"btn catalog-popup__close",onClick:e[1]||(e[1]=(...t)=>c.closePopup&&c.closePopup(...t))}," Close "),(0,r._)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>c.rightBtnAction&&c.rightBtnAction(...t))},(0,w.zw)(a.rightBtnPopup),1)])])],512)}var K={name:"CatalogPopup",methods:{closePopup(){this.$emit("closePopup")},rightBtnAction(){this.$emit("rightBtnAction")}},props:{rightBtnPopup:{type:String,default:"Ok"},popupTitle:{type:String,default:"Popup name"}},mounted(){let t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))}};const J=(0,p.Z)(K,[["render",$]]);var X=J,tt={name:"CatalogItem",components:{CatalogPopup:X},data(){return{isPopupVisible:!1}},props:{product_data:{type:Object,default(){return{}}}},methods:{addToCart(){this.$emit("addToCart",this.product_data)},showPopup(){this.isPopupVisible=!0},closePopup(){this.isPopupVisible=!1}}};const et=(0,p.Z)(tt,[["render",Y]]);var at=et;const ot={class:"catalog-select"},rt={key:0,class:"catalog-select__options"},it=["onClick"];function ct(t,e,a,o,i,c){return(0,r.wg)(),(0,r.iD)("div",ot,[(0,r._)("p",{class:"catalog-select__title",onClick:e[0]||(e[0]=t=>i.areOptionsVisible=!i.areOptionsVisible)},(0,w.zw)(a.selected),1),i.areOptionsVisible?((0,r.wg)(),(0,r.iD)("div",rt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.options,(t=>((0,r.wg)(),(0,r.iD)("p",{class:"catalog-select__options-item",key:t.value,onClick:e=>c.selectOption(t)},(0,w.zw)(t.name),9,it)))),128))])):(0,r.kq)("",!0)])}var nt={name:"CatalogSelect",props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},data(){return{areOptionsVisible:!1}},methods:{selectOption(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},unmounted(){document.removeEventListener("click",this.hideSelect)}};const st=(0,p.Z)(nt,[["render",ct]]);var lt=st;const pt={class:"catalog-notification"},ut=(0,r._)("i",{class:"material-icons"},"check_circle",-1);function mt(t,e,a,i,c,n){return(0,r.wg)(),(0,r.iD)("div",pt,[(0,r.Wm)(o.W3,{name:"animate",class:"catalog-notification__list",tag:"div"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.messages,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"catalog-notification__content",key:t.id},[(0,r._)("span",null,(0,w.zw)(t.name),1),ut])))),128))])),_:1})])}var _t={name:"CatalogNotification",props:{messages:{type:Array,default(){return[]}}},components:{TransitionGroup:o.W3},methods:{hideNotification(){let t=this;this.messages.length||setInterval((function(){t.messages.splice(t.messages.length-1,1)}),3e3)}},mounted(){this.hideNotification()}};const dt=(0,p.Z)(_t,[["render",mt]]);var gt=dt;const ht={class:"catalog-search"};function Ct(t,e,a,i,c,n){return(0,r.wg)(),(0,r.iD)("form",ht,[(0,r._)("i",{class:"catalog-search__icon material-icons",onClick:e[0]||(e[0]=t=>n.searchByName(c.searchQuery))}," search "),(0,r.wy)((0,r._)("input",{name:"query",placeholder:"Search...",class:"catalog-search__input","onUpdate:modelValue":e[1]||(e[1]=t=>c.searchQuery=t)},null,512),[[o.nr,c.searchQuery]]),(0,r._)("i",{class:"catalog-search__clear material-icons",onClick:e[2]||(e[2]=(...t)=>n.clearSearch&&n.clearSearch(...t))}," clear ")])}var Tt={name:"CatalogSearch",data(){return{searchQuery:""}},methods:{...(0,h.nv)(["GET_SEARCH_QUERY"]),searchByName(t){this.GET_SEARCH_QUERY(t)},clearSearch(){this.searchQuery="",this.GET_SEARCH_QUERY()}}};const ft=(0,p.Z)(Tt,[["render",Ct]]);var vt=ft,Et={name:"CatalogMain",components:{CatalogItem:at,CatalogSelect:lt,CatalogNotification:gt,CatalogSearch:vt},data(){return{categories:[{name:"All",value:"All"},{name:"Male",value:"M"},{name:"Female",value:"F"}],selected:"All",sortedProducts:[],messages:[]}},computed:{...(0,h.Se)(["PRODUCTS","CART","SEARCH_QUERY"]),filteredProducts(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}},methods:{...(0,h.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t).then((()=>{let t=Date.now().toLocaleString();this.messages.unshift({name:"The product has been added to the cart",id:t})}))},sortByCategories(t){this.sortedProducts=[];let e=this;this.PRODUCTS.map((function(a){t.name===a.category&&e.sortedProducts.push(a)})),this.selected=t.name},filteredByName(t){this.sortedProducts=[...this.PRODUCTS],this.selected="All",this.sortedProducts=t?this.sortedProducts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.PRODUCTS}},watch:{SEARCH_QUERY(){this.filteredByName(this.SEARCH_QUERY)}},mounted(){this.GET_PRODUCTS_FROM_API(),this.filteredByName(this.SEARCH_QUERY)}};const wt=(0,p.Z)(Et,[["render",S]]);var yt=wt;const Rt={class:"catalog-cart"},At=(0,r._)("div",{class:"catalog__link link",title:"Back to Catalog"},[(0,r._)("i",{class:"material-icons"},"first_page")],-1),Pt=(0,r._)("h1",null,"Cart",-1),bt={key:0,class:"material-icons catalog-cart__icon"},Dt={key:1};function Ot(t,e,a,o,i,c){const n=(0,r.up)("router-link"),s=(0,r.up)("cart-item-wrapper");return(0,r.wg)(),(0,r.iD)("div",Rt,[(0,r.Wm)(n,{to:{name:"catalog"}},{default:(0,r.w5)((()=>[At])),_:1}),Pt,t.CART.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("i",bt," shopping_cart ")),t.CART.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Dt,"There are no products in the cart...")),t.CART.length?((0,r.wg)(),(0,r.j4)(s,{key:2,cart_data:t.CART},null,8,["cart_data"])):(0,r.kq)("",!0)])}const St={class:"cart-item-wrapper"},kt={class:"cart-item-wrapper__total"},It=(0,r._)("p",{class:"cart-item-wrapper__total-title"},"Total:",-1);function jt(t,e,a,o,i,c){const n=(0,r.up)("catalog-cart-item");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",St,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.cart_data,((t,e)=>((0,r.wg)(),(0,r.j4)(n,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>c.deleteFromCart(e),onIncrementItem:t=>c.incrementItem(e),onDecrementItem:t=>c.decrementItem(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrementItem","onDecrementItem"])))),128))]),(0,r._)("div",kt,[It,(0,r._)("p",null,(0,w.zw)(c.cartTotalCost)+" UAH",1)])],64)}const Mt={class:"catalog-cart-item"},Nt={class:"catalog-cart-item__wrap"},Ut=["src"],Ft={class:"catalog-cart-item__info"},qt={class:"catalog-cart-item__quantity"},Ht=(0,r._)("p",null,"Qty:",-1),Qt={class:"catalog-cart-item__qty"},Bt={class:"catalog-cart-item__number"};function Wt(t,e,o,i,c,n){return(0,r.wg)(),(0,r.iD)("div",Mt,[(0,r._)("div",Nt,[(0,r._)("img",{class:"catalog-cart-item__image",src:a(990)("./"+o.cart_item_data.image),alt:"img"},null,8,Ut)]),(0,r._)("div",Ft,[(0,r._)("p",null,(0,w.zw)(o.cart_item_data.name),1),(0,r._)("p",null,(0,w.zw)(o.cart_item_data.price)+" UAH",1),(0,r._)("p",null,(0,w.zw)(o.cart_item_data.article),1)]),(0,r._)("div",qt,[Ht,(0,r._)("p",Qt,[(0,r._)("span",{class:"catalog-cart-item__btn",onClick:e[0]||(e[0]=(...t)=>n.decrementItem&&n.decrementItem(...t))},"-"),(0,r._)("span",Bt,(0,w.zw)(o.cart_item_data.quantity),1),(0,r._)("span",{class:"catalog-cart-item__btn",onClick:e[1]||(e[1]=(...t)=>n.incrementItem&&n.incrementItem(...t))},"+")])]),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>n.deleteFromCart&&n.deleteFromCart(...t)),class:"btn"}," Delete ")])}var zt={name:"CatalogCartItem",components:{},props:{cart_item_data:{type:Object,default(){return{}}}},methods:{decrementItem(){this.$emit("decrementItem")},incrementItem(){this.$emit("incrementItem")},deleteFromCart(){this.$emit("deleteFromCart")}}};const Yt=(0,p.Z)(zt,[["render",Wt]]);var xt=Yt,Lt={name:"CartItemWrapper",components:{CatalogCartItem:xt},props:{cart_data:{type:Array,default(){return[]}}},methods:{...(0,h.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),decrementItem(t){this.DECREMENT_CART_ITEM(t)},incrementItem(t){this.INCREMENT_CART_ITEM(t)},deleteFromCart(t){this.DELETE_FROM_CART(t)}},computed:{cartTotalCost(){let t=[];for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce((function(t,e){return t+e})),t}}};const Vt=(0,p.Z)(Lt,[["render",jt]]);var Zt=Vt,Gt={name:"CatalogCart",components:{CartItemWrapper:Zt},computed:{...(0,h.Se)(["CART"])}};const $t=(0,p.Z)(Gt,[["render",Ot]]);var Kt=$t;const Jt=(0,E.p7)({history:(0,E.PO)(),routes:[{path:"/",name:"catalog",component:yt},{path:"/cart",name:"cart",component:Kt,props:!0}]});var Xt=Jt;const te=(0,o.ri)({});te.use(Jt);const ee=(0,o.ri)(g);ee.use(f),ee.use(Xt),ee.mount("#app")},990:function(t,e,a){var o={"./1.jpg":7097,"./2.jpg":7253,"./3.jpg":9672,"./4.jpg":2668,"./5.jpg":1279,"./6.jpg":6245,"./7.jpg":9511,"./8.jpg":3782,"./9.jpg":3187};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=990},7097:function(t,e,a){"use strict";t.exports=a.p+"img/1.dd090118.jpg"},7253:function(t,e,a){"use strict";t.exports=a.p+"img/2.67d7bb12.jpg"},9672:function(t,e,a){"use strict";t.exports=a.p+"img/3.90fba945.jpg"},2668:function(t,e,a){"use strict";t.exports=a.p+"img/4.8fac09e4.jpg"},1279:function(t,e,a){"use strict";t.exports=a.p+"img/5.6e9e077a.jpg"},6245:function(t,e,a){"use strict";t.exports=a.p+"img/6.e7f61330.jpg"},9511:function(t,e,a){"use strict";t.exports=a.p+"img/7.e835861c.jpg"},3782:function(t,e,a){"use strict";t.exports=a.p+"img/8.b7197b77.jpg"},3187:function(t,e,a){"use strict";t.exports=a.p+"img/9.a0224128.jpg"}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,i){if(!o){var c=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],i=t[p][2];for(var n=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[s])}))?o.splice(s--,1):(n=!1,i<c&&(c=i));if(n){t.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/online-shop/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,c=o[0],n=o[1],s=o[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(s)var p=s(a)}for(e&&e(o);l<c.length;l++)i=c[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(p)},o=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3034)}));o=a.O(o)})();
//# sourceMappingURL=app.e529f4db.js.map