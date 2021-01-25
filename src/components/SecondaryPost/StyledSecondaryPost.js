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
`;

export const StyledSecondaryPostTitle = styled.h4`
	font-size: 25px;
	color: #ea42dd;
	font-family: MontserratAltReg;
	// text-decoration: underline;
	padding-top: 5px;
	padding-bottom: 5px;
	border-bottom: 2px solid #ea42dd;
	cursor: pointer;
`;

export const StyledSecondaryPostText = styled.p`
	padding-left: 10px;
	font-size: 18px;
	font-family: MontserratAltLight;
`;
