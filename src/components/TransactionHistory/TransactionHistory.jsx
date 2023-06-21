import styles from "./TransactionHistori.module.css"
import PropTypes from 'prop-types';

 export const TransactionHistory = ({ items }) => {  
  return <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.list}>
          <th className={styles.itemheader}>Type</th>
          <th className={styles.itemheader}>Amount</th>
          <th className={styles.itemheader}>Currency</th>
        </tr>
    </thead>
    
      <tbody className={styles.tbody}>
        {items.map(({ type, amount, currency, id }, index) => (
          <tr
            key={id}
            className={index % 2 === 0 ? styles.rowWhite : styles.rowGray}
          >
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
  
}

 