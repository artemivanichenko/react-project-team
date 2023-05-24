const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");
const { selectIsUserAuthorized } = require("redux/auth/authSelectors");

const PublicRoute = ({ component, redirectTo = '/' }) => {
    const isAuthorized = useSelector(selectIsUserAuthorized);
    return !isAuthorized ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;