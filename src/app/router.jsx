import React, {lazy} from 'react'
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route, Outlet } from 'react-router'
import {PATHS} from '@/config/path.config'

const Header = lazy(()=>import("@/components/layouts/header.layout"))
const Footer = lazy(()=>import("@/components/layouts/footer.layout"))
const Search = lazy(()=>import("@/features/search/index"))

const MainLayout = ()=>{
  return(
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

const WithSearchLayout = () =>{
  return(
    <>
        <div className="bg-gradient-to-b from-brand from-50% to-transparent to-50%">
            <Search />
        </div>
        <Outlet />
    </>
  )
}

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route element={<MainLayout/>}>
        <Route
            path={PATHS.HOME}
            lazy = {()=>import("./home/index").then(module=>({Component : module.default}))}
        />
        <Route element={<WithSearchLayout/>}>
            <Route
                path={PATHS.SEARCH}
                lazy ={()=>import("./search/index").then(module=>({Component : module.default}))}
            />
            <Route
                path={PATHS.HOTEL}
                lazy={()=>import("./hotel-details").then(module=>({Component : module.default}))}
            />
        </Route>
        <Route
            path={PATHS.SIGN_IN}
            lazy={()=>import("./auth/index").then(module=>({Component : module.SignInPage}))}
        />
        <Route
            path={PATHS.SIGN_UP}
            lazy={()=>import("./auth/index").then(module=>({Component : module.SignUpPage}))}
        />
        </Route>
    )
)

const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter