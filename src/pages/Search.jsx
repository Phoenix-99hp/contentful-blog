import React, { useEffect, useContext, useReducer } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { SearchContext } from "../contexts/SearchContext";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Error from "../components/Error/Error.jsx";
import Loading from "./Loading.jsx";
import SimilarPosts from "../components/SimilarPosts/SimilarPosts.jsx";
import Spacer from "../components/Spacer/Spacer.jsx";
import NoSearchMatch from "../components/NoSearchMatch/NoSearchMatch.jsx";

const Search = () => {
	const { search } = useContext(SearchContext);
	const prepared = search.for.trim().toLowerCase();

	const initialState = {
		exactMatch: null,
		similar: [],
		isFetching: false,
		hasError: false,
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SEARCH_REQUEST":
				return {
					...state,
					isFetching: true,
					hasError: false,
				};
			case "FETCH_SEARCH_SUCCESS":
				return {
					...state,
					isFetching: false,
					hasError: false,
					exactMatch: action.payload.exactMatch,
					similar: action.payload.similar,
				};
			case "FETCH_SEARCH_FAILURE":
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
			type: "FETCH_SEARCH_REQUEST",
		});
		console.log("INITIATING SEARCH", prepared);
		fetch(`/api/search/${prepared}`, {
			method: "GET",
			mode: "same-origin",
		})
			.then((res) => {
				console.log("RES", res);
				return res.json();
			})
			.then((response) => {
				console.log(response, "RESPONSE");
				setTimeout(() => {
					dispatch({
						type: "FETCH_SEARCH_SUCCESS",
						payload: response,
					});
				}, 1000);
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: "FETCH_SEARCH_FAILURE",
				});
			});
	}, []);

	return (
		<>
			{state.isFetching ? (
				<Loading text={"SEARCHING..."} />
			) : !state.hasError ? (
				<Layout>
					<Hero>
						<Spacer />
						{state.exactMatch ? (
							<FeaturedPost
								title={state.exactMatch.fields.postTitle}
								text={state.exactMatch.fields.postText}
								id={state.exactMatch.sys.id}
								exactSearch={true}
							/>
						) : (
							<NoSearchMatch />
						)}
						<Spacer>
							{state.similar[0] ? <SimilarPosts posts={state.similar} /> : null}
						</Spacer>
					</Hero>
				</Layout>
			) : (
				<Error />
			)}
		</>
	);
};

export default Search;
