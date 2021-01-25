import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
// import { IsFetchingContextProvider } from "./contexts/IsFetchingContext.js";

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
