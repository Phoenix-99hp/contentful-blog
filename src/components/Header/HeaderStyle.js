import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
	display: flex;
	flex: 0 1 180px;
	// flex-wrap: wrap;
	align-content: center;
	justify-content: space-evenly;
	background-color: #070707;
	width: 100%;
	// font-family: MontserratAltSemi;
`;

export const StyledMainHeading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	text-shadow: 3px 3px 3px #ea42dd;
	width: 100%;
	font-size: 60px;
	font-family: MontserratAltSemi;
`;

export const StyledHeadingInner = styled.h1`
	height: fit-content;
	border-bottom: 2px solid #ea42dd;
	padding-bottom: 5px;
	align-self: center;
	justify-self: center;
	opacity: 0.95;
`;

export const StyledSpacer = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
`;
