import PropTypes from 'prop-types';

// function title() {}

function Statistics ({ label, percentage }){ 
    return (<section className="statistics">
      <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span> 
        </section>
)

};



Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default Statistics;
