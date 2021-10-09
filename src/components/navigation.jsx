// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, Button} from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'


export default function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" className="shadow-sm" bg="light" variant="light">
			<Navbar.Brand href="/">
         		<Button variant="dark">davidjaimes.com</Button>{' '}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" bg="dark"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/about" className="text-dark">About</Nav.Link>
					<Nav.Link href="/gatsby" className="text-dark">Gatsby</Nav.Link>
					<Nav.Link href="/macOS" className="text-dark">macOS</Nav.Link>
					<Nav.Link href="/legal" className="text-dark">Terms of Use</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="https://github.com/davidjaimes" className="text-dark"><FaGithub size={25}/> Source Code</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}