import styled from "styled-components";

export const StyledSpacer = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	flex-wrap: wrap;
	align-content: flex-start;
	align-self: flex-start;

	@media screen and (max-width: 1200px) {
		width: 100%;
	}

	&:first-of-type {
		// @media screen and (max-width: 530px) {
		// 	display: none;
		// }

		@media screen and (max-width: 1200px) {
			display: none;
		}
	}

	&:nth-of-type(2) {
		// @media screen and (max-width: 530px) {
		// 	width: 100%;
		// }

		// @media screen and (max-width: 1200px) {
		// 	width: 100%;
		// }
		// @media screen and (max-width: 1200px) {
		// 	padding-top: 60px;
		// 	width: 100%;
		// }
	}
`;
