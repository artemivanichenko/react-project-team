import { useSelector } from 'react-redux';
import {
  selectExpensesData,
  selectIncomesData,
} from 'redux/reports/reportsSelectors';

const ReportCategories = () => {
  // const IncomesData = useSelector(selectIncomesData);
  //   console.log(Object.keys(IncomesData));
  const ExpenseData = useSelector(selectExpensesData);
  console.log(ExpenseData);

  //   console.log(Data);

  // var newDataArray = Object.keys(ExpenseData).map(key => {
  //   var subData = ExpenseData[key];
  //   var subDataArray = Object.keys(subData).map(subKey => {
  //     if (subKey === 'total') {
  //       return subKey + ': ' + subData[subKey];
  //     } else {
  //       return subKey;
  //     }
  //   });
  //   return {
  //     [key]: subDataArray.filter(Boolean),
  //   };
  // });

  // console.log(newDataArray);
  return (
    <section>
      <h2>Report Categories</h2>

      {/* {Object.keys(expensesData).reduce((acc, { name, total, type }) => {
        if (type !== 'INCOME') {
          acc.push(
            <TrData key={name} type={type}>
              <StyledTd left name={name}>
                {name}
              </StyledTd>
              <StyledTd right leftPosition>
                {Math.abs(total).toFixed(2)}
              </StyledTd>
            </TrData>
          );
        }
        return acc;
      }, [])} */}
    </section>
  );
};

export default ReportCategories;

// var newDataArray = Object.keys(expensesData).map(key => {
//   var subData = expensesData[key];
//   var subDataArray = Object.keys(subData).map(subKey => {
//     if (subKey === 'total') {
//       return subKey + ': ' + subData[subKey];
//     } else {
//       return subKey;
//     }
//   });
//   return {
//     [key]: subDataArray.filter(Boolean),
//   };
// });

// console.log(newDataArray);
