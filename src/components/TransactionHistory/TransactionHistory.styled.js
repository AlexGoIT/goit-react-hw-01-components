import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 30px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const THead = styled.thead`
  background-color: #00bcd5;
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f6f9;
  }
`;

export const Th = styled.th`
  padding: 8px;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: center;
`;
