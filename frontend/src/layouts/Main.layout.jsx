import { Outlet } from "react-router";
import { Header } from "../components";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
