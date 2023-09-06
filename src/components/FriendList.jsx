import "friends.modal.css"
import PropTypes from "prop-types";

function createUser(data) {
    return data.map(item => {
        const { avatar, name, isOnline, id } = item;
        let online = isOnline ? "green" : "red"; 
        return `<li class="stat-item" data-id=${id}>
  <span class="status ${online}"></span>
  <img class="avatar" src="${avatar}" alt="User avatar" width="48" />
  <p class="name">${name}</p>
</li>`;
    }).join('');

}

export const FriendList = ({ data }) => {
    let renderedUsers = createUser(data);
    return (<section className="friends-list"><ul className="friend-list" dangerouslySetInnerHTML={{ __html: renderedUsers }}>
    </ul></section>);
}

 FriendList.propTypes = {
    data: PropTypes.array,
}