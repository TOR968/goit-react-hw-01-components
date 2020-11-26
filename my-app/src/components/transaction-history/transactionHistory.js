import Transaction from './transaction';
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
    return (
            items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            />
            ))
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
};


export default TransactionHistory
