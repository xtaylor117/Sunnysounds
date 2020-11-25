import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from '../search/song_index_item'


class ArtistShow extends React.Component {
    constructor(props) {
        super(props);

        this.currentSong = this.currentSong.bind(this)
    }
    
    componentDidMount() {
        this.props.receiveAllSongs()
        this.props.receiveAllArtists()
    }

    currentSong() {
        if (this.props.currentSong) {
            return (
                this.props.songs.filter(song => (
                    song.id === this.props.currentSong.id
                )).map(song => (
                    <SongIndexItem
                        song={song}
                        key={song.id}
                        audioUrl={song.audioUrl}
                        photoUrl={song.photoUrl}
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                    />
                ))
            )
        }
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
                            photoUrl={song.photoUrl}
                            currentUser={currentUser}
                            openModal={this.props.openModal}
                            deleteSong={this.props.deleteSong}
                            artists={this.props.artists}
                            receiveSong={this.props.receiveSong}
                            receiveCurrentSong={this.props.receiveCurrentSong}
                        />
                    ))}
                </div>
                <div className="discovery-sidebar">
                    <div className='link-container'>
                        <h3>Get to know me!</h3>
                        <ul className='affiliate-links'>
                            <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://angel.co/u/taylor-lee-18" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
                        </ul>
                    </div>
                    <div className="latest-upload">
                        <h3>~Song Playing~</h3>
                        {this.currentSong()}
                    </div>
                    <div className='comments-container'>
                        <h3>Recent Comments</h3>
                        <div className="recent-comments">
                            <p>This song really bumps. Keep up the great work! I'll make sure to share this around.</p>
                            <p>OOOH!</p>
                            <p>I listen to this when I need help falling asleep!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default ArtistShow;
