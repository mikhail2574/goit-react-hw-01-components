import css from "./FriendList.module.css"
import PropTypes from "prop-types";

function createUser(data) {
    return data.map(item => {
        const { avatar, name, isOnline, id } = item;
        let online = isOnline ? css.green : css.red; 
        return (<li className={css.statItem} data-id={id}>
  <span className={`${css.status} ${online}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>);
    });

}

export const FriendList = ({ data }) => {
    let renderedUsers = createUser(data);
    return (<section className={css.friendsList}><ul className={css.friendList}> {renderedUsers}
    </ul></section>);
}

 FriendList.propTypes = {
    data: PropTypes.array,
}