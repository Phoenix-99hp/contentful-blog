import React, { useEffect, useState } from "react";
import {
	StyledLoader,
	PageContainer,
	LoaderContainer,
	StyledLoaderSpan,
	FadeContainer,
} from "./LoaderStyle";

const Loader = ({ text }) => {
	// const [opacity, setOpacity] = useState("hide");

	// useEffect(() => {
	// 	setOpacity("show");
	// }, []);

	return (
		<PageContainer>
			{/* <LoaderContainer> */}
			<FadeContainer>
				<StyledLoader></StyledLoader>
				<StyledLoaderSpan>{text}</StyledLoaderSpan>
			</FadeContainer>
			{/* </LoaderContainer> */}
		</PageContainer>
	);
};

export default Loader;
