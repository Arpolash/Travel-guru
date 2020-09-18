import React, { useContext } from 'react';
import { BookingContext } from '../../App';
import hostelImg1 from '../../travel-guru-master/Image/Rectangle 26.png';
import hostelImg2 from '../../travel-guru-master/Image/Rectangle 27.png';
import hostelImg3 from '../../travel-guru-master/Image/Rectangle 28.png';
import star from '../../travel-guru-master/Icon/star_1_.png'
import LocationDetails from './LocationDetails';
import GoogleMap from '../GoogleMap/GoogleMap'

const Location = () => {
    const {bookingPackage} = useContext(BookingContext)
    const [booking] = bookingPackage;
    return (
        <div className="container mt-5">
            <p>252 stays Sep 21-20 3 guests</p>
            <h4>Stay in {booking}</h4>
           <div className="row">
               <div className="col-6">
                        <div className="row mt-2 ">
                            <LocationDetails img={hostelImg1} star={star} starCount={4.9} rating={20} dollar={32}></LocationDetails>
                        </div>
                        <div className="row mt-2 ">
                        <LocationDetails img={hostelImg2} star={star} starCount={5.00} rating={60} dollar={82}></LocationDetails>
                        </div>
                        <div className="row mt-2 ">
                        <LocationDetails img={hostelImg3} star={star} starCount={4.8} rating={17} dollar={54}></LocationDetails>
                        </div>
               </div>
        {/* -------------------google map----------------- */}
               <div className="col-6">
                   <GoogleMap></GoogleMap>
               </div>
           </div>
        </div>
    );
};

export default Location;