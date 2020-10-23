import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import AudioPlayer from 'react-h5-audio-player';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.settingsAuth = this.settingsAuth.bind(this);
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        $("audio").on("play", function () {
            $("audio").not(this).each(function (index, audio) {
                audio.pause();
            });
        });
    }

    settingsAuth() {
        let songId = this.props.song.id;
        if (this.props.currentUser.id === this.props.song.artist_id) {
            return(
                <div className="song-edit-button">
                    •••
                    <div className="song-dropdown">
                        <button onClick={() => this.props.openModal('edit')}>Edit</button>
                        <button onClick={() => this.props.deleteSong(songId)}>Delete</button>
                    </div>
                </div>
            )
        }
    }

    

    // artistUsername() {
    //     if (this.props.artists[this.props.song.artist_id].username) {
    //         return this.props.artists[this.props.song.artist_id].username
    //     }
    // }

    // handleClick() {
    //     this.props.recieveSong(this.props.song.id)
    //     debugger
    //     this.props.openModal('edit')
    // }

    render() {
        const { title, artist_id, genre } = this.props.song;
        // let username = Object.values(this.props.artists[this.props.song.artist_id])
        // debugger
        return (
            <>
                <div className="index-item-info">
                    <img src={this.props.photoUrl}/>
                    {/* <AudioPlayer className="audio-player" src={this.props.audioUrl} type="audio/mpeg" showJumpControls={false}/> */}
                    <audio controls className='audio-player'>
                        <source src={this.props.audioUrl} type="audio/mpeg" />   
                    </audio>
                    <div className="index-item-title">{title}</div>
                    <div className="index-item-artist"><Link to={`/artists/${artist_id}`}>Artist</Link></div>
                    <div className="index-item-genre">Genre: {genre}</div>
                </div>
                {this.settingsAuth()}
            </>
        );
    }
}


export default withRouter(SongIndexItem);


