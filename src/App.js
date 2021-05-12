import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <div>

        <Router>
          <Switch>
            {/*===| Routes |=================================*/}
            <Route component={Home} exact path='/' />
            {/* <Route component={About} path='/about' /> */}
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
