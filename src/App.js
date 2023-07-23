import React from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter,RouterProvider,createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Weather_Details from './Components/Weather_Details/Weather_Details'
export default function App() {
  const router=createHashRouter([{
    path:'',element: <Layout/>,children:[
      {
        index:true,element:<Home/>
      }
      ,
      {
        path:'/Home',element:<Home/>
      }
      ,
      {
        path:'/Weather_Details/:country',element:<Weather_Details/>
      }
    ]
  }])
  return (
    <>
    
   
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
