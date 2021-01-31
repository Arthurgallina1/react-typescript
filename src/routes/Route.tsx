import React, { FunctionComponent, useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { AuthContext } from "../context/auth";

interface IProps extends RouteProps {
    isPrivate: boolean;
    signed: boolean;
}

const CustomRouter: FunctionComponent<IProps> = ({
    isPrivate,
    signed,
    ...rest
}) => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <h1>loading</h1>;
    }
    if (isPrivate && !signed) {
        return <Redirect to='/login' />;
    }

    return <Route {...rest} />;
};

export default CustomRouter;
