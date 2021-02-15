import React from "react";
import { StyledNavContainer, StyledNavList } from "./NavStyle";
import NavButton from "../NavButton/NavButton.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";

const Nav = () => {
	return (
		<StyledNavContainer>
			<Dropdown />
			<StyledNavList>
				<NavButton to="/">Home</NavButton>
				<NavButton to="/about">About</NavButton>
			</StyledNavList>
		</StyledNavContainer>
	);
};

export default Nav;
