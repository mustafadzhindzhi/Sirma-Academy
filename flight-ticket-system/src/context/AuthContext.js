import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { useNavigate } from "react-router-dom";
import { useMemo, useCallback } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = useCallback((data) => {
        setUser(data);
        navigate("/");
    }, [setUser, navigate]);

    const logout = useCallback(() => {
        setUser(null);
        navigate('/login', { replace: true });
    }, [setUser, navigate]);

    const auth = useMemo(() => {
        return {
            user, 
            login, 
            logout
        };
    }, [user, login, logout]);

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
