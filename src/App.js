import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <HashRouter basename="/myportfolio">
        <Switch>
          <Route path="/#" exact component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
