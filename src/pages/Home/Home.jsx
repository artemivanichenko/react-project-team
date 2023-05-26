import HomeBar from 'components/HomeBar/HomeBar';
import TransactionContainer from 'components/TransactionContainer/TransactionContainer';
import { generatePath } from 'react-router-dom';

const Home = () => {
  generatePath('/home/category', {category: "expenses"});
  return (
    <section>
      <HomeBar />
      <TransactionContainer />
    </section>
  );
};

export default Home;
