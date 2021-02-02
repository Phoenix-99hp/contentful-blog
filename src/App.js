import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Featured from "./pages/Featured.jsx";
import Search from "./pages/Search.jsx";
// import Loading from "./pages/Loading.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./theme/globalFonts.css";
// import { isFetchingContext } from "./contexts/IsFetchingContext";
// import { FeaturedContextProvider } from "./contexts/FeaturedContext";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route exact path={"/about"} component={About} />
				<Route exact path={"/featured"} component={Featured} />
				<Route exact path={"/search"} component={Search} />
			</Switch>
		</Router>
	);
};

export default App;
