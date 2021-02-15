import styled from "styled-components";

export const StyledErrorContainer = styled.div`
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 200px;
	width: 100%;
	max-width: 400px;
	// background-color: white;
	opacity: 0.95;
	border-radius: 3px;
	border: 3px solid #12d0ee;
`;

export const StyledErrorMessage = styled.p`
	color: #ea42dd;
	font-size: 25px;
`;

export const MainArea = styled.main`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	flex: 1 1 auto;
	flex-flow: column;
	position: relative;
	justify-content: center;
	align-items: center;
	align-content: center;
	background-color: #070707;
	justify-content: center;
`;

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
