import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from '../search/song_index_item'


class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.receiveAllSongs()
        this.props.receiveAllArtists()
        this.props.receiveAllComments()
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
            <div className="profile-container">
                <div className="profile-left">
                    {this.props.songs.filter(song => (
                        song.artist_id === this.props.artistId
                    )).map(song => (
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
                        />
                    ))}
                </div>
                <div className="discovery-sidebar">
                    <div className='link-container'>
                        <h3>Get to know me!</h3>
                        <ul className='affiliate-links'>
                            <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://angel.co/u/taylor-117" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
                        </ul>
                    </div>
                    <div className="latest-upload">
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


export default ArtistShow;
