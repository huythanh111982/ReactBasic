import React, { Component, Fragment } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <section className="contact section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center"
                data-aos="fade-up"
              >
                <h1 className="mb-4">
                  Hey there, Let's <strong>talk</strong> about{" "}
                  <strong>creative</strong> projects
                </h1>
                <p>
                  or email us at{" "}
                  <a href="mailto:hello@company.com">hello@company.com</a>
                </p>
                <p>
                  Please follow our{" "}
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    contact page
                  </a>{" "}
                  to <strong>setup</strong> the contact form.
                </p>
              </div>
              <div className="col-lg-8 mx-auto col-md-10 col-12">
                {/* Follow https://templatemo.com/contact page to setup your own contact form */}
                <form
                  action="#"
                  method="post"
                  className="contact-form"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-lg-12 col-12">
                      <textarea
                        className="form-control"
                        rows={6}
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-5 mx-auto col-7">
                      <button
                        type="submit"
                        className="form-control"
                        id="submit-button"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="google-map" data-aos="zoom-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11196.961132529668!2d-43.38581128725845!3d-23.011063013218724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1568649412152!5m2!1sen!2sth"
            width={1920}
            height={600}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </Fragment>
    );
  }
  
}
export default Contact;
