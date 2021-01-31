import React, { useState } from "react";

export const SearchContext = React.createContext();

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case "STORING_ID_TO_FEATURE":
// 			return {
// 				...state,
// 				isFetching: true,
// 			};
// 		case "FETCH_FEATURED_COMPLETE":
// 			return {
// 				...state,
// 				isFetching: false,
// 				featuredPost: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// const [state, dispatch] = useReducer(reducer, initialState);
// return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
// isFetching: isFetching,
// setIsFetching: (newStatus) => setIsFetching(newStatus),

export const SearchContextProvider = ({ children }) => {
	// const [isFetching, setIsFetching] = useState(false);

	const [search, setSearch] = useState({
		for: null,
	});

	return (
		<SearchContext.Provider
			value={{
				search: search,
				setSearch: (data) => setSearch(data),
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// };
// function App() {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
// return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
