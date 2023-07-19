import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
          <h1 class="logo">
            <span
              style={{
                backgroundColor: "#DC2265",
                color: "#fff",
                padding: 7,
                paddingLeft: 10,
              }}
            >
              PET
            </span>{" "}
            SHOP
          </h1>
            <p>Floor D-256, Phase, 4th, 8-A,</p>
            <p>Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
            <p>Email: info@petvetshop.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul className="social-links" style={{marginTop:10}}>
              <li>
                <a href="#" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
