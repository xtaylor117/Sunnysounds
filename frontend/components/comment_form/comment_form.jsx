import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            body: '',
            author_id: this.props.currentUser,
            song_id: this.props.songId,
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(){
        this.props.createComment(this.state);
        this.setState({
            body: '',
            author_id: this.props.currentUser.id,
            song_id: this.props.songId
        })
    }

    render(){
        return(
            <div className="create-comment">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    className="comment-form-input"
                    placeholder="Leave a comment"
                    value={this.state.body}
                    onChange={this.handleChange('body')}/>
                </form>
            </div>
        )
    }
}

export default CommentForm