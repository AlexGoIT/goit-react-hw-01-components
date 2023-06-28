import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status className="status" isOnline={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
