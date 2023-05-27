// import { selectExpensesData } from 'redux/reports/reportsSelectors';
// import { useSelector } from 'react-redux';
import { ChartWrapper } from './ReportCharts.styled';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);
Chart.defaults.borderColor = ['#474759'];

const getGradientColor = (ctx, chartArea, colors) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;

    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

    gradient.addColorStop(0, colors.first);
    gradient.addColorStop(1, colors.end);
  }

  return gradient;
};

const ReportCharts = () => {
  const isHorizontalChart = window.innerWidth <= 767;
  console.log(isHorizontalChart);
  const dataApi = [
    ['Ковбаса', 70],
    ['Pork', 100],
    ['Milk', 120],
    ['Corn', 20],
    ['PopCorn', 150],
    ['Milk', 90],
    ['Corn', 28],
    ['PopCorn', 180],
    ['PopCorn', 150],
    ['Milk', 90],
  ];
  const data = dataApi.sort((a, b) => b[1] - a[1]);

  return (
    <ChartWrapper>
      {isHorizontalChart ? (
        <Bar
          data={{
            labels: data.map(row => row[0]),
            datasets: [
              {
                label: '',
                data: data.map(row => row[1]),

                barThickness: 38,
                //   maxBarThickness: 38,
                categoryPercentage: 0.5, // Задает фиксированную ширину категории (бара)
                //   barPercentage: 0.5,
                grouped: true,
                borderRadius: 8,
                backgroundColor: function (context) {
                  const color = { first: '#383C46', end: '#60C470' };
                  const color1 = { first: '#373745', end: '#5B5B6D' };
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;
                  // console.log(chart);
                  if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                  }
                  return [
                    getGradientColor(ctx, chartArea, color),
                    getGradientColor(ctx, chartArea, color1),
                    getGradientColor(ctx, chartArea, color1),
                  ];
                },
              },
            ],
          }}
          options={{
            indexAxis: 'y',

            layout: {
              padding: 20,
            },
            //   responsive: true, // Разрешаем графику адаптироваться к размеру контейнера
            //   maintainAspectRatio: false, // Разрешаем графику растягиваться внутри контейнера
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: '#C7CCDC',
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  lineWidth: 2,
                },

                ticks: {
                  display: false, // Скрываем метки на оси y
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Убираем легенду
              },
              tooltip: {
                enabled: false,
              },
              datalabels: {
                anchor: 'end',
                align: 'top',
                color: '#C7CCDC',
                //   labels: {
                //     title: {
                //       font: {
                //         weight: 'bold',
                //       },
                //     },
                //     value: {
                //       color: 'green',
                //     },
                //   },
              },
            },
          }}
        />
      ) : (
        <Bar
          data={{
            labels: data.map(row => row[0]),
            datasets: [
              {
                label: '',
                data: data.map(row => row[1]),
                // indexAxis: 'y',
                barThickness: 38,
                //   maxBarThickness: 38,
                categoryPercentage: 0.5, // Задает фиксированную ширину категории (бара)
                //   barPercentage: 0.5,
                grouped: true,
                borderRadius: 8,
                backgroundColor: function (context) {
                  const color = { first: '#383C46', end: '#60C470' };
                  const color1 = { first: '#373745', end: '#5B5B6D' };
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;
                  // console.log(chart);
                  if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                  }
                  return [
                    getGradientColor(ctx, chartArea, color),
                    getGradientColor(ctx, chartArea, color1),
                    getGradientColor(ctx, chartArea, color1),
                  ];
                },
              },
            ],
          }}
          options={{
            layout: {
              padding: 20,
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: '#C7CCDC',
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  lineWidth: 2,
                },

                ticks: {
                  display: false, // Скрываем метки на оси y
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Убираем легенду
              },
              tooltip: {
                enabled: false,
              },
              datalabels: {
                anchor: 'end',
                align: 'top',
                color: '#C7CCDC',
                //   labels: {
                //     title: {
                //       font: {
                //         weight: 'bold',
                //       },
                //     },
                //     value: {
                //       color: 'green',
                //     },
                //   },
              },
            },
          }}
        />
      )}
    </ChartWrapper>
  );
};

export default ReportCharts;
