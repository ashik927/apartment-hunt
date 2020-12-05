import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import Signup from './Signup';
import AltLogin from './AltLogin';
import NavBar from '../NavBar/NavBar';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    // Login vs Sign-up
    const [makeVisible, setMakeVisible] = useState('login');
    
    const handleLoginVsSignup = ()=>{
        if(makeVisible === 'login'){
            setMakeVisible('signup');
        }
        else{
            setMakeVisible('login');
        }
    }

    // Login with Email and Password
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = formData => {
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(function(result){
                const user = result.user;
                sessionStorage.setItem('name', user.displayName);
                sessionStorage.setItem('email', user.email);
                if (from) {
                    history.replace(from);
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
        <>
            <NavBar></NavBar>
            <div className={makeVisible === 'login' ? 'login' : 'no__display'}>
                <div className="login__input">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Your Email Address" ref={register({ required: "Email is required" })} name="email" type="email" /><br />
                        <ErrorMessage errors={errors} name="email" render={({ message }) => <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>} />
                        <input placeholder="Password" ref={register({ required: 'Password is requird' })} name="password" type="password" /><br />
                        <ErrorMessage errors={errors} name="password" render={({ message }) => <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>} /><br />
                        <div className="input__checkbox">
                            <div><input name="checkbox" type="checkbox" /><label htmlFor="checkbox">Remember Me</label></div>
                            <p>Forgot Password</p>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                    <p style={{ textAlign: 'center' }}>Don't Have an Account? <span onClick={handleLoginVsSignup}>Create an Account</span></p>

                </div>
                <div className="divider">
                    <div className="divider__line"></div>or<div className="divider__line"></div>
                </div>
            </div>
            <Signup makeVisible={makeVisible} setMakeVisible={setMakeVisible} from={from}></Signup>

            <AltLogin from={from}>></AltLogin>
            

        </>
    );
};

export default Login;