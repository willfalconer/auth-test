import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './login-button';
import LogoutButton from './logout';
import Profile from './profile';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <LoginButton />
                <LogoutButton />
            </header>
            <Profile />
        </div>
    );
}

export default App;
