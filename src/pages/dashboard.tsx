import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../auth/use-auth0';
import Can from '../components/can';
import Logout from '../components/logout';
import Profile from '../components/profile';
import PostsList from '../components/post-list';

const DashboardPage = () => {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <Can
            role={user.role}
            perform="dashboard-page:visit"
            yes={() => (
                <div>
                    <h1>Dashboard</h1>
                    <Logout />
                    <Profile />
                    <PostsList />
                </div>
            )}
            no={() => <Redirect to="/" />}
        />
        );
    }

    return null;
};

export default DashboardPage;