import React from "react";
import { StyledHero } from "./HeroStyle";

const Hero = ({ children }) => {
	return <StyledHero>{children}</StyledHero>;
};

export default Hero;
