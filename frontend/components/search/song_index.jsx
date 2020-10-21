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
        const currentUser = this.props.currentUser
        return(
            <div className='discovery-container'>
                {/* <h1>Search Results: </h1> */}
                <div className='discovery-left'>
                    {this.props.songs.map(song => (
                        <SongIndexItem
                            songs={this.props.songs}
                            song={song}
                            key={song.id}
                            audioUrl={song.audioUrl}
                            currentUser={currentUser}
                            openModal={this.props.openModal}
                            deleteSong={this.props.deleteSong}
                        />
                    ))}
                </div>
                <div className='discovery-sidebar'>
                    <div className="latest-upload" >
                        <h3>Your Last Upload</h3>
                        {this.props.songs.filter(song => (
                            song.id === this.props.latestSong.id
                        )).map(song => (
                            <SongIndexItem
                                song={song}
                                key={song.id}
                                audioUrl={song.audioUrl}
                                currentUser={currentUser}
                                openModal={this.props.openModal}
                                deleteSong={this.props.deleteSong}
                            />
                        ))}
                    </div>
                    <h3>Click These Links</h3>
                    <ul className='affiliate-links'>
                        <li><a href="https://www.instagram.com/soundcloud/?hl=en">Instagram</a></li>
                        <li><a href="https://twitter.com/scsupport?lang=en">Twitter</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    
} 


export default SongIndex;