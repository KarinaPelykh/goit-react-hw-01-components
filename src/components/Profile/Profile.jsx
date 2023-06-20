import styles from "./Profile.module.css"
import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={styles.profile}>
      <div className={styles.descriptio}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <h2 className={styles.username}>{username}</h2>
        <p className={styles.tag}>{tag }</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
        <li className={styles.item}>
    <h3 className={styles.label}>Follwers</h3>
    <p className={styles.quantity}>{stats.followers}</p>
    </li>
    <li className={styles.item}>
      <h3 className={styles.label}>Views</h3>
      <p className={styles.quantity}>{stats.views}</p>
    </li>
    <li className={styles.item}>
      <h3 className={styles.label}>Likes</h3>
      <p className={styles.quantity}>{stats.likes}</p>
    </li>
  </ul>
</div>
}
 
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};