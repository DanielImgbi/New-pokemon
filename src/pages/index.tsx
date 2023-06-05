import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader";
import RootLayout from "../components/layouts/RootLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HomeLayout from "../components/layouts/HomeLayout";
const clientId = '1089195485936-5qimadg7tq24rp9bl3bkqs5ssp9vihu7.apps.googleusercontent.com';


const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={< RootLayout />}>
          <Route index element={<HomeLayout/> } />
        </Route>
    )
)

const Components:React.FC = () =>{   
      
  return (
    <Suspense fallback={<Loader />}>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={route} />
      </GoogleOAuthProvider>
    </Suspense>
  )
}

export default Components

