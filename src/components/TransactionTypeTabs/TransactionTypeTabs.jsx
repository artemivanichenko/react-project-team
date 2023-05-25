import { NavLinkStyled, WrapStyled } from "./TransactionTypeTabs.styled";

const TransactionTypeTabs = () => {
    return (
      <WrapStyled>
          <NavLinkStyled to="expenses">EXPENSES</NavLinkStyled>
          <NavLinkStyled to="income">INCOME</NavLinkStyled>
        </WrapStyled>
        
    );
};

export default TransactionTypeTabs;