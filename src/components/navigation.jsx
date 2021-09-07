// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'


export default function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" className="shadow-sm" bg="light" variant="light">
			<Navbar.Brand href="/">
         		<Button variant="primary">davidjaimes.com</Button>{' '}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" bg="light"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/gatsby">Gatsby</Nav.Link>
					<Nav.Link href="/macOS">macOS</Nav.Link>
					<Nav.Link href="/legal">Terms of Use</Nav.Link>
					<NavDropdown title="Tutorials" id="collasible-nav-dropdown" menuVariant="dark">
						<NavDropdown.Item href="/linear-regression">Linear Regression</NavDropdown.Item>
						<NavDropdown.Item href="/eclipsing-binaries">Eclipsing Binaries</NavDropdown.Item>
						<NavDropdown.Item href="/jskycalc">JSkyCalc</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/macOS-config">macOS Configuration</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="https://github.com/davidjaimes"><FaGithub size={25}/> Source Code</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}