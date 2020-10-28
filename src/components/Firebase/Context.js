import React from 'react';
 
const FirebaseContext = React.createContext(null);

//creating higher order component for ease of use
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;