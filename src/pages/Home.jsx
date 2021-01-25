import React, { useReducer, useEffect } from "react";
import Layout from "../components/Layout/Layout.jsx";
import BlogContentArea from "../components/BlogContentArea/BlogContentArea.jsx";
import SecondaryPost from "../components/SecondaryPost/SecondaryPost.jsx";
import SecondaryContentArea from "../components/SecondaryContentArea/SecondaryContentArea.jsx";
import Loading from "./Loading.jsx";
import Post from "../components/Post/Post.jsx";
import Hero from "../components/Hero/Hero.jsx";

const Home = () => {
	const initialState = {
		featuredPost: {},
		secondaryPosts: [],
		isFetching: false,
		hasError: false,
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_POSTS_REQUEST":
				return {
					...state,
					isFetching: true,
					hasError: false,
				};
			case "FETCH_POSTS_SUCCESS":
				return {
					...state,
					isFetching: false,
					hasError: false,
					featuredPost: {
						title: action.payload[0].fields.postTitle,
						text: action.payload[0].fields.postText,
						id: action.payload[0].sys.id,
					},
					secondaryPosts: action.payload.splice(1, 1).map(({ fields, sys }) => {
						return {
							title: fields.postTitle,
							text: fields.postText,
							id: sys.id,
						};
					}),
				};
			case "FETCH_POSTS_FAILURE":
				return {
					...state,
					hasError: true,
					isFetching: false,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "FETCH_POSTS_REQUEST",
		});
		fetch(`http://localhost:8889/api/cful/all`, {
			method: "GET",
			mode: "cors",
		})
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				console.log(response);
				dispatch({
					type: "FETCH_POSTS_SUCCESS",
					payload: response.items,
				});
				console.log(state.secondaryPosts);
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: "FETCH_POSTS_FAILURE",
				});
			});
	}, []);

	return (
		<>
			{state.isFetching ? (
				<Loading />
			) : (
				<Layout>
					<Hero>
						{state.featuredPost ? (
							<Post
								title={state.featuredPost.title}
								text={state.featuredPost.text}
								id={state.featuredPost.id}
							/>
						) : null}
					</Hero>
					<Hero>
						<SecondaryContentArea>
							{state.secondaryPosts[0]
								? state.secondaryPosts.map(({ title, text, id }) => {
										return <SecondaryPost title={title} text={text} id={id} />;
								  })
								: null}
						</SecondaryContentArea>
					</Hero>
				</Layout>
			)}
		</>
	);
};

export default Home;
