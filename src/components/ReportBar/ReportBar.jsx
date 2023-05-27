import Balance from "components/Balance/Balance";
import CurrentPeriod from "components/CurrentPeriod/CurrentPeriod";
import GoHomeLink from "components/GoHomeLink/GoHomeLink";
import { NavLink } from "react-router-dom";
import { Conteiner,CurrentMob } from './ReportBar.styled.jsx'

const ReportBar = () => {
    return (
        <Conteiner>
            <NavLink to="/home"><GoHomeLink /></NavLink>
            <CurrentMob>
            <Balance />
                <CurrentPeriod />
                </CurrentMob>
        </Conteiner>
    );
};

export default ReportBar;