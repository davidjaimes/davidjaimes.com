// React Dependencies
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


export default function CardIndex() {
	return (
		<div>

			<hr/>

			<Card className="mt-5 mb-5 border-0 text-muted">
				<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/macOS/system-preferences" className="text-dark stretched-link"><FaBook size={25}/> System Preferences</a></Card.Title>
							<Badge pill variant="primary">Apple</Badge>{' '}
							<Badge pill variant="primary">macOS</Badge>{' '}
						</Media.Body>
						<Image src={systemPreferences} rounded className="mb-3 border border-dark" width={120} height={90} alt='Kepler-16'/>
					</Media>
					<Card.Text>
						System Preferences is where you personalize your Mac settings. For example, use Energy Saver preferences to change sleep settings. Or use Desktop & Screen Saver preferences to add a desktop background or choose a screen saver. Customize your Mac.
					</Card.Text>
				</Card.Body>
			</Card>

			<hr/>

			<Card className="mt-5 mb-5 border-0 text-muted">
				<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/macOS/xcode" className="text-dark stretched-link"><FaBook size={25}/> Xcode</a></Card.Title>
							<Badge pill variant="primary">Apple</Badge>{' '}
							<Badge pill variant="primary">macOS</Badge>{' '}
						</Media.Body>
						<Image src={Xcode} rounded className="mb-3 border border-secondary" width={120} height={90} alt='Xcode'/>
					</Media>
					<Card.Text>
						Xcode 13 adds powerful new team development features, perfect for working with Xcode Cloud as well as with GitHub, Bitbucket, and GitLab collaboration features. Initiate, review, comment, and merge pull requests directly within Xcode. See your teammates’ comments right inside your code. And quickly compare any two versions of your code files.
					</Card.Text>
				</Card.Body>
			</Card>

			<hr/>

			<Card className="mt-5 mb-5 border-0 text-muted">
				<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/macOS/homebrew" className="text-dark stretched-link"><FaBook size={25}/> Homebrew</a></Card.Title>
							<Badge pill variant="primary">macOS</Badge>{' '}
							<Badge pill variant="primary">Homebrew</Badge>{' '}
						</Media.Body>
						<Image src={Homebrew} rounded className="mb-3 border border-secondary" width={120} height={80} alt='KOI-3570'/>
					</Media>
					<Card.Text>
						The missing package manager for macOS (or Linux). 
					</Card.Text>
				</Card.Body>
			</Card>

			<hr/>

			<Card className="mt-5 mb-5 border-0 text-muted">
				<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/macOS/sublime-text" className="text-dark stretched-link"><FaBook size={25}/> Sublime Text</a></Card.Title>
							<Badge pill variant="primary">macOS</Badge>{' '}
							<Badge pill variant="primary">Sublime Text</Badge>{' '}
						</Media.Body>
						<Image src={SublimeText} rounded className="mb-3 border border-secondary" width={120} height={81} alt='JSkyCalc'/>
					</Media>
					<Card.Text>
						Sublime Text for Mac now includes native support for Apple Silicon processors. Linux ARM64 builds are also available for devices like the Raspberry Pi.
					</Card.Text>
				</Card.Body>
			</Card>

			<hr/>

			<Card className="mt-5 mb-5 border-0 text-muted">
				<Card.Body className="m-0 p-0">
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/linear-regression" className="text-dark stretched-link"><FaBook size={25}/> HyperJS</a></Card.Title>
							<Badge pill variant="primary">macOS</Badge>{' '}
							<Badge pill variant="primary">HyperJS</Badge>{' '}
						</Media.Body>
						<Image src={HyperJS} rounded className="mb-3 border border-secondary" width={120} height={80} alt='Linear Regression'/>
					</Media>
					<Card.Text>
						The goal of the project is to create a beautiful and extensible experience for command-line interface users, built on open web standards. In the beginning, our focus will be primarily around speed, stability and the development of the correct API for extension authors.
					</Card.Text>
				</Card.Body>
			</Card>

			<hr/>

		</div>
	)
}