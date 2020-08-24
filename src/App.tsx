import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Grommet,
    Collapsible,
    ResponsiveContext,
    Layer,
    Header,
    Avatar,
    Nav,
} from 'grommet';
import {
    Notification,
    FormClose,
    Home,
} from 'grommet-icons';
import LoginButton from './components/login';
import Profile from './components/profile';
// import { AppBar } from './components/app-bar';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import { useAuth0 } from './auth/use-auth0';

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

function App() {
    const { user, isAuthenticated } = useAuth0();
    const [showSidebar, setShowSidebar] = useState(false);

    let gravatarLink = '';
    if (isAuthenticated) {
        gravatarLink = user.picture;
    }

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <Header background='brand' pad="small">
                            <Heading level='3' margin='none'>auth-test</Heading>
                            <Nav direction="row">
                                <Link to='/'><Home /></Link>
                                <Link to='/profile'><Avatar src={gravatarLink} /></Link>
                                <LoginButton />
                                <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
                            </Nav>
                        </Header>
                        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                            <Box flex align='center' justify='center'>
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/dashboard" component={DashboardPage} />
                                    <Route path="/profile" component={Profile} />
                                </Switch>
                            </Box>
                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width='medium'
                                        background='light-2'
                                        elevation='small'
                                        align='center'
                                        justify='center'
                                    >
                                        sidebar
                                    </Box>
                                </Collapsible>
                            ) : (
                                    <Layer>
                                        <Box
                                            background='light-2'
                                            tag='header'
                                            justify='end'
                                            align='center'
                                            direction='row'
                                        >
                                            <Button
                                                icon={<FormClose />}
                                                onClick={() => setShowSidebar(false)}
                                            />
                                        </Box>
                                        <Box
                                            fill
                                            background='light-2'
                                            align='center'
                                            justify='center'
                                        >
                                            sidebar
                                     </Box>
                                    </Layer>
                                )}
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default App;
