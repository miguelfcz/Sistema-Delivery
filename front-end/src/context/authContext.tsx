import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

interface JWTPayLoad {
    usuarioId: number;
    email: string;
    exp: number;
}

interface AuthContextData {
    signed: boolean;
    user: JWTPayLoad | null;
    signIn: (token: string) => void;
    signOut: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<JWTPayLoad | null> (null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storagedToken = localStorage.getItem('token');
        
        if (storagedToken) {
            try{
                const decoded = jwtDecode<JWTPayLoad>(storagedToken);

                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    signOut();
                } else {
                    api.defaults.headers.common['Authorization'] = 'Bearer ' + storagedToken;
                    setUser(decoded);
                }
            } catch (error) {
                signOut();
            }
        }
        setLoading(false);
    }, []);

    const signIn = (token: string) => {
        localStorage.setItem('token', token);

        api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        const decoded = jwtDecode<JWTPayLoad>(token);
        setUser(decoded);
    };

    const signOut = () => {
        localStorage.removeItem('token');
        setUser(null);
        delete api.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
          {children}
        </AuthContext.Provider>
      );
};