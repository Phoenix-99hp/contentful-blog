import React from "react";
import { StyledHero } from "./HeroStyle";

const Hero = ({ children, bgColor }) => {
	return <StyledHero bgColor={bgColor}>{children}</StyledHero>;
};

export default Hero;
