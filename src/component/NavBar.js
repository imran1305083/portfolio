
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from "../assets/img/logo.svg";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon2 from "../assets/img/nav-icon2.svg";
import navicon3 from "../assets/img/nav-icon3.svg";
import '../App2.css';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled = () => window.widthY > 50 ? true : false 
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, []);



    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        // what does expand do??????
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#a'><img src={navicon1} alt='' /></a>
                            <a href='#b'><img src={navicon2} alt='' /></a>
                            <a href='#c'><img src={navicon3} alt='' /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar