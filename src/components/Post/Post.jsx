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
		carouselData: {
			featuredPost: posts[0],
			featuredIndex: 0,
			formerIndex: null,
			direction: null,
		},
		disableButtons: false,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "CAROUSEL_SLIDE_RIGHT":
				return {
					...state,
					carouselData: action.payload,
					// hasError: false,
				};
			case "CAROUSEL_SLIDE_LEFT":
				return {
					...state,
					carouselData: action.payload,
					// hasError: false,
				};
			case "CLEAR_CAROUSEL_DATA":
				return {
					...state,
					carouselData: {
						...state.carouselData,
						direction: null,
					},
				};
			case "DISABLE_BUTTONS":
				return {
					...state,
					disableButtons: true,
				};
			case "ENABLE_BUTTONS":
				return {
					...state,
					disableButtons: false,
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

	const handleAnimationEnd = () => {
		dispatch({
			type: "ENABLE_BUTTONS",
		});
	};

	const handleAnimationStart = () => {
		dispatch({
			type: "DISABLE_BUTTONS",
		});
	};

	return (
		<>
			<StyledRelativeContainer>
				{!state.hasError && posts[0]
					? posts.map((post, i) => {
							return (
								<StyledPostOuterContainer
									onAnimationStart={handleAnimationStart}
									onAnimationEnd={handleAnimationEnd}
									showHide={
										state.carouselData.featuredIndex === i
											? "showFeatured"
											: state.carouselData.formerIndex === i
											? "hideFormer"
											: "hide"
									}
									direction={state.carouselData.direction}
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
				<StyledNextButton
					disabled={state.disableButtons}
					onClick={handleNextClick}
				>
					{">"}
				</StyledNextButton>
				<StyledPrevButton
					disabled={state.disableButtons}
					onClick={handlePrevClick}
				>
					{"<"}
				</StyledPrevButton>
				<StyledContinueButton
					onClick={() => {
						handleContinueClick(state.carouselData.featuredPost.id);
					}}
				>
					Read Full
				</StyledContinueButton>
			</StyledPostButtonsContainer>
		</>
	);
};

export default Post;
