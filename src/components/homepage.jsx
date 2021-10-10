// React Dependencies
import React from "react";
import {Helmet} from "react-helmet";

// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import Footer from "../components/footer"


export default function HomePage({children, pageContext}) {
	const { title, subtitle} = pageContext.frontmatter
	return (
		<>
			<Helmet>
				<title>David Jaimes: {title}</title>
				<html lang="en"/>
			</Helmet>

			<Navigation></Navigation>

			<Container fluid>
				<Row className="justify-content-center m-0">
					<Col style={{maxWidth: "768px"}}>
						<h1 align="center" style={{marginTop: "2em"}}>{title}</h1>
						<p align="center">{subtitle}</p>
						<br/>
						<br/>
						{children}
					</Col>
				</Row>
			</Container>

			<Footer></Footer>
		</>
	)
}