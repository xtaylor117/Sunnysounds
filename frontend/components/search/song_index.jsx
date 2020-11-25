import React from 'react'
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            songs: [],
            inputValue: ''
        }

        this.songFilterOnChange = this.songFilterOnChange.bind(this)
        this.songList = this.songList.bind(this)
        this.currentSong = this.currentSong.bind(this)
    }

    componentDidMount() {
        this.props.receiveAllArtists()
        this.props.receiveAllSongs()
    }
    
    songFilterOnChange(event) {
        this.setState({
            inputValue: event.target.value
        })

        let filteredSongs = this.props.songs.filter(song => {
            return (song.title.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            song.genre.toLowerCase().includes(this.state.inputValue.toLowerCase()))
        }).sort()

        this.setState({ songs: filteredSongs})
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
                        createComment={this.props.createComment}
                    />
                ))   
            )
        }
    }

    songList() {
        if (this.state.songs.length === 0) {
            return(
                this.props.songs.map(song => (
                    <SongIndexItem
                        songs={this.props.songs}
                        song={song}
                        key={song.id}
                        audioUrl={song.audioUrl}
                        photoUrl={song.photoUrl}
                        currentUser={currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                        createComment={this.props.createComment}
                    />
                ))
            )
        } else {
            return(
                this.state.songs.map(song => (
                    <SongIndexItem
                        songs={this.props.songs}
                        song={song}
                        key={song.id}
                        audioUrl={song.audioUrl}
                        photoUrl={song.photoUrl}
                        currentUser={currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                        createComment={this.props.createComment}
                    />
                ))
            )
        }
    }
    
    render() {
        const currentUser = this.props.currentUser

        return(
            <div className='discovery-container'>
                <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder='Search by song title or genre...' value={this.state.inputValue} onChange={this.songFilterOnChange}/>
                    <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
                </div>
                <div className='discovery-left'>
                    {this.songList()}
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


export default SongIndex;