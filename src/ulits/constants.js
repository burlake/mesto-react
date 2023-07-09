//массив для карточек
const arkhyzImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const chelyabinskImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url)
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const kholmogorskyImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url)

const items = [
  // меняем исходные пути на переменные
  { text: 'Архыз', link: arkhyzImage },
  { text: 'Челябинская область', link: chelyabinskImage },
  { text: 'Иваново', link: ivanovoImage },
  { text: 'Камчатка', link: kamchatkaImage },
  { text: 'Холмогорский район', link: kholmogorskyImage },
  { text: 'Байкал', link: baikalImage },
];

//кнопки
const buttonEditProfile = document.querySelector(".profile__edit-button"); //ручка для добавления данных (имя и профессия)
const buttonAddCard = document.querySelector(".profile__add-button"); //крестик для добавления карточки
const buttonAddAvatar = document.querySelector(".profile__pen-button"); //ручка для добавления нового аватара


//формы для валидации (форма с редактированием и форма с добавлением новой картинки)
const formEdit = document.querySelector(".form_edit");
const formCard = document.querySelector(".form_new-card");
const formAvatar = document.querySelector(".form_new-avatar");
const formDelete = document.querySelector(".form_delete");

//селекторы для попапов
const popupProfileSelector = '.popup_type_edit';
const popupAddNewCardSelector = '.popup_type_new-card';
const popupImageSelector = '.popup_type_image';
const cardListSelector = '.gallery';
const popupAvatarSelector = '.popup_type_new-avatar';
const cardDeleteSelector = '.popup_type_delete';

//конфиг для карточек
const config = {
  selectorGalleryList: ".gallery",
  selectorTemplateGallery: ".gallery_template",
};

//конфиг для профайла
const configInfo = {
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__description',
  userAvatarSelector: '.profile__photo',
};

// конфиг для валидации
const formValidationConfig = {
  inputSelector: ".form__subtitle",
  errorClass: "form__subtitle__invalid",
  errorVisibleClass: "error-message_visible",
  buttonSelector: ".form__button",
  buttonDisabledClass: "form_disabled",
};

export {
  items,
  buttonEditProfile,
  buttonAddCard,
  formEdit,
  formCard,
  config,
  configInfo, 
  popupProfileSelector,
  popupAddNewCardSelector,
  popupImageSelector,
  cardListSelector,
  formValidationConfig,
  buttonAddAvatar,
  formAvatar,
  popupAvatarSelector,
  formDelete,
  cardDeleteSelector,
};