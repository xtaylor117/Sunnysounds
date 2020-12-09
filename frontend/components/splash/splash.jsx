import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SongIndexItem from '../search/song_index_item'

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.songList = this.songList.bind(this)
    }

    componentDidMount() {
        this.props.receiveAllSongs()
        this.props.receiveAllArtists()
    }


    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    songList() {
        if (!this.props.songs) return null

        if (!window.sessionStorage.playlist || window.sessionStorage.playlist === '[]') {
            let playlist = this.shuffle(this.props.songs).slice(0, 10)
            sessionStorage.setItem('playlist', JSON.stringify(playlist))
            return(
            playlist.map(song => (
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
                        currentSong={this.props.currentSong}
                    />
                ))
        )
        } else {
            if (window.sessionStorage.playlist !== undefined) {
                let playlist = JSON.parse(window.sessionStorage.playlist)
                return(
                    playlist.map(song => (
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
                                currentSong={this.props.currentSong}
                            />
                        ))
                )
            }
        }
    }

    render() {
        return ( this.props.currentUser ? (<Redirect to='/discovery' />)
            : (<>
                <div className="splash-header">
                    <div className="splash-header-top">
                        <Link to='/'> Sunnysounds </Link>
                        <div className="splash-header-description">
                            <h1>Discover more with Sunnysounds!</h1>
                            <h2>
                                Sunnysounds brightens up your day no matter what time it is.
                                Upload, discover, and share music to your heart's content!
                            </h2>
                        </div>
                        <div className="login-signup">
                            <li>
                                <button onClick={() => this.props.openModal({formType: 'login'})}>Login</button>
                            </li>
                            <li>
                                <button onClick={() => this.props.openModal({formType: 'signup'})}>Signup</button>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="splash-container">
                    <h4 className="splash-title-1">These are some popular tracks these days...</h4>
                        <div className="splash-songs">
                            {this.songList()}
                        </div>

                    <div className='splash-call'>
                        <div className='splash-call-img'/>
                        <div className='splash-call-right'>
                            <h4 className="splash-title-2"> Calling all creators</h4>
                            <p className="creator-call">Get on Sunnysounds to connect with fans, share your sounds, and bask in the light. What are you waiting for?</p>
                        </div>
                    </div>

                    <div className='splash-call-2'>
                        <div className='splash-call-left'>
                            <h4 className="splash-title-3"> Be the best musician you can be</h4>
                            <p className="creator-call">No limits, no judgements, no drama. Just music.</p>
                        </div>
                        <div className='splash-call-img-2'/>
                    </div>

                    <div className="footer-session">
                        <h2>Thanks for listening. Now join with your own sounds!</h2>
                        <div className='footer-stuff'>
                            <button 
                                onClick={() => this.props.openModal({formType:'signup'})}
                                className='signup'>
                                Create account
                            </button>
                            <button 
                                onClick={() => this.props.openModal({formType: 'login'})}
                                className='signin'>
                                Sign in
                            </button>
                            <div className='footer-img'>
                                <h4>Celebrate your sounds-- anywhere, anytime.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        );
    }   
}  



export default Splash;