import styled from "styled-components";

export const StyledOuterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	max-width: 586px;
	width: 100%;
	flex-direction: column;
	// width: fit-content;
	position: relative;
`;

export const StyledNoMatch = styled.h2`
	font-size: 25px;
	font-family: MontserratReg;
	padding: 5px;
	border: 3px solid red;
	color: red;
	height: fit-content;
	margin-bottom: 25px;
	border-radius: 5px;
`;
