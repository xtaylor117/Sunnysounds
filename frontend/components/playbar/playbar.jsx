import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { receiveCurrentTime } from '../../actions/song_actions';
import { formatSongTime } from '../../utils/playbar_util';

class Playbar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            prevSong: this.props.prevSong,
            currentSong: this.props.currentSong,
            nextSong: this.props.nextSong,
            currentTime: 0
        }

        this.playSong = this.playSong.bind(this)
        this.prevSong = this.prevSong.bind(this)
        this.nextSong = this.nextSong.bind(this)
        this.pauseSong = this.pauseSong.bind(this)
        this.muteSong = this.muteSong.bind(this)
        this.handleScrubbing = this.handleScrubbing.bind(this)
    }

    componentDidMount() {
        if (!this.props.currentSong) return null

        if (window.localStorage.isPlaying === 'true') {
            let song = document.getElementById(parseInt(window.localStorage.currentSong))
            song.currentTime = parseInt(window.localStorage.currentTime)
            song.play()
        } else {
            let song = document.getElementById(parseInt(window.localStorage.currentSong))
            song.currentTime = parseInt(window.localStorage.currentTime)
        }
    }

    componentWillUnmount() {
        if (!this.props.currentSong) return null

        let song = document.getElementById(this.props.currentSong.id)
        localStorage.setItem('currentSong', song.id)
        localStorage.setItem('currentTime', this.state.currentTime)
    }

    // componentDidUpdate(prevProps) {
    //     if (window.localStorage.isPlaying === 'true') {
    //         let song = document.getElementById(parseInt(window.localStorage.currentSong))          

    //         if (song && song.paused) {
    //             song.currentTime = window.localStorage.currentTime
    //             this.playSong()
    //         }

    //     }
    // }

    prevSong() {
        if (this.props.prevSong.length != 0) {
            let latestSong = this.props.prevSong.pop().id
            let song = document.getElementById(latestSong)

            clearInterval(this.currentTimeInterval)
            song.currentTime = 0;
            song.play();
            
            if (this.props.prevSong.length != 0) {
                this.props.receivePrevSong(this.props.prevSong.pop().id);
            } else {
                this.props.receivePrevSong(latestSong)
            }

            let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
            let newBackground = document.getElementById(latestSong + 1000)

            oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
            newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"

            this.props.receiveCurrentSong(latestSong);
            this.props.receiveNextSong(this.props.currentSong.id);
        } else {
            let song = document.getElementById(this.props.currentSong.id)
            song.currentTime = 0;
            song.play()
        }
    }

    playSong() {
        let song = document.getElementById(this.props.currentSong.id)
        let background = document.getElementById(this.props.currentSong.id + 1000)
        background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
        localStorage.setItem('isPlaying', true)
        song.play();
    }

    pauseSong() {
        let song = document.getElementById(this.props.currentSong.id)
        let background = document.getElementById(this.props.currentSong.id + 1000)
        background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
        localStorage.setItem('isPlaying', false)
        song.pause();
    }

    nextSong() {
        
        let song = document.getElementById(this.props.nextSong.id)
        let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
        let newBackground = document.getElementById(this.props.nextSong.id + 1000)
        
        oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
        newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
        
        clearInterval(this.currentTimeInterval)
        song.currentTime = 0;
        song.play();

        this.props.receivePrevSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.nextSong.id);
        this.props.receiveNextSong(this.props.nextSong.id - 1);
    }

    muteSong() {
        let song = document.getElementById(this.props.currentSong.id)
        song.volume == 0 ? song.volume = 1 : song.volume = 0;
    }

    handleScrubbing(e){
        const song = document.getElementById(this.props.currentSong.id);
        song.currentTime = e.target.value;
    }

    render() {

        if (!this.props.currentSong) return null
        
        this.currentTimeInterval = setInterval(()=>{
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')
            if (song.ended) {
                this.setState({currentTime: 0})
                this.nextSong();
            } else {
                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})
            }
        },500);

        let song = document.getElementById(this.props.currentSong.id)

        return(
            <>
                <div className="playbar-controls play">
                    <button onClick={() => this.prevSong()} className="playbar-prev-song-button"><i className="fas fa-backward"></i></button>
                    <button onClick={() => this.playSong()} className="playbar-play-button"><i className="fas fa-play"></i></button>
                    <button onClick={() => this.pauseSong()} className="playbar-pause-button"><i className="fas fa-pause"></i></button>
                    <button onClick={() => this.nextSong()} className="playbar-next-song-button"><i className="fas fa-forward"></i></button>
                    <button onClick={() => this.muteSong()} className="playbar-volume-button"><i className="fas fa-volume-up"></i></button>
                    <div className='playbar-scrubber'>
                        <p>{formatSongTime(this.state.currentTime)}</p>
                        <input type="range" id="scrubber" min='0' max={song.duration}
                        onInput={this.handleScrubbing} className="slider"/>
                        <p>{formatSongTime(song.duration)}</p>
                    </div>
                    <div className='playbar-info'>
                        <Link to={`/songs/${this.props.currentSong.id}`}>{this.props.currentSong.title}</Link>
                        <Link to={`/artists/${this.props.currentSong.artist_id}`}>{this.props.artists.filter(artist => artist.id === this.props.currentSong.artist_id).map(artist => artist.username)}</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Playbar