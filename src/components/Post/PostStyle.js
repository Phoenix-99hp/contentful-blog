import styled, { keyframes, css } from "styled-components";
import "../../theme/globalFonts.css";

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }

  to {
   opacity: 100%;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 100%;
  }

  to {
   opacity: 0%;
  }
`;

const slideLeftNew = keyframes`

0% {
    left: 610px;
}

100% {
    left: 0;
}`;

const slideRightNew = keyframes`
0% {
    right: 610px;
}

100% {
    right: 0;
}`;

const slideLeftOld = keyframes`

0% {
    left: 0;
}

100% {
    left: -610px;
}`;

const slideRightOld = keyframes`
0% {
    right: 0;
}

100% {
    right: -610px;
}`;

const slideLeftNewBp = keyframes`

0% {
    left: 320px;
}

100% {
    left: 0;
}`;

const slideRightNewBp = keyframes`
0% {
    right: 320px;
}

100% {
    right: 0;
}`;

const slideLeftOldBp = keyframes`

0% {
    left: 0;
}

100% {
    left: -320px;
}`;

const slideRightOldBp = keyframes`
0% {
    right: 0;
}

100% {
    right: -320px;
}`;

const slideLeftNewBpTwo = keyframes`

0% {
    left: 220px;
}

100% {
    left: 0;
}`;

const slideRightNewBpTwo = keyframes`
0% {
    right: 220px;
}

100% {
    right: 0;
}`;

const slideLeftOldBpTwo = keyframes`

0% {
    left: 0;
}

100% {
    left: -220px;
}`;

const slideRightOldBpTwo = keyframes`
0% {
    right: 0;
}

100% {
    right: -220px;
}`;

export const StyledPostTitle = styled.h3`
	font-size: 30px;
	padding-bottom: 5px;
	// border-bottom: 2px solid #12d0ee;
	// width: fit-content;
	height: fit-content;
	margin: 0 auto;
	font-family: MontserratAltReg;
	color: white;
    text-shadow: 2px 2px 2px #ea42dd;
    background-color: #ea42dd;
    padding: 25px;
    // width: 100%;
    // max-width: 400px;
    width: 400px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    position: absolute;
    top: 0;
    left: 50%;
	transform: translateX(-50%);
	margin: 0 auto;
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
		// font-size: 25px;
		
	}
};
`;

export const StyledPostText = styled.p`
	font-size: 18px;
	text-align: left;
	font-family: MontserratAltLight;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 336px;
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	border: 3px solid #13d5f0;
	padding: 15px;
	bottom: 0;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;

	// border: 15px solid transparent;
	text-overflow: ellipsis;
	// border: 3px solid #13d5f0;
	background-color: white;

	@media screen and (max-width: 700px) {
		width: 300px;
		height: 220px;
	}

	@media screen and (max-width: 400px) {
		width: 200px;
		height: 170px;
	}
`;

// export const StyledTextContainer = styled.p`
// 	font-size: 18px;
// 	text-align: left;
// 	font-family: MontserratAltLight;
// 	height: 336px;
// 	width: 100%;
// 	position: absolute;
// 	box-sizing: border-box;
// 	margin: 15px;
// 	bottom: 0;
// 	border: 3px solid #13d5f0;
// 	background-color: white;

// 	@media screen and (max-width: 530px) {
// 		width: 300px;
// 	}

// 	@media screen and (max-width: 400px) {
// 		width: 200px;
// 	}
// `;

