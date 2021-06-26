import Tiles from '../images/tiles.png';
import Clarice from '../images/clarice.jpg';
import './AboutMeContent.css';
import { Link } from 'react-router-dom';
import { Container, Row, Image, Card } from 'react-bootstrap';

const AboutMeContent = () => {
    return (
        <div>
            <img id="tiles" src={Tiles} alt="Background Image" width={800}></img>
            <Container className="content-flex">
                <Row>
                    <Card className="card">
                        <Card.Body className="about-me-content">
                            <div className="image-container">
                                <Image id="clarice" src={Clarice} alt="My Photo" width={230} rounded />
                            </div>
                            <p className="text">
                                Hello! I'm Clarice De Leon. Finally, I have (re)started my journey to become a web developer. I can't be any happier and more excited!
                                <br />
                                <br />
                                After completing a degree with computer applications as my major, my interest to pursue an IT career was put aside due to personal reasons. The 2020 pandemic became my turning point and triggered me to go back to my first love: programming. So, I decided to enroll in a bootcamp to learn Full Stack Web Development. This is the first step. Looking forward to more exciting challenges along the way. Fighting!
                                <br />
                                <br />
                                Kindly check out my projects found in <Link to="/portfolio" className="link">portfolio</Link> tab.
                                Thank you!
                                <br />
                                <span id="signature"><em>Clarice De Leon | June 2021</em></span>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMeContent;