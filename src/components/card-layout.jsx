// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Card, Media, Badge, Image} from 'react-bootstrap'
import {FaBook} from 'react-icons/fa'

// Images
import NearbyStars from "../../images/nearby-stars.png"


const macOS = [
	{
		id: 1,
		dir: "/macOS/system-preferences",
		title: "macOS: System Preferences",
		text: "Hello, did this work?"
	},
	{
		id: 2,
		dir: "/macOS/Xcode",
		title: "macOS: Xcode",
		text: "Hello, did this work, also?"
	},
]



const = macOSlist = () => {
	return (
		<div>
			{macOS.map(mac => {
				<hr/>

				<Card className="mt-5 mb-5 border-0 text-muted">
					<Card.Body className="m-0 p-0">
						<Media>
							<Media.Body className="mb-3">
								<Card.Title><a href={mac.dir} className="text-dark stretched-link"><FaBook size={25}/> {mac.title}</a></Card.Title>
								<Badge pill variant="dark">Python</Badge>{' '}
								<Badge pill variant="dark">AstroPy</Badge>{' '}
							</Media.Body>
							<Image src={NearbyStars} rounded className="mb-3 border border-secondary" width={120} height={90} alt='Kepler-16'/>
						</Media>
						<Card.Text>
							{mac.text}
						</Card.Text>
					</Card.Body>
				</Card>
			})}
		</div>
	)
}