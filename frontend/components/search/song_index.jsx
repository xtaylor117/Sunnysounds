import React from 'react'
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.receiveAllSongs(this.props.currentUser.id);
    }

    render() {
        return(
            <div>
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