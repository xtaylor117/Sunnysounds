import React from 'react'
import SongIndexItem from './song_index_item'
import { Link } from 'react-router-dom'

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            songs: [],
            inputValue: ''
        }

        this.songFilterOnChange = this.songFilterOnChange.bind(this)
        this.songList = this.songList.bind(this)
    }

    componentDidMount() {
        this.props.receiveAllComments()
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
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                        receivePrevSong={this.props.receivePrevSong}
                        receiveNextSong={this.props.receiveNextSong}
                        createComment={this.props.createComment}
                        currentSong={this.props.currentSong}
                        prevSong={this.props.prevSong}
                        nextSong={this.props.nextSong}
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
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        deleteSong={this.props.deleteSong}
                        artists={this.props.artists}
                        receiveSong={this.props.receiveSong}
                        receiveCurrentSong={this.props.receiveCurrentSong}
                        receivePrevSong={this.props.receivePrevSong}
                        createComment={this.props.createComment}
                        currentSong={this.props.currentSong}
                        prevSong={this.props.prevSong}
                        nextSong={this.props.nextSong}
                    />
                ))
            )
        }
    }

    prevSongList() {
        return(
            this.props.prevSong.map(song => (
                        <SongIndexItem
                            songs={this.props.songs}
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
                            receivePrevSong={this.props.receivePrevSong}
                            createComment={this.props.createComment}
                            currentSong={this.props.currentSong}
                            prevSong={this.props.prevSong}
                        />
                    )).reverse()
        )
    }
    
    render() {
        const currentUser = this.props.currentUser
        
        const currentUserComments = Object.values(this.props.comments).filter(comment => comment.author_id === this.props.currentUser.id).reverse().slice(0, 5).map(comment => {
            if (comment.id % 2 == 0) {
                return(
                    <div className='single-comment' style={{background: 'lightgray' }}>
                        <Link to={`/songs/${comment.song_id}`}>{Object.values(this.props.songs).filter(song => song.id === comment.song_id).map(song => {
                            return(song.title)})}</Link>
                        <p>" {comment.body} "</p>
                    </div>
                )
            } else {
                return(
                    <div className='single-comment' style={{background: 'whitesmoke' }}>
                        <Link to={`/songs/${comment.song_id}`}>{Object.values(this.props.songs).filter(song => song.id === comment.song_id).map(song => {
                            return(song.title)})}</Link>
                        <p>" {comment.body} "</p>
                    </div>
                )
            }
                    
        })
        

        return(
            <div className='profile-container'>
                <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder='Search by song title or genre...' value={this.state.inputValue} onChange={this.songFilterOnChange}/>
                    <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
                </div>
                <div className='profile-left'>
                    {this.songList()}
                </div>
                <div className='discovery-sidebar'>
                    <div className='link-container'>
                        <h3>Get to know me!</h3>
                        <ul className='affiliate-links'>
                            <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://angel.co/u/taylor-117" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
                        </ul>
                    </div>
                    <div className="latest-upload" >
                        <h3>Listening History...</h3>
                        {this.prevSongList()}
                    </div>
                    <div className='comments-container'>
                        <h3>Your Recent Comments</h3>
                        <div className="recent-comments">
                            {currentUserComments}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
} 


export default SongIndex;