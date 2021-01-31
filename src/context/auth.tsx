import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router";
import app from "../services/api";

interface IUser {
    name: string;
    id: number;
}

interface IAuthContextData {
    signed: boolean;
    user: IUser;
    setSigned: (signed: boolean) => void;
    signIn: () => void;
    loading: boolean;
}

interface IProps {
    children?: React.ReactNode;
}
const initialState = {
    signed: false,
    setSigned: () => {},
    signIn: () => {},
    token: "",
    user: { name: "", id: 0 },
    loading: true,
};

//generics
const AuthContext = createContext<IAuthContextData>(initialState);

function AuthProvider({ children }: IProps) {
    const history = useHistory();
    const [user, setUser] = useState<IUser>(initialState.user);
    const [loading, setLoading] = useState(initialState.loading);
    const [token, setToken] = useState(initialState.token);
    const [signed, setSigned] = useState(initialState.signed);

    useEffect(() => {
        const storedToken = localStorage.getItem("@Auth:token");
        const storedUser = localStorage.getItem("@Auth:user");
        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
            setSigned(true);
            app.defaults.headers.authorization = `Bearer ${storedToken}`;
            console.log("rehydrated", storedToken, storedUser);
        }
        setLoading(false);
    }, []);

    function signIn() {
        try {
            setLoading(true);
            // app.post('/signin')
            console.log("api call mock");
            const data = {
                token: "123",
                username: "arthur",
                userId: 1,
            };

            app.defaults.headers.authorization = `Bearer ${data.token}`;
            localStorage.setItem("@Auth:token", data.token);
            localStorage.setItem(
                "@Auth:user",
                JSON.stringify({ user: data.username, userId: data.userId })
            );

            setSigned(true);
            setUser({ name: data.username, id: data.userId });
            setToken(data.token);
            setLoading(false);
            // history.push("/dashboard");
            console.log("oi");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider
            value={{ signed, setSigned, signIn, user, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
