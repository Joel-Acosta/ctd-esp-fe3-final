/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Card = ({ name, username, id }) => {
  const { data, addFavorite, removeFavorite, theme } = useContextGlobal();
  const cardData = { id, name, username };
  const isFav = data.some((fav) => fav.id === cardData.id);
  const addFav = () => {
    if (!isFav) {
      addFavorite(cardData);
    }
  };

  const removeFav = () => {
    if (isFav) {
      removeFavorite(cardData.id);
    }
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/dentista/${id}`}>
        <img src="images/doctor.jpg" alt="doctor" />
        <p>Name: {name}</p>
        <p>Username: {username}</p>
      </Link>

      {isFav ? (
        <button onClick={removeFav} className="favButton">
          <FontAwesomeIcon icon={solidHeart} />
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          <FontAwesomeIcon icon={regularHeart} />
        </button>
      )}
    </div>
  );
};

export default Card;
