import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
