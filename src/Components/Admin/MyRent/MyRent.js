import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MyRent.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import firebaseConfig from "../../Login/firebase.config";

const fakeMyRentList = [
    { id: 1, name: "Washington", price: 295 },
    { id: 2, name: "Washington", price: 295 },
    { id: 3, name: "Washington", price: 295 },
    { id: 4, name: "Washington", price: 295 },
];

const MyRent = () => {
    const [fakeMyRent, setFakeMyRent] = useState(fakeMyRentList);


    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const signOut = () => {
        firebase.auth().signOut().then(function () {
            sessionStorage.removeItem('name')
            sessionStorage.removeItem('email')
            history.push('/')
        }).catch(function (error) {
            // An error happened.
        });

    }
    return (
        <div className="row">
            <div className="col-xl-2  col-md-3 col-sm-12 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-xl-10  col-md-9 col-sm-12 col-12">
                <div className="d-flex justify-content-between">
                    <h4 className="mt-4 py-3 ml-4">My Rent List</h4>
                    <h6 onClick={signOut} className="mt-5  mx-5 py-3">{sessionStorage.getItem('name')}</h6>
                </div>
                <div className="table-wrapper">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>House Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeMyRent.map((item) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className=" details-btn">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;
