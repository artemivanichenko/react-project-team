import { useState } from "react";
import { NavLinkStyled, WrapStyled } from "./TransactionTypeTabs.styled";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TransactionTypeTabs = () => {
const [tabIndex, setTabIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setTabIndex(selectedIndex);
    console.log(selectedIndex);
  }

  return (
    <WrapStyled>
      <Tabs selectedIndex={tabIndex} onSelect={handleSelect}>
        <TabList>
          <Tab><NavLinkStyled to="expenses">EXPENSES</NavLinkStyled></Tab>
          <Tab><NavLinkStyled to="income">INCOME</NavLinkStyled></Tab>
        </TabList>
        <TabPanel />
        <TabPanel />
      </Tabs>
    </WrapStyled>
        
  );
};

export default TransactionTypeTabs;
