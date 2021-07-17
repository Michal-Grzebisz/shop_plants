import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/_Home.js'
import Shop from './components/_Shop.js'
import './sass/main.scss';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </>
  )
}

export default App;
