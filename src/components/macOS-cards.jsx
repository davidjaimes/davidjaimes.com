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


export default function App() {

	const macOSList = [
		{
			dir: "/macOS/system-preferences",
			title: "System Preferences",
			badges: ["Apple", "macOS"],
			image: systemPreferences,
			alt: 'System Preferences',
			text: "System Preferences is where you personalize your Mac settings. For example, use Energy Saver preferences to change sleep settings. Or use Desktop & Screen Saver preferences to add a desktop background or choose a screen saver. Customize your Mac."
		},
		{
			dir: "/macOS/xcode",
			title: "Xcode",
			badges: ["Apple", "macOS"],
			image: Xcode,
			alt: 'System Preferences',
			text: "Xcode 13 adds powerful new team development features, perfect for working with Xcode Cloud as well as with GitHub, Bitbucket, and GitLab collaboration features. Initiate, review, comment, and merge pull requests directly within Xcode. See your teammates’ comments right inside your code. And quickly compare any two versions of your code files."
		},
		{
			dir: "/macOS/homebrew",
			title: "Homebrew",
			badges: ["macOS", "Homebrew"],
			image: Homebrew,
			alt: 'System Preferences',
			text: "The missing package manager for macOS (or Linux). "
		},
		{
			dir: "/macOS/sublime-text",
			title: "Sublime Text",
			badges: ["macOS", "Sublime Text"],
			image: SublimeText,
			alt: 'System Preferences',
			text: "Sublime Text for Mac now includes native support for Apple Silicon processors. Linux ARM64 builds are also available for devices like the Raspberry Pi."
		},
		{
			dir: "/macOS/hyperjs",
			title: "HyperJS",
			badges: ["macOS", "HyperJS"],
			image: HyperJS,
			alt: 'System Preferences',
			text: "The goal of the project is to create a beautiful and extensible experience for command-line interface users, built on open web standards. In the beginning, our focus will be primarily around speed, stability and the development of the correct API for extension authors."
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
										<Badge pill variant="primary">{tag}</Badge>{' '}
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