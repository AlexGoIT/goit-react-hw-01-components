import styled from 'styled-components';

export const StatWrapper = styled.div`
  margin: 30px auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
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
  color: #fff;
  background-color: ${p =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #303030;
`;

export const Percentage = styled.span`
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
`;
