import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// import BenchShowContainer from '../bench_show/bench_show_container';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     const songId = this.props.song.id;
    //     this.props.history.push(`${this.props.song.artist_id}/songs/${songId}`);
    // }

    render() {
        const { title, artist_id, genre } = this.props.song;
        return (
            <>
            {/* <div
                className="song-index-item"
                onClick={this.handleClick}
            > */}
                <div className="index-item-info">
                    <div className="index-item-title">Title: {title}</div>
                    <div className="index-item-artist"><Link to={`/artists/${artist_id}`}>Artist</Link></div>
                    <div className="index-item-genre">Genre: {genre}</div>
                </div>
            {/* </div> */}
            </>
        );
    }
}

export default withRouter(SongIndexItem);
