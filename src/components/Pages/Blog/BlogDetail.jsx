import React, { Component, Fragment } from "react";
import './Blog.css';
class BlogDetail extends Component {
  render() {
    return (
      <Fragment>
        <section className="project-detail section-padding-half">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center"
                data-aos="fade-up"
              >
                <h4 className="blog-category text-info">Creative Work</h4>
                <h1>
                  9 useful things to learn and practice for your digital
                  marketing
                </h1>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <img
                      src="images/project/project-detail/male-avatar.png"
                      className="img-fluid"
                      alt="male avatar"
                    />
                    <p>Sweet Candy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="full-image text-center" data-aos="zoom-in">
          <img
            src="images/blog/blog-header-image.jpg"
            className="img-fluid"
            alt="blog header"
          />
        </div>
        {/* BLOG DETAIL */}
        <section className="project-detail">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-9 mx-auto col-md-11 col-12 my-5 pt-3"
                data-aos="fade-up"
              >
                <h2 className="mb-3">
                  Etiam quis metus elementum, tempor risus vel, condimentum
                  orci.
                </h2>
                <p>
                  Mauris in convallis nunc, non facilisis arcu. Nunc sapien
                  nulla, interdum at diam non, aliquam vestibulum leo. Fusce
                  laoreet malesuada ante, consectetur consequat ante tempor et.
                  Quisque ac risus ligula.
                </p>
                <p>
                  Suspendisse bibendum tortor at est placerat auctor. Phasellus
                  tortor est, bibendum eu ex eu, tincidunt efficitur nunc. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
                <ul className="list-detail py-3">
                  <li>
                    <span>
                      Quisque at condimentum est. Duis sollicitudin urna id elit
                      pulvinar placerat. Ut ac dui in ex vulputate dictum.
                    </span>
                  </li>
                  <li>
                    <span>
                      Mauris vitae tellus nisi. Morbi rutrum lacus sit amet
                      volutpat viverra.
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      Integer maximus sem ut ipsum blandit elementum. Nullam
                      sollicitudin accumsan commodo.
                    </span>
                  </li>
                </ul>
                <p>
                  Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
                  Etiam quis metus elementum, tempor risus vel, condimentum
                  orci.
                </p>
                <h2 className="mt-5 mb-3">
                  Curabitur tempus vel libero lobortis feugiat
                </h2>
                <p>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Mauris in convallis nunc, non
                  facilisis arcu. Nunc sapien nulla, interdum at diam non,
                  aliquam vestibulum leo.
                </p>
                <blockquote>
                  Phasellus dapibus ex sed dolor blandit, efficitur iaculis
                  ipsum scelerisque. Cras elementum nibh id felis sagittis, sit
                  amet pellentesque ligula porttitor. Fusce laoreet malesuada
                  ante, consectetur consequat ante tempor et. Quisque ac risus
                  ligula.
                </blockquote>
              </div>
            </div>
            <div
              className="col-lg-8 mx-auto mb-5 pb-5 col-12"
              data-aos="fade-up"
            >
              <h3 className="my-3" data-aos="fade-up">
                Leave a comment
              </h3>
              <form
                action="#"
                method="get"
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
                      Submit Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default BlogDetail;
