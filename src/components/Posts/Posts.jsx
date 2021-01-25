import React, { useEffect, useState, useContext } from "react";
import Post from "../Post/Post.jsx";
import { StyledPostsContainer, StyledPageHeading } from "./PostsStyle";

const Posts = () => {
	const [featuredPost, setFeaturedPost] = useState([]);
	const [secondaryPostsToDisplay, setSecondaryPostsToDisplay] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:8889/api/cful/all`, {
			method: "GET",
			mode: "cors",
		})
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				console.log(response);
				setFeaturedPost({
					title: response.items[0].fields.postTitle,
					text: response.items[0].fields.postText,
					id: response.items[0].sys.id,
				});
				setSecondaryPostsToDisplay(
					response.items
						.map(({ fields, sys }) => {
							return {
								title: fields.postTitle,
								text: fields.postText,
								id: sys.id,
							};
						})
						.splice(0, 1)
				);
			})
			.catch((error) => {
				console.log("CATCH", error);
			});
	}, []);

	return (
		// <StyledPostsContainer>
		<>
			{featuredPost ? (
				<Post
					title={featuredPost.title}
					text={featuredPost.text}
					id={featuredPost.id}
				/>
			) : null}
		</>
	);
};

export default Posts;
