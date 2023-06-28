import PropTypes from 'prop-types';
import {
  List,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem key={id}>
          <Status className="status" isOnline={isOnline}></Status>
          <Avatar
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{name}</Name>
        </FriendListItem>
      ))}
    </List>
  );
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
