// React Dependencies
import React from "react"

// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap'

// Import Templates
import headSEO from "../components/seo"
import Navigation from "../components/navigation"
import Footer from "../components/footer"


export default function HomePage({children, pageContext}) {
	const { title, subtitle, description } = pageContext.frontmatter
	return (
		<>
			<headSEO></headSEO>

			<Navigation></Navigation>

			<Container fluid>
				<Row className="justify-content-center m-0">
					<Col style={{maxWidth: "768px"}}>
						<h1 align="center" style={{marginTop: "2em"}}>{title}</h1>
						<p align="center">{subtitle}</p>
						<p align="center">{description}</p>
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
