
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { BookingContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { travel } from '../TravelData/TravelData';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const TravelDetails = () => {
    const classes = useStyles();
 
    const {bookingPackage} = useContext(BookingContext)
    const [booking,setBooking] = bookingPackage;
    const [info,setInfo] = useState([])

    useEffect(() =>{
        const matchedInfo = travel.filter(data => data.name === booking.toUpperCase())
        setInfo(matchedInfo)
    },[booking])
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mt-5">
                <h2>{booking}</h2>
            {
                info.map(data => <p>{data.text} 
                <br/>
                <br/>
                <br/>
                   {data.name} dolor sit amet consectetur adipisicing elit. Delectus, aperiam natus. Cupiditate in,
                    quia accusantium consectetur omnis nisi? Similique laborum non nisi repellat ducimus voluptas ea ut 
                    dolorem corrupti maxime sequi eaque, et iure ad sed ratione esse facilis quo?
                </p>)
            }
                </div>
                <div className="col-6">
                      
                           <div className="book-details">
                           <h5>Origin</h5>
                          <select>
                          <option value="city">City</option>
                            <option value="Sunamganj">Sunamganj</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Dhaka">Dhaka</option>
                          </select>
                          <br/>
                          <br/>
                          <h5>Destination</h5>
                          <h6>{booking}</h6>
                          <br/>
                          <br/>

                        <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Form"
                            type="date"
                            defaultValue="2020-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />

                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue="2020-06-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </form>
                                <br/>
                                <br/>
                            <Link to="/location"> <button className="btn btn-primary w-100">Start Booking</button></Link>
                           </div>
                      
                </div>
            </div>
        </div>
    );
};

export default TravelDetails;