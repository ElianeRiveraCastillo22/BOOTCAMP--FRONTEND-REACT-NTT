import { ModuleRoutes } from "@/pages/routes";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
    const token = false;
    return token ? <Outlet /> : <Navigate to={ModuleRoutes.Login} replace />;
};

export const PublicGuard = () => {
    const token = false;
    return token ? <Navigate to={ModuleRoutes.Home} replace /> : <Outlet />;
};
