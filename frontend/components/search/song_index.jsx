import React from 'react'
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.receiveAllSongs();
    }

    render() {

        return(
            <div className='discovery-container'>
                {/* <h1>Search Results: </h1> */}
                <div className='discovery-left'>
                    {this.props.songs.map(song => (
                        <SongIndexItem
                            song={song}
                            key={song.id}
                        />
                    ))}
                </div>
                <div className='discovery-sidebar'>
                    <h3>Who to follow</h3>
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


export default SongIndex;