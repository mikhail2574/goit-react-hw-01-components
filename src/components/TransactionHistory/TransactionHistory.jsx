import css from "./TransactionHistory.module.css"
import PropTypes from "prop-types";

function createMarkup(data) {
    return (data.map(item => {
        const { id, type, amount, currency } = item;
        return (<tr data-id="${id}">
      <td>${type}</td>
      <td>${amount}</td>
      <td>${currency}</td>
    </tr>);
  } ))
};

export const TransactionHistory = ({ items }) => {
    const inner = createMarkup(items);
    return (<section className={css.transactionHistory}>
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {inner}
            </tbody>
        </table>
</section>);
}



 TransactionHistory.propTypes = {
    items: PropTypes.array,
}