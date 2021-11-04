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
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Error from './Pages/Error/Error';
import ContactUs from './Pages/ContactUs/ContactUs';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

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
            <PrivateRoute path="/services/:id">
              <TourBooking></TourBooking>
            </PrivateRoute>
            <Route path="/place-order">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/add-service">
              <AddService></AddService>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/manage-services">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
