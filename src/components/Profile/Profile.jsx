import PropTypes from "prop-types";
import "./Profile.module.css";

export const Profile = ({ name, location, tag, avatar, followers, views, likes }) => {
  return (
      <div className="card">
          <div className="upper-container">
              <img className="avatar" src={avatar} alt="your icon" />
              <h3 className="upper-name">{name}</h3>
              <p className="upper-item">@{tag}</p>
              <p className="upper-item">{location}</p>
          </div>
          <div className="lower-container">
            <ul className="list">
              <li className="lower-item">Followers <b>{followers}</b></li>
              <li className="lower-item">Views <b>{views}</b></li>
              <li className="lower-item">Likes <b>{likes}</b></li>
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