import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx"
import { useCallback, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";

function App() {
  // стейты попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardChoose, setIsImageCardChoose] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);

  // стейты контекста
  const [currentUser, setCurrentUser] = useState({}) //пустой объект

  // стейты карточки
  const [userCards, setUserCards] = useState([]);

  const setCloseAllPopups = useCallback(() => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImageCardChoose(false)
    setSelectedCard(null)
    setIsDeletePlacePopupOpen(false)
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setUserCards((state) => state.map((c) =>
          c._id === card._id ? newCard : c))
      },
        (err) => {
          console.log(err);
        })
  };

  function setEventListenerForEsc() {
    document.addEventListener('keydown', closePopupByEsc)
  }

  const closePopupByEsc = useCallback((event) => { // для закрытия по Esc
    if (event.key === "Escape") {
      setCloseAllPopups()
      document.removeEventListener('keydown', closePopupByEsc)
    }
  }, [setCloseAllPopups])

  const closePopupByOverlay = useCallback((event) => { // для закрытия по Overlay
    if (event.target === event.currentTarget) {
      setCloseAllPopups()
    }
  }, [setCloseAllPopups])

  const closeAllPopups = useCallback(() => {   // для закрытия по Esc, Overlay и крестику
    setCloseAllPopups()
  }, [setCloseAllPopups, closePopupByOverlay, closePopupByEsc])

  function handleEditAvatarClick() { //для попапа аватара
    setIsEditAvatarPopupOpen(true)
    setEventListenerForEsc()
  }

  function handleEditProfileClick() { //для попапа с редактированием профиля
    setIsEditProfilePopupOpen(true)
    setEventListenerForEsc()
  }

  function handleAddPlaceClick() { // для попапа с добавлением новой карточки
    setIsAddPlacePopupOpen(true)
    setEventListenerForEsc()
  }

  function handleDeletePlaceClick() { //для попапа с удалением карточки
    setIsDeletePlacePopupOpen(true)
    setEventListenerForEsc()
  }

  function handleImageCard(card) { //для попапа с картинкой карточки
    setIsImageCardChoose(card)
    setSelectedCard(card)
    setEventListenerForEsc()
  }

  //запросы на сервер
  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser)
        setUserCards(dataCards);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);


  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page__container">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onTrashButton={handleDeletePlaceClick}
          onImageCard={handleImageCard}
          cards={userCards}
          onCardLike={handleCardLike}
        />

        <Footer />

        <PopupWithForm                               //popup for data profile editing 
          name="popup_type_edit"
          title="Редактировать профиль"
          formButton="Сохранить"
          open={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            required=""
            id="input-name"
            className="form__subtitle form__subtitle_text_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
          />
          <span id="input-name-error" className="error-message">
            Вы пропустили это поле.
          </span>
          <input
            required=""
            id="input-occupation"
            className="form__subtitle form__subtitle_text_job"
            type="text"
            name="about"
            placeholder="Занятие"
            minLength={2}
            maxLength={200}
          />
          <span id="input-occupation-error" className="error-message">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm                               //popup for a new place card adding
          name="popup_type_new-card"
          title="Новое место"
          formButton="Создать"
          open={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            required=""
            id="input-title"
            className="form__subtitle form__subtitle_card_title"
            type="text"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
          />
          <span id="input-title-error" className="error-message">Вы пропустили это поле.</span>
          <input
            required=""
            id="input-link"
            className="form__subtitle form__subtitle_card_image"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
          />
          <span id="input-link-error" className="error-message">Введите адрес сайта.</span>
        </PopupWithForm>

        <PopupWithForm                               //avatar
          name="popup_type_new-avatar"
          title="Обновить аватар"
          formButton="Создать"
          open={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            required=""
            id="input-avatar"
            className="form__subtitle"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
          />
          <span id="input-avatar-error" className="error-message">Введите адрес сайта.</span>
        </PopupWithForm>

        <PopupWithForm                               //popup for a place card deleting
          name="popup_type_delete"
          title="Вы уверены?"
          formButton="Да"
          open={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup                                  //popup for a full size image by click
          name="popup_type_image"
          open={selectedCard}
          card={isImageCardChoose}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
