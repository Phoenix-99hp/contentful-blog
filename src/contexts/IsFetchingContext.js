import React, { useState, useReducer } from "react";

export const IsFetchingContext = React.createContext();

const initialState = {
	isFetchingData: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCHING":
			return {
				...state,
				isFetchingData: true,
			};
		case "FETCH COMPLETE":
			return {
				...state,
				isFetchingData: false,
			};
		default:
			return state;
	}
};

const [state, dispatch] = useReducer(reducer, initialState);
// return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
// isFetching: isFetching,
// setIsFetching: (newStatus) => setIsFetching(newStatus),

export const IsFetchingContextProvider = ({ children }) => {
	// const [isFetching, setIsFetching] = useState(false);

	return (
		<IsFetchingContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</IsFetchingContext.Provider>
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
