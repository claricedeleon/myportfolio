import { Nav } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Nav className="justify-content-end" activeKey="/">
                <Nav.Item>
                    <Link to="/">
                        <Nav.Link className="nav-links" href="/">Home</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-links" href="/about-me">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-links" href="/resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-links" href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-links" href="/contact-me" disabled>Contact Me</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    )
}

export default Navigation;
