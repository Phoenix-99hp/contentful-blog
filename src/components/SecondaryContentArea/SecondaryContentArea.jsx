import React from "react";
import {
	StyledSecondaryContentArea,
	StyledSectionTitle,
	StyledSecondarySection,
	StyledInputContainer,
	StyledContentContainer,
	StyledSecondaryContentOuter,
} from "./StyledSecondaryContentArea";
import SearchInput from "../SearchInput/SearchInput.jsx";

const SecondaryContentArea = ({ children }) => {
	return (
		<StyledSecondaryContentOuter>
			<StyledSecondaryContentArea>
				<StyledSecondarySection>
					<StyledContentContainer>
						<StyledSectionTitle>More Posts</StyledSectionTitle>
						{children}
					</StyledContentContainer>
				</StyledSecondarySection>
			</StyledSecondaryContentArea>
			<StyledInputContainer>
				<StyledSecondarySection>
					<SearchInput
						label={"Search"}
						buttonName={"Search"}
						placeholder={"Post title"}
					/>
				</StyledSecondarySection>
			</StyledInputContainer>
		</StyledSecondaryContentOuter>
	);
};

export default SecondaryContentArea;
