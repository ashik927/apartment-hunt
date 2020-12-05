import {
    faBook,
    faHome,
    faListAlt,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "./Logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <div className="sidebar-wrapper">
            <img onClick={()=>history.push('/')} className="img-fluid " src={logo} alt="Apartment Hunt" />
            <ul>
                <li>
                    <Link
                        to="/bookingList"
                        className={
                            location.pathname === "/bookingList"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faListAlt} /> &nbsp;&nbsp;
                        Booking List
                    </Link>
                </li>
                <li>
                    <Link
                        to="/addRentHouse"
                        className={
                            location.pathname === "/addRentHouse"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faPlus} /> &nbsp;&nbsp; Add Rent
                        House
                    </Link>
                </li>
                <li>
                    <Link
                        to="/myRent"
                        className={
                            location.pathname === "/myRent"
                                ? "active-link"
                                : "sidebar-link"
                        }
                    >
                        <FontAwesomeIcon icon={faHome} /> &nbsp;&nbsp; My Rent
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
