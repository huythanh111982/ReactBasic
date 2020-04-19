import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterLink from '../../RouterLink/RouterLink';
import MenuTop from '../Templates/MenuTop/MenuTop';
import Footer from '../Templates/Footer/Footer';
// import Home from '../Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  render() {
    return (
      <Router>
          {/* <Home/> */}
          <MenuTop/>
          <RouterLink/>
          <Footer/>
      </Router>
    );
  }
  componentDidMount(){
    AOS.init();
}
}

export default App;
