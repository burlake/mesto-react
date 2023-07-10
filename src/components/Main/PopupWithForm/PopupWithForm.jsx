function PopupWithForm({name, title, formButton, children, open, onClose}) {
  return (
    <div className={`popup popup_type_${name} popup-about ${open&&'popup_opened'}`}>
      <div className="popup__content">
        <button
          className="popup__close-button popup__close-button_type_edit"
          id="close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          />
        <h2 className="popup__title">{title}</h2>
        <form
          className="form form_edit"
          action="#"
          method="get"
          name={name} //было "ProfileForm"
          noValidate=""
        >
          {children}

          <button id="submit_form_edit" className="form__button" type="submit">
            {formButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
