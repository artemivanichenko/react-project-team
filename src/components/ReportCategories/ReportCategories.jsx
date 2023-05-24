const ReportCategories = () => {
  return (
    <section>
      <h2>Report Categories</h2>
      {/* {trSummary.categoriesSummary.reduce((acc, { name, total, type }) => {
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
