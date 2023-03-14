(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{9640:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/unauthorized",function(){return n(3667)}])},8662:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var s=n(5893),r=n(3299),i=n(9008),a=n.n(i),c=n(1664),l=n.n(c),o=n(1955),d=n(7294),h=n(2920),u=n(6272),x=(n(993),n(8766)),m=n(1799),f=n(9396),j=n(9534);function p(e){var t=e.href,n=e.children,r=(0,j.Z)(e,["href","children"]);return(0,s.jsx)(l(),{href:t,children:(0,s.jsx)("a",(0,f.Z)((0,m.Z)({},r),{children:n}))})}var v=n(1163),N=n(3737);function b(e){var t=e.title,n=e.children,i=(0,r.useSession)(),c=i.status,m=i.data,f=(0,d.useContext)(x.y),j=f.state,b=f.dispatch,g=j.cart,w=(0,d.useState)(0),y=w[0],k=w[1];(0,d.useEffect)((function(){k(g.cartItems.reduce((function(e,t){return e+t.quantity}),0))}),[g.cartItems]);var _=(0,d.useState)(""),E=_[0],A=_[1],C=(0,v.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:t?t+" - Autoparts":"Autoparts"}),(0,s.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(h.Ix,{position:"bottom-center",limit:1}),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col justify-between sticky ",children:[(0,s.jsx)("header",{className:"",children:(0,s.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("a",{className:"text-lg font-bold",children:"Autoparts"})}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.push("/search?query=".concat(E))},className:"mx-auto hidden justify-center md:flex",children:[(0,s.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"text",className:"rounded-tr-none rounded-br-none p-1 text-sm focus:ring-0",placeholder:"Search products"}),(0,s.jsx)("button",{className:"rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black",type:"submit",id:"button-addon2",children:(0,s.jsx)(N.Z,{className:"h-5 w-5"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{href:"/cart",children:(0,s.jsxs)("a",{className:"p-2",children:["Cart",y>0&&(0,s.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:y})]})}),"loading"===c?"Loading":(null===m||void 0===m?void 0:m.user)?(0,s.jsxs)(u.v,{as:"div",className:"relative inline-block ",children:[(0,s.jsx)(u.v.Button,{className:"text-blue-600 ",children:m.user.name}),(0,s.jsxs)(u.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-gray-400 shadow-lg ",children:[(0,s.jsx)(u.v.Item,{children:(0,s.jsx)(p,{className:"dropdown-link hover:text-white",href:"/profile",children:"Profile"})}),(0,s.jsx)(u.v.Item,{children:(0,s.jsx)(p,{className:"dropdown-link hover:text-white",href:"/order-history",children:"Order History"})}),m.user.isAdmin&&(0,s.jsx)(u.v.Item,{children:(0,s.jsx)(p,{className:"dropdown-link hover:text-white",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,s.jsx)(u.v.Item,{children:(0,s.jsx)("a",{className:"dropdown-link hover:text-white",href:"#",onClick:function(){o.Z.remove("cart"),b({type:"CART_RESET"}),(0,r.signOut)({callbackUrl:"/login"})},children:"Logout"})})]})]}):(0,s.jsx)(l(),{href:"/login",children:(0,s.jsx)("a",{className:"p-2",children:"Login"})})]})]})}),(0,s.jsx)("main",{className:"container m-auto mt-4 px-4",children:n}),(0,s.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,s.jsx)("p",{children:"Copyright \xa9 2022 Autoparts"})})]})]})}},3667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(5893),r=n(1163),i=(n(7294),n(8662));function a(){var e=(0,r.useRouter)().query.message;return(0,s.jsxs)(i.Z,{title:"Unauthorized Page",children:[(0,s.jsx)("h1",{className:"text-xl",children:"Access Denied"}),e&&(0,s.jsx)("div",{className:"mb-4 text-red-500",children:e})]})}}},function(e){e.O(0,[956,774,888,179],(function(){return t=9640,e(e.s=t);var t}));var t=e.O();_N_E=t}]);