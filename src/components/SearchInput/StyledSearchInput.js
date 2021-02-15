import styled from "styled-components";

export const StyledSearchInput = styled.input`
    // border: 2px solid #13d5f0;
    border: 3px solid black;
    margin-left: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 3px;
    padding-right: 3px;
    outline: none;
    border-radius: 5px;
    min-width: 250px;
    height: 24px;
    font-size: 16px;
    font-family: MontserratAltReg;
    opacity: 0.95;


    &:focus {
        border: 3px solid #13d5f0;
        // border-color: #ea42dd ;
    }

}
`;

export const StyledInputLabel = styled.label`
	font-size: 20px;
	color: white;
	font-family: MontserratReg;
	padding-top: 5px;
	padding-bottom: 5px;
	opacity: 0.95;

	// border-bottom: 2px solid #ea42dd;
	// cursor: pointer;
`;

export const StyledInputButton = styled.button`
	border: none;
	outline: none;
	width: 100px;
	height: 40px;
	border: 3px solid #13d5f0;
	color: #13d5f0;
	cursor: pointer;
	margin-left: 10px;
	border-radius: 5px;
	background-color: white;
	font-size: 16px;
	opacity: 0.85;
	font-family: MontserratAltReg;

	margin: 0 0 0 20px;

	&:hover {
		background-color: #13d5f0;
		color: white;
	}

	@media screen and (max-width: 530px) {
		// width: 150px;
		margin-left: 0px;
		margin-top: 30px;
	}
`;

export const StyledSearchResults = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	// border: 10px solid purple;
`;

export const StyledSearchItemContainer = styled.div`
	width: 100%;
	// border: 10px solid orange;
	color: red;
`;

export const StyledErrorContainer = styled.div`
	width: 100%;
	// border 5px solid green;
`;
