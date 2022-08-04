import React from 'react'

const Hero = (props) => {
    return (
        <div className="card-div effect1">
            <div className='card--img-div'>
                <img src={props.url} alt="Image" className='card-img' />
            </div>
            <div className='card-details'>
                <div className="t2">
                    <span className='location-text'><h3>{props.location}</h3></span>
                    <a href={props.googleMapsUrl} className="google">Goolge maps</a>
                </div>
                <h2 className='card-title'>{props.title}</h2>
                <h3 className='date'>{props.startDate} {props.endDate}</h3>
                <p className='card-description'>{props.description}</p>
            </div>
        </div>
    )
}

export default Hero