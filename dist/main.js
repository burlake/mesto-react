(()=>{"use strict";var t={803:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},894:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},884:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},955:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},586:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},399:t=>{t.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.b=document.baseURI||self.location.href,(()=>{var t=[{text:"Архыз",link:new URL(n(803),n.b)},{text:"Челябинская область",link:new URL(n(884),n.b)},{text:"Иваново",link:new URL(n(955),n.b)},{text:"Камчатка",link:new URL(n(586),n.b)},{text:"Холмогорский район",link:new URL(n(399),n.b)},{text:"Байкал",link:new URL(n(894),n.b)}],e=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__pen-button"),i=document.querySelector(".form_edit"),u=document.querySelector(".form_new-card"),c=document.querySelector(".form_new-avatar"),a=(document.querySelector(".form_delete"),".gallery_template"),s={inputSelector:".form__subtitle",errorClass:"form__subtitle__invalid",errorVisibleClass:"error-message_visible",buttonSelector:".form__button",buttonDisabledClass:"form_disabled"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}const h=function(){function t(e,n,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_deleteCard",(function(){u._popupDeleteCardOpen({card:u,cardId:u._cardId})})),p(this,"_zoomCard",(function(){u._openImagePopup(u._card)})),p(this,"_likeActiveCard",(function(){u._changeLike(u._cardId,u._like)})),this._template=e,this._card=n,this._link=n.link,this._text=n.name,this._likes=n.likes,this._likesLength=n.likes.length,this._changeLike=i,this._openImagePopup=r,this._popupDeleteCardOpen=o,this._myId=n.myId,this._ownerId=n.owner._id,this._cardId=n._id,this._likeActiveCard=this._likeActiveCard.bind(this),this._deleteCard=this._deleteCard.bind(this),this._zoomCard=this._zoomCard.bind(this)}var e,n;return e=t,(n=[{key:"_getElementFromTemplate",value:function(){return document.querySelector(this._template).content.children[0].cloneNode(!0)}},{key:"_addEventListeners",value:function(){this._like.addEventListener("click",this._likeActiveCard),this._cardTrash.addEventListener("click",this._deleteCard),this._cardImage.addEventListener("click",this._zoomCard)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._like.classList.add("card__like_active")})),this._likesCounter.textContent=this._likesLength}},{key:"toggleLike",value:function(t){this._like.classList.toggle("card__like_active"),this._likesCounter.textContent=t.length}},{key:"isMyLike",value:function(){return this._like.classList.contains("card__like_active")}},{key:"getElement",value:function(){return this._element=this._getElementFromTemplate(),this._element.querySelector(".card__place").textContent=this._text,this._cardImage=this._element.querySelector(".card__img"),this._cardImage.src=this._link,this._cardImage.alt=this._text,this._like=this._element.querySelector(".card__like"),this._likesCounter=this._element.querySelector(".card__number-of-likes"),this._cardTrash=this._element.querySelector(".card__trash"),this._myId===this._ownerId?this._cardTrash.style.display="block":this._cardTrash.style.display="none",this._checkLikeStatus(),this._addEventListeners(),this._element}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_(r.key),r)}}function v(t,e,n){return(e=_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}const m=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"_handleEscClose",(function(t){"Escape"===t.code&&n.close()})),v(this,"_handleButtonClose",(function(){n.close()})),v(this,"_handleClosePopupByOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleButtonClose),this._popup.addEventListener("click",this._handleClosePopupByOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitFunction=n,r._form=e,r._inputList=e.querySelectorAll(".form__subtitle"),r._button=e.querySelector(".form__button"),r._buttonTextContent=r._button.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;S(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._button.textContent="".concat(t._button.textContent," ..."),t._submitFunction(t._getInputValue())}))}},{key:"_getInputValue",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e){var n;e.value=null!==(n=t[e.name])&&void 0!==n?n:""}))}},{key:"loadingText",value:function(){this._button.textContent=this._buttonTextContent}},{key:"close",value:function(){S(O(u.prototype),"close",this).call(this),this._form.reset()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}function x(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}const T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(r){var o=I(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}(this,t)});function i(t){var e,n,r,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=P(n=o.call(this,t)),c=function(t){n._popupImageFull.src=t.link,n._popupImageFull.alt=t.text,n._popupImageTittle.textContent=t.name,L((e=P(n),I(i.prototype)),"open",e).call(e)},(u=x(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._popupImageFull=n._popup.querySelector(".popup__image-full"),n._popupImageTittle=n._popup.querySelector(".popup__image-tittle"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(m);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var U=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"addCardFromArray",value:function(t){var e=this;t.reverse(),t.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}const B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e.userNameSelector),this._userJob=document.querySelector(e.userJobSelector),this._userAvatar=document.querySelector(e.userAvatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent}}},{key:"getUserAvatar",value:function(){return{avatar:this._link.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;t._id,this._userName.textContent=e,this._userJob.textContent=n,this._userAvatar.src=r}},{key:"setUserId",value:function(t){this._id=t}},{key:"getUserId",value:function(){return this._id}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}const V=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._errorClass=e.errorClass,this._errorVisibleClass=e.errorVisibleClass,this._buttonSelector=e.buttonSelector,this._buttonDisabledClass=e.buttonDisabledClass,this._form=n,this._button=n.querySelector(this._buttonSelector),this._inputList=n.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){e.classList.add(this._errorClass),t.classList.add(this._errorVisibleClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._errorClass),t.classList.remove(this._errorVisibleClass),t.textContent=""}},{key:"_enableButton",value:function(){this._button.classList.remove(this._buttonDisabledClass),this._button.disabled=!1}},{key:"_disableButton",value:function(){this._button.classList.add(this._buttonDisabledClass),this._button.disabled=!0}},{key:"_hasValidInput",value:function(){return Array.from(this._inputList).every((function(t){return t.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasValidInput()?this._enableButton():this._disableButton(this._button)}},{key:"_handleFormInput",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_addInputListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._handleFormInput(e),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._addInputListeners()}},{key:"resetErrorForOpenForm",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("#".concat(e.id,"-error"));e.validity.valid||t._hideInputError(n,e)})),this._disableButton()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,K(r.key),r)}}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}function K(t){var e=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===N(e)?e:String(e)}const Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return H(t)}(this,t)});function u(t,e){var n,r,o,c,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=H(r=i.call(this,t)),a=function(t){var e=t.card,o=t.cardId;$((n=H(r),G(u.prototype)),"open",n).call(n),r._element=e,r._elementId=o},(c=K(c="open"))in o?Object.defineProperty(o,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[c]=a,r._submitFunction=e,r._form=r._popup.querySelector(".form_delete"),r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;$(G(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFunction({card:t._element,cardId:t._elementId})}))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}const Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&X(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var tt,et=new B({userNameSelector:".profile__name",userJobSelector:".profile__description",userAvatarSelector:".profile__photo"}),nt=new T(".popup_type_image"),rt=new Y({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"ae20785e-e850-4452-960a-73f188fc9474","Content-Type":"application/json"}}),ot=new Q(".popup_type_delete",(function(t){var e=t.card,n=t.cardId;rt.deleteCard(n).then((function(t){console.log("res",t),e.removeCard(),ot.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))}))})),it=new U({items:t,renderer:function(t){var e=new h(a,t,nt.open,ot.open,(function(t){e.isMyLike()?rt.deleteLike(t).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.log(t)})):rt.addLike(t).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}));return e.getElement()}},".gallery"),ut=new j(".popup_type_edit",i,(function(t){rt.setUserInfo(t).then((function(t){et.setUserInfo(t),ut.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return ut.loadingText()}))})),ct=new j(".popup_type_new-card",u,(function(t){rt.addCard(t).then((function(t){t.myId=et.getUserId(),it.addItem(t),ct.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return ct.loadingText()}))})),at=new j(".popup_type_new-avatar",c,(function(t){rt.setUserAvatar(t).then((function(t){et.setUserInfo(t),at.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return at.loadingText()}))})),st=new V(s,i);st.enableValidation();var lt=new V(s,u);lt.enableValidation();var ft=new V(s,c);ft.enableValidation(),nt.setEventListeners(),ut.setEventListeners(),ct.setEventListeners(),at.setEventListeners(),ot.setEventListeners(),r.addEventListener("click",(function(){ct.open(),lt.resetErrorForOpenForm()})),o.addEventListener("click",(function(){at.open(),ft.resetErrorForOpenForm()})),e.addEventListener("click",(function(){st.resetErrorForOpenForm(),ut.setInputValue(et.getUserInfo()),ut.open()})),Promise.all([rt.getInfo(),rt.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];tt=o._id,i.forEach((function(t){return t.myId=tt})),et.setUserInfo(o),et.setUserId(tt),it.addCardFromArray(i)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))})()})();