import React from 'react'
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.receiveAllSongs();
    }

    render() {
        return(
            <div className='discovery-container'>
                <h1>Songs: </h1>
                {this.props.songs.map(song => (
                    <SongIndexItem
                        song={song}
                        key={song.id}
                    />
                ))}
            </div>
        )
    }
    
} 


export default SongIndex;