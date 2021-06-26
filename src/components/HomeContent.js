import './HomeContent.css';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <div>
            <span id="slogan1">Think Creative.</span>
            <span id="slogan2">Be Creative.</span>
            <div>
                <span id="name">Hi, my name is Clarice! <br />I'm an aspiring web developer from the Philippines.</span>
                <Link to="/about-me"><span id="more">Read more</span></Link>
            </div>
        </div>
    )
}

export default HomeContent;