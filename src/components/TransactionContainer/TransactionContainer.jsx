import AddTransaction from "components/AddTransaction/AddTransaction";
import Summary from "components/Summary/Summary";
import TransactionTypeTabs from "components/TransactionTypeTabs/TransactionTypeTabs";
import TransactionsList from "components/TransactionsList/TransactionsList";
import { ContainerStyled } from "./TransactionContainer.styled";

const TransactionContainer = () => {
    return (
        <ContainerStyled>
            <TransactionTypeTabs />
            <AddTransaction />
            <TransactionsList />
            <Summary />
        </ContainerStyled>
    );
};

export default TransactionContainer;