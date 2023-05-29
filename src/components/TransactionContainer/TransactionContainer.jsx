import { useMediaQuery } from 'react-responsive';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import Summary from 'components/Summary/Summary';
import TransactionTypeTabs from 'components/TransactionTypeTabs/TransactionTypeTabs';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import {
  BoxStyled,
  ContainerStyled,
  SectionStyled,
} from './TransactionContainer.styled';

const TransactionContainer = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <SectionStyled>
      {!tableMobile && <TransactionTypeTabs />}
      <ContainerStyled>
        <AddTransaction />
        <BoxStyled>
          <TransactionsList />
          {isTablet && <Summary />}
        </BoxStyled>
      </ContainerStyled>
      {tableMobile && <TransactionTypeTabs />}
    </SectionStyled>
  );
};

export default TransactionContainer;
