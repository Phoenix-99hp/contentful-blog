import React from "react";
import {
	StyledSecondaryPostContainer,
	StyledSecondaryPostTitle,
	StyledSecondaryPostText,
} from "./StyledSecondaryPost";

const SecondaryPost = ({ title, text, id }) => {
	return (
		<StyledSecondaryPostContainer data-id={id}>
			<StyledSecondaryPostTitle>{title}</StyledSecondaryPostTitle>
			<StyledSecondaryPostText>{text}</StyledSecondaryPostText>
		</StyledSecondaryPostContainer>
	);
};

export default SecondaryPost;
