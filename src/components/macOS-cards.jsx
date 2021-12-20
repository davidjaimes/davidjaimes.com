// React Dependencies
import { graphql } from 'gatsby'
import React from 'react'

// Bootstrap Dependencies
import {Card, Media, Badge, Image} from 'react-bootstrap'
import {FaBook} from 'react-icons/fa'

// Images
import systemPreferences from "../images/macOS/01-system-preferences.png"
import Xcode from "../images/macOS/02-xcode-app.png"
import Homebrew from "../images/macOS/03-homebrew.png"
import SublimeText from "../images/macOS/04-sublime-text.png"
import HyperJS from "../images/macOS/05-hyper-terminal.png"


export default function App(data) {

	const post = data.allMdx

	return (

		<div>
			<h1>{post}</h1>
		</div>
	)

}

export const pageQuery = graphql`
query {
	allMdx(
	  filter: {fields: {collection: {eq: "pages"}}}
	  sort: {fields: [frontmatter___date], order: DESC}
	) {
	  edges {
		node {
		  frontmatter {
			date(formatString: "MMM DD, YYYY")
			description
			subtitle
			title
		  }
		  fileAbsolutePath
		}
	  }
	}
  }
`