import React from "react";
import { StyledOuterContainer, StyledNoMatch } from "./NoSearchMatchStyle";
const NoSearchMatch = () => {
	return (
		<StyledOuterContainer>
			<StyledNoMatch>NO EXACT MATCHES</StyledNoMatch>
		</StyledOuterContainer>
	);
};

export default NoSearchMatch;
