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


export default function CardIndex() {
	return (
		<div>

			<Card className="mt-5 mb-5 border border-dark text-muted">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/nearby-stars" className="text-dark stretched-link"><FaBook size={25}/> Nearby Stars to 25.1 Light Years</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">AstroPy</Badge>{' '}
						</Media.Body>
						<Image src={NearbyStars} rounded className="mb-3 border border-secondary" width={120} height={90} alt='Kepler-16'/>
					</Media>
					<Card.Text>
						<b>Luminosity</b> and <b>surface temperature (color)</b> are two properties of stars we can measure. Using these two characteristics has proved extraordinarily effective un understanding the properties of stars-the <b>Hertzsprung Russell (HR) diagram</b>. This list includes known stars, brown dwarfs, and planets within 25.1 light years of the Sun. Sources are listed at the end of the page. Some values are estimated.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="mt-5 mb-5 border border-dark text-muted">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/kepler-16b" className="text-dark stretched-link"><FaBook size={25}/> Kepler-16b: The First Circumbinary Planet</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">AstroPy</Badge>{' '}
						</Media.Body>
						<Image src={Kepler16} rounded className="mb-3 border border-secondary" width={120} height={90} alt='Kepler-16'/>
					</Media>
					<Card.Text>
						<b>Kepler-16b</b> (formally <b>Kepler-16 (AB)-b</b>) is an extrasolar planet. It is a Saturn-mass planet consisting of half gas and half rock and ice, and it orbits a binary star, Kepler-16, with a period of 229 days. "It is the first confirmed, unambiguous example of a circumbinary planet – a planet orbiting not one, but two stars," said Josh Carter of the Harvard-Smithsonian Center for Astrophysics, one of the discovery team.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="mt-5 mb-5 border border-dark text-muted">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/eclipsing-binaries" className="text-dark stretched-link"><FaBook size={25}/> KOI-2570: An Eclipsing Binary Star System</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">AstroPy</Badge>{' '}
						</Media.Body>
						<Image src={KOI3570} rounded className="mb-3 border border-secondary" width={120} height={80} alt='KOI-3570'/>
					</Media>
					<Card.Text>
						<b>KOI-3570</b> (aliases: <b>2MASS J19405783+4009273</b>, <b>KIC 5023948</b>, and <b>WISE J194057.82+400927.3</b>) is an eclipsing binary star system. The term KOI means exactly what the name implies – Kepler has declared these to be "objects of interest," not planetary candidates. KOI-3570 is a member of the old open cluster NGC 6819. <b>NGC 6819</b> is an open cluster (commonly known as an "open star cluster") located 7,200 light years away in the Cygnus constellation. It was discovered by Caroline Herschel on 12 May 1784.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="mt-5 mb-5 border border-dark text-muted">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/jskycalc" className="text-dark stretched-link"><FaBook size={25}/> JSkyCalc: An Observing Aid</a></Card.Title>
							<Badge pill variant="dark">Astronomy</Badge>{' '}
							<Badge pill variant="dark">Java</Badge>{' '}
						</Media.Body>
						<Image src={JSkyCalc} rounded className="mb-3 border border-secondary" width={120} height={81} alt='JSkyCalc'/>
					</Media>
					<Card.Text>
						<b>JSkycalc</b> expedites the "time-and-the-sky" calculations needed by observational astronomers. To follow the original directions on setting up JSkyCalc on your computer, go to <b>John Thorstensen's</b> website. His directions might be a little outdated (from year 2008) but they still work.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="mt-5 mb-5 border border-dark text-muted">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/linear-regression" className="text-dark stretched-link"><FaBook size={25}/> Fitting a Line to Data with Linear Algebra</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">Matplotlib</Badge>{' '}
						</Media.Body>
						<Image src={Exercise1} rounded className="mb-3 border border-secondary" width={120} height={80} alt='Linear Regression'/>
					</Media>
					<Card.Text>
						<b>Linear regression</b> attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable. For example, a modeler might want to relate the weights of individuals to their heights using a <b>linear regression model</b>.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}