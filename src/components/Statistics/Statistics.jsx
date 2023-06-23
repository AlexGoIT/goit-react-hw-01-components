import PropTypes from 'prop-types';

export default function Statistics({ data }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{createList(data)}</ul>
    </section>
  );
}

function createList(data) {
  return data.map(item => {
    return (
      <li className="item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    );
  });
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
