import Statistics from './statistics';
import PropTypes from 'prop-types';
import s from './statistics.module.css'

function StatisticsList({title, stats})
{
  return (<section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            />
      ))}
    </ul>
    </section>
  )
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
};
export default StatisticsList;
