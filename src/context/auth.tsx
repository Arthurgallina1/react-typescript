import React, { useState, createContext } from "react";

interface IAuthContextData {
    signed: boolean;
    setSigned: (signed: boolean) => void;
}

interface IProps {
    children?: React.ReactNode;
}
const initialState = {
    signed: false,
    setSigned: () => {},
};

//generics
const AuthContext = createContext<IAuthContextData>(initialState);

function AuthProvider({ children }: IProps) {
    const [signed, setSigned] = useState(initialState.signed);

    return (
        <AuthContext.Provider value={{ signed, setSigned }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
