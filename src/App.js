import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Lawncare from './Components/Lawncare/Lawncare';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Switch>
          {/*===| Routes |=================================*/}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/lawncare'>
            <Lawncare />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
