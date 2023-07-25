import { Profile } from "components/profile/Profile";
import user from 'user.json'

import { Statistics } from "../statList/StatList";
import data from 'data.json'

import { FriendsList } from "components/friendsList/FriendsList";
import friends from 'friends.json'

import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from 'transactions.json'

export const App = () => {
  return (
    <div>
      <Profile name={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};