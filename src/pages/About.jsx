import React, { useEffect, useReducer } from "react";
import Layout from "../components/Layout/Layout.jsx";
import Loading from "./Loading.jsx";
import Error from "../components/Error/Error.jsx";
import AboutSection from "../components/AboutSection/AboutSection.jsx";
import Hero from "../components/Hero/Hero.jsx";

const About = () => {
	const initialState = {
		loading: true,
		hasError: false,
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "LOAD_PAGE":
				return {
					...state,
					loading: true,
					hasError: false,
				};
			case "DONE_LOADING":
				return {
					...state,
					loading: false,
					hasError: false,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		setTimeout(() => {
			dispatch({
				type: "DONE_LOADING",
			});
		}, 1000);
	}, []);

	return (
		<>
			{state.loading ? (
				<Loading text={"LOADING..."} />
			) : !state.hasError ? (
				<Layout>
					<Hero>
						<AboutSection />
					</Hero>
				</Layout>
			) : (
				<Error />
			)}
		</>
	);
};

export default About;
