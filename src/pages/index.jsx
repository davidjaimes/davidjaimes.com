// React Dependencies
import React, {useState} from "react"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"
import PostLink from "../components/homepage-cards"

// Bootstrap Dependencies
import {Alert, Container, Row, Col, Form, FormControl, Figure} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import GatsbyLogo from "./Gatsby_Logo.svg"
import GithuLogo from "./GitHub_Logo.png"


const IndexPage = ({
	data: {
		allMdx: {edges}
	},
}) => {
	const [state, setState] = useState({
		filteredPosts: [],
		query: "",
	  })
	const handleInputChange = event => {
		const query = event.target.value
		const filteredPosts = edges.filter(post => {
			const {title, badges} = post.node.frontmatter
			const {excerpt} = post.node
			return (
				excerpt.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase()) ||
				(badges && badges.join("").toLowerCase().includes(query.toLowerCase()))
			)
		})
		setState({
			query,
			filteredPosts,
		})
	}
	const posts = state.query ? state.filteredPosts : edges
	return (
		<div>
			<React.Fragment>

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

							{/* // Logos for making this website. */}
							<p className="mt-3 text-center text-muted">Website made by David Jaimes and powered with <br/><br/>
								<Figure>
									<Figure.Image width={150} height={180} alt="Google Domains Logo" src="https://www.gstatic.com/images/branding/lockups/svg/lockup_google_domains_867x140px_clr.svg"/>
									<Figure.Image width={100} height={180} alt="171x180" src={GatsbyLogo}/>
									<Figure.Image width={75} height={180} alt="171x180" src={GithuLogo}/>
								</Figure>
							</p>

							{/* Search bar with filter features */}
							<Form className="d-flex mb-4">
								<FormControl
									size="lg"
									type="search"
									placeholder="Begin typing to search..."
									className="me-2"
									aria-label="Search"
									value={state.query}
									onChange={handleInputChange}
								/>
							</Form>

							<Alert variant="info" className="mb-4">{posts.length} results</Alert>

							{/* Filtered posts */}
							{posts.map(post => <PostLink key={post.node.id} post={post.node} />)}

							<hr/>
						</Col>
					</Row>
				</Container>

				<Footer></Footer>

			</React.Fragment>
		</div>
		
	)}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
			path
			alt
			badges
			image {
				publicURL
			}
          }
        }
      }
    }
  }
`