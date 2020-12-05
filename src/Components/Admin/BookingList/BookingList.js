import React from "react";
import { useState } from "react";
import BookSingleItem from "../BookSingleItem/BookSingleItem";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingList.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import firebaseConfig from "../../Login/firebase.config";

const fakeListItems = [
    {
        id: 101,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "Done",
    },
    {
        id: 102,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "Pending",
    },
    {
        id: 103,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "On Going",
    },
    {
        id: 104,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "Pending",
    },
    {
        id: 105,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "Done",
    },
    {
        id: 106,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "Pending",
    },
    {
        id: 107,
        name: "Sufi Ahmed",
        email: "sufi@email.com",
        phone: "01912453685",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "On Going",
    },
];
const BookingList = () => {
    const [fakeList, setFakeList] = useState(fakeListItems);


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
                    <h4 className="mt-4 py-3 ml-4">Booking List</h4>
                    <h6 onClick={signOut} className="mt-5  mx-5 py-3">{sessionStorage.getItem('name')}</h6>
                </div>
                <div className="table-wrapper">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Phone Number</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeList.map((item) => (
                                    <BookSingleItem key={item.id} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
