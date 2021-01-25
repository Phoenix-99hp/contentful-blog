import React, { useEffect, useState } from "react";
import { PageContainer, MainContent } from "./LayoutStyle";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Grid from "../Grid/Grid.jsx";

const Layout = ({ children }) => {
	const [opacity, setOpacity] = useState("hide");

	useEffect(() => {
		setOpacity("show");
	}, []);

	return (
		<PageContainer opacity={opacity}>
			<Header />
			<MainContent>
				{children}
				{/* <Grid>{children}</Grid> */}
			</MainContent>
			<Footer />
		</PageContainer>
	);
};

export default Layout;
