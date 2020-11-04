import React from 'react';

import { Link } from 'react-router-dom';
//just including signout button, will make conditionally rendered later
import SignOutButton from '../SignOut/SignOut';
//previously established routes for my pages
import * as ROUTES from '../../constants/routes';
//Made context it's own file to import 
import { AuthUserContext } from '../Session';

//Accesses the auth prop to create conditionally rendered protected routes
const Navigation = () => (
  <div><AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer></div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
