import Navigation from './Navigation';
import HomeContent from './HomeContent';
import './HomeContent.css';
import Brain from '../images/brain.jpg';

const Home = () => {
    return (
        <div>
            <img className="image" src={Brain} alt="Background Image"></img>
            <Navigation />
            <HomeContent />
        </div>
    )
}

export default Home;
