import styled from 'styled-components';

export const StatWrapper = styled.div`
  margin: auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

  border: 1px solid #737373;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 30px 8px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f6f9;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #737373;
`;

export const Label = styled.span`
  padding: 5px;
  color: #737373;
`;

export const Percentage = styled.span`
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
`;
