import React, { useEffect, useState } from 'react';
import { getDetails } from '../../utils/api';
import { Detail } from '../../types';
import './DetailPage.css';
import { BigHotelIcon } from '../../utils/icons';

const API_KEY = 'AIzaSyB6UduF6FxK9AFsNoOtqkNHGPPvBMzEKdI';
const DetailPage = () => {
    const [placeDetails, setPlaceDetails] = useState<Detail | null>(null)
    useEffect(() => {
        getDetails(window.location.search).then((value: any) => {
            console.log(value)
            setPlaceDetails(value)
        })
    }, []);
    return (
        <div className="container">
            {placeDetails && (
                <div>
                    <div className="basicdetails">
                        <h1> <BigHotelIcon /> {placeDetails.name}</h1>
                        <p>{placeDetails.formatted_address}</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col" id="Photodiv">
                                {placeDetails.photos.map((photo: any, index: any) => (
                                    <img
                                        key={index}
                                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`}
                                        alt={`Photo ${index + 1}`}
                                        style={{ margin: '10px', maxWidth: '25%' }}
                                    />
                                ))}
                            </div>
                            <div className="col" id="Detaildev">
                                <h2><b>{placeDetails.name}</b></h2>
                                <br />
                                <a href={placeDetails.website} target="_blank"><button className="button">Visit Website</button></a>
                                <a href={placeDetails.url} target="_blank"> <button className="button">See Directions</button></a>
                                <p><b>Address:</b> {placeDetails.formatted_address}</p>
                                <p><b>Phone: </b>{placeDetails.formatted_phone_number + " , " + placeDetails.international_phone_number}</p>
                                <div className="google-places-review">
                                    <h2>Google Places Review</h2>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <span
                                                key={value}
                                                className={value - Number(placeDetails.rating) <= 0 ? 'star filled' : 'star'}
                                            >★</span>
                                        ))}
                                        {placeDetails.rating ? placeDetails.rating + "/5" : "0/5"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!placeDetails ? <h1>Incorrect Place id</h1> : <></>}
        </div>
    )
}
export default DetailPage;



