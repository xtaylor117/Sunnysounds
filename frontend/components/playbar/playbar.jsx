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

    componentWillUnmount() {
        console.log("change pages?")
    }

    prevSong() {
        if (this.props.prevSong.length != 0) {
            let latestSong = this.props.prevSong.pop().id
            let song = document.getElementById(latestSong)
            song.currentTime = 0;
            song.play();

            if (this.props.prevSong.length != 0) {
                this.props.receivePrevSong(this.props.prevSong.pop().id);
            } else {
                this.props.receivePrevSong(latestSong)
            }
            this.props.receiveCurrentSong(latestSong);
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
        let song = document.getElementById(this.props.currentSong.id)
        song.volume == 0 ? song.volume = 1 : song.volume = 0;
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
                    <span>{this.props.currentSong.title}</span>
                    <span>{this.props.artists.filter(artist => artist.id === this.props.currentSong.artist_id).map(artist => artist.username)}</span>
                </div>
            </>
        )
    }
}

export default Playbar