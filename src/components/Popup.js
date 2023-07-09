class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose = (event) => {
        if (event.code === "Escape") {
            this.close();
          }
    }

    _handleButtonClose = () => {
        this.close();
    }

    _handleClosePopupByOverlay = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }


    setEventListeners() {
         this._popupCloseButton.addEventListener("click", this._handleButtonClose);
         this._popup.addEventListener("click", this._handleClosePopupByOverlay);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        window.removeEventListener("keydown", this._handleEscClose);
    }

    open() {
        this._popup.classList.add("popup_opened");
        window.addEventListener("keydown", this._handleEscClose);
    }

}

export default Popup;