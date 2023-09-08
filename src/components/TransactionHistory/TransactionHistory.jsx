import "./TransactionHistory.module.css"
import PropTypes from "prop-types";

function createMarkup(data) {
    return data.map(item => {
        const { id, type, amount, currency } = item;
        return `<tr data-id="${id}">
      <td>${type}</td>
      <td>${amount}</td>
      <td>${currency}</td>
    </tr>`;
  } ).join("")
};

export const TransactionHistory = ({ items }) => {
    const inner = createMarkup(items);
    return (<section className="transaction-history">
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: inner }}>
            </tbody>
        </table>
</section>);
}



 TransactionHistory.propTypes = {
    items: PropTypes.array,
}