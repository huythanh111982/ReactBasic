import React, { Component } from 'react';
import './About.css'
class About extends Component {
    render() {
        return (
            <section className="about section-padding pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto col-md-10 col-12">
              <div className="about-info">
                <h2 className="mb-4" data-aos="fade-up">the best <strong>Digital Marketing agency</strong> in Rio de Janeiro</h2>
                <p className="mb-0" data-aos="fade-up">Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 <a href="blog.html">blog</a> pages, <a href="project-detail.html">project</a> page, and <a href="contact.html">contact</a> page. 
                  <br /><br />You are <strong>allowed</strong> to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.</p>
              </div>
              <div className="about-image" data-aos="fade-up" data-aos-delay={200}>
                <img src="images/office.png" className="img-fluid" alt="office" />
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default About;