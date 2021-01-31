import styled, { keyframes, css } from "styled-components";

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

// export const StyledPostContainer = styled.div`
// 	// display: block;
// 	display: flex;
// 	min-width: 586px;
// 	width: 100%;
// 	height: 100%;
// 	flex-wrap: wrap;
// 	text-align: center;
// 	height: 300px;
// 	// min-height: 300px;
// 	border-radius: 3px;
// 	// justify-content: center;
// 	width: 550px;
// 	background-color: white;
// 	// flex: 1 1 100%;
// 	padding: 15px;
// 	// position: absolute;
// 	position: relative;
// 	border: 3px solid #13d5f0;
// 	opacity: 0.95;
// 	word-break: break-word;
// 	bottom: 0;
// 	align-self: flex-end;
// 	// overflow: hidden;
// 	${({ slideOut }) =>
// 		slideOut === "slideRight" &&
// 		css`
// 			animation: ${slideRight} 2s ease;
// 		`};
// 	${({ slideOut }) =>
// 		slideOut === "slideLeft" &&
// 		css`
// 			animation: ${slideLeft} 2s ease;
// 		`};
// 	${({ slideIn }) =>
// 		slideIn === "slideRight" &&
// 		css`
// 			animation: ${slideRight} 2s ease;
// 		`};
// 	${({ slideIn }) =>
// 		slideIn === "slideLeft" &&
// 		css`
// 			animation: ${slideLeft} 2s ease;
// 		`};
// `;

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
};
`;

export const StyledPostText = styled.p`
	font-size: 18px;
	text-align: left;
	font-family: MontserratAltLight;
	height: 336px;
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	padding: 15px;
	bottom: 0;
	border: 3px solid #13d5f0;
	background-color: white;
`;

export const StyledPostOuterContainer = styled.div`
	display: ${({ showHide, stack }) =>
		stack === "stack" || showHide === "hide"
			? // (stack === "stack" && showHide === "hide")
			  "none"
			: "flex"};

	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "right" &&
		css`
			animation: ${slideRightNew} 3s ease, ${fadeIn} 3s ease;
			z-index: 9;
		`}
	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "left" &&
		css`
			animation: ${slideLeftNew} 3s ease, ${fadeIn} 3s ease;
			z-index: 9;
		`}

	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "right" &&
		css`
			animation: ${slideRightOld} 3s ease, ${fadeOut} 3s ease;
		`}
	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "left" &&
		css`
			animation: ${slideLeftOld} 3s ease, ${fadeOut} 3s ease;
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
`;

// export const StyledPostOuterOuterContainer = styled.div`
// 	display: flex;
// 	flex-wrap: no-wrap;
// 	// justify-self: flex-start;
// 	justify-content: center;
// 	align-items: center;
// 	// max-width: 586px;
// 	width: 100%;
// 	height: 416px;
// 	height: 100%;
// 	// border: 10px solid blue;
// 	// flex: 1 1 100%;
// 	flex-direction: column;
// 	// box-sizing: border-box;
// 	// overflow: hidden;
// 	// width: fit-content;
// 	// animation: ${fadeIn} 1s ease-in;
// 	position: relative;
// `;

// export const StyledPostFadeContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	flex-direction: column;
// 	width: fit-content;
// 	animation:
// `;

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
`;
