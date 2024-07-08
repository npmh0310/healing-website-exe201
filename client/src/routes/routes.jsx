import BlogPage from "../pages/BlogPage/BlogPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ViewDetailWorkshop from "../pages/ViewDetailWorkshop/ViewDetailWorkshop";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import ServiceDetail from "../pages/ServiceDetail";
import ServiceList from "../pages/ServiceList";
import BlogPost from "../pages/BlogPage/BlogPost";

const routes = [
  { index: true, element: <HomePage />, state: "home" },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },  {
    path: "blog/:id", // Add the blog post detail route
    element: <BlogPost />, // Assign the BlogPost component to this route
  },
  {
    path: "workshop-detail",
    element: <ViewDetailWorkshop />,
  },
  {
    path: "contact",
    element: <ContactUsPage />,
  },
  { path: "servicedetail/:id", element: <ServiceDetail /> },
  { path: "servicelist", element: <ServiceList /> },
];

export default routes;
