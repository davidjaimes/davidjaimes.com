// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Card, Media, Badge, Image} from 'react-bootstrap'
import {FaBook} from 'react-icons/fa'


export default function PostLink ({ post }) {
	return (
	  <div>
		<React.Fragment>
		<hr/>
		<Card className="mt-5 mb-5 border-0 text-dark">
			<Card.Body className="m-0 p-0">
			<Media>
				<Media.Body className="mb-3">
					<Card.Title><a href={post.frontmatter.path} className={"text-dark stretched-link"}><FaBook size={25}/> {post.frontmatter.title}</a></Card.Title>
	
					{post.frontmatter.badges.map((tag) => {
						return (
							<React.Fragment>
								<Badge pill variant="dark">{tag}</Badge>{' '}
							</React.Fragment>
						)
					})}
	
					<Card.Subtitle className="mt-3 text-secondary" style={{fontSize: '11px'}}>{post.frontmatter.date}</Card.Subtitle>
				</Media.Body>
				<Image src={post.frontmatter.image.publicURL} rounded className="mb-3 border border-dark" width={120} height={90} alt={post.frontmatter.alt}/>
			</Media>
			<Card.Text style={{fontSize: '14px'}}>{post.excerpt}</Card.Text>
			</Card.Body>
		</Card>
		</React.Fragment>
	  </div>
	)}