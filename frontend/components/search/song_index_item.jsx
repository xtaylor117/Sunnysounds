import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.settingsAuth = this.settingsAuth.bind(this)
    }

    settingsAuth() {
        let songId = this.props.song.id;
        if (this.props.currentUser.id === this.props.song.artist_id) {
            return(
                <div className="song-edit-button">
                    •••
                    <div className="song-dropdown">
                        <button onClick={() => this.props.openModal('edit')}>Edit</button>
                        <button onClick={() => this.props.deleteSong(songId)}>Delete</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        const { title, artist_id, genre } = this.props.song;
        return (
            <>
                <div className="index-item-info">
                    <div className="index-item-title">{title}</div>
                    <div className="index-item-artist"><Link to={`/artists/${artist_id}`}>Artist</Link></div>
                    <div className="index-item-genre">Genre: {genre}</div>
                </div>
                {this.settingsAuth()}
            </>
        );
    }
}


export default withRouter(SongIndexItem);
