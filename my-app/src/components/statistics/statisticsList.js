import Statistics from './statistics';
import PropTypes from 'prop-types';

function StatisticsList({stats})
{
  return (<section className="statistics">
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <Statistics
            label={item.label}
            percentage={item.percentage}
            />
        </li>
      ))}
    </ul>
    </section>
  )
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default StatisticsList;
