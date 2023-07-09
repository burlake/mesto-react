class Card {
    constructor(template, card, openImagePopup, popupDeleteCardOpen, changeLike) {
        //console.log('card', card);
        this._template = template;
        this._card = card;
        this._link = card.link;
        this._text = card.name;
        this._likes = card.likes; // массив лайков из карточки для like-ов = приходит то что мне нужно
        this._likesLength = card.likes.length;
        this._changeLike = changeLike;

    

        this._openImagePopup = openImagePopup;
        this._popupDeleteCardOpen = popupDeleteCardOpen;
        this._myId = card.myId;
        this._ownerId = card.owner._id;
        this._cardId = card._id; //id каждой карточки для лайков и делетов

        this._likeActiveCard = this._likeActiveCard.bind(this);
        this._deleteCard = this._deleteCard.bind(this);
        this._zoomCard = this._zoomCard.bind(this);
    }

    _getElementFromTemplate() {
        return document.querySelector(this._template)
            .content
            .children[0]
            .cloneNode(true);
    }

    _deleteCard = () => {
        this._popupDeleteCardOpen( {card: this, cardId: this._cardId});
    }

    _zoomCard = () => {
        this._openImagePopup(this._card);
    }

    _addEventListeners() {
        this._like.addEventListener('click', this._likeActiveCard);
        this._cardTrash.addEventListener('click', this._deleteCard);
        this._cardImage.addEventListener('click', this._zoomCard);
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }



   
    _likeActiveCard = () => {
        this._changeLike(this._cardId, this._like); 
    }


    _checkLikeStatus() { 
        this._likes.forEach (element => {   //каждый элемент массива - лайк
            if (element._id === this._myId) {
                this._like.classList.add("card__like_active");
                return
            }
        })
        this._likesCounter.textContent = this._likesLength;
    }

    toggleLike (likes) {
        this._like.classList.toggle('card__like_active'); //error
        this._likesCounter.textContent = likes.length;
    }

    isMyLike() { //isLiked

        return this._like.classList.contains('card__like_active')
        // this._likes.forEach (element => {   //каждый элемент массива - лайк
        // if (element.classList.contains('card__like_active')) {
        //     this._like.classList.remove("card__like_active");
        // } else {
        //     this._like.classList.add("card__like_active");
        // } })
    }

    getElement() {
        this._element = this._getElementFromTemplate();
        this._element.querySelector(".card__place").textContent = this._text;
        
        this._cardImage = this._element.querySelector('.card__img')
        this._cardImage.src = this._link; //this._element.querySelector('.card__img').src = this._link;
        this._cardImage.alt = this._text; // this._card.alt = this._text;

        this._like = this._element.querySelector('.card__like');
        this._likesCounter = this._element.querySelector('.card__number-of-likes');

        this._cardTrash = this._element.querySelector('.card__trash');

        if (this._myId === this._ownerId) {
            this._cardTrash.style.display = 'block';
        } else {
            this._cardTrash.style.display = 'none';
        };


        this._checkLikeStatus();

        this._addEventListeners();

        return this._element;
    }
}

export default Card;