import { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { PageNotFound } from "../PageNotFound/PageNotFound"
import { ModuleRoutes } from "../../routes"

interface Props{
    children:ReactNode
}

export const RoutesWithNotFound = ({children}:Props) => {

    return(
        <Routes>
            {children}
            <Route path="*" element={<Navigate to={ModuleRoutes.PageNotFound}/>}/>
            <Route path={ModuleRoutes.PageNotFound} element={<PageNotFound/>}/>
        </Routes>
    )

}