import React from 'react'
import { Link } from 'react-router-dom'

class SongForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            genre: '',
            artist_id: this.props.currentUser.id,
            audio_url: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const song = Object.assign({}, this.state);
        this.props.processForm(song)
            .then(this.props.closeModal)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br />
                        <div className="login-form">
                            <br />
                            <label>
                                <input type="file"/>
                            </label>
                            <br />
                            <label>
                                <input autoFocus type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className={this.props.errors.length ? "errors" : "login-input"}
                                    placeholder="Enter Title"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.genre}
                                    onChange={this.update('genre')}
                                    className={this.props.errors.length ? "errors" : "login-input"}
                                    placeholder="Enter Genre"
                                />
                            </label>
                            <br />
                            <div className='login-errors'>
                                {this.renderErrors()}
                            </div>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SongForm;