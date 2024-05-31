import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import routes from "./routes/routes";
import PageWrapper from "./components/common/PageWrapper";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthContextProvider } from "./context/AuthContext";
import ViewDetailWorkshop from "./pages/ViewDetailWorkshop/ViewDetailWorkshop";
import { useEffect } from "react";
import { getProfile } from "./fetchData/auth";
import { userLoginSuccess } from "./redux/features/authSlice";


function App() {

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin)


  useEffect(() => {
    if (!isLogin) {
      getProfile()
        .then(response => {
          console.log(response.data);
          dispatch(userLoginSuccess(response.data.data))// Lấy dữ liệu từ response
        })
        .catch(error => {
          console.error("Error fetching profile data", error);
        });
    }
  }, [isLogin, dispatch]);

  return (
    <>
      {/* config toastify */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/workshop-detail" element={<ViewDetailWorkshop />} />
            <Route path="/" element={<MainLayout />}>
              {routes.map((route, index) =>
                route.index ? (
                  <Route index key={index} element={route.element} />
                ) : (
                  <Route
                    path={route.path}
                    key={index}
                    element={route.element}
                  />
                )
              )}
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
