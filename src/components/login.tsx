import React from "react";
import {
    Button,
} from 'grommet';
import {
    Login,
    Logout,
} from 'grommet-icons';
import { useAuth0 } from "../auth/use-auth0";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
      return (<Button onClick={() => logout({ returnTo: window.location.origin })} icon={<Logout />} />);
  }

  return <Button onClick={() => loginWithRedirect()} icon={<Login />} />;
};

export default LoginButton;