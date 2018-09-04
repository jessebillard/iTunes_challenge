import React from 'react'

const ArtistCard = ({image, title}) => {
    return (
        <div className="col" >
            <img src={image} />
            <h4>{title}</h4>
        </div>
    )
}

export default ArtistCard