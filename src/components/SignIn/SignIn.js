import React, { useState } from 'react';

import * as ROUTES from '../../constants/routes';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <div classname="loginForm" style={{ width: '30%', margin: 'auto', marginTop: '15%', border: '2px solid grey', borderRadius: 10, padding: '5px' }}>
        <h1>Log In to Netflix</h1>
        <input
          style={{ width: '75%', borderRadius: 5, padding: '5px', margin: '5px', height: '30px' }}
          type="text"
          placeholder="email"
          value={email}
          onChange={email => setEmail(email)}
        />
        <br />
        <input
          style={{ width: '75%', borderRadius: 5, padding: '5px', margin: '5px', height: '30px' }}
          type="text"
          placeholder="password"
          value={password}
          onChange={password => setPassword(password)}
        />
        <br />
        <button
          style={{ width: '78.5%', borderRadius: 5, height: '30px', color: 'grey' }}
          onPress={{}}
        >Log In</button>
        <br />
        <a href={ROUTES.PASSWORD_FORGET}>Forgot Password?</a>
      </div>
      <br />
      <p>Don't have an account? <a href={ROUTES.SIGN_UP}>Sign Up</a></p>
    </div>
  );
}

export default SignIn;
