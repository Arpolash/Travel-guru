import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { BookingContext } from '../../App';
import { travel } from '../TravelData/TravelData';


const HomeDetails = () => {
    const {bookingPackage} = useContext(BookingContext)
    const [booking,setBooking] = bookingPackage;
    const [info,setInfo] = useState([])

    useEffect(() =>{
        const matchedInfo = travel.filter(data => data.name === booking)
        setInfo(matchedInfo)
    },[booking])
    return (
        <div>
               {
                   info.map(data => <div> <h2>{data.name}</h2> <br/>
                    {data.text}
                    </div>)
               }
        </div>
    );
};

export default HomeDetails;