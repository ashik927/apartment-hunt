import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();

    // Login vs Sign-up    
    const handleLoginVsSignup = () => {
        if (props.makeVisible === 'login') {
            props.setMakeVisible('signup');
        }
        else {
            props.setMakeVisible('login');
        }
    }

    // Sign-Up with Emain and Password
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = formData => {
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then(function (result) {
            handleUpdateProfile(formData.firstName, formData.lastName)
            sessionStorage.setItem('name', `${formData.firstName} ${formData.lastName}`);
            sessionStorage.setItem('email', formData.email);
            if (props.from) {
                history.replace(props.from);
            }
            else{
                history.push('/')
            }
             
        }).catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    const handleUpdateProfile = (first, last) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: `${first} ${last}`

        }).then(function () {
            
        }).catch(function (error) {
            alert(error.message)
        });
    }




    // Handle Google Login

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            alert('Done')
            // ...
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);

        });
    }
    // Handle Facebook LoginInput
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
            const user = result.user;
            alert('Done')
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    return (
        <div className={props.makeVisible === 'signup' ? 'sign-up' : 'no__display'}>
            <div className="sign-up__input">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input ref={register({ required: 'First Name is Required', pattern: { value: /^[A-Za-z]+$/, message: 'Only Alphabets' } })} placeholder="First Name" name="firstName" type="text" /><br />
                    <ErrorMessage style={{ textAlign: 'center' }} errors={errors} name="firstName">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>

                    <input ref={register({ required: 'Last Name is Requird', pattern: { value: /^[A-Za-z]+$/, message: 'Only Alphabets' } })} placeholder="Last Name" name="lastName" type="text" /><br />
                    <ErrorMessage errors={errors} name="lastName">
                        {({ messages }) =>
                            messages && Object.entries(messages).map(([type, message]) => (<p key={type}>{message}</p>))
                        }
                    </ErrorMessage>

                    <input ref={register({ required: "Email is required" })} placeholder="Your Email Address" name="email" type="email" /><br />
                    <ErrorMessage errors={errors} name="email">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p style={{ textAlign: 'center', color: 'red' }} key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>

                    <input ref={register({ required: 'Password Is Required', minLength: { value: 8, message: 'Too Short for a Password' }, maxLength: { value: 16, message: 'Too Long For a password' } })} placeholder="Password 8-16 Character" name="password" type="password" /><br />
                    <ErrorMessage errors={errors} name="password">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p style={{ textAlign: 'center', color: 'red' }} key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>

                    <input ref={register({ required: 'Cell Phone Number Is Required', minLength: { value: 11, message: 'Too Short for a Bangladeshi Cell Phone Number' }, maxLength: { value: 11, message: 'Too Long for a Bangladeshi Cell Phone Number' } })} placeholder="Cell Phone Number" name="phone" type="tel" /><br />
                    <ErrorMessage errors={errors} name="phone">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p className="error-msg" key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>

                    <input type="submit" value="Create an Account" />
                </form>
                <p style={{ textAlign: 'center' }}>Already Have an Account? <span onClick={handleLoginVsSignup}>Login</span></p>
            </div>
            <div className="divider">
                <div className="divider__line"></div>or<div className="divider__line"></div>
            </div>
            {/* <div onClick={handleGoogleLogin} className="sign-up__google"><p>Continue with Google</p></div>
            <div onClick={handleFacebookLogin} className="sign-up__facebook"><p>Continue with Facebook</p></div> */}
        </div>
    );
};

export default Signup;