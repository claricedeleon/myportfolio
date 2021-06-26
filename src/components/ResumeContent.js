import { Container, Row, Image, Card } from 'react-bootstrap';
import './ResumeContent.css';
import Eye from '../images/eye2.png';
import Photoshop from '../images/photoshop.png';
import VSCode from '../images/vscode.png';
import HTML5 from '../images/html5.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import React from '../images/react.png';
import MongoDB from '../images/mongodb.png';
import NodeExpress from '../images/nodeexpress.png';

const ResumeContent = () => {
    return (
        <div className="resume-container">
            <img id="eye" src={Eye} alt="Background Image" width={800}></img>

            <h4 id="resume-heading">Work Experience</h4>
            <div className="resume-contents-flex">
                <div>
                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <h6 id="experience-title">2007 - 2010 (SME in Singapore)</h6>
                            <Card.Text className="experience-cards-text">
                                ➼ Maintained company website using Adobe Dreamweaver
                            </Card.Text>
                            <Card.Text className="experience-cards-text">
                                ➼ Basic troubleshooting and installation of software for desktop computers
                            </Card.Text>
                            <Card.Text className="experience-cards-text">
                                ➼ Xerox, Printer and Server maintenance
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="thumbnail-container">
                    <img className="thumbnails" src={Photoshop} alt="Photoshop" width={80}></img>
                    <img className="thumbnails" src={VSCode} alt="VS Code" width={80}></img>
                    <img className="thumbnails" src={HTML5} alt="HTML 5" width={80}></img>
                    <img className="thumbnails" src={CSS} alt="CSS" width={80}></img>
                    <img className="thumbnails" src={JavaScript} alt="JavaScript" width={80}></img>
                    <img className="thumbnails" src={React} alt="React" width={80}></img>
                    <img className="thumbnails" src={MongoDB} alt="Mongo DB" width={80}></img>
                    <img className="thumbnails" src={NodeExpress} alt="Node.js Express" width={80}></img>
                </div>
            </div>
        </div>
    )
}

export default ResumeContent;