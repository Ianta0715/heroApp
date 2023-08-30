import { Route, Routes } from "react-router-dom";
import { HeroesRoutes, } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicPoute";



export const AppRouter = () => {
    return (
        <>
            <div>

                <Routes>
                    <Route path="login/*" element={
                        <PublicRoute>
                            <Routes>
                                <Route path="/*" element={<LoginPage />} />
                            </Routes>
                        </PublicRoute>
                    } />

                    <Route path="/*" element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    } />

                </Routes>
            </div>
        </ >
    )
}