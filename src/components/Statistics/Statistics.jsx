import css from "./Statistics.module.css";
import PropTypes from "prop-types";

function renderList(stats) {
    return stats.map(elem => {
      const { title, percentage } = elem;
      return (<li className={css.item}>
        <span className={css.label}>{title}</span>
        <span className={css.percentage}>{percentage}</span>
    </li>);
    })
  }

export const Statistics = ({ title, stats }) => {
  let renderedList = renderList(stats);
  return (<section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
      {renderedList}
  </ul>
</section>)
}

 Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}