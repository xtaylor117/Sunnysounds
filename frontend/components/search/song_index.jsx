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
                {/* <h1>Search Results: </h1> */}
                <div className='discovery-left'>
                    {this.props.songs.map(song => (
                        <SongIndexItem
                            song={song}
                            key={song.id}
                        />
                    ))}
                </div>
                <div className='discovery-sidebar'>
                    <div className='sidebar-links'>Click Me!</div>
                </div>
            </div>
        )
    }
    
} 


export default SongIndex;