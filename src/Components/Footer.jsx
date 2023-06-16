import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logoImg from "../assets/logo.jpg";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "About Us",
    url: "https://www.codeango.com/about-us",
  },
  {
    display: "Privacy",
    url: "https://www.codeango.com/privacy-policy",
  },

  {
    display: "Refund Policy",
    url: "https://www.codeango.com/refund-policy",
  },

  {
    display: "Terms and Condition",
    url: "https://www.codeango.com/terms-and-conditions",
  },
  {
    display: "Contact Us",
    url: "https://www.codeango.com/contact",
  },
];

const footerInfoLinks = [
  {
    display: "Courses",
    url: "https://www.codeango.com/challenges",
  },
  {
    display: "Coperate",
    url: "https://www.codeango.com/corporate-training",
  },

  {
    display: "Sitemap",
    url: "https://www.google.com/maps/place/Codeango/@20.0075549,75.1924755,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb934e76dc4c5d:0x2bdf8b91fa10055a!8m2!3d20.0075549!4d75.1924755!16s%2Fg%2F11tsn2v7wv?entry=ttu",
  },

  {
    display: "Sign Up",
    url: "https://www.codeango.com/challenges",
  },
  {
    display: "Login",
    url: "https://www.codeango.com/",
  },
];

const Footer = () => {
  return (
    <footer className="footer lblue text-light p-4">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <img src={logoImg} width="70px" className="align-items-center mr-4"/>
            <h2 className=" d-flex align-items-center gap-1">
               Codeango.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com/people/Codeango/100090437048427/">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/codeango_learning/?igshid=ZDdkNTZiNTM%3D">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://twitter.com/CodeangoC">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.youtube.com/channel/UCiRFkFC6mARVsX9bn4KfaTA">
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold ">Know Us</h6>
            <ListGroup className="link__list ">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: R - 77 Bad ke Ali 
                  Aurangabad - 431101</p>
            <p> Phone:  +91 99038 07380</p>
            <p>Email: <a href="mailto:info@codeango.com">info@codeango.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
