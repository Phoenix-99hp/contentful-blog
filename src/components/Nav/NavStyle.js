import styled from "styled-components";

export const StyledNavContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media screen and (max-width: 530px) {
		flex: 1 1 100%;
		margin-top: 20px;
	}
`;

export const StyledNavList = styled.div`
	display: inline-flex;
	justify-content: center;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 1300px) {
		display: none;
	}
`;
