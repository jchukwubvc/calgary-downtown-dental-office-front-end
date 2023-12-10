import React from 'react';
import { getUserToken } from './AuthContext';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ children}) => {
    const userToken  = getUserToken();

    console.log("called ProtectedRoute DECODED HERE: " + JSON.stringify(userToken));

    return userToken ? children : <Navigate to="/auth/login" replace />;
};



export default ProtectedRoute;
