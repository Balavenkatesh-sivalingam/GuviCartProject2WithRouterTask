import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./error";
import Cart from "./Components/Cart";
import About from "./Components/About"
import Contact from "./Components/Contact"
import CartProvider from "./Components/cartProvider";


const AppLayout = () => {
  return (
    <CartProvider>
    <div>
      <Header />
      <Outlet />
    </div>
    </CartProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact />},
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
