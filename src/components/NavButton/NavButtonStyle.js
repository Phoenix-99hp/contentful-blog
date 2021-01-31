import styled from "styled-components";

export const StyledNavButton = styled.button`
	border: none;
	outline: none;
	width: 100px;
	height: 40px;
	border: 3px solid #ea42dd;
	// color: black;
	color: #ea42dd;
	cursor: pointer;
	margin-left: 15px;
	border-radius: 5px;
	background-color: white;
	font-size: 16px;
	opacity: 0.85;
	font-family: MontserratAltReg;

	&:nth-of-type(1) {
		margin: 0 15px 0 0;
	}

	&:hover {
		opacity: 0.8;
		// background-color: #ea42dd;
	}
`;
