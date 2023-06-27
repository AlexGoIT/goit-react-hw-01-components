import PropTypes from 'prop-types';
import {
  List,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  const createList = friends => {
    return friends.map(friend => {
      const { id, name, isOnline, avatar } = friend;

      return (
        <FriendListItem key={id}>
          <Status className="status">{isOnline ? 'online' : 'offline'}</Status>
          <Avatar
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{name}</Name>
        </FriendListItem>
      );
    });
  };

  return <List className="friend-list">{createList(friends)}</List>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
