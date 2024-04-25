import React from "react";
import "../Aboutus/Aboutus.css";
import About from "../../assets/about-img.png";
import Aboutquotes from "../../assets/quotes.png";
import { FaCheckCircle } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div>
      <div className="container">
        {/* entireaboutus */}
        <div className="entireaboutus">
          <h1>ABOUT US</h1>
          {/* aboutframe */}
          <div className="aboutframe">
            <div className="row">
              {/* about */}
              <div className="col-lg-3">
                <div className="about">
                  <img src={About} alt="hi" />
                  <div className="aboutcontent">
                    <img src={Aboutquotes} alt="" />
                    <p>
                      Welcome to  Alphagnito, where we transcend expectations and
                      aspire to fulfill not just needs but dreams. Despite our
                      modest size,we possess a powerhouse of latent
                      abilities,focusing on anticipating and exceeding customer
                      dreams and thoughts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4"></div>
              {/* webconsultants */}
              <div className="col-lg-5">
                <div className="webconsultants">
                  <h2>WEB  CONSULTANTS</h2>
                  <p>
                    Our expertise lies in software solutions,encompassing Web
                    application, Android application,ERP,HRM,CRM, and server
                    architecture.Alphagnito crafts bespoke solutions that
                    journey with clients on the road to success.Whether you're
                    launching a new website,refining an existing one, or
                    enhancing your online presence, let Alphagnito be your guide
                    to achieving objectives with flair.We go beyond conventional
                    service by amplifying our impact in education,prioritizing
                    student well-being. Alphagnito offers unparalleled
                    opportunities in extensive training and interships, shaping
                    the professional dreams of students and serving as the
                    catalyst for academic and career ascent.Join us at
                    Alphagnito,where innovation meets excellence, and
                    together,we turn aspirations into accomplishments.
                  </p>
                </div>
                <div className="contactus">
                  <a class="contactusbutton" href="#" role="button">
                    Contact Us
                  </a>
                  <div />
                  <div className="icons">
                    <p>
                      <FaCheckCircle className="icon1" />
                      Delivered more than 450 client's interactions
                    </p>
                  </div>

                  <p>
                    <FaCheckCircle className="icon1" />
                    Provided by experts to help challenge critical activities
                  </p>
                  <p>
                    <FaCheckCircle className="icon1" />
                    Complemented with peer perspectives and advice{" "}
                  </p>
                  <p>
                    <FaCheckCircle className="icon1" />
                    Improve Efficiency and Provide Better Experiences!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
