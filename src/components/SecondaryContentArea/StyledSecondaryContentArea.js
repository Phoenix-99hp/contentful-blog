import styled, { keyframes } from "styled-components";

// const fadeIn = keyframes`
//   from {
//     opacity: 0%;
//   }

//   to {
//     opacity: 100%;
//   }
// `;

export const StyledSecondaryContentArea = styled.div`
	display: flex;
	flex: 1 1 50%;
	// border: 3px solid #ea42dd;
	// border-radius: 3px;
	// padding: 20px;
	// background-color: white;
	// opacity: 0.95;

	@media screen and (max-width: 1140px) {
		flex: 1 1 100%;
	}

	@media screen and (max-width: 700px) {
		width: 100%;
		box-sizing: border-box;
	}
`;

export const StyledSectionTitle = styled.h2`
	font-size: 30px;
	// width: 100%;
	// text-align: left;
	padding-bottom: 20px;
	font-family: MontserratReg;
`;

export const StyledSecondarySection = styled.div`
	// border: 3px solid black;
	// flex: 1 1 50%;
	// border-right: 2px solid #ea42dd;
	// background-color: white;
	// align-self: flex-start;

	&:nth-of-type(1) {
		flex: 1 1 50%;

		@media screen and (max-width: 530px) {
			flex-wrap: wrap;
		}
	}

	&:nth-of-type(2) {
		align-items: center;
		//
		justify-content: center;
		display: flex;
		width: 100%;
		opacity: 0.95;
		height: 100%;
		// line-height: 128px;
	}
`;

export const StyledInputContainer = styled.div`
	display: flex;
	// min-height: 128px;
	width: 100%;
	align-items: flex-start;
	// padding-top: 20px;
	// align-content: center;
	// justify-content: center;
	flex: 1 1 50%;
	// align-self: flex-start;

	@media screen and (max-width: 1140px) {
		padding-top: 0;
		flex: 1 1 100%;
	}

	@media screen and (max-width: 530px) {
		padding-top: 70px;
	}

	@media screen and (max-width: 400px) {
		padding-top: 91px;
	}
`;

export const StyledContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	// flex: 1 1 50%;
	border: 3px solid #ea42dd;
	border-radius: 3px;
	padding: 20px;
	background-color: white;
	opacity: 0.95;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;

	@media screen and (max-width: 700px) {
		max-width: none;
		box-sizing: border-box;
	}

	// @media screen and (max-width: 530px) {

	// }
`;

export const StyledSecondaryContentOuter = styled.div`
	display: flex;
	// flex: 1 1 100%;
	flex-wrap: nowrap;
	// border: 5px solid green;
	box-sizing: border-box;
	max-width: 1500px;
	width: 100%;
	min-height: 416px;

	@media screen and (max-width: 1140px) {
		flex-wrap: wrap;
	}
`;
