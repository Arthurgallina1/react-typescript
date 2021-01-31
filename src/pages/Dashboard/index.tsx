import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import * as Styles from "./styles";
//import * as S or { Container } ...

function Dashboard() {
    const { user, loading, signIn, signed } = useContext(AuthContext);

    return <Styles.Container>dashboard</Styles.Container>;
}

export default Dashboard;
