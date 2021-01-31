import { useContext } from "react";
import { Switch } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import CustomRouter from "./Route";

export default function Routes() {
    const { signed } = useContext(AuthContext);
    return (
        <Switch>
            <CustomRouter
                signed={signed}
                isPrivate={false}
                path='/login'
                exact
                component={SignIn}
            />
            <CustomRouter
                signed={signed}
                isPrivate
                path='/dashboard'
                exact
                component={Dashboard}
            />
            <CustomRouter
                signed={signed}
                isPrivate={false}
                path='/'
                component={() => <h1>page not found</h1>}
            />
        </Switch>
    );
}
