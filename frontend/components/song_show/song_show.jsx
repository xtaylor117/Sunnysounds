import React from 'react'
import SongIndexItem from '../search/song_index_item'
import { Link } from 'react-router-dom'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.receiveAllComments()
        this.props.receiveAllArtists()
        this.props.receiveAllSongs()
        this.props.receiveSong(this.props.match.params.songId)
    }

    timeDiff(comment) {
        // const now = new Date();
        // let years = now.getUTCFullYear() - comment.created_at.slice(0, 4);
        // let months = now.getUTCMonth() + 1 - comment.created_at.slice(5, 7);
        // let days = now.getUTCDate() - comment.created_at.slice(8, 10);
        // let hours = now.getUTCHours() - comment.created_at.slice(11, 13);
        // let minutes = now.getUTCMinutes() - comment.created_at.slice(14, 16);
        // let seconds = now.getUTCSeconds() - comment.created_at.slice(17, 19);
        // if (years > 0) {
        //     return <p className='date-created'>{`${years} years ago`}</p>
        // }
        // else if (months > 0) {
        //     return <p className='date-created'>{`${months} months ago`}</p>
        // }
        // else if (days > 7) {
        //     return <p className='date-created'>{`${Math.floor(days / 7)} weeks ago`}</p>
        // }
        // else if (days > 0) {
        //     return <p className='date-created'>{`${days} days ago`}</p>
        // }
        // else if (hours > 0) {
        //     return <p className='date-created'>{`${hours} hours ago`}</p>
        // }
        // else if (minutes > 0) {
        //     return <p className='date-created'>{`${minutes} minutes ago`}</p>
        // }
        // else if (seconds > 0) {
        //     return <p className='date-created'>{`${seconds} seconds ago`}</p>
        // }
        // else {
        //     return <p className='date-created'>{`just created`}</p>
        // }
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
                            currentUser={currentUser}
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
        if (this.props.songs.length === 0) {
            return null
        }
        
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
        
        const song = this.props.songs.filter(song => song.id === parseInt(this.props.match.params.songId))[0]
        const songComments = this.props.comments.filter(comment => comment.song_id === song.id).reverse().map(comment => {
            if (comment.author_id === currentUser.id) {
                return(
                    <>
                        <Link to={`/artists/${comment.author_id}`}> 
                            <h3 className="comment-author">{Object.values(this.props.artists).filter(artist => artist.id === comment.author_id).map(artist => artist.username)}</h3>
                        </Link>
                        <li className='song-show-comment' key={`comment-${comment.id}`}>{comment.body}</li>
                        <p>{this.timeDiff(comment)}</p>
                        <button className='comment-delete-button' onClick={() => this.props.deleteComment(comment.id)}>x</button>
                    </>
                )
            } else {
                return(
                    <>
                        <Link to={`/artists/${comment.author_id}`}>
                            <h3 className="comment-author">{Object.values(this.props.artists).filter(artist => artist.id === comment.author_id).map(artist => artist.username)}</h3>
                        </Link>
                        <li className='song-show-comment' key={`comment-${comment.id}`}>{comment.body}</li>
                        <p>{this.timeDiff(comment)}</p>
                    </>
                )
            }
        })

        return(
            <div className='discovery-container'>
                <div className='song-show-left'>
                    <ul className='all-song-comments'>
                        {songComments}
                    </ul>
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
                        receivePrevSong={this.props.receivePrevSong}
                        receiveNextSong={this.props.receiveNextSong}
                        createComment={this.props.createComment}
                        currentSong={this.props.currentSong}
                        prevSong={this.props.prevSong}
                        nextSong={this.props.nextSong}
                    />
                    <img className='show-banner' src={song.photoUrl} />
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


export default SongShow;