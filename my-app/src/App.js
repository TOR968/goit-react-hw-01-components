import Section from './components/section';
import Profile from './components/profile/profile';
import user from './components/profile/user.json';
import StatisticsList from './components/statistics/statisticsList';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/friendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/transactionHistory'
import transactions from './components/transaction-history/transactions.json';

function App() {
  return (
   <div>
      <Section title="Профиль социальной сети">
        <Profile {...user}/>
      </Section>
      <Section title="Секция статистики">
        <StatisticsList title={"Upload stats"} stats={statisticalData} />
      </Section>
      <Section title="Список друзей">
        <FriendList friends={friends} />
      </Section>
      <Section title="История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
