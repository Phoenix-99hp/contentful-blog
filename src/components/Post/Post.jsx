import React from "react";
import {
	StyledPostContainer,
	StyledPostTitle,
	StyledPostText,
	StyledPostOuterContainer,
	StyledNextButton,
	StyledPrevButton,
	StyledContinueButton,
} from "./PostStyle";

const Post = ({ title, text, id }) => {
	return (
		<StyledPostOuterContainer>
			<StyledPostTitle>{title}</StyledPostTitle>
			<StyledPostContainer data-id={id}>
				<StyledPostText>{text}</StyledPostText>
				{/* <StyledNextButton>{">"}</StyledNextButton>
				<StyledPrevButton>{"<"}</StyledPrevButton> */}
			</StyledPostContainer>
			<StyledContinueButton>Continue Reading</StyledContinueButton>
		</StyledPostOuterContainer>
	);
};

export default Post;
