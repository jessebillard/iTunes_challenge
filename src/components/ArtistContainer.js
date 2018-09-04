import React from 'react'
import ArtistCard from './ArtistCard'

const ArtistContainer = ({albums}) => {        
    return (
        <div className="flex-grid" >
            {albums.map((album, index) => <ArtistCard key={index} image={album.artworkUrl60} title={album.collectionName} />)}            
        </div>
    )
}

export default ArtistContainer