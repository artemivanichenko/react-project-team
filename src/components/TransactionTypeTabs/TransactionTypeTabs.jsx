import { useState } from 'react';
import {
  NavLinkStyled,
  WrapStyled,
  TabsStyled,
  TabsListStyled,
} from './TransactionTypeTabs.styled';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { useMediaQuery } from 'react-responsive';

const TransactionTypeTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setTabIndex(selectedIndex);
  };

  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <WrapStyled>
      <TabsStyled selectedIndex={tabIndex} onSelect={handleSelect}>
        {!tableMobile && (
          <TabList>
            <Tab>
              <NavLinkStyled to="/home/expenses">EXPENSES</NavLinkStyled>
            </Tab>
            <Tab>
              <NavLinkStyled to="/home/income">INCOME</NavLinkStyled>
            </Tab>
          </TabList>
        )}
        {tableMobile && (
          <TabsListStyled>
            <Tab>
              <NavLinkStyled to="/home/expenses">EXPENSES</NavLinkStyled>
            </Tab>
            <Tab>
              <NavLinkStyled to="/home/income">INCOME</NavLinkStyled>
            </Tab>
          </TabsListStyled>
        )}
        <TabPanel />
        <TabPanel />
      </TabsStyled>
    </WrapStyled>
  );
};

export default TransactionTypeTabs;
