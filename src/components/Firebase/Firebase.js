import app from 'firebase/app';
 //after choosing auth methods on firebase we implement it here
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
   // *** Auth API **
   //this is the comm channel between my app and firebase auth
   //create user
   doCreateUserWithEmailAndPassword = (email, password) =>
   this.auth.createUserWithEmailAndPassword(email, password);
  //sign in / log in
   doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    // signing out
    doSignOut = () => this.auth.signOut();
    //pswd reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  //pswd update
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
 //this is to provide the config of my firebase into my react app
export default Firebase;