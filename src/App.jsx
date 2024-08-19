import React from 'react'
import {createHashRouter,RouterProvider,} from "react-router-dom";
import Layout from './Layout/Layout';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
// import Menu from './Pages/Menu';
import Vendors from './Pages/Vendors';
import Product from './Pages/Product';
import Pay from './Pages/Pay';


const router = createHashRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "pay",
    element: <Pay/>,
  },
 
  {
    path: "/",
    element: <Layout/>,
    children : [
    {
      path: "vendors",
      element: <Vendors/>,
    },

     
    {
      path: "/product/:menuName",
      element: <Product />,
    },

    {
      path: "cart",
      element: <Cart/>,
    },
  
  ]
  },

  // {
  //   path: "/login",
  //   element: <Login/>,
  // },
 
]);
const App = () => {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App

// npm run dev


// import React from 'react'
// // import Login from './components/Auth/Login'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// }

// export default App