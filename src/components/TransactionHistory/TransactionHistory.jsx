import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Th,
  Td,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <TableHead>
        <TableRow>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TableRow>
      </TableHead>
      <TableBody>{createTableRows(items)}</TableBody>
    </Table>
  );
}

function createTableRows(items) {
  return items.map(({ id, type, amount, currency }) => (
    <TableRow key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TableRow>
  ));
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
