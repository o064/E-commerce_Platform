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
      {
        path:  "/cart",
        Component : Cart
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
