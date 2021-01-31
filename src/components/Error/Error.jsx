import React, { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {
	StyledErrorContainer,
	StyledErrorMessage,
	PageContainer,
	MainArea,
} from "./ErrorStyle";

const Error = () => {
	const [opacity, setOpacity] = useState("hide");

	useEffect(() => {
		setOpacity("show");
	}, []);

	return (
		<PageContainer opacity={opacity}>
			<Header />
			<MainArea>
				<StyledErrorContainer>
					<StyledErrorMessage>Something went wrong.</StyledErrorMessage>
				</StyledErrorContainer>
			</MainArea>
			<Footer />
		</PageContainer>
	);
};

export default Error;
