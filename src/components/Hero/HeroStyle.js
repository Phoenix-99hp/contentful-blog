import styled from "styled-components";

export const StyledHero = styled.div`
	display: flex;
	justify-content: center;
	// align-items: center;
	//
	min-height: 416px;
	//
	align-items: center;
	//
	height: 100%;
	width: 100%;
	position: relative;
	padding: 60px 30px;
	background-color: ${({ bgColor }) => bgColor};
	opacity: ${({ bgColor }) => (bgColor === "white" ? "0.95" : "1")};
	// margin-bottom: 30px;
	// margin-top: 30px;

	&:nth-of-type(1) {
		padding-bottom: 50px;
	}
	&:nth-of-type(2) {
		align-items: flex-start;
	}
`;
