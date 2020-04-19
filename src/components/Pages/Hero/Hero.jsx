import React, { Component } from "react";
import "./Hero.css";
class Hero extends Component {
  render() {
    return (
      <section className="hero hero-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1 className="text-white" data-aos="fade-up">
                  We are ready for your digital marketing
                </h1>
                <a
                  href="contact.html"
                  className="custom-btn btn-bg btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Let us discuss together!
                </a>
                <strong
                  className="d-block py-3 pl-5 text-white"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="fa fa-phone mr-2" /> +99 080 070 4224
                </strong>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="hero-image"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <img
                  src="images/working-girl.png"
                  className="img-fluid"
                  alt="working girl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
