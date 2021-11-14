import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
