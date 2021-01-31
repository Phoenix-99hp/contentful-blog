import React from "react";
import {
	StyledPostContainer,
	StyledPostTitle,
	StyledPostText,
	StyledPostOuterContainer,
	StyledNextButton,
	StyledPrevButton,
	StyledContinueButton,
} from "./MainPostStyle";

const MainPost = ({ post }) => {
	return (
		<StyledPostOuterContainer>
			<StyledPostTitle>{post.fields.postTitle}</StyledPostTitle>
			<StyledPostContainer>
				<StyledPostText>{post.fields.postText}</StyledPostText>
				<StyledNextButton onClick={handleNextClick}>{">"}</StyledNextButton>
				<StyledPrevButton onClick={handlePrevClick}>{"<"}</StyledPrevButton>
			</StyledPostContainer>
			<StyledContinueButton
				data-post-id={post.id}
				onClick={(e) => {
					handleContinueClick(e.target.dataset.postId);
				}}
			>
				Continue Reading
			</StyledContinueButton>
		</StyledPostOuterContainer>
	);
};

export default MainPost;
