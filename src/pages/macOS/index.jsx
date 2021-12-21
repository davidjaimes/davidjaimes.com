import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/macOS-cards"


const IndexPage = ({data}) => {
	const Posts = data.allMdx.edges
    	.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    	.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
	return <div>{Posts}</div>
}

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
          }
        }
      }
    }
  }
`