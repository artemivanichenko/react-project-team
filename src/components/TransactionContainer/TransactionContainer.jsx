import AddTransaction from "components/AddTransaction/AddTransaction";
import Summary from "components/Summary/Summary";
import TransactionTypeTabs from "components/TransactionTypeTabs/TransactionTypeTabs";
import TransactionsList from "components/TransactionsList/TransactionsList";
import { BoxStyled, ContainerStyled, SectionStyled } from "./TransactionContainer.styled";

const TransactionContainer = () => {
    return (
        <SectionStyled>
            <TransactionTypeTabs />
            <ContainerStyled>
                <AddTransaction />
                <BoxStyled>
                    <TransactionsList />
                    <Summary />
                </BoxStyled>
            </ContainerStyled>
        </SectionStyled>
    );
};

export default TransactionContainer;