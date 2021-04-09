import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from)

            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="login">
            <h2>Log in Here</h2>
            <button onClick={handleGoogleSignIn}>Log in with Google</button>
        </div>
    );
};

export default Login;