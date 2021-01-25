import React from "react";
import { StyledLoader, PageContainer } from "./LoaderStyle";

const Loader = ({ text }) => {
	return (
		<PageContainer>
			<StyledLoader></StyledLoader>
			<span>{text}</span>
		</PageContainer>
	);
};

export default Loader;
