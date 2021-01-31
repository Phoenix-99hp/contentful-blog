import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSearchLoader = styled.div`
	border-radius: 50%;
	border: 6px solid black;
	border-bottom: 3px solid #ea42dd;
	border-top: 3px solid #ea42dd;
	height: 30px;
	width: 30px;
	animation: ${spin} 1s linear infinite;
	margin-bottom: 10px;
`;

export const StyledLoaderSpan = styled.span`
	width: 100%;
	text-align: center;
	color: white;
	font-family: MontserratReg;
`;
