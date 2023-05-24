import {
  WrapperStyled,
  TextStyled,
  DivStyled,
  ListStyled,
  ListItem,
  MonthStyled,
  SumStyled,
} from './Summary.styled';

const Summary = () => {
  return (
    <WrapperStyled>
      <TextStyled>Summary</TextStyled>
      <DivStyled>
        <ListStyled>
          <ListItem>
            <MonthStyled>Item1</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
          <ListItem>
            <MonthStyled>Item2</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
          <ListItem>
            <MonthStyled>Item3</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
          <ListItem>
            <MonthStyled>Item4</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
          <ListItem>
            <MonthStyled>Item5</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
          <ListItem>
            <MonthStyled>Item6</MonthStyled>
            <SumStyled>10 000.00</SumStyled>
          </ListItem>
        </ListStyled>
      </DivStyled>
    </WrapperStyled>
  );
};

export default Summary;
