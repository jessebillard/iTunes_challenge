import React from 'react'

const ArtistCard = ({image, title}) => {
    return (
        <div className="col" >
            <img src={image} />
            <h6>{title}</h6>
        </div>
    )
}

export default ArtistCard