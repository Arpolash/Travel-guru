import React from 'react';
const LocationDetails = (props) => {
    const {img,star,starCount,rating,dollar} = props;
    return (
        <>
            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img style={{width:'250px'}} src={img} alt="Not Found"/>
                            </div>
                            <div className="col-6">
                                <b>Light Bright airy Stylish apt & safe peaceful stay</b>
                                <p>4 Guests 2 bedrooms 2 bed 2 baths wif Air conditioning kitchen Cancellation fexibility available.</p>
                                <div className="row">
                                    <div className="col-6 d-flex">
                                      <img style={{width:'22px',height:'22px'}} src={star} alt=""/>
                                      <p>{starCount}({rating})</p>
                                    </div>
                                    <div className="col-6">
                                        <p><b>${dollar}</b>/night</p>
                                    </div>
                                </div>
                            </div>
                            </>
    );
};

export default LocationDetails;