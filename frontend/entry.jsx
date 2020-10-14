import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { login, logout } from './actions/session_actions'



document.addEventListener('DOMContentLoaded', () => {

    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }

    const store = configureStore(preloadedState)
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEl);

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
});