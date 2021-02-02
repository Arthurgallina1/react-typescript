import { useAuth } from "../../context/auth";
import useConsole from "../../hooks/useConsole";
import * as Styles from "./styles";
//import * as S or { Container } ...

function Dashboard() {
    const { user } = useAuth();

    useConsole(JSON.stringify(user));

    return <Styles.Container>dashboard</Styles.Container>;
}

export default Dashboard;
