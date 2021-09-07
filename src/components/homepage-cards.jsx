// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Card, Media, Badge, Image} from 'react-bootstrap'
import {FaBook} from 'react-icons/fa'

// Images
import NearbyStars from "../images/nearby-stars.png"
import Kepler16 from "../images/kepler-16b.png"
import KOI3570 from "../images/koi-3570-pflc.png"
import JSkyCalc from "../images/jskycalc-user-interface.png"
import Exercise1 from "../images/exercise1.png"


export default function App() {

	const macOSList = [
		{
			dir: "/nearby-stars",
			title: "Nearby Stars to 25.1 Light Years",
			badges: ["Python", "AstroPy"],
			image: NearbyStars,
			alt: 'Nearby Stars',
			text: "Luminosity and surface temperature (color) are two properties of stars we can measure. Using these two characteristics has proved extraordinarily effective un understanding the properties of stars-the Hertzsprung Russell (HR) diagram. This list includes known stars, brown dwarfs, and planets within 25.1 light years of the Sun. Sources are listed at the end of the page. Some values are estimated."
		},
		{
			dir: "/kepler-16b",
			title: "Kepler-16b: The First Circumbinary Planet",
			badges: ["Python", "AstroPy"],
			image: Kepler16,
			alt: 'Kepler 16',
			text: "Kepler-16b (formally Kepler-16 (AB)-b) is an extrasolar planet. It is a Saturn-mass planet consisting of half gas and half rock and ice, and it orbits a binary star, Kepler-16, with a period of 229 days. 'It is the first confirmed, unambiguous example of a circumbinary planet – a planet orbiting not one, but two stars,' said Josh Carter of the Harvard-Smithsonian Center for Astrophysics, one of the discovery team."
		},
		{
			dir: "/eclipsing-binaries",
			title: "KOI-2570: An Eclipsing Binary Star System",
			badges: ["Python", "AstroPy"],
			image: KOI3570,
			alt: 'KOI 3570',
			text: "KOI-3570 (aliases: 2MASS J19405783+4009273, KIC 5023948, and WISE J194057.82+400927.3) is an eclipsing binary star system. The term KOI means exactly what the name implies – Kepler has declared these to be 'objects of interest,' not planetary candidates. KOI-3570 is a member of the old open cluster NGC 6819. NGC 6819 is an open cluster (commonly known as an 'open star cluster') located 7,200 light years away in the Cygnus constellation. It was discovered by Caroline Herschel on 12 May 1784. "
		},
		{
			dir: "/jskycalc",
			title: "JSkyCalc: An Observing Aid",
			badges: ["Astronomy", "Java"],
			image: JSkyCalc,
			alt: 'JSkyCalc',
			text: "JSkycalc expedites the 'time-and-the-sky' calculations needed by observational astronomers. To follow the original directions on setting up JSkyCalc on your computer, go to John Thorstensen's website. His directions might be a little outdated (from year 2008) but they still work."
		},
		{
			dir: "/linear-regression",
			title: "Fitting a Line to Data with Linear Algebra",
			badges: ["Python", "Matplotlib"],
			image: Exercise1,
			alt: 'Linear Regression',
			text: "Linear regression attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable. For example, a modeler might want to relate the weights of individuals to their heights using a linear regression model."
		},
	]

	return (
		<div>
		{macOSList.map((mac, index) => {
			return (
				<React.Fragment>
				<hr/>
				<Card className="mt-5 mb-5 border-0 text-dark">
					<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href={mac.dir} className={"text-dark stretched-link"}><FaBook size={25}/> {mac.title}</a></Card.Title>

							{mac.badges.map((tag) => {
								return (
									<React.Fragment>
										<Badge pill variant="dark">{tag}</Badge>{' '}
									</React.Fragment>
								)
							})}

							<Card.Subtitle className="mt-3 text-secondary" style={{fontSize: '11px'}}>Written by David Jaimes</Card.Subtitle>
						</Media.Body>
						<Image src={mac.image} rounded className="mb-3 border border-dark" width={120} height={90} alt={mac.alt}/>
					</Media>
					<Card.Text style={{fontSize: '14px'}}>{mac.text}</Card.Text>
					</Card.Body>
				</Card>
				</React.Fragment>
			)
		})}
		<hr/>
		</div>
	)
}