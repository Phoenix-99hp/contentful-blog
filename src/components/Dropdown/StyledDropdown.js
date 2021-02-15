import styled, { css } from "styled-components";

export const StyledDropdownContainer = styled.div`
	position: relative;
	background-color: white;
	/* width: 115px; */
	width: 100px;
	height: 25px;
	opacity: 1;
	cursor: pointer;
	z-index: 9;
	display: none;
	justify-content: center;
	flex-wrap: wrap;

	@media screen and (max-width: 1300px) {
		display: block;
	}
`;

export const StyledDropdownIcon = styled.div`
	padding: 5px 2px 2px;
	height: 25px;
	font-size: 15px;
	font-family: MontserratReg;
	box-sizing: border-box;

	${({ ready }) =>
		ready === "initiate" &&
		css`
			background-color: gray;
		`}

	${({ ready }) =>
		ready === "deInitiate" &&
		css`
			background-color: none;
		`}
`;

export const StyledDropdownItem = styled.div`
	position: relative;
	padding: 5px 2px 2px;
	height: 26px;
	border-top: 1px solid #ea42dd;
	color: black;
	font-size: 15px;
	font-family: MontserratAltReg;
	box-sizing: border-box;

	&:first-of-type {
		border-top: none;
		border-bottom: 1px solid #ea42dd;
	}

	&:hover {
		background-color: #ea42dd;
		color: white;
	}
`;

export const StyledItemsInnerContainer = styled.div`
	background-color: white;
	position: relative;
	height: 0px;
	width: 100px;
	z-index: 9;
	overflow: hidden;
	transition: height 0.5s linear, opacity 0.5s linear;

	${({ ready }) =>
		ready === "initiate" &&
		css`
			height: 52px;
			opacity: 1;
		`}

	${({ ready }) =>
		ready === "deInitiate" &&
		css`
			height: 0;
			opacity: 0;
		`}
`;
