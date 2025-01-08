import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h1>Main</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
