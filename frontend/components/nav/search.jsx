import React from 'react'

class SongList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <input type="text" className="search-bar" placeholder='Search for Artists and Songs' value={this.props.inputValue} onChange={this.props.songFilterOnChange}/>
                <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
            </>
        )
    }
}
    


export default SongList;