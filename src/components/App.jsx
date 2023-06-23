import { Container } from './Container/Container';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

export function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
    </Container>
  );
}
