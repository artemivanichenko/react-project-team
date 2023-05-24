import Header from "components/Header/Header";
import { loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={loader}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Layout;