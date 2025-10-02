import { createBrowserRouter, RouterProvider } from "react-router";
import  AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import About from "./ui/About";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import LogIn from "./features/authentication/login";
import SignUp from "./features/authentication/SignUp";
import ProductList from "./features/product/ProductList";
import ProductDetail from "./features/product/ProductOverview";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement : <Error />,
    children :[
      {index : true , Component : Home},
      {
        path:  "/about",
        Component : About
      },
      { path: "/men", element: <ProductList category="men" /> },
      { path: "/men/:id", element: <ProductDetail category="men" /> },

      { path: "/women", element: <ProductList category="women" /> },
      { path: "/women/:id", element: <ProductDetail category="women" /> },

      { path: "/kids", element: <ProductList category="kids" /> },
      { path: "/kids/:id", element: <ProductDetail category="kids" /> },
      
            {
        path:  "/about",
        Component : About
      },
      {
        path:  "/cart",
        Component : Cart,
      },{
        path : "/order/new",
        Component: CreateOrder,
      },{
        path:"/order/:id",
        Component : Order,
      }
      ,{
        path : "/auth/login",
        Component :LogIn,
      }
      ,{
        path : "/auth/singup",
        Component :SignUp,
      },
    ]
  },
]);

function App() {
    return  <RouterProvider router={router} />;  
}

export default App;
