import styled from 'styled-components';

export const FriendItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ isOnline }) => (isOnline ? '#009908' : '#d60505')};
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
