// import React, { Component } from "react";

import React, { useReducer } from "react";
import {
	StyledPostTitle,
	StyledPostText,
	StyledPostOuterContainer,
} from "./PostItemStyle";

const PostItem = ({ shouldUpdate, allPosts, i }) => {
	console.log(allPosts);
	const state = {
		posts: allPosts,
		// post: post,
		shouldUpdate: shouldUpdate,
		carouselData: {
			featuredPost:
				allPosts[
					shouldUpdate.indexToUpdateTo ? shouldUpdate.indexToUpdateTo : 0
				],
			featuredIndex: shouldUpdate.indexToUpdateTo,
			formerIndex: shouldUpdate.formerIndex,
			direction: shouldUpdate.directionToUpdateTo,
		},
	};

	// const reducer = (state, action) => {
	// 	switch (action.type) {
	// 		case "CAROUSEL_SLIDE_RIGHT":
	// 			return {
	// 				...state,
	// 				carouselData: action.payload,
	// 				hasError: false,
	// 			};
	// 		case "CAROUSEL_SLIDE_LEFT":
	// 			return {
	// 				...state,
	// 				carouselData: action.payload,
	// 				hasError: false,
	// 			};
	// 		default:
	// 			return state;
	// 	}
	// };

	// const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StyledPostOuterContainer
			showHide={
				state.carouselData.featuredIndex === i
					? "showFeatured"
					: state.carouselData.formerIndex === i &&
					  state.shouldUpdate.inProgress
					? "hideFormer"
					: "hide"
			}
			stack={
				i !== state.carouselData.featuredIndex && !state.shouldUpdate.inProgress
					? "stack"
					: i === state.carouselData.formerIndex &&
					  !state.shouldUpdate.inProgress
					? "stack"
					: !state.shouldUpdate.inProgress &&
					  (i < state.carouselData.featuredIndex ||
							i > state.carouselData.featuredIndex)
					? "stack"
					: "noStack"
			}
			direction={state.carouselData.direction}
		>
			<StyledPostTitle>{state.posts[i].fields.postTitle}</StyledPostTitle>
			<StyledPostText>{state.posts[i].fields.postText}</StyledPostText>
		</StyledPostOuterContainer>
	);
};

export default React.memo(PostItem);
