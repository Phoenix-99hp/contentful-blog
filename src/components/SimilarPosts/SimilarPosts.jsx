import React, { useContext } from "react";
import { StyledPostItem, StyledSimilarTitle } from "./SimilarPostsStyle";
import { useHistory } from "react-router-dom";
import { FeaturedContext } from "../../contexts/FeaturedContext";

const SimilarPosts = ({ posts }) => {
	console.log(posts);
	const { setFeaturedState } = useContext(FeaturedContext);
	const history = useHistory();

	const handlePostClick = (id) => {
		setFeaturedState({ featuredID: id });
		history.push("/featured");
	};

	return (
		<>
			<StyledSimilarTitle>SIMILAR</StyledSimilarTitle>
			{posts.map((post) => {
				console.log(post.sys.id);
				return (
					<StyledPostItem data-id={post.sys.id} key={post.sys.id}>
						<h3
							onClick={(e) =>
								handlePostClick(e.target.parentElement.dataset.id)
							}
						>
							{post.fields.postTitle}
						</h3>
					</StyledPostItem>
				);
			})}
		</>
	);
};

export default SimilarPosts;
