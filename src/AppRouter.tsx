import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Home } from "./pages/Home/home"
import { RoutesWithNotFound } from "./pages/components/RoutesWithNotFound/routesWithNotFound"
import { ModuleRoutes } from "./pages/routes"


export const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path={ModuleRoutes.Init} element={<Navigate to={ModuleRoutes.Home}/>}/>
                <Route path={ModuleRoutes.Home} element={<Home/>}/>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}