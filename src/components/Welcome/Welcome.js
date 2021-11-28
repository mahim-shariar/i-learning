import React from 'react';
import Header_txt from '../Header-txt/Header_txt';
import Header_pic from '../Header_pic/Header_pic';
const Welcome = () => {
    return (
        <div>
            <div className="container header-section" >
                <div className="my-auto col-6 " >
                    <Header_txt></Header_txt>
                </div>
                <div className="col-6" >
                    <Header_pic></Header_pic>
                </div>
            </div>
        </div>
    );
};

export default Welcome;