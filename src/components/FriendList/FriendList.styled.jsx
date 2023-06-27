import styled from 'styled-components';

export const List = styled.ul`
  margin: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendListItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
`;

export const Name = styled.p`
  margin-left: 10px;
  display: flex;
  font-weight: 500;
  font-size: 20px;
`;
