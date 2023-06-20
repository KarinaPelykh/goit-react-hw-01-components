
import styles from "./FriendListItem.module.css"
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClassName = isOnline ? styles.online : styles.offline;
    return <li className={styles.item} >
        <span className={`${styles.status} ${statusClassName}`}>{isOnline }</span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{ name}</p>
</li>
}

FriendListItem.propTypes = {
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}