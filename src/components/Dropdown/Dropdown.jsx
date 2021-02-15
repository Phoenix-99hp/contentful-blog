import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import {
	StyledDropdownIcon,
	StyledDropdownItem,
	StyledDropdownContainer,
	StyledItemsInnerContainer,
} from "./StyledDropdown";

const Dropdown = () => {
	const history = useHistory();

	const initialState = {
		isInitiated: false,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "INITIATE_DROPDOWN":
				return {
					...state,
					isInitiated: "initiate",
				};
			case "DEINITIATE_DROPDOWN":
				return {
					...state,
					isInitiated: "deInitiate",
				};
			case "TOGGLE_DROPDOWN":
				let toggle;
				if (state.isInitiated === "initiate" || !state.isInitiated) {
					toggle = "deInitiate";
				} else if (state.isInitiated === "deInitiate") {
					toggle = "initiate";
				}
				return {
					...state,
					isInitiated: toggle,
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StyledDropdownContainer
			onMouseLeave={() => {
				dispatch({
					type: "DEINITIATE_DROPDOWN",
				});
			}}
		>
			<StyledDropdownIcon
				onClick={() =>
					dispatch({
						type: "TOGGLE_DROPDOWN",
					})
				}
				onMouseOver={() =>
					dispatch({
						type: "INITIATE_DROPDOWN",
					})
				}
				ready={state.isInitiated}
			>
				Menu
			</StyledDropdownIcon>
			<StyledItemsInnerContainer ready={state.isInitiated}>
				<StyledDropdownItem onClick={() => history.push("/")}>
					Home
				</StyledDropdownItem>
				<StyledDropdownItem onClick={() => history.push("/about")}>
					About
				</StyledDropdownItem>
			</StyledItemsInnerContainer>
		</StyledDropdownContainer>
	);
};

export default Dropdown;
