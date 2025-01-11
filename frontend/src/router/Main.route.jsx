import { Routes, Route } from "react-router-dom";
import { Home, Contact, Projects } from "@pages";
import { MainLayout, ProjectLayout } from "@layouts";
import { NotFound } from "../pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="projects">
        <Route index element={<ProjectLayout />} />
        <Route element={<Projects />}>
          {/* <Route path=":pid" element={<Project />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
