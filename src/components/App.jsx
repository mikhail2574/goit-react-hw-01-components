import user from 'user';
import data from 'data';
import friends from "friends";
import transactions from "transactions"; 
import { FriendList } from "./FriendList";
import { Profile } from 'components/profile';
import { Fragment } from 'react';
import { Statistics } from './statistics';
import { TransactionHistory } from './TransactionHistory';

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