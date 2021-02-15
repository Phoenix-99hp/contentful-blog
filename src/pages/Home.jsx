import React, { useReducer, useEffect } from "react";
import Layout from "../components/Layout/Layout.jsx";
import SecondaryPost from "../components/SecondaryPost/SecondaryPost.jsx";
import SecondaryContentArea from "../components/SecondaryContentArea/SecondaryContentArea.jsx";
import Loading from "./Loading.jsx";
import Post from "../components/Post/Post.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Error from "../components/Error/Error.jsx";

const Home = () => {
	const initialState = {
		allPosts: [],
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
					allPosts: action.payload.map(({ fields, sys }) => {
						return { fields: fields, id: sys.id };
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
		fetch(`/api/recent`, {
			method: "GET",
			mode: "same-origin",
		})
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				console.log(response.items);
				setTimeout(() => {
					dispatch({
						type: "FETCH_POSTS_SUCCESS",
						payload: response.items,
					});
				}, 1000);
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
				<Loading text={"LOADING..."} />
			) : !state.hasError ? (
				<Layout>
					<Hero>
						{state.allPosts[0] ? <Post posts={state.allPosts} /> : null}
					</Hero>
					<Hero display={state.allPosts[1] ? "flex" : "none"} bgColor={"black"}>
						<SecondaryContentArea>
							{state.allPosts[1]
								? state.allPosts.slice(1).map((post) => {
										return (
											<SecondaryPost
												title={post.fields.postTitle}
												text={post.fields.postText}
												key={post.id}
												id={post.id}
											/>
										);
								  })
								: null}
						</SecondaryContentArea>
					</Hero>
				</Layout>
			) : (
				<Error />
			)}
		</>
	);
};

export default Home;