export const StyledPostOuterContainer = styled.div`
	display: ${({ showHide, stack }) =>
		stack === "stack" || showHide === "hide" ? "none" : "flex"};

	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "right" &&
		css`
			animation: ${slideRightNew} 1s linear, ${fadeIn} 1s linear;
			z-index: 9;

			@media screen and (max-width: 700px) {
				animation: ${slideRightNewBp} 1s linear, ${fadeIn} 1s linear;
			}

			@media screen and (max-width: 400px) {
				animation: ${slideRightNewBpTwo} 1s linear, ${fadeIn} 1s linear;
			}
		`}
	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "left" &&
		css`
			animation: ${slideLeftNew} 1s linear, ${fadeIn} 1s linear;
			z-index: 9;

			@media screen and (max-width: 700px) {
				animation: ${slideLeftNewBp} 1s linear, ${fadeIn} 1s linear;
			}

			@media screen and (max-width: 400px) {
				animation: ${slideLeftNewBpTwo} 1s linear, ${fadeIn} 1s linear;
			}
		`}

	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "right" &&
		css`
			animation: ${slideRightOld} 1s linear, ${fadeOut} 1s linear;

			@media screen and (max-width: 700px) {
				animation: ${slideRightOldBp} 1s linear, ${fadeOut} 1s linear;
			}

			@media screen and (max-width: 400px) {
				animation: ${slideRightOldBpTwo} 1s linear, ${fadeOut} 1s linear;
			}
		`}
	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "left" &&
		css`
			animation: ${slideLeftOld} 1s linear, ${fadeOut} 1s linear;

			@media screen and (max-width: 700px) {
				animation: ${slideLeftOldBp} 1s linear, ${fadeOut} 1s linear;
			}

			@media screen and (max-width: 400px) {
				animation: ${slideLeftOldBpTwo} 1s linear, ${fadeOut} 1s linear;
			}
		`}
    
	justify-content: center;
	box-sizing: border-box;
	flex-direction: column;
	// width: 100%;
	width: 586px;
	height: 100%;
	// border: 2px solid white;
	position: absolute;
	// padding: 15px;
	word-break: break-word;

	// width: 300px;

	@media screen and (max-width: 700px) {
		width: 300px;
	}

	@media screen and (max-width: 400px) {
		width: 200px;
	}
`;

export const StyledNextButton = styled.button`
	position: absolute;
	// background-color: blue;
	color: #13d5f0;
	outline: none;
	right: -40px;
	top: 50%;
	transform: translateY(-50%);
	border: 2px solid #13d5f0;
	height: 30px;
	width: 30px;
	font-size: 20px;
	cursor: pointer;
	border-radius: 3px;
	opacity: 0.85;
	background-color: white;

	// &:hover {
	// 	opacity: 0.8;
	// }

	&:hover {
		background-color: #13d5f0;
		color: white;
	}

	@media screen and (max-width: 300px) {
		z-index: 9;
		right: -20px;
	}
`;

export const StyledPrevButton = styled.button`
	position: absolute;
	// background-color: blue;
	color: #13d5f0;
	outline: none;
	left: -40px;
	top: 50%;
	transform: translateY(-50%);
	border: 2px solid #13d5f0;
	height: 30px;
	width: 30px;
	font-size: 20px;
	cursor: pointer;
	border-radius: 3px;
	opacity: 0.85;
	background-color: white;

	// &:hover {
	// 	opacity: 0.8;
	// }

	&:hover {
		background-color: #13d5f0;
		color: white;
	}

	@media screen and (max-width: 300px) {
		z-index: 9;
		left: -20px;
	}
`;

export const StyledContinueButton = styled.button`
	position: absolute;
	color: #13d5f0;
	outline: none;
	bottom: -50px;
	// left: 50%;
	// -webkit-transform: translateX(-50%);
	// -ms-transform: translateX(-50%);
	// transform: translateX(-50%);
	border: 3px solid #13d5f0;
	height: 40px;
	width: fit-content;
	font-size: 16px;
	cursor: pointer;
	border-radius: 3px;
	background-color: white;
	font-family: MontserratAltReg;
	margin-top: 8px;
	padding: 1px 6px;
	opacity: 0.85;
	z-index: 9;

	&:hover {
		background-color: #13d5f0;
		color: white;
	}
`;

export const StyledPostButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 416px;
	width: 586px;
	flex-direction: column;
	// width: fit-content;
	position: absolute;
	// border: 3px solid #13d5f0;

	@media screen and (max-width: 700px) {
		width: 300px;
		height: 300px;
	}

	@media screen and (max-width: 400px) {
		width: 200px;
		height: 230px;
	}
`;

export const StyledRelativeContainer = styled.div`
	justify-content: center;
	position: relative;
	width: 586px;
	// overflow-x: hide;
	// flex: 1 1 416px;
	// flex-direction: column;
	// width: fit-content;
	// overflow: hidden;
	// width: 586px;
	// width: 100%;
	// background-color: red;
	// overflow: hidden;
	// position: absolute;
	// right: 0;
	// border: 10px solid yellow;
	display: flex;
	flex-wrap: nowrap;
	min-height: 416px;
	overflow: hidden;
	// flex-direction: row;

	// width: 300px;
	// min-height: 300px;
	// height: 300px;

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
