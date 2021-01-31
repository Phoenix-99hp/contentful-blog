import React from "react";
import {
	StyledPostContainer,
	StyledPostTitle,
	StyledPostText,
	StyledPostOuterContainer,
	StyledExactMatch,
} from "./FeaturedPostStyle";

const FeaturedPost = ({ title, text, id, exactSearch }) => {
	return (
		<StyledPostOuterContainer>
			{exactSearch ? <StyledExactMatch>EXACT MATCH</StyledExactMatch> : null}
			<StyledPostTitle>{title}</StyledPostTitle>
			<StyledPostContainer data-id={id}>
				<StyledPostText>{text}</StyledPostText>
			</StyledPostContainer>
		</StyledPostOuterContainer>
	);
};

export default FeaturedPost;
