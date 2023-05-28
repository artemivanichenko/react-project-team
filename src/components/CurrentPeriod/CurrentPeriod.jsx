import { DateTime } from 'luxon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import { useEffect, useState } from 'react';
import { Period, Current, Conteiner, BtnRow } from './CurrentPeriod.styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: "7px",
        }
      }
    }
  },
  palette: {
    primary: {
      main: green[700],
    },
    action: {
      disabled: '#C7CCDC50',
    }
  },
});

const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const [reportPeriod, setReportPeriod] = useState(DateTime.now());

  useEffect(() => {
    dispatch(getTransactionPeriod(reportPeriod.toFormat('yyyy-LL')));
  }, [dispatch, reportPeriod]);

  const handleMonthDecrement = () => {
    setReportPeriod(prev => prev.minus({ month: 1 }));
  };

  const handleMonthIncrement = () => {
    setReportPeriod(prev => prev.plus({ month: 1 }));
  };

  return (
    
    <Conteiner>
      <Current>Current period</Current>
      <BtnRow>
        <ThemeProvider theme={theme}>
          <IconButton
            color="primary"
            size='small'
            onClick={handleMonthDecrement}
          >
            <ArrowBackIosIcon fontSize='inherit' />
          </IconButton>
          <Period>{reportPeriod.toFormat('LLLL yyyy').toUpperCase()}</Period>
          <IconButton
            color="primary"
            size='small'
            onClick={handleMonthIncrement}
            disabled={
              reportPeriod.startOf('month') < DateTime.now().startOf('month')
                ? false
                : true
            }
          >
            <ArrowForwardIosIcon fontSize='inherit' />
          </IconButton>
        </ThemeProvider>
      </BtnRow>

    </Conteiner>
  );
};

export default CurrentPeriod;
