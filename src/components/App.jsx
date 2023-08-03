import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx"
import { useCallback, useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardChoose, setIsImageCardChoose] = useState(false);
  const [selectedCard , setSelectedCard] = useState(null);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  
  const setCloseAllPopups = useCallback (() => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImageCardChoose(false)
    setSelectedCard(null)
    setIsDeletePlacePopupOpen(false)
  },[])

  function setEventListenerForEsc () {
    document.addEventListener('keydown', closePopupByEsc)
  }

  const closePopupByEsc = useCallback ((event) => { // для закрытия по Esc
      if (event.key === "Escape"){
        setCloseAllPopups()
      }
    }, [setCloseAllPopups])

  const closePopupByOverlay = useCallback ((event) => { // для закрытия по Overlay
    if (event.target === event.currentTarget) {
      setCloseAllPopups()
    }
  }, [setCloseAllPopups])

  const closeAllPopups = useCallback (() => {   // для закрытия по Esc, Overlay и крестику
    setCloseAllPopups()
    document.removeEventListener('keydown', closePopupByEsc)
  },[setCloseAllPopups, closePopupByOverlay, closePopupByEsc])

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




  return (
    <div className="page__container">
      <Header />

      <Main 
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar ={handleEditAvatarClick}
      onTrashButton = {handleDeletePlaceClick}
      onImageCard = {handleImageCard}
      />
      
      <Footer/>

      <PopupWithForm                               //popup for data profile editing 
        name="popup_type_edit"
        title="Редактировать профиль"
        formButton="Сохранить"
        open = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
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
        open = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
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
        open = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
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
        onClose = {closeAllPopups}
      />

      <ImagePopup                                  //popup for a full size image by click
      name="popup_type_image"
      open={selectedCard}
      card={isImageCardChoose}
      onClose = {closeAllPopups}
      />

    </div>
  );
}

export default App;
