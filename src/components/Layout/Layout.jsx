import React, { useEffect, useState, Component } from "react";
import { PageContainer, FadeContainer, MainContent } from "./LayoutStyle";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
	return (
		<PageContainer>
			<FadeContainer>
				<Header />
				<MainContent>{children}</MainContent>
				<Footer />
			</FadeContainer>
		</PageContainer>
	);
};

export default Layout;
