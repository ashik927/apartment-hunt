import React from 'react';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeDetails from './Components/ApartmentDetails/HomeDetails/HomeDetails';
import BookingList from './Components/Admin/BookingList/BookingList';
import AddRent from './Components/Admin/AddRent/AddRent';
import MyRent from './Components/Admin/MyRent/MyRent';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/login'>
            <Login></Login>
        </Route>
        <PrivetRoute path='/homedetails'>
            <HomeDetails></HomeDetails>
        </PrivetRoute>
        <Route path='/bookinglist'>
          <BookingList></BookingList>
        </Route>
        <Route path='/addRentHouse'>
          <AddRent></AddRent>
        </Route>
        <Route path='/myRent'>
          <MyRent></MyRent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
