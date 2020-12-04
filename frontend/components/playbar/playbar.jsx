import React from 'react'
import { render } from 'react-dom'

class Playbar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            prevSong: this.props.prevSong,
            currentSong: this.props.currentSong,
            nextSong: this.props.nextSong
        }

        this.playSong = this.playSong.bind(this)
        this.prevSong = this.prevSong.bind(this)
        this.nextSong = this.nextSong.bind(this)
        this.pauseSong = this.pauseSong.bind(this)
        this.muteSong = this.muteSong.bind(this)
    }

    componentDidUpdate() {
        console.log('change song?')
    }

    prevSong() {
        console.log(this.props.prevSong)
        // debugger
    }

    playSong() {
        console.log(this.props.currentSong)
        // debugger
    }

    pauseSong() {
        console.log('pausing song')
        // debugger
    }

    nextSong() {
        console.log(this.props.nextSong)
        // debugger
    }

    muteSong() {
        debugger
    }

    

    render() {
        if (!this.props.currentSong) return null

        return(
            <>
                <audio controls className='audio-player' id={this.props.currentSong.id}>
                    <source src={this.props.currentSong.audioUrl} type="audio/mpeg" />   
                </audio>
                <div className="playbar-controls play" id={this.props.currentSong.id + 2000} >
                    <button onClick={() => this.prevSong()} className="playbar-prev-song-button"><i className="fas fa-backward"></i></button>
                    <button onClick={() => this.playSong()} className="playbar-play-button"><i className="fas fa-play"></i></button>
                    <button onClick={() => this.pauseSong()} className="playbar-pause-button"><i className="fas fa-pause"></i></button>
                    <button onClick={() => this.nextSong()} className="playbar-next-song-button"><i className="fas fa-forward"></i></button>
                    <button onClick={() => this.muteSong()} className="playbar-volume-button"><i className="fas fa-volume-up"></i></button>
                </div>
            </>
        )
    }
}

export default Playbar