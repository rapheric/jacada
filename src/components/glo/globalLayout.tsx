import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";


const GlobalLayout = () => {
  const location = useLocation();

  const excludePaths = ["/dashboard"];
  const shouldHideLayout = excludePaths.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default GlobalLayout;
