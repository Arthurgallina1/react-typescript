import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";

export default function Routes() {
    return (
        <Switch>
            <Route path='/login' exact component={SignIn} />
            <Route path='/' component={() => <h1>page not found</h1>} />
        </Switch>
    );
}