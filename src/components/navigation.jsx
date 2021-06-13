// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'


export default function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" className="shadow-sm">
			<Navbar.Brand href="/">
         		<Button variant="dark">davidjaimes.com</Button>{' '}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/gatsby-config">Documentation</Nav.Link>
					<Nav.Link href="/legal">Terms of Use</Nav.Link>
					<NavDropdown title="Tutorials" id="collasible-nav-dropdown">
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