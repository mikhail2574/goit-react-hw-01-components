import user from './data/user';
import data from './data/data';
import friends from "./data/friends";
import transactions from "./data/transactions"; 
import { FriendList } from "./FriendList/FriendList";
import { Profile } from './Profile/Profile';
import { Fragment } from 'react';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Fragment>
    <Profile
      name={user.username}
      location={user.location}
      tag={user.tag}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />
      </Fragment>);
}