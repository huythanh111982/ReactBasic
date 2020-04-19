import React, { Component,Fragment } from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Project from '../Project/Project';
import Testimonal from '../Testimonal/Testimonal';
class Home extends Component {
    render() {
        return (
            <Fragment>
            <Hero/>
            <About/>
            <Project/>
            <Testimonal/>
            </Fragment>
        );
    }
   
    
}

export default Home;