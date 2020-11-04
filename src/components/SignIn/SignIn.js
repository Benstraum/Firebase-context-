import React, { useState } from 'react';

import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

// Sign in form base with all functionality and firebase/ router implemented
const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInfo, setError] = useState('')

  const firebaseSignIn = () => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        setEmail('')
        setPassword('')
        setError(null)
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError({error});
        console.log(error)
      });
  }
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <div className="loginForm" style={{ minWidth: '250px', width: '30%', margin: 'auto', marginTop: '15%', border: '2px solid grey', borderRadius: 10, padding: '5px' }}>
        <h1>Log In to Netflix</h1>
        <input
          style={{ minWidth: '200px', width: '75%', borderRadius: 5, padding: '5px', margin: '5px', height: '30px' }}
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{ minWidth: '200px', width: '75%', borderRadius: 5, padding: '5px', margin: '5px', height: '30px' }}
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button
          style={{ width: '78.5%', borderRadius: 5, height: '30px', color: 'black' }}
          onClick={()=>firebaseSignIn()}
        >Log In</button>
        <br />
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
      </div>
      <br />
      <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
    </div>
  );
}

// making higher order components easily stacked
const SignIn = compose(
  withRouter,
  withFirebase,
)(SignInForm);

// simplified component
const SignInPage = () =>(
  <div>
    <SignIn />
  </div>
)

export default (SignInPage);

export { SignInForm}
