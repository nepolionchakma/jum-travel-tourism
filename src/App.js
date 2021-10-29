import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/Tours';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
