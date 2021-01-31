import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import ContextProvider from "./context";
import CreateGlobalStyle from "./styles/global";
import history from "./services/history";
import theme from "./styles/theme";
import Routes from "./routes";

function App() {
    let newTheme = theme.default;
    return (
        <ThemeProvider theme={newTheme}>
            <ContextProvider>
                <Router history={history}>
                    <CreateGlobalStyle />
                    <Routes />
                </Router>
            </ContextProvider>
        </ThemeProvider>
    );
}

export default App;
