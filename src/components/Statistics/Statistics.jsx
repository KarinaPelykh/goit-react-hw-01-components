 import styles from "./Statistics.module.css"
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};
export const Statistics = ({ title, stats }) => {
  return <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}  
  
    <ul className={styles.statList} >
{stats.map(items => (
  <li key={items.id} className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
    <h3 className={styles.label}>{items.label}</h3>
     <p  className={styles.percentage} >{items.percentage}</p>
    </li>
   ))}
    
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number
}