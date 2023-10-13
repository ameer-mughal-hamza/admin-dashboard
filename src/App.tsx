import Footer from "@components/Footer/Footer";
import Menu from "@components/Menu/Menu";
import Navbar from "@components/Navbar/Navbar";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Products from "@pages/Products/Products";
import Register from "@pages/Register/Register";
import Users from "@pages/Users/Users";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import './styles/global.scss'

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
