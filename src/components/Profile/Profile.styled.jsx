import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 15px;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 30px;
  width: 120px;
  border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: #737373;
`;

export const Location = styled.p`
  font-weight: 500;
  color: #737373;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  border-top: 1px solid #737373;
  padding: 15px 10px;
  background-color: #f3f6f9;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid #737373;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: #737373;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
