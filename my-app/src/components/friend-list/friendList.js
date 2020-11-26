import Friend from './friend'
import PropTypes from 'prop-types';

function FriendList({friends})
{
  return (
    <ul>
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
