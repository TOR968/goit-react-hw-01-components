import PropTypes from 'prop-types';
import s from './statistics.module.css'

function Statistics ({ label, percentage }){ 
  return (<li className={s.item}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span> 
       </li>
)

};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default Statistics;
