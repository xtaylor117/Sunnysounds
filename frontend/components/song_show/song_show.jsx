import React from 'react'
import SongIndexItem from '../search/song_index_item'

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

    // currentSong() {
    //     if (this.props.currentSong) {
    //         return(
    //             this.props.songs.filter(song => (
    //                 song.id === this.props.currentSong.id
    //             )).map(song => (
    //                 <SongIndexItem
    //                     song={this.props.song}
    //                     key={this.props.song.id}
    //                     audioUrl={this.props.song.audioUrl}
    //                     photoUrl={this.props.song.photoUrl}
    //                     currentUser={this.props.currentUser}
    //                     openModal={this.props.openModal}
    //                     deleteSong={this.props.deleteSong}
    //                     artists={this.props.artists}
    //                     receiveSong={this.props.receiveSong}
    //                     receiveCurrentSong={this.props.receiveCurrentSong}
    //                     createComment={this.props.createComment}
    //                 />
    //             ))   
    //         )
    //     }
    // }
    
    render() {
        if (this.props.songs.length === 0) {
            return null
        }
        
        const currentUser = this.props.currentUser
        const currentUserComments = Object.values(this.props.comments).filter(comment => comment.author_id === this.props.currentUser.id).reverse().slice(0, 5).map(comment => {
            return(
                <div className='single-comment'>
                    <p>"{comment.body}"</p>
                    {/* <p>{comment.song_id}</p> */}
                </div>
            )
        })
        
        const song = this.props.songs.filter(song => song.id === parseInt(this.props.match.params.songId))[0]
        debugger

        return(
            <div className='discovery-container'>
                <div className='song-show-left'>
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
                </div>
                <div className='discovery-sidebar'>
                    <div className='link-container'>
                        <h3>Get to know me!</h3>
                        <ul className='affiliate-links'>
                            <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://angel.co/u/taylor-lee-18" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
                        </ul>
                    </div>
                    <div className="latest-upload" >
                        <h3>~Song Playing~</h3>
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