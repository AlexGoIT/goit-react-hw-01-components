import PropTypes from 'prop-types';
import { Title, List } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <>
      <Title>{title}</Title>
      <List>{createList(stats)}</List>
    </>
  );
}

function createList(stats) {
  return stats.map(item => {
    return (
      <li className="item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    );
  });
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
