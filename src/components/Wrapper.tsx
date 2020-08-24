import React from 'react';
import { useAuth0 } from '../auth/use-auth0';

export interface WrapperProps {
    /**
     * The child nodes your Provider has wrapped
     */
    children?: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <>{children}</>;
};
