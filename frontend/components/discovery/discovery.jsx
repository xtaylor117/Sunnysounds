import React from 'react'
import SongIndexItem from '../search/song_index_item'

class Discovery extends React.Component {
    constructor(props) {
        super(props)
        
        this.currentSong = this.currentSong.bind(this)
    }

    componentDidMount() {
        this.props.receiveAllArtists()
        this.props.receiveAllSongs()
    }


    currentSong() {
        if (this.props.currentSong) {
            return(
                this.props.songs.filter(song => (
                    song.id === this.props.currentSong.id
                )).map(song => (
                    <SongIndexItem
                        song={song}
                        key={song.id}
                        audioUrl={song.audioUrl}
                        photoUrl={song.photoUrl}
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                    />
                ))   
            )
        }
    }
    
    render() {
        const currentUser = this.props.currentUser

        const sortedSongs = this.props.artists.map(artist => 
                this.props.songs.filter(song => 
                artist.id === song.artist_id))
        
        // for ( let i =0; i < sortedSongs.length; i++) { 
        //     for ( let j = 0; j < sortedSongs[i].length; j++ ) { 
        //         console.log(sortedSongs[i][j]) 
        //     } 
        // }

        debugger

        return(
            <div className='discovery-container'>
                <div className='discovery-left'>

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="..." alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                <div className='discovery-sidebar'>
                    <div className="latest-upload" >
                        <h3>~Song Playing~</h3>
                        {this.currentSong()}
                    </div>
                    <div className='comments-container'>
                        <h3>Recent Comments</h3>
                        <div className="recent-comments">
                            <p>This song really bumps. Keep up the great work! I'll make sure to share this around.</p>
                            <p>OOOH!</p>
                            <p>I listen to this when I need help falling asleep!</p>
                        </div>
                    </div>
                    <div className='link-container'>
                        <h3>Click These Links</h3>
                        <ul className='affiliate-links'>
                            <li><a href="https://www.instagram.com/soundcloud/?hl=en">Instagram</a></li>
                            <li><a href="https://twitter.com/scsupport?lang=en">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
} 


export default Discovery;