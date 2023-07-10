import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./Main/PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./Main/ImagePopup/ImagePopup.jsx"
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardChoose, setIsImageCardChoose] = useState({});
  const [isImageCardPopupOpen, setIsImageCardPopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImageCardChoose(false)
    setIsImageCardPopupOpen(false)
    setIsDeletePlacePopupOpen(false)
  }

  function handleEditAvatarClick() { //попап для аватара
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() { //попап для редактирования профиля
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() { //попап для добавления карточки
    setIsAddPlacePopupOpen(true)
  }

  function handleDeletePlaceClick() { //попап для удаления карточки
    setIsDeletePlacePopupOpen(true)
  }

  function handleImageCard(card) { //попап для большого изображения
    setIsImageCardChoose(card)
    setIsImageCardPopupOpen(true)
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
      
      <Footer />

      <PopupWithForm
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
        <span id="input-occupation-error" className="error-message">
          Вы пропустили это поле.
        </span>
      </PopupWithForm>

      <PopupWithForm
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
        <span id="input-title-error" className="error-message">
          Вы пропустили это поле.
        </span>
        <input
          required=""
          id="input-link"
          className="form__subtitle form__subtitle_card_image"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span id="input-link-error" className="error-message">
          Введите адрес сайта.
        </span>
      </PopupWithForm>

      <PopupWithForm
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
        <span id="input-avatar-error" className="error-message">
          Введите адрес сайта.
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="popup_type_delete"
        title="Вы уверены?"
        formButton="Да"
        open={isDeletePlacePopupOpen}
        onClose = {closeAllPopups}
      />

      <ImagePopup
      name="popup_type_image"
      open={isImageCardPopupOpen}
      card={isImageCardChoose}
      onClose = {closeAllPopups}
      />

    </div>
  );
}

export default App;
