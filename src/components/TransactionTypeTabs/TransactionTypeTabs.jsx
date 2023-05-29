import { useState } from "react";
import { NavLinkStyled, WrapStyled } from "./TransactionTypeTabs.styled";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMediaQuery } from "react-responsive";


const TransactionTypeTabs = () => {
const [tabIndex, setTabIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setTabIndex(selectedIndex);
    // console.log(selectedIndex);
  }

  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <WrapStyled>
      <Tabs selectedIndex={tabIndex} onSelect={handleSelect}>
        {!tableMobile && <TabList>
          <Tab><NavLinkStyled to="/home/expenses">EXPENSES</NavLinkStyled></Tab>
          <Tab><NavLinkStyled to="/home/income">INCOME</NavLinkStyled></Tab>
        </TabList>}
        {tableMobile && <TabList>
          <Tab><NavLinkStyled to="/home/expenses">EXPENSES</NavLinkStyled></Tab>
          <Tab><NavLinkStyled to="/home/income">INCOME</NavLinkStyled></Tab>
        </TabList>}
        <TabPanel />
        <TabPanel />
      </Tabs>
    </WrapStyled>
        
  );
};

export default TransactionTypeTabs;
