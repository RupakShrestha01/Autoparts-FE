(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{5424:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shipping",function(){return t(3990)}])},2913:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var r=t(5893);t(7294);function n(e){var s=e.activeStep,t=void 0===s?0:s;return(0,r.jsx)("div",{className:"mb-5 flex flex-wrap",children:["User Login","Shipping Address","Payment Method","Place Order"].map((function(e,s){return(0,r.jsx)("div",{className:"flex-1 border-b-2  \n            text-center \n         ".concat(s<=t?"border-indigo-500   text-indigo-500":"border-gray-400 text-gray-400","\n            \n         "),children:e},e)}))})}},8662:function(e,s,t){"use strict";t.d(s,{Z:function(){return y}});var r=t(5893),n=t(3299),a=t(9008),i=t.n(a),l=t(1664),d=t.n(l),c=t(1955),o=t(7294),u=t(2920),h=t(6272),m=(t(993),t(8766)),x=t(1799),f=t(9396),p=t(9534);function j(e){var s=e.href,t=e.children,n=(0,p.Z)(e,["href","children"]);return(0,r.jsx)(d(),{href:s,children:(0,r.jsx)("a",(0,f.Z)((0,x.Z)({},n),{children:t}))})}var N=t(1163),v=t(3737);function y(e){var s=e.title,t=e.children,a=(0,n.useSession)(),l=a.status,x=a.data,f=(0,o.useContext)(m.y),p=f.state,y=f.dispatch,b=p.cart,g=(0,o.useState)(0),w=g[0],C=g[1];(0,o.useEffect)((function(){C(b.cartItems.reduce((function(e,s){return e+s.quantity}),0))}),[b.cartItems]);var S=(0,o.useState)(""),Z=S[0],A=S[1],k=(0,N.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:s?s+" - Autoparts":"Autoparts"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(u.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between sticky ",children:[(0,r.jsx)("header",{className:"",children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("a",{className:"text-lg font-bold",children:"Autoparts"})}),(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k.push("/search?query=".concat(Z))},className:"mx-auto hidden justify-center md:flex",children:[(0,r.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"text",className:"rounded-tr-none rounded-br-none p-1 text-sm focus:ring-0",placeholder:"Search products"}),(0,r.jsx)("button",{className:"rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black",type:"submit",id:"button-addon2",children:(0,r.jsx)(v.Z,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(d(),{href:"/cart",children:(0,r.jsxs)("a",{className:"p-2",children:["Cart",w>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:w})]})}),"loading"===l?"Loading":(null===x||void 0===x?void 0:x.user)?(0,r.jsxs)(h.v,{as:"div",className:"relative inline-block ",children:[(0,r.jsx)(h.v.Button,{className:"text-blue-600 ",children:x.user.name}),(0,r.jsxs)(h.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-gray-400 shadow-lg ",children:[(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(j,{className:"dropdown-link hover:text-white",href:"/profile",children:"Profile"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(j,{className:"dropdown-link hover:text-white",href:"/order-history",children:"Order History"})}),x.user.isAdmin&&(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(j,{className:"dropdown-link hover:text-white",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link hover:text-white",href:"#",onClick:function(){c.Z.remove("cart"),y({type:"CART_RESET"}),(0,n.signOut)({callbackUrl:"/login"})},children:"Logout"})})]})]}):(0,r.jsx)(d(),{href:"/login",children:(0,r.jsx)("a",{className:"p-2",children:"Login"})})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:t}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2022 Autoparts"})})]})]})}},3990:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var r=t(1799),n=t(9396),a=t(5893),i=t(7294),l=t(7536),d=t(1955),c=t(2913),o=t(8662),u=t(8766),h=t(1163);function m(){var e=(0,l.cI)(),s=e.handleSubmit,t=e.register,m=e.formState.errors,x=e.setValue,f=(0,i.useContext)(u.y),p=f.state,j=f.dispatch,N=p.cart,v=N.shippingAddress,y=(0,h.useRouter)();(0,i.useEffect)((function(){x("fullName",v.fullName),x("address",v.address),x("city",v.city),x("postalCode",v.postalCode),x("country",v.country)}),[x,v]);return(0,a.jsxs)(o.Z,{title:"Shipping Address",children:[(0,a.jsx)(c.Z,{activeStep:1}),(0,a.jsxs)("form",{className:"mx-auto max-w-screen-md",onSubmit:s((function(e){var s=e.fullName,t=e.address,a=e.city,i=e.postalCode,l=e.country;j({type:"SAVE_SHIPPING_ADDRESS",payload:{fullName:s,address:t,city:a,postalCode:i,country:l}}),d.Z.set("cart",JSON.stringify((0,n.Z)((0,r.Z)({},N),{shippingAddress:{fullName:s,address:t,city:a,postalCode:i,country:l}}))),y.push("/payment")})),children:[(0,a.jsx)("h1",{className:"mb-4 text-xl",children:"Shipping Address"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),(0,a.jsx)("input",(0,r.Z)({className:"w-full",id:"fullName",autoFocus:!0},t("fullName",{required:"Please enter full name"}))),m.fullName&&(0,a.jsx)("div",{className:"text-red-500",children:m.fullName.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"address",children:"Address"}),(0,a.jsx)("input",(0,r.Z)({className:"w-full",id:"address"},t("address",{required:"Please enter address",minLength:{value:3,message:"Address is more than 2 chars"}}))),m.address&&(0,a.jsx)("div",{className:"text-red-500",children:m.address.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"city",children:"City"}),(0,a.jsx)("input",(0,r.Z)({className:"w-full",id:"city"},t("city",{required:"Please enter city"}))),m.city&&(0,a.jsx)("div",{className:"text-red-500 ",children:m.city.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),(0,a.jsx)("input",(0,r.Z)({className:"w-full",id:"postalCode"},t("postalCode",{required:"Please enter postal code"}))),m.postalCode&&(0,a.jsx)("div",{className:"text-red-500 ",children:m.postalCode.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"country",children:"Country"}),(0,a.jsx)("input",(0,r.Z)({className:"w-full",id:"country"},t("country",{required:"Please enter country"}))),m.country&&(0,a.jsx)("div",{className:"text-red-500 ",children:m.country.message})]}),(0,a.jsx)("div",{className:"mb-4 flex justify-between",children:(0,a.jsx)("button",{className:"primary-button",children:"Next"})})]})]})}m.auth=!0}},function(e){e.O(0,[956,536,774,888,179],(function(){return s=5424,e(e.s=s);var s}));var s=e.O();_N_E=s}]);