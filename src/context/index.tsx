import React from "react";
import { AuthProvider } from "./auth";

interface IProps {
    children?: React.ReactNode;
}

// pegar todos providers e exportar
function ContextProvider({ children }: IProps) {
    return <AuthProvider>{children}</AuthProvider>;
}

export default ContextProvider;
