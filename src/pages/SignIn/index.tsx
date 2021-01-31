import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import * as Styles from "./styles";
//import * as S or { Container } ...

function SignIn() {
    const { user, loading, signIn, signed } = useContext(AuthContext);

    function handleSignIn() {
        signIn();
    }
    return (
        <Styles.Container>
            <Styles.Button onClick={handleSignIn}>
                {signed ? "Signed " : "Nao signed"} Logar
            </Styles.Button>
            {user.name && <span>Welcome {user.name}</span>}
        </Styles.Container>
    );
}

export default SignIn;
