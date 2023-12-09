import {AuthProvider, getUserToken} from "./frontofficeviews/components/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./landingviews/LandingPage";
import AuthLayout from "./frontofficeviews/layouts/Auth";
import ProtectedRoute from "./frontofficeviews/components/ProtectedRoute";
import AdminLayout from "./frontofficeviews/layouts/Admin";
import React from "react";

const App = () => {

    return (
        <AuthProvider userToken={getUserToken()}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/auth/*" element={<AuthLayout/>}/>
                    <Route
                        path="/admin/*"
                        element={<ProtectedRoute>
                            <AdminLayout/>
                        </ProtectedRoute>}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;