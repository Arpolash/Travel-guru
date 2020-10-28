import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TravelDetails from './Components/Home/TravelDetails';
import Location from './Components/Location/Location';
import PrivateRoute from './Components/PrivetaRoute/PrivateRoute';
import Form from './Components/Form/Form'


export const BookingContext = createContext()
function App() {
  
  const [booking,setBooking] = useState('SREEMONGOL');
  const [loggedInUser, setLoggedInUser] = useState({})

 
  return (
    <BookingContext.Provider value={{bookingPackage: [booking,setBooking],tourist : [loggedInUser, setLoggedInUser]}} >
     <Router>
     <Header></Header>
  
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/traveldetails">
           <TravelDetails></TravelDetails>
         </Route>
         <Route exact path="/form">
         <Form></Form>
         </Route>
         <PrivateRoute path="/location">
           <Location></Location>
         </PrivateRoute>
        
        </Switch>
        </Router>
    </BookingContext.Provider>
  );
}

export default App;
