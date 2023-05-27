import { selectExpensesData } from 'redux/reports/reportsSelectors';
import { useSelector } from 'react-redux';
import { ChartWrapper } from './ReportCharts.styled';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { selectionIncome, selectionExpenses } from 'shared/category';

Chart.register(...registerables, ChartDataLabels);
Chart.defaults.borderColor = ['#474759'];

// gradient//
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
const getGradientColorHorizontal = (ctx, chartArea, colors) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;

    gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);

    gradient.addColorStop(0, colors.first);
    gradient.addColorStop(1, colors.end);
  }

  return gradient;
};
// progressBar//
const progressBar = {
  id: 'progressBar',
  beforeDatasetDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      chartArea: { left },
      scales: { y },
    } = chart;
    ctx.save();
    data.datasets[0].data.forEach((datapoint, index) => {
      const fontSizelabel = 12;
      ctx.font = '12px';

      ctx.fillStyle = '#C7CCDC';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        data.labels[index],
        left,
        y.getPixelForValue(index) - fontSizelabel - 5
      );
    });
  },
};

const ReportCharts = () => {
  //   const isHorizontalChart = window.innerWidth <= 767;
  const isHorizontalChart = useMediaQuery({ query: '(min-width: 768px)' });
  const { value } = useParams();
  //выбранная категория ///
  const categoryExpense = value => {
    return selectionExpenses
      .filter(el => el.value === value)
      .map(({ trans }) => trans)
      .join();
  };

  const reportExpenses = useSelector(selectExpensesData);
  const objectToArray = (object, category) => {
    const objcategory = Object.entries(object)
      .map(([name, { total, ...value }]) => {
        return { name, content: value };
      })
      .filter(el => el.name === category)
      .map(({ name, content }) => content);

    const res = objcategory.length ? Object.entries(objcategory[0]) : [];

    return res;
  };
  const expensesArray = objectToArray(reportExpenses, categoryExpense(value));

  const data = expensesArray.sort((a, b) => b[1] - a[1]);

  return (
    <>
      {data.length && (
        <ChartWrapper>
          {isHorizontalChart ? (
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
                // maintainAspectRatio: false,
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
                    formatter: function (value) {
                      return `${value} UAH`;
                    },
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

                    barThickness: 15,
                    minBarLength: 50,
                    //   maxBarThickness: 38,
                    categoryPercentage: 1, // Задает фиксированную ширину категории (бара)
                    //   barPercentage: 0.5,
                    grouped: true,
                    borderRadius: 8,
                    backgroundColor: function (context) {
                      const color = { first: '#383C46', end: '#60C470' };
                      const color1 = { first: '#373745', end: '#5B5B6D' };
                      const chart = context.chart;
                      const { ctx, chartArea } = chart;

                      if (!chartArea) {
                        // This case happens on initial chart load
                        return;
                      }
                      return [
                        getGradientColorHorizontal(ctx, chartArea, color),
                        getGradientColorHorizontal(ctx, chartArea, color1),
                        getGradientColorHorizontal(ctx, chartArea, color1),
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
                responsive: true, // Разрешаем графику адаптироваться к размеру контейнера
                // maintainAspectRatio: false, // Разрешаем графику растягиваться внутри контейнера
                scales: {
                  x: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    beginAtZero: true,
                    grid: {
                      display: false,
                    },
                    border: {
                      display: false,
                    },

                    ticks: {
                      display: false,
                      color: '#C7CCDC',
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
                    padding: 6,
                    formatter: function (value) {
                      return `${value} UAH`;
                    },
                  },
                },
              }}
              plugins={[progressBar]}
            />
          )}
        </ChartWrapper>
      )}
    </>

    // <ChartWrapper>
    //   {isHorizontalChart ? (
    //     <Bar
    //       data={{
    //         labels: data.map(row => row[0]),
    //         datasets: [
    //           {
    //             label: '',
    //             data: data.map(row => row[1]),
    //             // indexAxis: 'y',
    //             barThickness: 38,
    //             //   maxBarThickness: 38,
    //             categoryPercentage: 0.5, // Задает фиксированную ширину категории (бара)
    //             //   barPercentage: 0.5,
    //             grouped: true,
    //             borderRadius: 8,
    //             backgroundColor: function (context) {
    //               const color = { first: '#383C46', end: '#60C470' };
    //               const color1 = { first: '#373745', end: '#5B5B6D' };
    //               const chart = context.chart;
    //               const { ctx, chartArea } = chart;
    //               // console.log(chart);
    //               if (!chartArea) {
    //                 // This case happens on initial chart load
    //                 return;
    //               }
    //               return [
    //                 getGradientColor(ctx, chartArea, color),
    //                 getGradientColor(ctx, chartArea, color1),
    //                 getGradientColor(ctx, chartArea, color1),
    //               ];
    //             },
    //           },
    //         ],
    //       }}
    //       options={{
    //         layout: {
    //           padding: 20,
    //         },
    //         // maintainAspectRatio: false,
    //         scales: {
    //           x: {
    //             grid: {
    //               display: false,
    //             },
    //             ticks: {
    //               color: '#C7CCDC',
    //             },
    //           },
    //           y: {
    //             border: {
    //               display: false,
    //             },
    //             grid: {
    //               lineWidth: 2,
    //             },

    //             ticks: {
    //               display: false, // Скрываем метки на оси y
    //             },
    //           },
    //         },
    //         plugins: {
    //           legend: {
    //             display: false, // Убираем легенду
    //           },
    //           tooltip: {
    //             enabled: false,
    //           },
    //           datalabels: {
    //             anchor: 'end',
    //             align: 'top',
    //             color: '#C7CCDC',
    //             formatter: function (value) {
    //               return `${value} UAH`;
    //             },
    //           },
    //         },
    //       }}
    //     />
    //   ) : (
    //     <Bar
    //       data={{
    //         labels: data.map(row => row[0]),

    //         datasets: [
    //           {
    //             label: '',
    //             data: data.map(row => row[1]),

    //             barThickness: 15,
    //             minBarLength: 50,
    //             //   maxBarThickness: 38,
    //             categoryPercentage: 1, // Задает фиксированную ширину категории (бара)
    //             //   barPercentage: 0.5,
    //             grouped: true,
    //             borderRadius: 8,
    //             backgroundColor: function (context) {
    //               const color = { first: '#383C46', end: '#60C470' };
    //               const color1 = { first: '#373745', end: '#5B5B6D' };
    //               const chart = context.chart;
    //               const { ctx, chartArea } = chart;

    //               if (!chartArea) {
    //                 // This case happens on initial chart load
    //                 return;
    //               }
    //               return [
    //                 getGradientColorHorizontal(ctx, chartArea, color),
    //                 getGradientColorHorizontal(ctx, chartArea, color1),
    //                 getGradientColorHorizontal(ctx, chartArea, color1),
    //               ];
    //             },
    //           },
    //         ],
    //       }}
    //       options={{
    //         indexAxis: 'y',

    //         layout: {
    //           padding: 20,
    //         },
    //         responsive: true, // Разрешаем графику адаптироваться к размеру контейнера
    //         // maintainAspectRatio: false, // Разрешаем графику растягиваться внутри контейнера
    //         scales: {
    //           x: {
    //             display: false,
    //             grid: {
    //               display: false,
    //             },
    //           },
    //           y: {
    //             beginAtZero: true,
    //             grid: {
    //               display: false,
    //             },
    //             border: {
    //               display: false,
    //             },

    //             ticks: {
    //               display: false,
    //               color: '#C7CCDC',
    //             },
    //           },
    //         },
    //         plugins: {
    //           legend: {
    //             display: false, // Убираем легенду
    //           },
    //           tooltip: {
    //             enabled: false,
    //           },
    //           datalabels: {
    //             anchor: 'end',
    //             align: 'top',
    //             color: '#C7CCDC',
    //             padding: 6,
    //             formatter: function (value) {
    //               return `${value} UAH`;
    //             },
    //           },
    //         },
    //       }}
    //       plugins={[progressBar]}
    //     />
    //   )}
    // </ChartWrapper>
  );
};

export default ReportCharts;
