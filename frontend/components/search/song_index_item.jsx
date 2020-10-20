import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
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
            </>
        );
    }
}


export default withRouter(SongIndexItem);
