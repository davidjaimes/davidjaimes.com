module.exports = {
	siteMetadata: {siteUrl: `https://davidjaimes.com`},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
    	resolve: `gatsby-plugin-sharp`,
    	options: {
			useMozJpeg: false,
			stripMetadata: false,
			defaultQuality: 75,
    	},
	 	},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{resolve: `gatsby-plugin-offline`},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				remarkPlugins: [require(`remark-math`)],
    		rehypePlugins: [require(`rehype-katex`)],
				defaultLayouts: {default: require.resolve(`./src/components/mdx-template.jsx`)},
				extensions: [`.mdx`, `.md`],
				plugins: [`gatsby-remark-images`],
				gatsbyRemarkPlugins: [
					{
			    	resolve: `gatsby-remark-prismjs`,
			    	options: {
		      		classPrefix: 'language-',
		      		inlineCodeMarker: null,
		      		showLineNumbers: false,
		      		prompt: {
	               	global: false,
	            },
		      	},      
				  },
					{
	          resolve: `gatsby-remark-images`,
	          options: {
        			maxWidth: 768,
        			showCaptions: false,
        			markdownCaptions: true,
        			backgroundColor: 'transparent',
	          },
	        },
				]
			},
		},
	],
}