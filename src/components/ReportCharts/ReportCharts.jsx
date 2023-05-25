import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const dataApi = [
  { year: 2010, amount: 5000 },
  { year: 2011, amount: 8000 },
  { year: 2012, amount: 10000 },
  { year: 2013, amount: 12000 },
  { year: 2014, amount: 9000 },
  { year: 2015, amount: 11000 },
  { year: 2016, amount: 13000 },
  { year: 2017, amount: 9500 },
  { year: 2018, amount: 11500 },
  { year: 2019, amount: 13500 },
  { year: 2020, amount: 10000 },
  { year: 2021, amount: 12000 },
];
console.log(dataApi.map(row => row.year).sort((a, b) => a - b));

const ReportCharts = () => {
  return (
    <section width="500">
      <Bar
        data={{
          labels: dataApi.map(row => row.year).sort((a, b) => a - b),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: dataApi.map(row => row.amount).sort((a, b) => a - b),
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
