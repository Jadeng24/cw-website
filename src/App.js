import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Lawncare from './Components/Lawncare/Lawncare';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

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
          <Route path='/maintenance'>
            <Lawncare />
          </Route>
          <Route path='/lawncare'>
            <Lawncare />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
