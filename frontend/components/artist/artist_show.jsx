import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from '../search/song_index_item'


class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveAllSongs()
        this.props.receiveArtist(this.props.artistId)
    }

    render() {

        const currentUser = this.props.currentUser

        return(
            <div className="profile-container">
                <div className="profile-left">
                    {this.props.songs.filter(song => (
                        song.artist_id === this.props.artistId
                    )).map(song => (
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
                <div className="discovery-sidebar">
                    <div className="latest-upload">
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


export default ArtistShow;
