import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //API CALLS LOGIC
    const data = {
      name: "Amit",
    };
    setUserName(data.name);
  }, []);

  return (
    // <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>

    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
