import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({ name, location, tag, avatar, followers, views, likes }) => {
  return (
      <div className={css.card}>
          <div className={css.upperContainer}>
        <img className={css.avatar} src={avatar} alt="your icon" />
        <h3 className={css.upperName}>{name}</h3>
              <p className={css.upperItem}>@{tag}</p>
        <p className={css.upperItem}>{location}</p>
          </div>
      <div className={css.lowerContainer}>
        <ul className={css.list}>
              <li className={css.lowerItem}>Followers <b>{followers}</b></li>
              <li className={css.lowerItem}>Views <b>{views}</b></li>
              <li className={css.lowerItem}>Likes <b>{likes}</b></li>
            </ul>   
          </div>
      </div>
  );
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}