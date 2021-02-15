import React from "react";
import {
	StyledAboutContainer,
	StyledAboutText,
	StyledAboutHeading,
} from "./AboutSection";

const AboutSection = () => {
	return (
		<StyledAboutContainer>
			<StyledAboutHeading>About Me</StyledAboutHeading>
			<StyledAboutText>
				If I was actually a blogger, I would write about myself here.
			</StyledAboutText>
		</StyledAboutContainer>
	);
};

export default AboutSection;
