import {
  selectExpensesData,
  selectIncomesData,
} from 'redux/reports/reportsSelectors';
import { useSelector } from 'react-redux';
import { ChartWrapper } from './ReportCharts.styled';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { selectionIncome, selectionExpenses } from 'shared/category';
import { useEffect, useState } from 'react';

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
      const fontSizelabel = 10;
      ctx.font = '8px';

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
  const isVertical = useMediaQuery({ query: '(min-width: 768px)' });
  const [isChangingScreens, setIsChangingScreens] = useState(false);
  // console.log('ReportCharts');
  useEffect(() => {
    setIsChangingScreens(true);
  }, [isVertical]);

  useEffect(() => {
    isChangingScreens && setIsChangingScreens(false);
  }, [isChangingScreens]);

  const { value } = useParams();
  const reportExpenses = useSelector(selectExpensesData);
  const reportIncomes = useSelector(selectIncomesData);
  //выбранная категория ///
  const categoryChart = value => {
    const expense = selectionExpenses
      .filter(el => el.value === value)
      .map(({ trans }) => trans)
      .join();
    const income = selectionIncome
      .filter(el => el.value === value)
      .map(({ trans }) => trans)
      .join();
    return expense ? expense : income;
  };

  const objectToArray = (expense, income, category) => {
    const objcategoryExpense = Object.entries(expense)
      .map(([name, { total, ...value }]) => {
        return { name, content: value };
      })
      .filter(el => el.name === category)
      .map(({ name, content }) => content);
    const objcategoryIncome = Object.entries(income)
      .map(([name, { total, ...value }]) => {
        return { name, content: value };
      })
      .filter(el => el.name === category)
      .map(({ name, content }) => content);
    // console.log(objcategoryExpense, objcategoryIncome);

    const res = [];
    if (objcategoryExpense.length) {
      return Object.entries(objcategoryExpense[0]);
    }
    if (objcategoryIncome.length) {
      return Object.entries(objcategoryIncome[0]);
    }

    // console.log(res);
    return res;
  };

  const dataArray = objectToArray(
    reportExpenses,
    reportIncomes,
    categoryChart(value)
  );

  const data = dataArray.sort((a, b) => b[1] - a[1]);
  // const [chartheight, setChartheight] = useState(null);
  // useEffect(() => {
  //   data.length && setChartheight(data.length * 50);
  //   console.log(chartheight);
  // }, [data]);

  return (
    <>
      {data.length > 0 && (
        <ChartWrapper>
          {!isChangingScreens &&
            (isVertical ? (
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
                      categoryPercentage: 1, // Задает фиксированную ширину категории (бара)
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
                  maintainAspectRatio: false,
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
                      minBarLength: 70,
                      //   maxBarThickness: 38,
                      // categoryPercentage: 0.5, // Задает фиксированную ширину категории (бара)
                      // barPercentage: 0.5,
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
                  // maintainAspectRatio: false,
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
                      padding: 4,
                      // offset: 2,
                      formatter: function (value) {
                        return `${value} UAH`;
                      },
                      labels: {
                        title: {
                          font: {
                            size: '10px',
                          },
                        },
                      },
                    },
                  },
                }}
                plugins={[progressBar]}
                height={400}
              />
            ))}
        </ChartWrapper>
      )}
    </>
  );
};

export default ReportCharts;
