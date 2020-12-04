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
        if (this.props.prevSong) {
            let song = document.getElementById(this.props.prevSong.id)
            song.currentTime = 0;
            song.play();

            this.props.receivePrevSong(this.props.prevSong.id + 1);
            this.props.receiveCurrentSong(this.props.prevSong.id);
            this.props.receiveNextSong(this.props.currentSong.id);
        }
    }

    playSong() {
        let song = document.getElementById(this.props.currentSong.id)
        song.play();
    }

    pauseSong() {
        let song = document.getElementById(this.props.currentSong.id)
        song.pause();
    }

    nextSong() {
        
        let song = document.getElementById(this.props.nextSong.id)
        song.currentTime = 0;
        song.play();

        this.props.receivePrevSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.nextSong.id);
        this.props.receiveNextSong(this.props.nextSong.id - 1);
    }

    muteSong() {
        debugger
    }

    

    render() {
        if (!this.props.currentSong) return null

        return(
            <>
                <div className="playbar-controls play">
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