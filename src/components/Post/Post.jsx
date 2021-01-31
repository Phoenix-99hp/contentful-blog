import React, { useContext, useReducer } from "react";
import {
	StyledPostTitle,
	StyledPostText,
	StyledPostOuterContainer,
	StyledNextButton,
	StyledPrevButton,
	StyledContinueButton,
	StyledPostButtonsContainer,
	StyledRelativeContainer,
} from "./PostStyle";
import { FeaturedContext } from "../../contexts/FeaturedContext";
import { useHistory } from "react-router-dom";

const Post = ({ posts }) => {
	const { setFeaturedState } = useContext(FeaturedContext);
	const history = useHistory();

	const handleContinueClick = (id) => {
		setFeaturedState({ featuredID: id });
		history.push("/featured");
	};

	const initialState = {
		posts: posts,
		hasError: false,
		carouselData: {
			featuredPost: posts[0],
			featuredIndex: 0,
			formerIndex: null,
			direction: null,
		},
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "CAROUSEL_SLIDE_RIGHT":
				return {
					...state,
					carouselData: action.payload,
					hasError: false,
				};
			case "CAROUSEL_SLIDE_LEFT":
				return {
					...state,
					carouselData: action.payload,
					hasError: false,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const handleNextClick = () => {
		const formerIndex = state.carouselData.featuredIndex;
		let newIndex;

		if (formerIndex === 0) {
			newIndex = state.posts.length - 1;
		} else {
			newIndex = formerIndex - 1;
		}
		dispatch({
			type: "CAROUSEL_SLIDE_RIGHT",
			payload: {
				featuredPost: posts[newIndex],
				featuredIndex: newIndex,
				formerIndex: formerIndex,
				direction: "right",
			},
		});
	};

	const handlePrevClick = () => {
		const formerIndex = state.carouselData.featuredIndex;
		let newIndex;

		if (formerIndex === state.posts.length - 1) {
			newIndex = 0;
		} else {
			newIndex = formerIndex + 1;
		}
		dispatch({
			type: "CAROUSEL_SLIDE_LEFT",
			payload: {
				featuredPost: posts[newIndex],
				featuredIndex: newIndex,
				formerIndex: formerIndex,
				direction: "left",
			},
		});
	};

	return (
		<>
			<StyledRelativeContainer>
				{!state.hasError && posts[0]
					? posts.map((post, i) => {
							return (
								<StyledPostOuterContainer
									showHide={
										state.carouselData.featuredIndex === i
											? "showFeatured"
											: state.carouselData.formerIndex === i
											? "hideFormer"
											: "hide"
									}
									direction={state.carouselData.direction}
									data-post-id={post.id}
									key={post.id}
								>
									<StyledPostTitle>{post.fields.postTitle}</StyledPostTitle>
									<StyledPostText>{post.fields.postText}</StyledPostText>
								</StyledPostOuterContainer>
							);
					  })
					: null}
			</StyledRelativeContainer>
			<StyledPostButtonsContainer>
				<StyledNextButton onClick={handleNextClick}>{">"}</StyledNextButton>
				<StyledPrevButton onClick={handlePrevClick}>{"<"}</StyledPrevButton>
				<StyledContinueButton
					onClick={(e) => {
						handleContinueClick(state.carouselData.featuredPost.id);
					}}
				>
					Continue Reading
				</StyledContinueButton>
			</StyledPostButtonsContainer>
		</>
	);
};

export default Post;

// stack={
// 	i !== state.carouselData.featuredIndex &&
// 	!state.carouselData.inProgress
// 		? "stack"
// 		: i === state.carouselData.formerIndex &&
// 		  !state.carouselData.inProgress
// 		? "stack"
// 		: !state.carouselData.inProgress &&
// 		  (i < state.carouselData.featuredIndex ||
// 				i > state.carouselData.featuredIndex)
// 		? "stack"
// 		: "noStack"
// }
