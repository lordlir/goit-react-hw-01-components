import PropTypes from 'prop-types';

import { FriendListItem } from 'components/friends-Item/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
