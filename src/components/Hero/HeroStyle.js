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
	padding: 94px 30px;
	background-color: ${({ bgColor }) => bgColor};
	opacity: ${({ bgColor }) => (bgColor === "white" ? "0.95" : "1")};

	@media screen and (max-width: 400px) {
		padding: 60px 15px;
	}

	&:nth-of-type(1) {
		padding-bottom: 50px;

		// padding-top: 94px;
		// min-height: 300px;

		@media screen and (max-width: 1200px) {
			flex-wrap: wrap;
		}

		@media screen and (max-width: 700px) {
			padding-top: 94px;
			min-height: 300px;
		}

		@media screen and (max-width: 400px) {
			min-height: 230px;
		}
	}
	&:nth-of-type(2) {
		align-items: flex-start;

		@media screen and (max-width: 1140px) {
			flex-wrap: wrap;
			padding-top: 94px;
		}
	}
`;
