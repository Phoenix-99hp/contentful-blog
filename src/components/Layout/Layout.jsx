import React, { useEffect, useState, Component } from "react";
import { PageContainer, MainContent, FadeContainer } from "./LayoutStyle";
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

// class Layout extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	shouldComponentUpdate() {
// 		return false;
// 	}

// 	render() {
// 		return (
// 			<PageContainer>
// 				<FadeContainer>
// 					<Header />
// 					<MainContent>{this.props.children}</MainContent>
// 					<Footer />
// 				</FadeContainer>
// 			</PageContainer>
// 		);
// 	}
// }

// export default Layout;
