import React from 'react'
import { render } from 'react-dom'

class Playbar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            prevSong: this.props.prevSong,
            currentSong: this.props.currentSong,
            nextSong: this.props.prevSong
        }
    }

    prevSong() {
        debugger
    }

    playSong() {
        debugger
    }

    pauseSong() {
        debugger
    }

    nextSong() {
        debugger
    }

    render() {
        return(
            <div className="playbar-controls" id={this.props.song.id + 2000} >
                <button onClick={() => this.prevSong()} className="playbar-prev-song-button"><i className="fas fa-backward"></i></button>
                <button onClick={() => this.playSong()} className="playbar-play-button"><i className="fas fa-play"></i></button>
                <button onClick={() => this.pauseSong()} className="playbar-pause-button"><i className="fas fa-pause"></i></button>
                <button onClick={() => this.nextSong()} className="playbar-next-song-button"><i className="fas fa-forward"></i></button>
                <button className="playbar-volume-button"><i className="fa fa-volume"></i></button>
            </div>
        )
    }
}

export default Playbar