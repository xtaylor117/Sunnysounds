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
        // debugger
        return(
            <div className="profile-container">
                <div className="profile-left">
                    {this.props.songs.filter(song => (
                        song.artist_id === this.props.artistId
                    )).map(song => (
                        <SongIndexItem
                            song={song}
                            key={song.id}
                        />
                    ))}
                </div>
            </div>
        )
    }

}


export default ArtistShow;
