import Popup from "./Popup.js";

class PopupWithDelete extends Popup {
    constructor(popupSelector, submitFunction) {
        super (popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.form_delete');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitFunction({card:this._element, cardId:this._elementId});
        }); 
    }

    open = ({card, cardId}) => { // card cardId
        super.open();  
        this._element = card; //карточка при открытии
        this._elementId = cardId;  //Id карточки
    }

}

export default PopupWithDelete;