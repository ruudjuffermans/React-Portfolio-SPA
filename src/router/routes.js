import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Posts from "../pages/posts";
import Post from "../pages/post";
import Skills from "../pages/skills";
import Courses from "../pages/courses";
import Resume from "../pages/resume";

export default [
    {
      name: "Home",
      key: "home",
      route: "/",
      component: <Home />,
      isDynamic: false,
    },
    {
      name: "Contact",
      key: "contact",
      route: "/contact",
      component: <Contact />,
      isDynamic: false,
    },
    {
      name: "About",
      key: "about",
      route: "/about-me",
      component: <About />,
      isDynamic: false,
    },
    {
      name: "Posts",
      key: "posts",
      route: "/posts",
      component: <Posts />,
      isDynamic: false,
    },
    {
      name: "Courses",
      key: "courses",
      route: "/course",
      component: <Courses />,
      isDynamic: false,
    },
    {
      name: "Post",
      key: "post",
      route: "/post/:id",
      component: <Post />,
      isDynamic: true,
    },
    {
      name: "Resume",
      key: "resume",
      route: "/resume",
      component: <Resume />,
      isDynamic: false,
    },
    {
      name: "Skills",
      key: "skills",
      route: "/skills",
      component: <Skills />,
      isDynamic: false,
    },
  ];
  