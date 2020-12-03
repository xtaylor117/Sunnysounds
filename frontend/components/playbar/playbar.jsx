import React from 'react'
import { render } from 'react-dom'

class Playbar extends React.Component {
    constructor(props) {
        super(props)
        
        // this.state = {
        //     playlist: this.props.songs,
        //     prevSong: this.props.songs[this.props.song.id - 2],
        //     currentSong: this.props.song,
        //     nextSong: this.props.songs[this.props.song.id]
        // }
    }


    render() {
        return(

            <p>
                hey!
            </p>
            // <div className="playbar-controls" id={this.props.song.id + 2000}>
            //     <button className="playbar-prev-song-button"><i class="fas fa-backward"></i></button>
            //     <button className="playbar-play-button"><i class="fas fa-play"></i></button>
            //     <button className="playbar-pause-button"><i class="fas fa-pause"></i></button>
            //     <button className="playbar-next-song-button"><i class="fas fa-forward"></i></button>
            //     <button className="playbar-volume-button"><i class="fa fa-volume"></i></button>
            // </div>
        )
    }
}

export default Playbar