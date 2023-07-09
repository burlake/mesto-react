import '../pages/index.css';  //- webpack
import {
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
} from "../ulits/constants.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";
let userId;
const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector);

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'ae20785e-e850-4452-960a-73f188fc9474',
    'Content-Type': 'application/json'
  }
});

const popupDeleteCard = new PopupWithDelete (cardDeleteSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
  .then(res =>  {
    console.log('res', res);
    
    card.removeCard()

    popupDeleteCard.close();
  })
  .catch ((error => console.log(`Ошибка: ${error}`)))
  
});


const section = new Section({
  items: items,
  renderer: (element)  => {
    const card = new Card(config.selectorTemplateGallery, element,  popupImage.open, popupDeleteCard.open, (cardId) => {  //(cardId, isLiked
      const isLiked = card.isMyLike ();
      if(isLiked) { //like.classList.contains('card__like_active')
        api.deleteLike(cardId) 
        .then(res => {
          card.toggleLike(res.likes)
        })
        .catch ((error => console.log(error)))
      } else {
        api.addLike(cardId)
        .then (res => {
          card.toggleLike(res.likes) 
        })
        .catch ((error => console.log(`Ошибка: ${error}`)))
      }
    });
    const cardNewElement = card.getElement();
    return cardNewElement;
  }
},
cardListSelector );

const popupProfile = new PopupWithForm (popupProfileSelector, formEdit, (data) => {
  api.setUserInfo(data)
  .then (dataUser => {
    userInfo.setUserInfo(dataUser)
    popupProfile.close();
  })
  .catch ((error => console.log(`Ошибка: ${error}`)))
  .finally(() =>  popupProfile.loadingText());
});

//
const popupAddNewCard = new PopupWithForm (popupAddNewCardSelector, formCard, (data) => {
  api.addCard(data)
  .then(dataCard => {
    dataCard.myId = userInfo.getUserId();   //let userId; в 29 строке написала еще.
    section.addItem(dataCard);
    popupAddNewCard.close();
  })
  .catch ((error => console.log(`Ошибка: ${error}`)))
  .finally(() =>  popupAddNewCard.loadingText());  
});

//
const popupAvatar = new PopupWithForm (popupAvatarSelector, formAvatar, (data) => {
  api.setUserAvatar(data)
  .then (dataUser => {
    userInfo.setUserInfo(dataUser)
    popupAvatar.close();
  })
  .catch ((error => console.log(`Ошибка: ${error}`)))
  .finally(() =>  popupAvatar.loadingText());
});

//валидация
const formPersonalDataValidator = new FormValidator(formValidationConfig, formEdit);
formPersonalDataValidator.enableValidation();

const formAddCardValidator = new FormValidator(formValidationConfig, formCard);
formAddCardValidator.enableValidation();

const formAddAvatarValidator = new FormValidator(formValidationConfig, formAvatar);
formAddAvatarValidator.enableValidation();

//setEventListeners для каждого попапа
popupImage.setEventListeners()
popupProfile.setEventListeners();
popupAddNewCard.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

//открытие попапа с добавлением карточки (клик по плюсу)
buttonAddCard.addEventListener("click", () => {
  popupAddNewCard.open();
  formAddCardValidator.resetErrorForOpenForm(); // очищает форму после закрытия попапа
});

//открытие попапа с добавлением аватара (клик по ручке)
buttonAddAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formAddAvatarValidator.resetErrorForOpenForm(); // очищает форму после закрытия попапа
});

//открытие попапа с добавлением личных данных (клик по карандашу)
buttonEditProfile.addEventListener("click", () => {
  formPersonalDataValidator.resetErrorForOpenForm(); // очищает форму после закрытия попапа
  popupProfile.setInputValue(userInfo.getUserInfo())
  popupProfile.open();
});


Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) => {
  userId = dataUser._id;
  dataCard.forEach(element => element.myId = userId) 
  userInfo.setUserInfo(dataUser);
  userInfo.setUserId(userId); //айди находим
  section.addCardFromArray(dataCard);
})
.catch ((error => console.log(`Ошибка: ${error}`)))