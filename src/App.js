import React, { useEffect, useContext } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Loading from "./pages/Loading.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { isFetchingContext } from "./contexts/IsFetchingContext";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route exact path={"/about"} component={About} />
			</Switch>
		</Router>
	);
};

export default App;
