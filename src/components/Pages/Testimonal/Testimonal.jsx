import React, { Component } from 'react';
import './Testimonal.css';
class Testimonal extends Component {
    render() {
        return (
            <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <div className="contact-image" data-aos="fade-up">
                <img src="images/female-avatar.png" className="img-fluid" alt="website" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay={100}>Client Testimonials</h4>
              <div className="quote" data-aos="fade-up" data-aos-delay={200} />
              <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h2>
              <p data-aos="fade-up" data-aos-delay={400}>
                <strong>Mary Zoe</strong>
                <span className="mx-1">/</span>
                <small>Digital Agency (CEO)</small>
              </p>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Testimonal;