import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";
import Header from "../../api/Global/components/navbar";


const GlobalLayout = () => {
  const location = useLocation();

  const excludePaths = ["/dashboard"];
  const shouldHideLayout = excludePaths.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main>
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default GlobalLayout;
