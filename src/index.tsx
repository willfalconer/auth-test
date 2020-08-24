import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth0Provider from './auth/auth0-provider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="donerboy.au.auth0.com"
            clientId="87ME7H9W5HJrA5K4yq59tY7x4nKsU5h5"
            redirectUri={window.location.origin}
            cacheLocation='localstorage'
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
