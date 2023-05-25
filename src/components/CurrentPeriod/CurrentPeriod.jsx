import { DateTime } from 'luxon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import { useEffect, useState } from 'react';

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
    <>
      <Button
        variant="text"
        startIcon={<ArrowBackIosIcon />}
        onClick={handleMonthDecrement}
      />
      <span>{reportPeriod.toFormat('LLLL yyyy').toUpperCase()}</span>
      <Button
        variant="text"
        endIcon={<ArrowForwardIosIcon />}
        onClick={handleMonthIncrement}
        disabled={
          reportPeriod.startOf('month') < DateTime.now().startOf('month')
            ? false
            : true
        }
      />
    </>
  );
};

export default CurrentPeriod;
