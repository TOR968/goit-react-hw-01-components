import Statistics from './statistics';
import PropTypes from 'prop-types';

function StatisticsList({stats})
{
  return (<section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
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
