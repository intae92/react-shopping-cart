"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[312],{1687:function(n,r,e){e.d(r,{R:function(){return p},j:function(){return s}});var t=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u),o="https://coke-react-shopping-cart.herokuapp.com",s=function(){var n=(0,t.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()({method:"GET",url:"".concat(o,"/products")});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()({method:"GET",url:"".concat(o,"/products/").concat(r)});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2868:function(n,r,e){var t=e(5861),c=e(885),a=e(7757),u=e.n(a),i=e(2791);r.Z=function(n){var r=(0,i.useState)(null),e=(0,c.Z)(r,2),a=e[0],o=e[1],s=(0,i.useState)(!0),p=(0,c.Z)(s,2),f=p[0],h=p[1],l=(0,i.useState)({isError:!1,message:""}),d=(0,c.Z)(l,2),x=d[0],g=d[1],m=(0,i.useCallback)((0,t.Z)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)}))),[n]);return(0,i.useEffect)((function(){a||x.isError||m().then((function(n){o(n.data),h(!1)})).catch((function(n){return g({isError:!0,message:n.message})}))}),[m,a,x]),{data:a,loading:f,error:x}}},312:function(n,r,e){e.r(r);var t,c,a,u,i,o,s=e(168),p=e(6871),f=e(6031),h=e(1687),l=e(6111),d=e(2868),x=e(184);var g=(0,f.ZP)(l.Gp.flexCenterWrapper)(t||(t=(0,s.Z)(["\n  flex-direction: column;\n  margin: 60px auto;\n"]))),m=f.ZP.div(c||(c=(0,s.Z)(["\n  width: 450px;\n"]))),Z=f.ZP.div(a||(a=(0,s.Z)(["\n  margin: 16px;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 36px;\n  letter-spacing: 0.5px;\n"]))),w=(0,f.ZP)(l.Gp.flexCenterWrapper)(u||(u=(0,s.Z)(["\n  justify-content: space-between;\n  margin: 16px;\n"]))),v=f.ZP.span(i||(i=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n"]))),b=f.ZP.button(o||(o=(0,s.Z)(["\n  width: 430px;\n  height: 60px;\n  left: 641px;\n  bottom: 60px;\n  background: ",";\n  color: ",";\n  font-size: 24px;\n  font-weight: 700;\n  border-radius: 4px;\n  border: none;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.COLORS.BROWN}),(function(n){return n.theme.COLORS.WHITE}),(function(n){return n.theme.COLORS.LIGHT_BROWN}));r.default=function(){var n=(0,p.UO)().id,r=(0,d.Z)((function(){return(0,h.R)(n)})),e=r.data;if(r.loading)return null;var t=e.imageUrl,c=e.name,a=e.price;return(0,x.jsxs)(g,{children:[(0,x.jsx)(l.zT,{width:"large",height:"large",children:(0,x.jsx)(l.L6,{width:"large",src:t})}),(0,x.jsxs)(m,{children:[(0,x.jsx)(Z,{children:c}),(0,x.jsx)("hr",{}),(0,x.jsxs)(w,{children:[(0,x.jsx)("span",{children:"\uae08\uc561"}),(0,x.jsxs)(v,{children:[Number(a).toLocaleString(),"\uc6d0"]})]})]}),(0,x.jsx)(b,{children:"\uc7a5\ubc14\uad6c\ub2c8"})]})}}}]);
//# sourceMappingURL=312.4238dfd6.chunk.js.map