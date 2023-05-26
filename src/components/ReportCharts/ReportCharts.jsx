import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { selectExpensesData } from 'redux/reports/reportsSelectors';
import { useSelector } from 'react-redux';
Chart.register(...registerables);

const ReportCharts = () => {
  const expenses = useSelector(selectExpensesData);
  console.log(expenses);
  const data = Object.entries(expenses.Продукты).reduce((acc, [key, value]) => {
    if (key !== 'total') {
      acc.push([key, value]);
    }
    return acc;
  }, []);

  console.log('data', data);
  return (
    <section width="500">
      <Bar
        data={{
          labels: data.map(row => row[0]),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row[1]),
              backgroundColor: 'red',
            },
          ],
        }}
        // height={400}
        // width={600}
      />
    </section>
  );
};

export default ReportCharts;
