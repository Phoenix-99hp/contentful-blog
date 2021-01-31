import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
// import { IsFetchingContextProvider } from "./contexts/IsFetchingContext.js";
import { FeaturedContextProvider } from "./contexts/FeaturedContext";
import { SearchContextProvider } from "./contexts/SearchContext";

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<GlobalStyle />
		<FeaturedContextProvider>
			<SearchContextProvider>
				<App />
			</SearchContextProvider>
		</FeaturedContextProvider>
	</ThemeProvider>,
	document.getElementById("root")
);
