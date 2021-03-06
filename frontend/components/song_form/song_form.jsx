import React from 'react'
import { Link } from 'react-router-dom'

class SongForm extends React.Component {
    constructor(props){
        super(props);

        if (this.props.formType === 'edit') {
            this.state = this.props.song
        } else {
            this.state = {
                title: '',
                genre: '',
                artist_id: this.props.currentUser.id,
                audioFile: null,
                audioUrl: null,
                photoFile: null,
                photoUrl: "https://sunnysounds-seed.s3-us-west-1.amazonaws.com/sunny_logo.png"
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.editForm = this.editForm.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSongErrors();
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    editForm() {
        if (this.props.formType === 'create') {
            return(
                <label>
                    <label className="custom-song-upload">
                        <input className="audio-submit" onChange={this.handleFile} type="file" accept="audio/mpeg" />
                        Song Upload
                    </label>
                    <label className="custom-song-upload">
                        <input className="photo-submit" onChange={this.handleFile} type="file" accept="image/png, image/jpeg" />
                        Photo Upload
                    </label>
                </label>
            )
        } else {
            return(
                <label className="custom-song-upload">
                    <input className="photo-submit" onChange={this.handleFile} type="file" accept="image/png, image/jpeg" />
                        Photo Upload
                </label>
            )
        }
    }

    handleSubmit(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[artist_id]', this.state.artist_id);

        if (this.state.id) {
            formData.append('song[id]', this.state.id);
        }
        
        if (this.state.audioFile) {
            formData.append('song[audiofile]', this.state.audioFile);
        }

        if (this.state.photoFile) {
            formData.append('song[photofile]', this.state.photoFile);
        }


        this.props.processForm(formData)
            .then(this.props.closeModal)
            // .then(this.props.history.push(`/songs/${this.props.songs[this.props.songs.length - 1].id + 1}`))
    }

    handleFile(e) {
        e.stopPropagation();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];

        if (file.type === "image/png" || file.type === "image/jpeg") {
            reader.onloadend = () =>
            this.setState({photoUrl: reader.result, photoFile: file});
        } else {
            reader.onloadend = () =>
            this.setState({audioUrl: reader.result, audioFile: file })
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            if (file.type === "image/png" || file.type === "image/jpeg") {
                this.setState({ photoUrl: "https://sunnysounds-seed.s3-us-west-1.amazonaws.com/sunny_logo.png", photoFile: null })
            } else {
                this.setState({ audioUrl: "", audioFile: null });
            }
        }
        
    }

    renderErrors() {          
        return (
            <ul className="form-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        const audioPreview = this.state.audioUrl ? <audio controls className="audio-preview" src={this.state.audioUrl} /> : null;
        const photoPreview = this.state.photoUrl ? <img className={`photo-preview ${this.props.formType}` } src={this.state.photoUrl} /> : null;
        return(
            <>
                <div className="login-form-container">
                    {audioPreview}
                    {photoPreview}
                    <form onSubmit={this.handleSubmit} className="create-form-box">
                        <br />
                        <div className="login-form">
                            <br />
                            {this.editForm()}
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