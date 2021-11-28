import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cart = (props) => {
    let {img, name, price,perlesson,about,id} = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" width="420px" height="300px" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {about}
                            <h6>${perlesson}: ${price}</h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Cart;