import { Outlet } from "react-router";
import { Footer, Header } from "../components";

const ProjectLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProjectLayout;
