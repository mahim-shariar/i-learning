import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Contract_me.css';


const Contract_me = () => {
  return (
    <div className="container contact-me w-50  ">
      <div className=" my-5 " >
        <h1> Contact </h1>
        <h6> Send me a message </h6>

      </div>
      <div>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <NavLink to="/home" className="btn btn-outline-success mt-2 " type="submit" > submit </NavLink>
      </div>
    </div>
  );
};

export default Contract_me;