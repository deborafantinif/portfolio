import { Routes } from "react-router";
import { Route } from "react-router-dom";

import * as pages from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home/>} />
      <Route path="/home" element={<pages.Home/>} />
      <Route path="/about" element={<pages.About/>} />
      <Route path="/technologies" element={<pages.Technologies/>} />
      <Route path="/projects" element={<pages.Projects/>} />
      <Route path="/contact" element={<pages.Contact/>} />
      <Route path="*" element={<pages.NotFound />} />
    </Routes>
  );
}

export default AppRoutes;