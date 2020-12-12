import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CommentForm from '../comment_form/comment_form'
import { formatSongTime } from '../../utils/playbar_util'

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.settingsAuth = this.settingsAuth.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.includeGenre = this.includeGenre.bind(this);
    }

    componentDidMount() {
        $("audio").on("play", function () {
            $("audio").not(this).each(function (index, audio) {
                audio.pause();
            });
        });
    }

    componentWillUnmount() {
        clearInterval(this.currentTimeInterval)

        if (this.props.currentSong) {
            if (window.localStorage.isPlaying === 'true') {
                let song = document.getElementById(this.props.currentSong.id)
                if (!song) return null
                localStorage.setItem('currentSong', song.id)
                localStorage.setItem('currentTime', song.currentTime)
            }
        }
    }


    playSong() {
        let song = document.getElementById(this.props.song.id);
        let background;
        let glow;

        if (this.props.currentSong && this.props.currentSong.id != this.props.song.id) {
            song.currentTime = 0;
            background = document.getElementById(this.props.currentSong.id + 1000)
            glow = document.getElementById(this.props.currentSong.id + 2000)

            if (background) {
                background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
                glow.classList.remove('currently-playing')
            }

            this.props.receivePrevSong(this.props.currentSong.id)
            this.props.receiveCurrentSong(this.props.song.id)
            if (!(this.props.location.pathname === "/" && window.sessionStorage.playlist !== undefined)) {
                this.props.receiveNextSong(this.props.song.id - 1)
            }
        } else {
            this.props.receiveCurrentSong(this.props.song.id);
            if (!(this.props.location.pathname === "/" && window.sessionStorage.playlist !== undefined)) {
                this.props.receiveNextSong(this.props.song.id - 1)
            }
        }

        // song = document.getElementById(this.props.song.id);
        background = document.getElementById(this.props.song.id + 1000)
        glow = document.getElementById(this.props.song.id + 2000)
        
        if (song.paused) {
            if (document.getElementById('play-button')) {
                document.getElementById('play-button').classList.add("hidden")
                document.getElementById('pause-button').classList.remove("hidden")
            }

            background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
            glow.classList.add('currently-playing')
            localStorage.setItem('isPlaying', true)
            $("audio").on("play", function () {
                $("audio").not(this).each(function (index, audio) {
                    audio.pause();
                });
            });

            this.currentTimeInterval = setInterval(()=> {
                let song = document.getElementById(this.props.currentSong.id)

                if (!song) {
                    clearInterval(this.currentTimeInterval)
                }

                let scrubber = document.getElementById('scrubber')
                let time = document.getElementById('scrubber-current')
                
                scrubber.value = song.currentTime;
                time.innerText = `${formatSongTime(song.currentTime)}`
                this.setState({ currentTime: song.currentTime})
                
            },50);
            
            song.play()
        } else {
            if (document.getElementById('play-button')) {
                document.getElementById('play-button').classList.remove("hidden")
                document.getElementById('pause-button').classList.add("hidden")
            }
            clearInterval(this.currentTimeInterval)
            background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
            glow.classList.remove('currently-playing')
            localStorage.setItem('isPlaying', false)
            song.pause()
        }
    }

    handleDelete() {
        if (this.props.location.pathname === (`/songs/${this.props.song.id}`)) {
            this.props.deleteSong(this.props.song.id)
                .then(this.props.history.push(`/artists/${this.props.currentUser.id}`))
        } else {
            this.props.deleteSong(this.props.song.id)
        }
    }

    settingsAuth() {
        let songId = this.props.song.id;

        if (!this.props.currentUser || !this.props.song) return null

        if (this.props.currentUser.id === this.props.song.artist_id) {
            return(
                <div className="song-edit-button">
                    <i className="fas fa-cogs"></i>
                    <div className="song-dropdown">
                        <button onClick={() => this.props.openModal({formType:"edit", song:this.props.song})}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            )
        }
    }

    commentForm() {
        if(!this.props.currentUser) {
            return null
        } else {
            return(
                 <CommentForm songId={this.props.song.id} createComment={this.props.createComment} currentUser={this.props.currentUser}/>
            )
        }
    }

    includeGenre() {
        let genre = this.props.song.genre;

        if (genre) {
            return (
                <div className="index-item-genre">Genre: {genre}</div>
            )
        } else {
            return null
        }
    }

    render() {
        if (!this.props.artists[this.props.song.artist_id - 1]) return null

        const { title, artist_id, genre, id } = this.props.song;
        let name = this.props.artists[this.props.song.artist_id - 1]["username"]

        return (
            <>
                <div className="index-item-info">
                    <div className="item-info-left" id={this.props.song.id + 2000} >
                        <div onClick={() => this.playSong()} className="custom-audio-player">
                        <img className='song-box-photo' src={this.props.photoUrl}/>
                            <button className="play-button" id={this.props.song.id + 1000} />
                            <audio controls className='audio-player' id={this.props.song.id}>
                                <source src={this.props.audioUrl} type="audio/mpeg" />   
                            </audio>
                        </div>
                        <div className="song-info">
                            {this.includeGenre()}
                            <div className="index-item-title">
                                <Link to={`/songs/${id}`}>{title}</Link>
                            </div>
                            <div className="index-item-artist">
                                <Link to={`/artists/${artist_id}`}>{name}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item-info-right">
                       {this.commentForm()}
                    </div>
                </div>
                {this.settingsAuth()}
            </>
        );
    }
}


export default withRouter(SongIndexItem);


