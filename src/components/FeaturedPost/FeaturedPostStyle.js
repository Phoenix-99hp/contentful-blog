import styled from "styled-components";

export const StyledPostContainer = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	text-align: center;
	min-height: 300px;
	// min-height: 300px;
	border-radius: 3px;
	// justify-content: center;
	width: 550px;
	background-color: white;
	// flex: 1 1 100%;
	padding: 15px;
	// position: relative;
	border: 3px solid #13d5f0;
	opacity: 0.95;
	word-break: break-word;
	// overflow: hidden;
	box-sizing: border-box;

	@media screen and (max-width: 1200px) {
		flex: 1 1 100%;
	}

	@media screen and (max-width: 700px) {
		width: 300px;
		min-height: 300px;
		height: 300px;
	}

	@media screen and (max-width: 400px) {
		width: 200px;
		min-height: 230px;
		height: 230px;
	}
`;

export const StyledPostTitle = styled.h3`
	font-size: 30px;
	padding-bottom: 5px;
	// border-bottom: 2px solid #12d0ee;
	width: fit-content;
	height: fit-content;
	margin: 0 auto;
	font-family: MontserratAltReg;
	color: white;
    text-shadow: 2px 2px 2px #ea42dd;
    background-color: #ea42dd;
    padding: 25px;
    width: 100%;
    max-width: 400px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
	box-sizing: border-box;
	white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	@media screen and (max-width: 700px) {
		// box-sizing: border-box;
		width: 240px;
	}

	@media screen and (max-width: 400px) {
		width: 160px;
		padding: 15px;
		// white-space: nowrap;
		// overflow: hidden;
		// text-overflow: ellipsis;
	}
};
`;

export const StyledPostText = styled.p`
	// padding-top: 20px;
	font-size: 18px;
	text-align: left;
	font-family: MontserratAltLight;
`;

export const StyledPostOuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;
	width: fit-content;
	position: relative;

	flex-wrap: wrap;
`;

export const StyledExactMatch = styled.h2`
	font-size: 25px;
	font-family: MontserratReg;
	padding: 5px;
	border: 3px solid #4df716;
	color: #4df716;
	height: fit-content;
	margin-bottom: 25px;
	border-radius: 5px;
	// position: absolute;
	// right: 0;
	// z-index: 9;
`;
