export default class Section {
    constructor ({ renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        //this._items = items;
        this._renderer = renderer;
        //console.log(' this._container',  this._container);
    }
    
    addCardFromArray(dataCard) {
        //console.log('dataCard', dataCard);
        dataCard.reverse()
        dataCard.forEach (element => {
            this.addItem(element);
        });
    }


    addItem(data) {
        //console.log("this._container", this._container, data);
        this._container.prepend(this._renderer(data));
    }


}
