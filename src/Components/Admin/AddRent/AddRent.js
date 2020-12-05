import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Sidebar from "../Sidebar/Sidebar";
import "./AddRent.css";
import { useHistory } from "react-router-dom";
import firebaseConfig from "../../Login/firebase.config";
import { useForm } from "react-hook-form";

const AddRent = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const signOut = ()=>{
        firebase.auth().signOut().then(function() {
            sessionStorage.removeItem('name')
            sessionStorage.removeItem('email')
            history.push('/')
        }).catch(function(error) {
            // An error happened.
          });
          
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = formData => {
        const apartment ={
            title: formData.title,
            location: formData.location,
            bedroom: formData.bedroom,
            bathroom: formData.bathroom,
            price: formData.price
        }
        sendApartmentData(apartment);
    }
    const sendApartmentData = (apartData) => {
        fetch('https://cryptic-tor-84231.herokuapp.com/addapartment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apartData)
        })
        history.push('/');
    }
    return (
        <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-12">
                <div className="d-flex justify-content-between">
                    <h4 className="mt-4 py-3 ml-4">Add Rent House</h4>
                    <h6 onClick={signOut} className="mt-5  mx-5 py-3">{sessionStorage.getItem('name')}</h6>
                </div>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "80vh" }}
                >
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div
                            className="row    p-4 mx-5 mt-5 bg-white "
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="col-xl-6 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Service Title
                                    </label>
                                    <input
                                        type="text"
                                        ref={register({ required: true })}
                                        name="title"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        ref={register({ required: true })}
                                        name="location"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        No of Bathroom
                                    </label>
                                    <input
                                        type="number"
                                        ref={register({ required: true })}
                                        name="bathroom"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-5 col-sm-12 offset-md-1 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        ref={register({ required: true })}
                                        name="price"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        No of Bedroom
                                    </label>
                                    <input
                                        type="number"
                                        ref={register({ required: true })}
                                        name="bedroom"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <p className="font-weight-bold mb-2">
                                        Thumbnail
                                    </p>
                                    <label className="upload-btn">
                                        <input
                                            type="file"
                                            className="form-control-file"
                                        />
                                        <FontAwesomeIcon
                                            icon={faCloudUploadAlt}
                                            className="mr-2"
                                        />
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input
                            className="btn btn-success submit-btn offset-md-10  my-3"
                            type="submit" value='Submite' style={{width: '100px'}}
                        />
                            
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRent;
