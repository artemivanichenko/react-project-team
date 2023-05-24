import { DateTime } from "luxon";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";

const CurrentPeriod = () => {
    const date = DateTime.local()
    var dt = date;
    // var dt = date.minus({ months: 1 });
    // dt = dt.plus({ months: 1 });
    // console.log(dt < date);
    const dtWeb = dt.toFormat('LLLL yyyy').toUpperCase();

    const handleMonthDecrement = () => {
        dt = dt.minus({ months: 1 });
        const dtAPI = dt.toFormat('yyyy-LL');
        return dtWeb
    }

    const handleMonthIncrement = () => {
        dt = dt.plus({ months: 1 });
    }

    return (
        <>
            <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={handleMonthDecrement}/>
            <span>{dtWeb}</ span>
            <Button variant="text" endIcon={<ArrowForwardIosIcon />} onClick={handleMonthIncrement}/>
        </>);
};

export default CurrentPeriod;