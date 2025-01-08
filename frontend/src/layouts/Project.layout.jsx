import { Outlet } from "react-router";

const ProjectLayout = () => {
  return (
    <div>
      <h1>Project</h1>
      <Outlet />
    </div>
  );
};

export default ProjectLayout;
