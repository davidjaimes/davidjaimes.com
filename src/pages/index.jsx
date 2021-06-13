// React Dependencies
import React from "react";
import {Helmet} from "react-helmet";

// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import CardIndex from "../components/card-index"
import Footer from "../components/footer"


export default function Index() {
	return (
		<>

			<Helmet>
				<html lang='en-us'/>
      			<meta charset="utf-8"/>
      			<meta name="viewport" content="width=device-width, initial-scale=1"/>
      			<meta name="description" content="Utilization of Data Analysis and Visualization Tools: Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions."/>
      			<title>David Jaimes: Husband. Scientist. Trail Runner.</title>
			</Helmet>

			<Navigation></Navigation>

			<Container fluid>
				<Row className="mt-5 justify-content-center ml-0 mr-0">
					<Col style={{maxWidth: "768px"}}>
						<h1 className="mt-5 text-muted text-center">Utilization of <b className="text-dark">Data Analysis</b> and <b className="text-dark">Visualization</b> Tools</h1>
						<p className="mt-5 mb-5 text-muted text-center">Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions.</p>

						<CardIndex></CardIndex>
					</Col>
				</Row>
			</Container>

			<Footer></Footer>
			
		</>
	)
}
