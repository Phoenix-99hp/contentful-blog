import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
	display: flex;
	height: fit-content;
	// flex: 0 1 180px;
	flex: 0 1 auto;
	// flex: 0 1 416xp
	// flex-wrap: wrap;
	align-content: center;
	justify-content: space-evenly;
	background-color: #070707;
	width: 100%;
	box-sizing: border-box;
	padding: 60px 30px 0;
	// margin-bottom
	// font-family: MontserratAltSemi;
	@media screen and (max-width: 530px) {
		flex-wrap: wrap;
	}
`;

export const StyledMainHeading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	text-shadow: 3px 3px 3px #ea42dd;
	max-width: 586px;
	width: 100%;
	font-size: 65px;
	font-family: MontserratAltSemi;

	@media screen and (max-width: 530px) {
		flex: 1 1 100%;
	}
`;

export const StyledHeadingInner = styled.h1`
	height: fit-content;
	border-bottom: 3px solid #ea42dd;
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
