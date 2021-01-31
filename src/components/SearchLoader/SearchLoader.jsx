import React from "react";
import { StyledSearchLoader, StyledLoaderSpan } from "./StyledSearchLoader";

const SearchLoader = ({ text }) => {
	return (
		<>
			<StyledSearchLoader />
			<StyledLoaderSpan>{text}</StyledLoaderSpan>
		</>
	);
};

export default SearchLoader;
