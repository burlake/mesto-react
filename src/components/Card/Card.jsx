function Card({ card, onImageCard, onTrashButton}) {
  return (
      <div className="gallery_template">
        <img className="card__img" src={card.link} alt="Изображение добавленной карточки" onClick={() => onImageCard({name:card.name, link: card.link})}/>
        <div className="card__container">
          <h2 className="card__place">{card.name}</h2>
          <button className="card__like" type="button" />
          <span className="card__number-of-likes">{card.likes.length}</span>
        </div>
        <button className="card__trash" type="button" aria-label="Корзина"    onClick={onTrashButton}/>
      </div>
  );
}

export default Card;
