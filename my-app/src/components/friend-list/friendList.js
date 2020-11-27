import Friend from './friend'
import PropTypes from 'prop-types';
import s from './friend.module.css';

function FriendList({friends})
{
  return (
    <ul className={s.friendList}>
    {friends.map(item => (
          <Friend
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
