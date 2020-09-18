import React, { useContext } from 'react';
import sundorbon from '../../travel-guru-master/Image/sundorbon.png';
import Sreemongol from '../../travel-guru-master/Image/download.jpg';
import Sajek from '../../travel-guru-master/Image/Sajek.png'
import HomeDetails from '../Home/HomeDetails'
import { BookingContext } from '../../App';
import { Link } from 'react-router-dom';


const Home = () => {
    const {bookingPackage} = useContext(BookingContext)
    const [booking,setBooking] = bookingPackage;
    console.log(booking)
    return (
        <div className="container home pl-4">
                <div className="row">
                    <div className="col-4">
                        <HomeDetails></HomeDetails>
                        <Link to="/traveldetails"><button className="btn btn-primary px-5">Booking</button></Link>
                    </div>
                            
                    <div className="co-8 d-flex">
                   <div className="img-card" onClick={() => setBooking('SREEMONGOL')}>
                       <img src={Sreemongol} alt=""/>
                       <h4>SREEMONGOL</h4>
                   </div>
                   <div className="img-card" onClick={() => setBooking('SUNDORBON')}>
                       <img src={sundorbon} alt=""/>
                       <h4>SUNDORBON</h4>
                   </div>
                   <div className="img-card" onClick={() => setBooking('SAJEK')}>
                       <img src={Sajek} alt=""/>
                       <h4>SAJEK</h4>
                   </div>
                </div>
                </div>
                        </div>                
                        
                 
    
    );
};

export default Home;