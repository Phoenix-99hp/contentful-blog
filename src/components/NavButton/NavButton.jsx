import React from "react";
import { useHistory } from "react-router-dom";
import { StyledNavButton } from "./NavButtonStyle";

const NavButton = ({ to, children }) => {
	const history = useHistory();

	const navigate = () => {
		history.push(to);
	};

	return <StyledNavButton onClick={navigate}>{children}</StyledNavButton>;
};

export default NavButton;
