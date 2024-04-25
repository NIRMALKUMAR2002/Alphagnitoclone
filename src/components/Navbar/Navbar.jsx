import React from "react";
import "../Navbar/Navbar.css";
import Alphagnitologo from "../../assets/Alphagnitologo.png";

const Navbar = () => {
  return (
    <div>
      <div className="entirenavbar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <div className="logoimg">
                  <img src={Alphagnitologo} alt="" />
                </div>
              <div className="navbarunorderedlist">
               
                <div className="wholenavbar">
                <ul class="navbar-nav me-auto ">
                  <li class="about ">
                    <a class="nav-link active" aria-current="page" target="_blank" href="/About">
                      ABOUT
                    </a>
                  </li>
                  <li class="service">
                    <a class="nav-link" target="_blank" href="/Services">
                      SERVICE
                    </a>
                  </li>
                  <li class="testimonial">
                    <a class="nav-link" target="_blank" href="/Testimonials">
                      TESTIMONIAL
                    </a>
                  </li>
                  <li class="contact">
                    <a class="nav-link" target="_blank" href="/Contactus">
                      CONTACT
                    </a>
                  </li>
                </ul>
                </div>
               
               
              </div>
              <div className="letsconnect">
              <p><a class="connect" href="#" role="button">
                  Let's Connect
                </a>
                  </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
