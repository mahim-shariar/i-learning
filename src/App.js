// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFount from './components/NotFount/NotFound'
import React from 'react';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import Welcome from './components/Welcome/Welcome';
import Home_course from './components/add_course/Home_course';
import Subscription from './components/subscription/Subscription';
import Contrac_me from './components/Login/Contract_me';
import Abouts from './components/about/Abouts';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' >
            <Welcome></Welcome>
            <Home_course></Home_course>
            <Subscription></Subscription>
          </Route>
          <Route path="/home" >
            <Welcome></Welcome>
            <Home_course></Home_course>
            <Subscription></Subscription>
          </Route>
          <Route path='/about'>
            <Abouts></Abouts>
          </Route>
          <Route path='/contact'>
            <Contrac_me></Contrac_me>
          </Route>
          <Route path='/course'>
            <Course></Course>
          </Route>
          <Route path='/cart'>
          </Route>
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
