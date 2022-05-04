import React from 'react'

function Entry(props) {
   return (
       <div className={props.id % 2 === 0 ? "entryContainerReverse" : "entryContainer"}>
           <img className={props.id % 2 === 0 ? "reverseMainImg" : "mainImg"} src={props.imgUrl} />
           <div className='entryTextContainer'>
                <div className='geoRow'>
                    <img className='ping' src={process.env.PUBLIC_URL+'images/ping.png'} />
                    <h3 className='country'>{props.location.toUpperCase()}</h3>
                    <a href={props.googleMapsUrl} className='googleMaps'>View On Google Maps</a>
                </div>
                <h1 className='title'>{props.title}</h1>
                <h3 className='dateLength'>{props.startDate} - {props.endDate}</h3>
                <p className='description'>{props.description}</p>
           </div>
       </div>
   )

}

export default Entry