import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import Navigation from './components/Navigation';
import AdminScreen from './screens/AdminScreen';
import SearchFlightScreen from './screens/SearchFlightScreen';
import Footer from './components/Footer';
import UpdateFlightScreen from './screens/UpdateFlightScreen';
import UpdateFlightForm from './screens/UpdateFlightForm';
import CancelFlightScreen from './screens/CancelFlightScreen';
import CancelBookingScreen from './screens/CancelBookingsScreen';
import ShowBookingScreen from './screens/ShowBookingsScreen';
import AddAirlineScreen from './screens/AddAirlineScreen';
import GetPassengerListScreen from './screens/GetPassengerListScreen';
import FinalListPassengerScreen from './screens/FinalListPassengerScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import UpdateBookingScreen from './screens/UpdateBookingScreen';
import TicketHistoryForCustomerScreen from './screens/TicketHistoryForCustomerScreen';
import AboutScreen from './screens/AboutScreen';
import ShowUserBookingScreen from './screens/ShowUserBookingsScreen';

import contact2 from './screens/contact2';
function App() {
  return (
    <div>
      {/* <ToastContainer/> */}
      <Router>
        <div className="container">
        <Navigation/>
        <Switch>
        <div class="jumbotron" >
          <div>
          <img src="/images/flight.gif" class="col-lg-10" width="2000" height="500"/>
          </div>
       
       
          <Route path="/"  exact component={SigninScreen}/>
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/signup" component={SignupScreen}/>
          <Route path="/admin" component={AdminScreen}/>
          <Route path="/customer/search_flight" component={SearchFlightScreen}/>
          <Route path="/update_flight" component={UpdateFlightScreen}/>
          <Route path="/update_flight_form" component={UpdateFlightForm}/>
          <Route path="/cancel_flight" component={CancelFlightScreen}/>
          <Route path="/cancel_booking" component={CancelBookingScreen}/>
          <Route path="/show_bookings" component={ShowBookingScreen}/>
          <Route path="/add_airline" component={AddAirlineScreen}/>
          <Route path="/passenger_list" component={GetPassengerListScreen}/>
          <Route path="/list" component={FinalListPassengerScreen}/>
          <Route path="/edit_profile" component={EditProfileScreen} />
          <Route path="/update_bookings" component={UpdateBookingScreen}/>
          <Route path="/customer_showBookings" component={TicketHistoryForCustomerScreen}/>
          <Route path="/about" component={AboutScreen}/>
          <Route path="/contactus" component={contact2}></Route>
          <Route path="/show_userbookings" component={ShowUserBookingScreen}/>
          </div>
        </Switch>
        <Footer/>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
