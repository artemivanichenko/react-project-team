import AddTransaction from "components/AddTransaction/AddTransaction";
import Summary from "components/Summary/Summary";
import TransactionTypeTabs from "components/TransactionTypeTabs/TransactionTypeTabs";
import TransactionsList from "components/TransactionsList/TransactionsList";
import { ContainerStyled, SectionStyled } from "./TransactionContainer.styled";

const TransactionContainer = () => {
    return (
        <SectionStyled>
            <TransactionTypeTabs />
            <ContainerStyled>
                <AddTransaction />
                <TransactionsList />
                <Summary />
            </ContainerStyled>
        </SectionStyled>
    );
};

export default TransactionContainer;