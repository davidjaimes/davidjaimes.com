// React Dependencies
import React, {useState} from "react"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"
import PostLink from "../components/homepage-cards"

// Bootstrap Dependencies
import {Container, Row, Col, Form, FormControl} from 'react-bootstrap'

// Import Templates
import Navigation from "../components/navigation"
import Footer from "../components/footer"


const IndexPage = ({
	data: {
		allMdx: {edges}
	},
}) => {
	const [state, setState] = useState({
		filteredPosts: [],
		query: "",
	  })
	const allPosts = edges
	const handleInputChange = event => {
		const query = event.target.value
		const filteredPosts = allPosts.filter(post => {
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
	const posts = state.query ? state.filteredPosts : allPosts;
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
							<h1 className="mt-5 text-muted text-center">Utilization of <b className="text-dark">Data Analysis</b> and <b className="text-dark">Visualization</b> Tools</h1>
							<p className="mt-5 mb-5 text-muted text-center">Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions.</p>

							<Form className="d-flex mb-5">
								<FormControl
									type="search"
									placeholder="Search Posts"
									className="me-2"
									aria-label="Search"
									value={state.query}
									onChange={handleInputChange}
								/>
							</Form>
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