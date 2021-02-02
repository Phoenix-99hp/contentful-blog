import styled from "styled-components";

export const StyledSecondaryPostContainer = styled.div`
	// border: 5px solid purple;
	// flex: 1 1 100%;
	background-color: white;
	width: 100%;
	// align-content: flex-start;
	display: inline-flex;
	align-items: center;
	overflow: hidden;
	opacity: 0.95;
	padding-bottom: 5px;
`;

export const StyledSecondaryPostTitle = styled.h4`
	font-size: 20px;
	color: #ea42dd;
	font-family: MontserratAltReg;
	// text-decoration: underline;
	// padding-top: 5px;
	// padding-bottom: 5px;
	padding: 2px;
	border 2px solid #ea42dd;
	cursor: pointer;
	
	width: fit-content;

	&:hover {
		background-color: #ea42dd;
		color: white;
	}
`;

export const StyledSecondaryPostText = styled.p`
	padding-left: 10px;
	font-size: 16px;
	font-family: MontserratAltLight;
`;
