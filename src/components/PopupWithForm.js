import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor (popupSelector, form, submitFunction) {
        super (popupSelector);
        this._submitFunction = submitFunction;
        this._form = form;
        this._inputList = form.querySelectorAll('.form__subtitle');
        this._button = form.querySelector('.form__button'); //кнопка
        this._buttonTextContent = this._button.textContent; //текст кнопки
    }
    
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._button.textContent = `${this._button.textContent} ...`; //добавляю 3 точки к тексту кнопок, далее метод по загрузке
            this._submitFunction(this._getInputValue())
        });
    }

    _getInputValue() {
        this._values = {};
        this._inputList.forEach (input => {
            this._values[input.name] = input.value;
        })
        return this._values;
    }

    setInputValue(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name] ?? '';
        })
    }

    loadingText() {
        this._button.textContent = this._buttonTextContent;
    }
    
    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm;