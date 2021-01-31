import React from "react";
import { ThemeProvider } from "styled-components";
import CreateGlobalStyle from "./styles/global";
import theme from "./styles/theme";
import SignIn from "./pages/SignIn";

function App() {
    let newTheme = theme.default;
    return (
        <ThemeProvider theme={newTheme}>
            <CreateGlobalStyle />
            <SignIn />
        </ThemeProvider>
    );
}

export default App;
