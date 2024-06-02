
import BlogPage from "../pages/BlogPage/BlogPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ViewDetailWorkshop from "../pages/ViewDetailWorkshop/ViewDetailWorkshop";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";


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
  },
  {
    path: "workshop-detail",
    element: <ViewDetailWorkshop />,
  },
  {
    path: "contact",
    element: <ContactUsPage />,
  },
];

export default routes;
