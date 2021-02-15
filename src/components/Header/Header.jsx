import React from "react";
import {
	StyledHeaderContainer,
	StyledMainHeading,
	StyledSpacer,
	StyledHeadingInner,
} from "./HeaderStyle";
import Nav from "../Nav/Nav.jsx";

const Header = () => {
	return (
		<StyledHeaderContainer>
			<StyledSpacer></StyledSpacer>
			<StyledMainHeading>
				<StyledHeadingInner>Blog</StyledHeadingInner>
			</StyledMainHeading>
			<StyledSpacer>
				<Nav />
			</StyledSpacer>
		</StyledHeaderContainer>
	);
};

export default Header;
