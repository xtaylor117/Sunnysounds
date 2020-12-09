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
            let background = document.getElementById(parseInt(window.localStorage.currentSong) + 1000)
            let glow = document.getElementById(parseInt(window.localStorage.currentSong) + 2000)

            song.currentTime = parseFloat(window.localStorage.currentTime)
            this.currentTimeInterval = setInterval(()=> {
            let scrubber = document.getElementById('scrubber')
                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})
            },50);

            if (background) {
                background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
                glow.classList.toggle('currently-playing')
                localStorage.setItem('isPlaying', true)
            }

            song.play();
        } else {
            let song = document.getElementById(parseInt(window.localStorage.currentSong))
            song.currentTime = parseFloat(window.localStorage.currentTime)
        }
    }


    componentWillUnmount() {
        clearInterval(this.currentTimeInterval)
        if (!this.props.currentSong) return null

        let song = document.getElementById(this.props.currentSong.id)

        localStorage.setItem('currentSong', song.id)
        localStorage.setItem('currentTime', this.state.currentTime)
    }

    prevSong() {
        if (this.props.prevSong.length != 0) {
            let latestSong = this.props.prevSong.pop().id
            let song = document.getElementById(latestSong)

            this.currentTimeInterval = setInterval(()=> {
                let song = document.getElementById(this.props.currentSong.id)
                let scrubber = document.getElementById('scrubber')
                if (song.ended) {
                    this.setState({currentTime: 0})
                    this.nextSong();
                } else {
                    scrubber.value = song.currentTime;
                    this.setState({ currentTime: song.currentTime})
                }
            },50);

            song.currentTime = 0;
            song.play();
            
            if (this.props.prevSong.length != 0) {
                this.props.receivePrevSong(this.props.prevSong.pop().id);
            } else {
                this.props.receivePrevSong(latestSong)
            }

            let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
            let oldGlow = document.getElementById(this.props.currentSong.id + 2000)
            let newBackground = document.getElementById(latestSong + 1000)
            let newGlow = document.getElementById(latestSong + 2000)

            oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
            oldGlow.classList.toggle('currently-playing')
            newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
            newGlow.classList.toggle('currently-playing')

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
        let glow = document.getElementById(this.props.currentSong.id + 2000)


        if (!song) return null
        if (background) {
            background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
            glow.classList.toggle('currently-playing')
            localStorage.setItem('isPlaying', true)
        }


        this.currentTimeInterval = setInterval(()=> {
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')
            if (song.ended) {
                this.setState({currentTime: 0})
                this.nextSong();
            } else {
                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})
            }
        },50);

        song.play();
    }

    pauseSong() {
        let song = document.getElementById(this.props.currentSong.id)
        let background = document.getElementById(this.props.currentSong.id + 1000)
        let glow = document.getElementById(this.props.currentSong.id + 2000)

        background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
        glow.classList.toggle('currently-playing')

        localStorage.setItem('isPlaying', false)
        this.currentTimeInterval = setInterval(()=> {
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')
            if (song.ended) {
                this.setState({currentTime: 0})
                this.nextSong();
            } else {
                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})
            }
        },50);
        song.pause();
    }

    nextSong() {
        
        let song = document.getElementById(this.props.nextSong.id)
        if (!song) return null

        let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
        let oldGlow = document.getElementById(this.props.currentSong.id + 2000)
        let newBackground = document.getElementById(this.props.nextSong.id + 1000)
        let newGlow = document.getElementById(this.props.nextSong.id + 2000)
        
        
        oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
        oldGlow.classList.toggle('currently-playing')
        newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
        newGlow.classList.toggle('currently-playing')
        
        
        this.currentTimeInterval = setInterval(()=> {
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')
            if (song.ended) {
                this.setState({currentTime: 0})
                this.nextSong();
            } else {
                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})
            }
        },50);

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
        let song = document.getElementById(this.props.currentSong.id)
        
        if (!song) return null
        
        return(
            <>
                <audio controls className='audio-player' id={this.props.currentSong.id}>
                    <source src={this.props.currentSong.audioUrl} type="audio/mpeg" />   
                </audio>
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