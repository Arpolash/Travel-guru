import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BookingContext } from '../../App';



const PrivateRoute = ({children, ...rest}) => {
  const {tourist} = useContext(BookingContext)
  const [loggedInUser, setLoggedInUser] = tourist;
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/form",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;