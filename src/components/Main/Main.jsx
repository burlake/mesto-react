import { useEffect, useState } from "react";
import api from "../../utils/api.js";
import Card from "../Card/Card.jsx";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onTrashButton,
  onImageCard,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCards]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        dataCards.forEach((data) => (data.myId = dataUser._id)); //element - cards' data
        setUserCards(dataCards);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <img className="profile__photo" src={userAvatar} alt="Аватар автора профайла."/>
        <button className="profile__pen-button" onClick={onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}/>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}/>
      </section>

      <section>
        <div className="gallery">
          {userCards.map((data) => {
            return (
              <Card
                key={data._id}
                card={data}
                onImageCard={onImageCard}
                onTrashButton={onTrashButton}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
