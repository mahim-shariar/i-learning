import React from 'react';
import './Abouts.css'

const Abouts = () => {
    return (
        <div className="container about-m text-center " >
            <div className="header-txt" >
                <h1> Improving Learning of Programming Through E-Learning
                    by Using Asynchronous Virtual Pair Programming </h1>

            </div>
            <div className="my-5" > 
                <h6 className="text-primary" > ABSTRACT: </h6>
                <p> The problem of learning programming subjects, especially through distance
                    learning and E-Learning, has been widely reported in literatures. Many attempts
                    have been made to solve these problems. This has led to many new approaches in
                    the techniques of learning of programming. One of the approaches that have been
                    proposed is the use of virtual pair programming (VPP). Most of the studies about
                    VPP in distance learning or e-learning environment focus on the use of the
                    synchronous mode of collaboration between learners. Not much research have
                    been done about asynchronous VPP.
                    This paper describes how we have implemented VPP and a research that has been
                    carried out to study the effectiveness of asynchronous VPP for learning of
                    programming. In particular, this research study the effectiveness of asynchronous
                    VPP in the learning of object-oriented programming among students at Open
                    University Malaysia (OUM). The result of the research has shown that most of the
                    learners have given positive feedback, indicating that they are happy with the use
                    of asynchronous VPP. At the same time, learners did recommend some extra
                    features that could be added in making asynchronous VPP more enjoyable.  </p>
            </div>
            <div className="my-5" >
                <h5> <span className="text-danger" > keywords:  </span>  Pair-programming; Virtual Pair-programming; Object Oriented
                    Programming </h5>
            </div>
            <div>
                <h6 className=" text-warning " > INTRODUCTION  </h6>
                <p> Delivering program of Information Technology through distance learning or ELearning is indeed a very challenging task. All programs in Information
                    Technology include a few courses in programming which is considered to be the
                    most important skill for IT professionals. Most of the other courses also require
                    students to implement some programs in order to ensure that the students could
                    be able to comprehend concepts that are presented in the course. However, a
                    programming course is known to be a difficult course, both for the instructors and
                    learners, even in the normal mode of learning. Novice programmers suffer from a
                    wide range of difficulties. According to Robins et. al. (2001), it will take about ten
                    years of experience to turn a novice into an expert programmer. </p>
            </div>
        </div>
    );
};

export default Abouts;