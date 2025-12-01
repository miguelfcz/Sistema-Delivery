import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

// 1. Ajuste na interface para ser mais flexível
interface JWTPayLoad {
    usuarioId: number;
    // Aceita 'nome', ' nome ' ou qualquer outra variação que a API possa enviar
    [key: string]: any; 
    email: string;
    exp: number;
}

interface AuthContextData {
    signed: boolean;
    username: string;
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
        // 1. Corrigido para usar a chave padrão '@Cardapiu:token'
        const storagedToken = localStorage.getItem('@Cardapiu:token');
        
        if (storagedToken) {
            try{
                const decoded = jwtDecode<JWTPayLoad>(storagedToken);

                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    signOut();
                } else {
                    api.defaults.headers.common['Authorization'] = 'Bearer ' + storagedToken;
                    // 🚨 CORREÇÃO: Normaliza o usuário também ao recarregar a página
                    const normalizedUser = { ...decoded, nome: decoded.nome || decoded[' nome '] };
                    setUser(normalizedUser);
                }
            } catch (error) {
                signOut();
            }
        }
        setLoading(false);
    }, []);

    const signIn = (token: string) => {
        // 2. Corrigido para salvar na chave padrão '@Cardapiu:token'
        localStorage.setItem('@Cardapiu:token', token);

        api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        const decoded = jwtDecode<JWTPayLoad>(token);
        // 2. Normaliza o objeto do usuário para garantir que a propriedade 'nome' exista
        const normalizedUser = { ...decoded, nome: decoded.nome || decoded[' nome '] };
        setUser(normalizedUser);
    };

    const signOut = () => {
        // 3. Corrigido para remover da chave padrão '@Cardapiu:token'
        localStorage.removeItem('@Cardapiu:token');
        setUser(null);
        delete api.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ signed: !!user, user, username: user?.nome || '', signIn, signOut, loading }}>
          {children}
        </AuthContext.Provider>
      );
};