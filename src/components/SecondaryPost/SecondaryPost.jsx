import React, { useContext } from "react";
import {
	StyledSecondaryPostContainer,
	StyledSecondaryPostTitle,
	StyledSecondaryPostText,
} from "./StyledSecondaryPost";
import { FeaturedContext } from "../../contexts/FeaturedContext";
import { useHistory } from "react-router-dom";

const SecondaryPost = ({ title, text, id }) => {
	const { setFeaturedState } = useContext(FeaturedContext);
	const history = useHistory();

	const handlePostClick = (id) => {
		setFeaturedState({ featuredID: id });
		history.push("/featured");
	};

	return (
		<StyledSecondaryPostContainer>
			<StyledSecondaryPostTitle
				data-id={id}
				onClick={(e) => handlePostClick(e.target.dataset.id)}
			>
				{title}
			</StyledSecondaryPostTitle>
			<StyledSecondaryPostText>{text}</StyledSecondaryPostText>
		</StyledSecondaryPostContainer>
	);
};

export default SecondaryPost;
