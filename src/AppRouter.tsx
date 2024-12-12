// test?
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Home } from "./pages/Home/home"
import { RoutesWithNotFound } from "./pages/components/RoutesWithNotFound/routesWithNotFound"
import { ModuleRoutes } from "./pages/routes"

import { Navbar } from "./pages/components/Navbar/Navbar"
import { Footer } from "./pages/components/Footer/Footer"
import { Summary } from "./pages/Summary/Summary"


export const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <Navbar />
            <RoutesWithNotFound>
                <Route path={ModuleRoutes.Init} element={<Navigate to={ModuleRoutes.Home} />} />
                <Route path={ModuleRoutes.Home} element={<Home />} />

                <Route path={ModuleRoutes.Summary} element={<Summary />} />
            </RoutesWithNotFound>
            <Footer />
        </BrowserRouter>
    )
}