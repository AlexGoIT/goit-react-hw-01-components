import PropTypes from 'prop-types';
import {
  StatWrapper,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  const createList = stats => {
    return stats.map(item => {
      const { id, label, percentage } = item;

      return (
        <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      );
    });
  };

  return (
    <StatWrapper>
      <Title>{title}</Title>
      <List>{createList(stats)}</List>
    </StatWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
