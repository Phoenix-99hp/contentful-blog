import React, { useContext, useState } from "react";
import {
	StyledSearchInput,
	StyledInputLabel,
	StyledInputButton,
	StyledSearchResults,
	StyledSearchItemContainer,
	StyledErrorContainer,
} from "./StyledSearchInput";
import SearchLoader from "../SearchLoader/SearchLoader.jsx";
import { SearchContext } from "../../contexts/SearchContext";
import { useHistory } from "react-router-dom";

const SearchInput = ({ label, placeholder, buttonName }) => {
	// const [inputState, setInputState] = useState(null);
	// const initialState = {
	// 	search: null,
	// 	isFetching: false,
	// 	hasError: false,
	// 	exactMatch: null,
	// 	similar: null,
	// };
	// const reducer = (state, action) => {
	// 	switch (action.type) {
	// 		case "FETCH_SEARCH_REQUEST":
	// 			return {
	// 				...state,
	// 				isFetching: true,
	// 				hasError: false,
	// 			};
	// 		case "FETCH_SEARCH_SUCCESS":
	// 			return {
	// 				...state,
	// 				search: null,
	// 				isFetching: false,
	// 				hasError: false,
	// 				exactMatch: action.payload.exact,
	// 				similar: action.payload.similar,
	// 			};
	// 		case "FETCH_SEARCH_FAILURE":
	// 			return {
	// 				...state,
	// 				hasError: true,
	// 				isFetching: false,
	// 			};
	// 		default:
	// 			return state;
	// 	}
	// };

	// const [state, dispatch] = useReducer(reducer, initialState);
	const { setSearch } = useContext(SearchContext);
	const history = useHistory();

	const handleSubmitSearch = (e) => {
		setSearch({ for: e.target.previousElementSibling.value });
		history.push("/search");
		// 	const dashed = search.replace(/\s/g, "-");
		// 	const search = e.target.previouElementSibling.value;
		// 	e.preventDefault();
		// 	const dashed = search.replace(/\s/g, "-");
		// 	dispatch({
		// 		type: "FETCH_SEARCH_REQUEST",
		// 	});
		// 	fetch(`http://localhost:8889/api/cful/title=${dashed}`, {
		// 		method: "GET",
		// 		mode: "cors",
		// 	})
		// 		.then((res) => {
		// 			return res.json();
		// 		})
		// 		.then((response) => {
		// 			console.log(response);
		// 			dispatch({
		// 				type: "FETCH_SEARCH_SUCCESS",
		// 				payload: response,
		// 			});
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 			dispatch({
		// 				type: "FETCH_SEARCH_FAILURE",
		// 			});
		// 		});
	};

	return (
		<>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledSearchInput
				// onChange={(e) => setInputState(e.target.value)}
				type={"text"}
				placeholder={placeholder}
			/>
			<StyledInputButton onClick={(e) => handleSubmitSearch(e)}>
				{buttonName}
			</StyledInputButton>
			{/* <StyledSearchResults>
				{state.isFetching ? (
					<SearchLoader text={"SEARCHING..."} />
				) : state.exactMatch ? (
					<>
						<StyledSearchItemContainer>
							<h1>{state.exactMatch.fields.postTitle}</h1>
							<p>{state.exactMatch.fields.postText}</p>
						</StyledSearchItemContainer>
						{state.similar[0]
							? state.similar.map((post) => {
									return (
										<StyledSearchItemContainer key={post.sys.id}>
											<h3>{post.fields.postTitle}</h3>
										</StyledSearchItemContainer>
									);
							  })
							: null}
					</>
				) : (
					<StyledErrorContainer>An error occurred</StyledErrorContainer>
				)}
			</StyledSearchResults> */}
		</>
	);
};

export default SearchInput;
