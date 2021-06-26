import { Card, Button } from "react-bootstrap";
import './PortfolioContent.css';
import Watercolor from '../images/watercolor.png';
import Project1 from '../images/proj1.jpg';
import Project2 from '../images/proj2.jpg';
import Project3 from '../images/proj3.jpg';
import Project4 from '../images/proj4.jpg';
import Project5 from '../images/proj5.jpg';
import Project6 from '../images/proj6.jpg';

const PortfolioContent = () => {
    return (
        <div className="portfolio-container">
            <img id="watercolor" src={Watercolor} alt="Background Image" width={800}></img>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project1} alt="Project 1" />
                <Card.Body>
                    <Card.Title className="card-title">Static Website</Card.Title>
                    <Card.Text>
                        Using HTML, CSS and some Bootstrap styling, I designed this static website for a local private resort located in Cavite.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project2} alt="Project 2" />
                <Card.Body>
                    <Card.Title className="card-title">Javascript Game</Card.Title>
                    <Card.Text>
                        This is a simple Memory Game I created using Javascript. I intend to develop more features for this game in the future.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project3} alt="Project 3" />
                <Card.Body>
                    <Card.Title className="card-title">React Pokedex</Card.Title>
                    <Card.Text>
                        My Pokedex project was created for the intention of understanding the basics of React introducing Link and Router.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project4} alt="Project 4" />
                <Card.Body>
                    <Card.Title className="card-title">React RestoApp</Card.Title>
                    <Card.Text>
                        This React project allows you to add a new item on the menu and update an item from the cart using store and redux components.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project5} alt="Project 5" />
                <Card.Body>
                    <Card.Title className="card-title">React ToDoApp</Card.Title>
                    <Card.Text>
                        TodoApp is another simple project I also created using React's store and redux components.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Project6} alt="Project 6" />
                <Card.Body>
                    <Card.Title className="card-title">Full Stack App</Card.Title>
                    <Card.Text className="card-text">
                        This is my very own Sales & Inventory application I created using full (MongoDB, Express, React and Node.js) stack.
                    </Card.Text>
                    <Button className="portfolio-link" variant="info">Check this out</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PortfolioContent;