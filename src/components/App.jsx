function App() {
  return (
    <div className="page__container">
      <header className="header">
        <img
          className="logo"
          src="<%=require('../src/images/Mesto.svg')%>"
          alt="Логотип сайта Место."
        />{" "}
        {/*- -  webpack*/}
        {/*-  <img class="logo" src="./images/Mesto.svg" alt="Логотип сайта Место.">  live server*/}
      </header>
      <main>
        <section className="profile">
          <img 
            className="profile__photo"
            src="#"
            alt="Аватар автора профайла."
          />
          <button className="profile__pen-button" />
          <div className="profile__info">
            <h1 className="profile__name"> </h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
            />
            <p className="profile__description" />
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить"
          />
        </section>
        <section className="gallery" />
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022 Елизавета Бурлакова</p>
      </footer>
      <div className="popup popup_type_edit popup-about">
        <div className="popup__content">
          <button
            className="popup__close-button popup__close-button_type_edit"
            id="close-button"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="form form_edit"
            action="#"
            method="get"
            name="ProfileForm"
            noValidate=""
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
            <button
              id="submit_form_edit"
              className="form__button"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_new-card popup-about">
        <div className="popup__content">
          <button
            className="popup__close-button popup__close-button_type_new-card"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title">Новое место</h2>
          <form
            className="form form_new-card"
            action="#"
            method="get"
            name="ProfilePlace"
            id="formNewCardId"
            noValidate=""
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
            <button
              id="submit_form_new-card"
              className="form__button"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image popup-about">
        <div className="popup__content popup__content_full">
          <button
            className="popup__close-button popup__close-button_type_image"
            type="button"
            aria-label="Закрыть"
          />
          <figure>
            <img
              className="popup__image-full"
              src="#"
              alt="Подпись к картинке."
            />
            <figcaption className="popup__image-tittle" />
          </figure>
        </div>
      </div>
      <div className="popup popup_type_new-avatar popup-about">
        <div className="popup__content">
          <button
            className="popup__close-button popup__close-button_type_new-avatar"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="form form_new-avatar"
            action="#"
            method="get"
            name="ProfileAvatar"
            id="formNewAvatarId"
            noValidate=""
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
            <button
              id="submit_form_new-avatar"
              className="form__button"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete popup-about">
        <div className="popup__content popup__delete ">
          <button
            className="popup__close-button popup__close-button_type_delete"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            className="form form_delete"
            action="#"
            method="get"
            name="CardDelete"
            id="formDeletId"
            noValidate=""
          >
            <button
              id="submit_form_delete"
              className="form__button"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <template className="gallery_template" />
    </div>
  );
}

export default App;
