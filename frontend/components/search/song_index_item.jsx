import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.settingsAuth = this.settingsAuth.bind(this);
    }

    componentDidMount() {
        $("audio").on("play", function () {
            $("audio").not(this).each(function (index, audio) {
                audio.pause();
            });
        });
    }

    playSong() {
        let song = document.getElementById(this.props.song.id);
        let pic = document.getElementById(this.props.song.id + 1000)

        if (song.paused) {
            pic.src ="https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png"
            song.play()
        } else {
            pic.src ="https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png"
            song.pause()
        }

    }

    settingsAuth() {
        let songId = this.props.song.id;
        if (this.props.currentUser.id === this.props.song.artist_id) {
            return(
                <div className="song-edit-button">
                    •••
                    <div className="song-dropdown">
                        <button onClick={() => this.props.openModal({formType:"edit", song:this.props.song})}>Edit</button>
                        <button onClick={() => this.props.deleteSong(songId)}>Delete</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        const { title, artist_id, genre } = this.props.song;
        let name = this.props.artists[this.props.song.artist_id - 1]["username"]
        return (
            <>
                <div className="index-item-info">
                    <img src={this.props.photoUrl}/>
                    <div className="custom-audio-player">
                        <button onClick={() => this.playSong()} className="play-button"><img className="play-button-image" id={this.props.song.id + 1000} src="https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png" /></button>
                        {/* <AudioPlayer /> */}
                        <audio controls className='audio-player' id={this.props.song.id}>
                            <source src={this.props.audioUrl} type="audio/mpeg" />   
                        </audio>
                    </div>
                    <div className="index-item-title">{title}</div>
                    <div className="index-item-artist"><Link to={`/artists/${artist_id}`}>{name}</Link></div>
                    <div className="index-item-genre">Genre: {genre}</div>
                </div>
                {this.settingsAuth()}
            </>
        );
    }
}


export default withRouter(SongIndexItem);


