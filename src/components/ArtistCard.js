import React from 'react'

const ArtistCard = ({image, title}) => {
    return (
        <div className="col" >
            <div className="img">
                <img alt={`Album cover for ${title}`} src={image} />
            </div>
            <h5>{title}</h5>
        </div>
    )
}

export default ArtistCard