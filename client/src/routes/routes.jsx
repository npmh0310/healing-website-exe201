import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ServiceDetail from "../pages/ServiceDetail";

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
  { path: "servicedetail", element: <ServiceDetail /> },
];

export default routes;
