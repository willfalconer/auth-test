import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
// import { Wrapper } from './components/Wrapper';

function App() {
    return (
        // <Wrapper>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <LoginButton />
                    <LogoutButton />
                </header>
                <div className="body">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/dashboard" component={DashboardPage} />
                            <Route path="/profile" component={Profile} />
                        </Switch>
                    </Router>
                </div>
            </div>
        // </Wrapper>
    );
}

export default App;
