import React from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useHistory } from 'react-router-dom';

const AltLogin = (props) => {
    const history = useHistory();
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    // Handle Google Login
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = ()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            sessionStorage.setItem('name', user.displayName);
            sessionStorage.setItem('email', user.email);
            if (props.from) {
              history.replace(props.from);
          }
          else{
              history.push('/')
          }
          }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
          
          });
    }
    // Handle Facebook LoginInput
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleFacebookLogin = ()=>{
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const user = result.user;
            sessionStorage.setItem('name', user.displayName);
            sessionStorage.setItem('email', user.email);
            if (props.from) {
              history.replace(props.from);
          }
          else{
              history.push('/')
          }

          }).catch(function(error) {
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }
    return (
        <div className="alt-login">
            <div onClick={handleGoogleLogin} id="google"><p>Continue with Google</p></div>

            <div onClick={handleFacebookLogin} id="facebook"><p>Continue with Facebook</p></div>
            </div>
    );
};

export default AltLogin;