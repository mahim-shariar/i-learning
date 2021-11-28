import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="mx-auto not text-center w-50 " >
            <img src="https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg" alt="" />
            <div>
                <NavLink className="btn btn-danger p-3" to="/home">Go back Home</NavLink>
            </div>
        </div>
    );
};

export default NotFound;