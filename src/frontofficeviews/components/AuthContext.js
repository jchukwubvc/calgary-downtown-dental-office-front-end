import React, { createContext, useContext} from 'react';
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children, userToken }) => {
    return (
        <AuthContext.Provider value={{userToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const getUserToken = () =>{
    const token = localStorage.getItem('token');

    console.log("fetched token from local as:" + token);

    if (token) {
        try {
            const decoded = jwtDecode(token);
            console.log("set decoded token: "+ JSON.stringify(decoded));

            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                console.log("it has expired setting as null");
                return null;
            }else{
                console.log("return decoded token success");
                return decoded;
            }
        } catch (error) {
            return null;
        }
    }
};

export const clearUserToken = () => {
    localStorage.removeItem('token');
}
