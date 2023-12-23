import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Layout from "../layout";
import Contact from "../pages/contact";
import About from "../pages/about";
import Post from "../pages/post";
import Download from "../pages/download";
import Courses from "../pages/courses";
import Resume from "../pages/resume";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-me"} element={<About />} />
          <Route path={"/resume"} element={<Resume />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/download"} element={<Download />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/post/:id"} element={<Post />} />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
