import styled, { css, keyframes } from "styled-components";

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
    left: 586px;
}

100% {
    left: 0;
}`;

const slideRightNew = keyframes`
0% {
    right: 586px;
}

100% {
    right: 0;
}`;

const slideLeftOld = keyframes`

0% {
    left: 0;
}

100% {
    left: -586px;
}`;

const slideRightOld = keyframes`
0% {
    right: 0;
}

100% {
    right: -586px;
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
};
`;

export const StyledPostText = styled.p`
	// padding-top: 20px;
	font-size: 18px;
	text-align: left;
	font-family: MontserratAltLight;
	height: 336px;
	position: absolute;
	box-sizing: border-box;
	padding: 15px;
	bottom: 0;
`;

export const StyledPostOuterContainer = styled.div`
	display: ${({ showHide }) => (showHide === "hide" ? "none" : "flex")};

	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "right" &&
		css`
			animation: ${slideRightNew} 4s ease, ${fadeIn} 4s ease;
			z-index: 9;
		`}
	${({ showHide, direction }) =>
		showHide === "showFeatured" &&
		direction === "left" &&
		css`
			animation: ${slideLeftNew} 4s ease, ${fadeIn} 4s ease;
			z-index: 9;
		`}

	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "right" &&
		css`
			animation: ${slideRightOld} 4s ease, ${fadeOut} 4s ease;
		`}
	${({ showHide, direction }) =>
		showHide === "hideFormer" &&
		direction === "left" &&
		css`
			animation: ${slideLeftOld} 4s ease, ${fadeOut} 4s ease;
		`}
    
	justify-content: center;
	box-sizing: border-box;
	flex-direction: column;
	// width: 100%;
	width: 586px;
	height: 100%;
	border: 2px solid white;
	position: absolute;
	background-color: orange;
	// padding: 15px;
	word-break: break-word;
`;
