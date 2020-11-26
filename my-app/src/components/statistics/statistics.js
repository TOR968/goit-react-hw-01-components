import PropTypes from 'prop-types';

function Statistics ({ label, percentage }){ 
    return (<li className="item">
      <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span> 
       </li>
)

};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default Statistics;
