import styles from "./TransactionHistori.module.css"
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
  return <table className={styles.transactionHistory}>
  <thead className={styles.head}>
    <tr className={styles.list}>
      <th className={styles.item}>Type</th>
      <th className={styles.item}>Amount</th>
      <th className={styles.item}>Currency</th>
    </tr>
  </thead>

      <tbody className={styles.listBody} >
        {
          items.map(({type, amount,currency, id}) =>(
           <tr className={styles.listBody} key={id}>
              <td className={styles.itemBody}>{ type}</td>
              <td className={styles.itemBody}>{ amount}</td>
              <td className={styles.itemBody}>{currency}</td>
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

 