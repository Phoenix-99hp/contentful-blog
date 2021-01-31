import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const PageContainer = styled.div`
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	height: 100%;
	text-align: center;
	width: 100vw;
	background-color: black;
	align-items: center;
`;

export const FadeContainer = styled.div`
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	// height: 100%;
	text-align: center;
	width: 100vw;
	align-items: center;
	animation: ${fadeIn} 0.6s ease-in;
`;

export const MainContent = styled.main`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-evenly;
	// align-items: center;
	// margin: 0 auto;
	width: 100%;
	flex: 1 1 auto;
	// max-width: 2000px;
	position: relative;
	// align-items: flex-start;
	align-content: flex-start;
	// padding
	background-color: #070707;
	justify-content: center;
	// align-content: flex-end;
	// align-items: center;
`;
