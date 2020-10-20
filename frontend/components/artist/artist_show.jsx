import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from '../search/song_index_item'


class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveAllSongs()
        this.props.receiveArtist(this.props.artistId)
    }

    render() {

        const currentUser = this.props.currentUser
        const openModal = () => this.props.openModal

        return(
            <div className="profile-container">
                <div className="profile-left">
                    {this.props.songs.filter(song => (
                        song.artist_id === this.props.artistId
                    )).map(song => (
                        <SongIndexItem
                            song={song}
                            key={song.id}
                            currentUser={currentUser}
                            openModal={openModal}
                        />
                    ))}
                </div>
                <div className="discovery-sidebar">
                    <h3>Click These Links!</h3>
                        <ul className='affiliate-links'>
                            <li><a href="https://www.instagram.com/soundcloud/?hl=en">Instagram<i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/scsupport?lang=en">Twitter<i className="fa fa-twitter"></i></a></li>
                        </ul>
                </div>
            </div>
        )
    }

}


export default ArtistShow;
