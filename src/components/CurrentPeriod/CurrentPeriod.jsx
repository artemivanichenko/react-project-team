import { DateTime } from 'luxon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import { useEffect, useState } from 'react';
import { Period, Current, Conteiner,BtnRow } from './CurrentPeriod.styled'

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
      <Button
        variant="text"
        startIcon={<ArrowBackIosIcon  htmlColor="green" />}
        onClick={handleMonthDecrement}
      />
      <Period>{reportPeriod.toFormat('LLLL yyyy').toUpperCase()}</Period>
      <Button
        variant="text"
        endIcon={<ArrowForwardIosIcon htmlColor="green" />}
        onClick={handleMonthIncrement}
        disabled={
          reportPeriod.startOf('month') < DateTime.now().startOf('month')
            ? false
            : true
        }
      />
     </BtnRow> 
    </Conteiner>
  );
};

export default CurrentPeriod;
