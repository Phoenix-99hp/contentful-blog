import React from "react";
import { StyledContentContainer } from "./StyledBlogContentArea";

const BlogContentArea = ({ children }) => {
	return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default BlogContentArea;
