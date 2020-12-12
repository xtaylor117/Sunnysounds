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

            if (document.getElementById('play-button')) {
                document.getElementById('play-button').classList.add("hidden")
                document.getElementById('pause-button').classList.remove("hidden")
            }

            let song = document.getElementById(parseInt(window.localStorage.currentSong))
            let background = document.getElementById(parseInt(window.localStorage.currentSong) + 1000)
            let glow = document.getElementById(parseInt(window.localStorage.currentSong) + 2000)

            debugger
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
            document.getElementById('pause-button').classList.add("hidden")
            document.getElementById('play-button').classList.remove("hidden")

            let song = document.getElementById(parseInt(window.localStorage.currentSong))
            song.currentTime = parseFloat(window.localStorage.currentTime)
        }
    }

    componentWillReceiveProps(prevProps) {
        if (prevProps.currentSong && this.props.currentSong) {
            if (prevProps.currentSong.id !== this.props.currentSong.id) {
                clearInterval(this.currentTimeInterval)
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.currentTimeInterval)
        if (!this.props.currentSong) return null

        let song = document.getElementById(this.props.currentSong.id)


        localStorage.setItem('currentSong', song.id)
        localStorage.setItem('currentTime', window.localStorage.currentTime)

    }

    prevSong() {
        if (document.getElementById("pause-button").classList.contains("hidden")) {
            document.getElementById("play-button").classList.toggle("hidden")
            document.getElementById("pause-button").classList.toggle("hidden")
        }

        if (this.props.prevSong.length != 0) {
            let latestSong = this.props.prevSong.pop().id
            let song = document.getElementById(latestSong)

            this.currentTimeInterval = setInterval(()=> {
                let song = document.getElementById(this.props.currentSong.id)
                let scrubber = document.getElementById('scrubber')

                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})

            },50);

            song.currentTime = 0;
            song.play();
            
            if (this.props.prevSong.length != 0) {
                this.props.receivePrevSong(this.props.prevSong.pop().id);
            }

            let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
            let oldGlow = document.getElementById(this.props.currentSong.id + 2000)
            let newBackground = document.getElementById(latestSong + 1000)
            let newGlow = document.getElementById(latestSong + 2000)

            oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
            oldGlow.classList.remove('currently-playing')
            newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
            newGlow.classList.add('currently-playing')

            this.props.receiveCurrentSong(latestSong);
            if (!(this.props.location.pathname === "/" && window.sessionStorage.playlist !== undefined)) {
                this.props.receiveNextSong(this.props.currentSong.id);
            }
            
        } else {
            let song = document.getElementById(this.props.currentSong.id)
            song.currentTime = 0;
            song.play()
        }
    }

    playSong() {
        document.getElementById("pause-button").classList.remove("hidden")
        document.getElementById("play-button").classList.add("hidden")
        
        let song = document.getElementById(this.props.currentSong.id)
        let background = document.getElementById(this.props.currentSong.id + 1000)
        let glow = document.getElementById(this.props.currentSong.id + 2000)


        if (!song) return null

        if (background) {
            background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
            glow.classList.toggle('currently-playing')
        }
        
        localStorage.setItem('isPlaying', true)

        this.currentTimeInterval = setInterval(()=> {
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')

            scrubber.value = song.currentTime;
            this.setState({ currentTime: song.currentTime})
    
        },50);

        song.play();
    }

    pauseSong() {
        document.getElementById("pause-button").classList.add("hidden")
        document.getElementById("play-button").classList.remove("hidden")

        let song = document.getElementById(this.props.currentSong.id)

  

        let background = document.getElementById(this.props.currentSong.id + 1000)
        let glow = document.getElementById(this.props.currentSong.id + 2000)

        if (background) {
            background.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
            glow.classList.toggle('currently-playing')
        }

        localStorage.setItem('isPlaying', false)
        this.currentTimeInterval = setInterval(()=> {
            let song = document.getElementById(this.props.currentSong.id)
            let scrubber = document.getElementById('scrubber')

            scrubber.value = song.currentTime;
            this.setState({ currentTime: song.currentTime})

        },50);
        song.pause();
    }

    nextSong() {
        if (document.getElementById("pause-button").classList.contains("hidden")) {
            document.getElementById("play-button").classList.toggle("hidden")
            document.getElementById("pause-button").classList.toggle("hidden")
        }

        clearInterval(this.currentTimeInterval)
        this.setState({currentTime: 0})

        if (!this.props.nextSong) {
            if (this.props.location.pathname === "/" && window.sessionStorage.playlist !== undefined) {
                let playlist = JSON.parse(window.sessionStorage.playlist)
                let next = playlist.map(song => song.id).indexOf(this.props.currentSong.id) + 1
    
                if (playlist[next]){
                    let song = document.getElementById(playlist[next].id)
                    let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
                    let oldGlow = document.getElementById(this.props.currentSong.id + 2000)
                    let newBackground = document.getElementById(playlist[next].id + 1000)
                    let newGlow = document.getElementById(playlist[next].id + 2000)
    
                    if (oldBackground) {
                        oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
                        oldGlow.classList.remove('currently-playing')
                    }

                    if (newBackground) {
                        newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
                        newGlow.classList.add('currently-playing')
                    }
    
                    this.currentTimeInterval = setInterval(()=> {
                        let song = document.getElementById(this.props.currentSong.id)
                        let scrubber = document.getElementById('scrubber')
                        
                        scrubber.value = song.currentTime;
                        this.setState({ currentTime: song.currentTime})
                    
                    },50);
    
                    song.currentTime = 0;
                    song.play();

                    this.props.receivePrevSong(this.props.currentSong.id);
                    this.props.receiveCurrentSong(playlist[next].id);
                }
            } else {
                return null
            }
        } else {
            let song = document.getElementById(this.props.nextSong.id)
            let oldBackground = document.getElementById(this.props.currentSong.id + 1000)
            let oldGlow = document.getElementById(this.props.currentSong.id + 2000)
            let newBackground = document.getElementById(this.props.nextSong.id + 1000)
            let newGlow = document.getElementById(this.props.nextSong.id + 2000)
            
            if (oldBackground) {
                oldBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/play_button.png')"
                oldGlow.classList.remove('currently-playing')
            }

            if (newBackground) {
                newBackground.style.backgroundImage = "url('https://sunnysounds-seed.s3-us-west-1.amazonaws.com/pause_button.png')"
                newGlow.classList.add('currently-playing')
            }
            
            
            this.currentTimeInterval = setInterval(()=> {
                let song = document.getElementById(this.props.currentSong.id)
                let scrubber = document.getElementById('scrubber')

                scrubber.value = song.currentTime;
                this.setState({ currentTime: song.currentTime})

            },50);
    
            song.currentTime = 0;
            song.play();
    
            this.props.receivePrevSong(this.props.currentSong.id);
            this.props.receiveCurrentSong(this.props.nextSong.id);
            this.props.receiveNextSong(this.props.nextSong.id - 1);
        }
        
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
                    <button onClick={() => this.playSong()} className="playbar-play-button hidden" id="play-button"><i className="fas fa-play"></i></button>
                    <button onClick={() => this.pauseSong()} className="playbar-pause-button" id="pause-button"><i className="fas fa-pause"></i></button>
                    <button onClick={() => this.nextSong()} className="playbar-next-song-button"><i className="fas fa-forward"></i></button>
                    <button onClick={() => this.muteSong()} className="playbar-volume-button"><i className="fas fa-volume-up"></i></button>
                    <div className='playbar-scrubber'>
                        <p id='scrubber-current'>{formatSongTime(this.state.currentTime)}</p>
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