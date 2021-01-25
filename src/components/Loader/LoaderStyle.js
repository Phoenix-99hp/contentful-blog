import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
	border-radius: 50%;
	border: 10px solid white;
	border-bottom: 5px solid #ea42dd;
	border-top: 5px solid #ea42dd;
	height: 50px;
	width: 50px;
	animation: ${spin} 1s linear infinite;
	margin-bottom: 20px;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	height: 100%;
	// text-align: center;
	width: 100vw;
	align-items: center;
	justify-content: center;
	align-items: center;
	background-color: white;
`;
