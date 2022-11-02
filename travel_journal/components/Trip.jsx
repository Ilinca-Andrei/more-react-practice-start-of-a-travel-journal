import React from "react";

export default function Trip(props) {
    const trip = props.item;
    return (
        <div className="trip-container">
            <img src={trip.imageUrl}></img>
            <div className="trip-info">
                <div className="location">
                <img src="../src/assets/point.png"></img>
                <p> {trip.location.toUpperCase()}  <a href={trip.googleMapsUrl} target="_blank">View on Googe Maps</a></p>
                </div>
                <h1 className="title">{trip.title}</h1>
                <p className="date">{trip.startDate} - {trip.endDate}</p>
                <p className="description">{trip.description}</p>
            </div>
        </div>
    )
}