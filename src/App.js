import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/Tours';
import Header from './Pages/Header/Header';
import AuthProvider from './Context/AuthProvider';
// import Route from './Route/Route';
import Login from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import TourBooking from './Pages/TourBooking/TourBooking';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/my-order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/tour-booking/:id">
              <TourBooking></TourBooking>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
