import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import * as Styles from "./styles";
//import * as S or { Container } ...

function SignIn() {
    const { signed, setSigned } = useContext(AuthContext);
    return (
        <Styles.Container>
            <Styles.Button onClick={() => setSigned(!signed)}>
                {signed ? "ola0r " : "tchau"}Olar
            </Styles.Button>
        </Styles.Container>
    );
}

export default SignIn;
