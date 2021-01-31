import React, { useEffect, useContext, useReducer } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { FeaturedContext } from "../contexts/FeaturedContext";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Error from "../components/Error/Error.jsx";
import Loading from "./Loading.jsx";

const Featured = () => {
	const { featuredState } = useContext(FeaturedContext);

	const initialState = {
		isFetching: false,
		hasError: false,
		featuredPost: {
			id: featuredState.featuredID,
		},
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_POST_REQUEST":
				return {
					...state,
					isFetching: true,
					hasError: false,
				};
			case "FETCH_POST_SUCCESS":
				return {
					...state,
					isFetching: false,
					hasError: false,
					featuredPost: {
						title: action.payload.fields.postTitle,
						text: action.payload.fields.postText,
					},
				};
			case "FETCH_POST_FAILURE":
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
			type: "FETCH_POST_REQUEST",
		});
		fetch(`http://localhost:8889/api/cful/id=${featuredState.featuredID}`, {
			method: "GET",
			mode: "cors",
		})
			.then((res) => {
				console.log("RES", res);
				return res.json();
			})
			.then((response) => {
				console.log(response);
				dispatch({
					type: "FETCH_POST_SUCCESS",
					payload: response,
				});
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: "FETCH_POST_FAILURE",
				});
			});
	}, []);

	return (
		<>
			{state.isFetching ? (
				<Loading text={"RETRIEVING POST..."} />
			) : !state.hasError ? (
				<Layout>
					<Hero>
						{state.featuredPost ? (
							<FeaturedPost
								title={state.featuredPost.title}
								text={state.featuredPost.text}
								id={state.featuredPost.id}
							/>
						) : null}
					</Hero>
				</Layout>
			) : (
				<Error />
			)}
		</>
	);
};

export default Featured;