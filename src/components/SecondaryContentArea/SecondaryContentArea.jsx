import React from "react";
import {
	StyledSecondaryContentArea,
	StyledSectionTitle,
} from "./StyledSecondaryContentArea";

const SecondaryContentArea = ({ children }) => {
	return (
		<StyledSecondaryContentArea>
			<StyledSectionTitle>More Posts</StyledSectionTitle>
			{children}
		</StyledSecondaryContentArea>
	);
};

export default SecondaryContentArea;
