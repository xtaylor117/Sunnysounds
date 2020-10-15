import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { clearSessionErrors } from '../actions/session_actions'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';

function Modal({ modal, closeModal, clearSessionErrors }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    const handleClick= () => {
        closeModal();
        clearSessionErrors();
    }

    
    return (

        <div className="modal-background" onClick={handleClick}>
            <button className='close-modal-button' onClick={handleClick} />
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
