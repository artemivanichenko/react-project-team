import Balance from 'components/Balance/Balance';
import ReportsLink from 'components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import { WrapperStyled } from './HomeBar.styled';

const HomeBar = () => {
  return (
    <section>
      <WrapperStyled>
        <Balance />
        <NavLink to="/reports">
          <ReportsLink />
        </NavLink>
      </WrapperStyled>
    </section>
  );
};

export default HomeBar;
