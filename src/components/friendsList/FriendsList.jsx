import PropTypes from 'prop-types';
import {
    List,
    FriendItem,
    FriendName,
    FriendAvatar,
FriendStatus} from './FriendsList.styled';
export const FriendsList = ({friends}) => {
    return (<List >
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendItem key={id} >
            <FriendAvatar src={avatar} alt="User avatar" width={48} /> 
              <FriendName>{name}</FriendName> 
               <FriendStatus status={isOnline}></FriendStatus> 
            </FriendItem>))}
  
    </List>);
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}