import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import Project from '../components/Pages/Project/Project';
import Blog from '../components/Pages/Blog/Blog';
import Contact from '../components/Pages/Contact/Contact';
import Home from '../components/Pages/Home/Home';
import ProjectDetail from '../components/Pages/Project/ProjectDetail';

class RouterLink extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/project">
              <Project/>
            </Route>
            <Route path="/project-detail/:slug.:id.html">
              <ProjectDetail/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route >
              <Home/>
            </Route>
          </Switch>
        );
    }
}

export default RouterLink;