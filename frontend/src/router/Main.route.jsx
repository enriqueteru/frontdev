import { Routes, Route } from "react-router-dom";
import { About, Contact, Projects, NotFound, Services, Home } from "@pages";
import { MainLayout, ProjectLayout, ServiceLayout } from "@layouts";
import { Project } from "@features/project/pages/Project";
import Service from "@features/service/pages/Service";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="services" element={<ServiceLayout />}>
        <Route index element={<Services />} />
        <Route path=":id" element={<Service />} />
      </Route>

      <Route path="projects" element={<ProjectLayout />}>
        <Route index element={<Projects />} />
        <Route path=":id" element={<Project />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
