import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import CreateGlobalStyle from "./styles/global";
import history from "./services/history";
import theme from "./styles/theme";
import Routes from "./routes";

function App() {
    let newTheme = theme.default;
    return (
        <ThemeProvider theme={newTheme}>
            <Router history={history}>
                <CreateGlobalStyle />
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
