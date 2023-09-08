import "./Statistics.module.css";
import PropTypes from "prop-types";

function renderList(stats) {
    return stats.map(elem => {
      const { title, percentage } = elem;
      return `<li class="item">
      <span class="label">${title}</span>
      <span class="percentage">${percentage}</span>
    </li>`;
    }).join('');
  }

export const Statistics = ({ title, stats }) => {
  let renderedList = renderList(stats);
    return (<section className="styles.statistics">
      <h2 className="styles.title">{title}</h2>
      <ul className="styles.stat-list" dangerouslySetInnerHTML={{ __html: renderedList }}>
  </ul>
</section>)
}

 Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}