import Balance from "components/Balance/Balance";
import CurrentPeriod from "components/CurrentPeriod/CurrentPeriod";
import GoHomeLink from "components/GoHomeLink/GoHomeLink";
import { NavLink } from "react-router-dom";
import { Conteiner } from './ReportBar.styled.jsx'

const ReportBar = () => {
    return (
        <Conteiner>
            <NavLink to="/home"><GoHomeLink /></NavLink>
            <Balance />
            <CurrentPeriod />
        </Conteiner>
    );
};

export default ReportBar;