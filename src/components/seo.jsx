// React Dependencies
import React from "react"
import {Helmet} from "react-helmet"


export default function SEO ({pageContext}) {

	const {title, description} = pageContext.frontmatter
	
    return (
        <div>
            <Helmet>
                {/* html attributes */}
                <html lang="en"/>

                {/* title attributes and value */}
                <title>David Jaimes: {title}</title>

                {/* multiple meta elements */}
                <meta name="description" content={description} />
                <meta property="og:type" content="article" />

                {/* multiple link elements */}
                <link rel="canonical" href="https://davidjaimes.com/" />

            </Helmet>
        </div>
    )
}