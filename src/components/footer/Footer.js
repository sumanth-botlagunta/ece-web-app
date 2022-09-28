import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>MEDIMAX</h6>
              <p className="text-justify">
                Medimax <i>Find industry standard medicine </i>
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Coded Skills</h6>
              <ul className="footer-links">
                <li>
                  <a>ReactJS</a>
                </li>
                <li>
                  <a>Node Js</a>
                </li>
                <li>
                  <a>Express</a>
                </li>
                <li>
                  <a>MongoDB</a>
                </li>
                <li>
                  <a>JavaScript</a>
                </li>
                <li>
                  <a>Html</a>
                </li>
                <li>
                  <a>Css</a>
                </li>
                <li>
                  <a>Bootstrap</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Info</h6>
              <ul className="footer-links">
                <li>
                  <a>SUMANTH</a>
                </li>
                <li>
                  <a>ROHAN</a>
                </li>
                <li>
                  <a>SAHIT</a>
                </li>
                <li>
                  <a>RAHUL</a>
                </li>
                <li>
                  <a>AVINASH</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#">&nbsp; Epics H</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}