import { ReactNode, useEffect, useState } from 'react';
import * as auth from '../auth/authUtils';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const signedIn = await auth.verifySignedInToProtectedRoutes(navigate);
      setIsSignedIn(signedIn);
    };

    checkAuth();
  }, [navigate]);

  return isSignedIn ? <>{children}</> : null;
}

export default ProtectedRoute;
