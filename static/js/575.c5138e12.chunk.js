"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[575],{1687:function(n,r,t){t.d(r,{R:function(){return p},j:function(){return s}});var e=t(5861),c=t(7757),i=t.n(c),a=t(4569),u=t.n(a),o="https://coke-react-shopping-cart.herokuapp.com",s=function(){var n=(0,e.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()({method:"GET",url:"".concat(o,"/products")});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()({method:"GET",url:"".concat(o,"/products/").concat(r)});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2868:function(n,r,t){var e=t(5861),c=t(885),i=t(7757),a=t.n(i),u=t(2791);r.Z=function(n){var r=(0,u.useState)(null),t=(0,c.Z)(r,2),i=t[0],o=t[1],s=(0,u.useState)(!0),p=(0,c.Z)(s,2),f=p[0],h=p[1],l=(0,u.useState)({isError:!1,message:""}),d=(0,c.Z)(l,2),x=d[0],g=d[1],m=(0,u.useCallback)((0,e.Z)(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)}))),[n]);return(0,u.useEffect)((function(){i||x.isError||m().then((function(n){o(n.data),h(!1)})).catch((function(n){return g({isError:!0,message:n.message})}))}),[m,i,x]),{data:i,loading:f,error:x}}},3575:function(n,r,t){t.r(r);var e,c,i,a,u,o,s,p,f=t(168),h=t(5861),l=t(7757),d=t.n(l),x=t(6871),g=t(6031),m=t(6952),Z=t(6111),v=t(2868),w=t(1687),k=t(184);var j=g.ZP.div(e||(e=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  margin-top: 5vh;\n"]))),b=g.ZP.div(c||(c=(0,f.Z)(["\n  display: grid;\n  gap: 18px;\n  width: 80%;\n  grid-template-columns: repeat(4, 1fr);\n  margin: auto;\n  overflow-y: auto;\n"]))),P=g.ZP.div(i||(i=(0,f.Z)(["\n  width: 250px;\n  height: 330px;\n  cursor: pointer;\n"]))),C=(0,g.ZP)(Z.Gp.flexCenterWrapper)(a||(a=(0,f.Z)(["\n  justify-content: space-between;\n  margin: 16px 8px 0px 8px;\n"]))),y=(0,g.ZP)(Z.Gp.flexWrapper)(u||(u=(0,f.Z)(["\n  flex-direction: column;\n"]))),E=g.ZP.span(o||(o=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n"]))),S=g.ZP.span(s||(s=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.5px;\n"]))),z=g.ZP.button(p||(p=(0,f.Z)(["\n  border: none;\n  background: none;\n  &:hover {\n    transform: scale(1.1);\n    color: ",";\n  }\n"])),(function(n){return n.theme.COLORS.PRIMARY}));r.default=function(){var n=(0,x.s0)(),r=(0,v.Z)(w.j),t=r.data,e=r.loading,c=function(){var r=(0,h.Z)(d().mark((function r(t){return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n("".concat(t));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),i=function(){alert("\uae30\ub2a5 \ucd94\uac00\uc911...")};return e?null:(0,k.jsx)(j,{children:(0,k.jsx)(b,{children:t.map((function(n){var r=n.id,t=n.name,e=n.price,a=n.imageUrl;return(0,k.jsxs)(P,{children:[(0,k.jsx)(Z.zT,{width:"middle",height:"middle",onClick:function(){return c(r)},children:(0,k.jsx)(Z.L6,{width:"middle",src:a})}),(0,k.jsxs)(C,{children:[(0,k.jsxs)(y,{onClick:function(){return c(r)},children:[(0,k.jsx)(E,{children:t}),(0,k.jsxs)(S,{children:[Number(e).toLocaleString()," \uc6d0"]})]}),(0,k.jsx)(z,{onClick:i,children:(0,k.jsx)(m.ffc,{size:25})})]})]},r)}))})})}}}]);
//# sourceMappingURL=575.c5138e12.chunk.js.map