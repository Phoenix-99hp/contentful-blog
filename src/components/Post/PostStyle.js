import styled from "styled-components";

export const StyledPostContainer = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	text-align: center;
	height: 300px;
	// min-height: 300px;
	border-radius: 3px;
	// justify-content: center;
	width: 550px;
	background-color: white;
	// flex: 1 1 100%;
	padding: 15px;
	position: relative;
	border: 2px solid #13d5f0;
	opacity: 0.95;
	// overflow: hidden;
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
    padding: 20px;
    width: 100%;
    max-width: 400px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
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
	// position: absolute;
	color: #13d5f0;
	outline: none;
	// bottom: -50px;
	// left: 50%;
	// -webkit-transform: translateX(-50%);
	// -ms-transform: translateX(-50%);
	// transform: translateX(-50%);
	border: 2px solid #13d5f0;
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

	&:hover {
		background-color: #13d5f0;
		color: white;
	}
`;
