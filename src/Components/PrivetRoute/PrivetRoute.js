import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

const PrivetRoute = ({ children, ...rest }) => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem('name') ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivetRoute;