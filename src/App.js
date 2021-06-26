import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/myportfolio/about-me" component={AboutMe} />
        <Route path="/myportfolio/resume" component={Resume} />
        <Route path="/myportfolio/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
