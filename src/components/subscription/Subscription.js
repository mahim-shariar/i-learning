import React from 'react';
import { Form } from 'react-bootstrap';
import './subscription.css'

const Subscription = () => {
    return (
        <div className="log-in container w-75 total-contanier " >
            <div className="text-center mb-5" >
                <h1> Please <span className="text-danger" >  subscribe  </span> and with us  </h1>
            </div>
            <Form className="w-75 mx-auto " >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button className="btn btn-outline-danger" > Subscribe </button>
            </Form>
        </div>

    );
};

export default Subscription;