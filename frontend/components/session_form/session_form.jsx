import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        
        this.loginDemo = this.loginDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showButtons = this.showButtons.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
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


    showButtons() {
        if (this.props.formType === 'login') {
            return (
                <div className='show-buttons'>  
                    {this.props.otherForm}
                    <button className="demo-button" onClick={this.loginDemo}>
                        Demo a User!
                    </button>
                    <div className="auth-separator">
                        <div>or</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='show-buttons'>
                    {this.props.otherForm}
                    <div className="auth-separator">
                        <div>or</div>
                    </div>
                </div>
                
            )
        }
    }
    
    loginDemo() {
        let user = {
            username: "Demo",
            password: "password"
        }
        this.props.processForm(user)
        .then(this.props.closeModal())
        .then(this.props.clearSessionErrors(this.props.errors))
    }

    render() {
        return ( 
            <>
                <div className="login-form-container">
                    {this.showButtons()}
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                <br />
                        <div className="login-form">
                            <br />
                            <label>
                                <input autoFocus type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className={this.props.errors.length ? "errors" : "login-input"}
                                    placeholder="Enter Username"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className={this.props.errors.length ? "errors" : "login-input"}
                                    placeholder="Enter Password"
                                />
                            </label>
                            <div className='login-errors'>
                                {this.renderErrors()}
                            </div>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            <div className='privacy-policy'>
                                <p>We may use your email and devices for updates and tips on SunnySounds' products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings. We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SessionForm;