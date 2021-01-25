import styled from "styled-components";

export const PageContainer = styled.div`
	opacity: 0;
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	height: 100%;
	text-align: center;
	width: 100vw;
	// background-color: #070707;
	transition: all 500ms ease-in-out;
	opacity: ${({ opacity }) => (opacity === "show" ? 1 : 0)};
	// font-family: Redressed;
	align-items: center;
	// border: 3px solid white;
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
