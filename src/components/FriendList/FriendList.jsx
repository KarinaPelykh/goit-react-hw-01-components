import PropTypes from 'prop-types';
import styles from "./FriendList.module.css"
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {
            friends.map(friend => (
             <FriendListItem {...friend} key={friend.id} />     
            ))
  }
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       avatar: PropTypes.string,
  name:PropTypes.string,
   isOnline: PropTypes.bool,
  id: PropTypes.number 
    }))
}