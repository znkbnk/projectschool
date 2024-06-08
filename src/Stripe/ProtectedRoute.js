import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isPaidUser, setIsPaidUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();
          const userSubscriptionStatus = idTokenResult.claims.subscribed || false;
          setIsPaidUser(userSubscriptionStatus);
        } catch (error) {
          console.error("Error fetching user claims:", error);
          setIsPaidUser(false);
        }
      } else {
        setIsPaidUser(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isPaidUser ? <Component {...props} /> : <Redirect to="/subscribe" />
      }
    />
  );
};

export default ProtectedRoute;
