import styled from "styled-components";
import "../../theme/globalFonts.css";

export const StyledPostItem = styled.div`
	display: flex;
	flex: 1 1 100%;
	justify-content: center;

	> h3 {
		font-size: 20px;
		font-family: MontserratAltReg;
		padding: 5px;
		// padding-top: 5px;
		// padding-bottom: 5px;
		// border-bottom: 2px solid #ea42dd;
		cursor: pointer;
		// color: #ea42dd;
		color: white;
		height: fit-content;
		width: fit-content;

		&:hover {
			background-color: #ea42dd;
		}
	}

	// > span {
	// 	display: flex;
	// 	align-items: center;
	// 	margin-right: 5px;
	// 	color: #ea42dd;
	// 	font-size: 20px;
	// 	font-family: MontserratAltReg;
	// 	padding-top: 5px;
	// 	padding-bottom: 5px;
	// 	font-size: 25px;
	// }
`;

export const StyledSimilarTitle = styled.h2`
	font-size: 25px;
	font-family: MontserratReg;
	padding: 5px;
	border: 3px solid #13d5f0;
	color: #13d5f0;
	height: fit-content;
	margin-bottom: 25px;
	border-radius: 5px;

	@media screen and (max-width: 1200px) {
		margin-top: 25px;
	}
`;
