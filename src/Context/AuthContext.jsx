import { createContext, useContext, useState, useEffect } from "react";
import { isLoggedIn as checkAuth, loginUser as saveAuth, logoutUser as clearAuth } from "../Utils/Auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(checkAuth());

    const login = () => {
        saveAuth();
        setLoggedIn(true);
    };

    const logout = () => {
        clearAuth();
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
