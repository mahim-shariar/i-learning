import React from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../cart/Cart';
import useCourse from '../hooks/useCourse';
const Home_course = () => {
    let [courses] = useCourse('/learning.JSON');
    return (
        <div className="container mt-top " >
            <h1 className='text-center mt-5  ' > Top <span className="text-warning" > Courses </span> </h1>
            <div className="line" ></div>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <Cart key={course.id} course={course} ></Cart>)
                }
            </Row>
        </div>
    );
};

export default Home_course;