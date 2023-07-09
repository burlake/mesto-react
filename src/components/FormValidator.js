class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector; //".form__subtitle",
    this._errorClass = config.errorClass; //"form__subtitle__invalid"
    this._errorVisibleClass = config.errorVisibleClass; //"error-message_visible",
    this._buttonSelector = config.buttonSelector; //".form__button",
    this._buttonDisabledClass = config.buttonDisabledClass; //"form_disabled",
    this._form = form;
    this._button = form.querySelector(this._buttonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }

  _showInputError(errorElement, input) {
    input.classList.add(this._errorClass); //подчеркивает красным 
    errorElement.classList.add(this._errorVisibleClass); //показывает сообщение из span (.error-message)
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(errorElement, input) {
    input.classList.remove(this._errorClass); //подчеркивает красным 
    errorElement.classList.remove(this._errorVisibleClass); //показывает сообщение из span (.error-message)
    errorElement.textContent = "";
  }

  _enableButton() {
    this._button.classList.remove(this._buttonDisabledClass);
    this._button.disabled = false;
  }

  _disableButton() {
    this._button.classList.add(this._buttonDisabledClass);
    this._button.disabled = true;
  }

  _hasValidInput() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  _toggleButton() {
    this._hasValidInput()
      ? this._enableButton()
      : this._disableButton(this._button);
  }

  //показывает или скрывает ошибки
  _handleFormInput(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
      this._hideInputError(errorElement, input);
    } else {
      this._showInputError(errorElement, input);
    }
  }

  //добавляет слушатели
  _addInputListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._handleFormInput(input);
        this._toggleButton();
      });
    });
  }

  enableValidation() {
    this._addInputListeners();
  }

  //очищает форму после закрытия попапа
  resetErrorForOpenForm() {
    this._inputList.forEach((input) => {
      const errorElement = this._form.querySelector(`#${input.id}-error`);
      if (!input.validity.valid) {
        this._hideInputError(errorElement, input);
      }
    });

    this._disableButton();
  }
}

export default FormValidator;