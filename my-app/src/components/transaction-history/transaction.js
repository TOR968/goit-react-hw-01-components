import React from 'react'
import PropTypes from 'prop-types';

function Transaction({type, amount, currency}) {
    return (
<table className="transaction-history">
  <thead>
    <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
    )
}
 
Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default Transaction;