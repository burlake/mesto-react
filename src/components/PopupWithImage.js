import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor (popupSelector) {
    super (popupSelector);
    this._popupImageFull = this._popup.querySelector('.popup__image-full');
    this._popupImageTittle = this._popup.querySelector('.popup__image-tittle');
    }

    open = (item) => {
        this._popupImageFull.src = item.link;
        this._popupImageFull.alt = item.text;
        this._popupImageTittle.textContent = item.name;
        super.open();
    }
}

export default PopupWithImage;