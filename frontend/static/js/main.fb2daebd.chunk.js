(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),i=n(5),o=(n(19),n(12)),l=n(3),u=n(2),p=n(0);function d(e){var t=Object(u.f)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(i.b,{className:"header__logo",to:"/",target:"_self"}),Object(p.jsxs)("div",{className:"header__wrapper",children:[e.isLoggedIn?Object(p.jsx)("p",{className:"header__user-information",children:e.userEmail}):"","/sign-up"===t.pathname?Object(p.jsx)(i.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}):Object(p.jsx)(i.b,{to:e.isLoggedIn?"/sign-in":"/sign-up",onClick:e.onLogOut,className:"header__link",children:e.isLoggedIn?"\u0412\u044b\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})}var j=n.p+"static/media/avatar.f55076d0.jpg",m=n.p+"static/media/edit-button.8667ac4a.svg",b=n.p+"static/media/add-button.d86bb2ed.svg",h=n.p+"static/media/icon-remove.a274c87c.svg",f=c.a.createContext();function _(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,r=c.a.useContext(f),i=t.owner===r._id,o=t.likes.some((function(e){return e===r._id}));return Object(p.jsxs)("div",{className:"places__item",children:[i&&Object(p.jsx)("button",{className:"places__remove-button",onClick:function(){s(t)},children:Object(p.jsx)("img",{src:h,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}),Object(p.jsx)("img",{onClick:function(){n(t)},className:"places__image",src:t.link,alt:t.name}),Object(p.jsxs)("div",{className:"places__footer",children:[Object(p.jsx)("h2",{className:"places__name",children:t.name}),Object(p.jsxs)("div",{className:"places__wrapper",children:[Object(p.jsx)("button",{onClick:function(){a(t)},className:"places__like-button ".concat(o?"places__like-button_active":"")}),Object(p.jsx)("div",{className:"places__like-number",children:t.likes.length})]})]})]})}function O(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}function g(e){var t=c.a.useContext(f);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar?t.avatar:j,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(p.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__container",children:[Object(p.jsxs)("div",{className:"profile__wrapper",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,children:Object(p.jsx)("img",{className:"profile__edit-button-logo",src:m,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})})]}),Object(p.jsx)("p",{className:"profile__info",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,children:Object(p.jsx)("img",{className:"profile__add-button-logo",src:b,alt:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435"})})]}),Object(p.jsx)("section",{className:"places",children:e.cards.map((function(t){return Object(p.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]}),Object(p.jsx)(O,{})]})}var x=n.p+"static/media/icon-close.507ea218.svg";function v(e){return Object(p.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("h3",{className:"popup__title",children:e.title}),Object(p.jsxs)("form",{className:"popup__form",onSubmit:e.onSubmit,name:e.name,children:[e.children,Object(p.jsx)("button",{className:"popup__btn-save",type:"submit",children:e.buttonText})]}),Object(p.jsx)("button",{className:"popup__btn-close",onClick:e.onClose,children:Object(p.jsx)("img",{className:"popup__btn-close-icon",src:x,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})})}function N(e){var t=e.card,n=e.onClose;return Object(p.jsx)("article",{className:"popup popup_type_image ".concat(t?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__image-container",children:[Object(p.jsx)("button",{className:"popup__btn-close",onClick:n,children:Object(p.jsx)("img",{className:"popup__btn-close-icon",src:x,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(p.jsx)("img",{className:"popup__place-img",src:t.link,alt:t.name}),Object(p.jsx)("p",{className:"popup__place-name",children:t.name})]})})}var C=n(10),k=n(11),y=function(){function e(t){var n=t.baseUrl,a=t.headers;Object(C.a)(this,e),this._baseUrl=n,this._headers=a}return Object(k.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getProfileData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,credentials:"include"}).then((function(t){return e._getResponseData(t)}))}},{key:"getCardsData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,credentials:"include"}).then((function(t){return e._getResponseData(t)}))}},{key:"updateProfileData",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"createCardData",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCardData",value:function(e,t){var n=this;if(t)return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return n._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers,credentials:"include"}).then((function(e){return n._getResponseData(e)}))}},{key:"updateProfileAvatar",value:function(e,t){var n=this,a=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({avatar:a})}).then((function(e){return n._getResponseData(e)}))}}]),e}(),S=new y({baseUrl:"https://api.project.mesto.nomoredomains.work",headers:{"Content-Type":"application/json"}}),w="https://api.project.mesto.nomoredomains.work",D=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};function L(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],j=c.a.useContext(f);Object(a.useEffect)((function(){r(j.name),d(j.about)}),[j,e.isOpen]);return Object(p.jsx)(v,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(p.jsxs)("div",{className:"popup__inputs-wrapper",children:[Object(p.jsx)("input",{required:!0,className:"popup__input",value:s,onChange:function(e){r(e.target.value)},id:"profile-name",minLength:"2",maxLength:"40",type:"text",name:"name",placeholder:"\u0418\u043c\u044f"}),Object(p.jsx)("span",{className:"popup__error",id:"profile-name-error"}),Object(p.jsx)("input",{required:!0,className:"popup__input",value:u,onChange:function(e){d(e.target.value)},id:"profile-about",minLength:"2",maxLength:"200",type:"text",name:"about",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(p.jsx)("span",{className:"popup__error",id:"profile-about-error"})]})})}function E(e){var t=Object(a.useRef)();return Object(p.jsx)(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value},n)},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(p.jsxs)("div",{className:"popup__inputs-wrapper",children:[Object(p.jsx)("input",{required:!0,className:"popup__input",id:"profile-avatar",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t}),Object(p.jsx)("span",{className:"popup__error",id:"profile-avatar-error"})]})})}function T(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1];Object(a.useEffect)((function(){s(""),u("")}),[e.isOpen]);return Object(p.jsx)(v,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"place",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddNewCard({name:c,link:o})},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:Object(p.jsxs)("div",{className:"popup__inputs-wrapper",children:[Object(p.jsx)("input",{required:!0,className:"popup__input",value:c,onChange:function(e){s(e.target.value)},type:"text",id:"place-name",minLength:"2",maxLength:"30",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(p.jsx)("span",{className:"popup__error",id:"place-name-error"}),Object(p.jsx)("input",{required:!0,className:"popup__input",value:o,onChange:function(e){u(e.target.value)},type:"url",name:"link",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(p.jsx)("span",{className:"popup__error",id:"place-link-error"})]})})}function P(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),u=o[0],d=o[1];return Object(p.jsxs)("div",{className:"form-registr",children:[Object(p.jsx)("h3",{className:"form-registr__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"form-registr__form",onSubmit:function(t){t.preventDefault(),e.onRegister({password:u,email:c})},children:[Object(p.jsxs)("div",{className:"form-registr__inputs-wrapper",children:[Object(p.jsx)("input",{required:!0,className:"form-registr__input",onChange:function(e){s(e.target.value)},value:c,type:"email",id:"user-email",minLength:"2",maxLength:"30",name:"email",placeholder:"Email"}),Object(p.jsx)("input",{required:!0,className:"form-registr__input",onChange:function(e){d(e.target.value)},value:u,type:"password",id:"user-password",minLength:"6",maxLength:"30",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),Object(p.jsx)("button",{className:"form-registr__btn-save",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsx)(i.b,{to:"/sign-in",className:"form-registr__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})}function U(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1];return Object(p.jsxs)("div",{className:"form-registr",children:[Object(p.jsx)("h3",{className:"form-registr__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"form-registr__form",onSubmit:function(t){t.preventDefault(),e.onAuthorization({password:o,email:c})},children:[Object(p.jsxs)("div",{className:"form-registr__inputs-wrapper",children:[Object(p.jsx)("input",{required:!0,className:"form-registr__input",value:c,onChange:function(e){s(e.target.value)},type:"email",id:"user-email",minLength:"6",maxLength:"30",name:"email",placeholder:"Email"}),Object(p.jsx)("input",{required:!0,className:"form-registr__input",value:o,onChange:function(e){u(e.target.value)},type:"password",id:"user-password",minLength:"6",maxLength:"15",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),Object(p.jsx)("button",{className:"form-registr__btn-save",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var A=n.p+"static/media/icon-tooltip-success.1b6082f8.svg",R=n.p+"static/media/icon-tooltip-error.df8eddf6.svg";function q(e){return Object(p.jsx)("article",{className:"popup popup_type_tooltip ".concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("img",{className:"popup__tooltip-icon",alt:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",src:e.isSuccess?A:R}),Object(p.jsx)("p",{className:"popup__tooltip-message",children:e.isSuccess?Object(p.jsx)(p.Fragment,{children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}):Object(p.jsx)(p.Fragment,{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}),Object(p.jsx)("button",{className:"popup__btn-close",onClick:e.onClose,children:Object(p.jsx)("img",{className:"popup__btn-close-icon",src:x,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})})}var I=n(13),J=n(14),F=["component"];function z(e){var t=e.component,n=Object(J.a)(e,F);return n.loggedIn?Object(p.jsx)(t,Object(I.a)({},n)):Object(p.jsx)(u.a,{to:"/sign-in"})}var G=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],j=r[1],m=Object(a.useState)(!1),b=Object(l.a)(m,2),h=b[0],_=b[1],O=Object(a.useState)(!1),x=Object(l.a)(O,2),C=x[0],k=x[1],y=Object(a.useState)(!1),A=Object(l.a)(y,2),R=A[0],I=A[1],J=Object(a.useState)(null),F=Object(l.a)(J,2),G=F[0],H=F[1],M=Object(a.useState)({name:"",about:""}),B=Object(l.a)(M,2),Y=B[0],K=B[1],Q=Object(a.useState)([]),V=Object(l.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],re=Object(u.g)();Object(a.useEffect)((function(){ee&&S.getCardsData().then((function(e){X(e.reverse())})).catch((function(e){console.log(e)}))}),[ee]),Object(a.useEffect)((function(){fetch("".concat(w,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return D(e)})).then((function(e){te(!0),K(e),se(e.email),re("/")})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ie()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]);var ie=function(){_(!1),c(!1),j(!1),k(!1),H(null)};return Object(p.jsx)(f.Provider,{value:Y,children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(d,{isLoggedIn:ee,userEmail:ce,onLogOut:function(){ee&&fetch("".concat(w,"/signout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return D(e)})).then((function(e){te(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/",element:Object(p.jsx)(z,{component:g,loggedIn:ee,cards:W,onCardLike:function(e){var t=e.likes.some((function(e){return e===Y._id}));S.changeLikeCardStatus(e._id,t).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){var t=e.owner===Y._id;S.deleteCardData(e._id,t).then((function(){X((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},onCardClick:function(e){H(e)},onEditAvatar:function(){_(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){j(!0)}})}),Object(p.jsx)(u.b,{path:"/sign-up",element:Object(p.jsx)(P,{onRegister:function(e){(function(e){var t=e.email,n=e.password;return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return D(e)}))})(e).then((function(e){re("/sign-in"),I(!0)})).catch((function(e){console.log(e),I(!1)})).finally((function(){k(!0)}))}})}),Object(p.jsx)(u.b,{path:"/sign-in",element:Object(p.jsx)(U,{onAuthorization:function(e){var t=e.email;(function(e){return fetch("".concat(w,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return D(e)}))})(e).then((function(e){te(!0),K(e),se(t),re("/")})).catch((function(e){console.log(e),I(!1),k(!0)}))}})})]}),Object(p.jsx)(L,{isOpen:n,onClose:ie,onUpdateUser:function(e){S.updateProfileData(e).then((function(e){K(e),ie()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(E,{isOpen:h,onClose:ie,onUpdateAvatar:function(e,t){S.updateProfileAvatar(e,t).then((function(e){K(e),ie(),t.target.reset()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(T,{isOpen:i,onClose:ie,onAddNewCard:function(e){S.createCardData(e).then((function(e){X([e].concat(Object(o.a)(W))),ie()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(v,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",buttonText:"\u0414\u0430"}),G&&Object(p.jsx)(N,{card:G,onClose:ie}),Object(p.jsx)(q,{isOpen:C,onClose:ie,isSuccess:R})]})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{basename:"/",children:Object(p.jsx)(G,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fb2daebd.chunk.js.map