import React from "react";
import "../Services/Services.css";
import softwareimg from "../../assets/softwaredevelopment.png";
import dataimg from "../../assets/Datamanagement.png";
import consultingimg from "../../assets/Consulting.png";
import networkimg from "../../assets/Networksolutions.png";
import cloudimg from "../../assets/cloudcomputing.png";
import supportimg from "../../assets/contact.png";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="entireservices">
          <div className="servicescontent">
            <h2>World Best IT-Services We Provide</h2>
            <p>
              Whether you're looking to streamline operations, enhance
              security, harness the power of data, or embark on a digital <br />
              transformation journey, our expert team is here to help.
            </p>
          </div>
          {/* servicesbox1 */}
          <div className="servicesbox1">
            <div className="row">
              {/* softwaredevelopment */}
              <div className="col-lg-4">
                <div className="softwaredevelopment">
                  <img src={softwareimg} alt="" />
                  <h3>SOFTWARE <br /> DEVELOPMENT</h3>
                  <p>
                    From custom software solutions to web and mobile app
                    development,we create tailored applications to meet your
                    business needs.
                  </p>
                </div>
              </div>
              {/* datamanagement */}
              <div className="col-lg-4">
                <div className="datamanagement">
                  <img src={dataimg} alt="" />
                  <h3>DATA MANAGEMENT</h3>
                  <p>Our data experts assist in data storage,backup, analytics, and data-driven insights to drive informed decisions.</p>
                </div>
              </div>
              {/* consulting */}
              <div className="col-lg-4">
                <div className="consulting">
                  <img src={consultingimg} alt="" />
                  <h3>CONSULTING</h3>
                  <p>Rely on our IT consultants to provide strategic guidence, technology assessments, and digital transformation roadmaps.</p>
                </div>
              </div>
            </div>
          </div>
          {/* servicesbox2 */}
          <div className="servicesbox2">
                <div className="row">
                {/* networksolutions" */}
                    <div className="col-lg-4">
                        <div className="networksolutions">
                          <img src={networkimg} alt="" />
                            <h3>NETWORK SOLUTIONS</h3>
                            <p>Our experts design,implement, and optimize network solutions to enhance connectivity and performance.</p>
                        </div>
                    </div>
                    {/* cloudcomputing */}
                    <div className="col-lg-4">
                        <div className="cloudcomputing">
                          <img src={cloudimg} alt="" />
                            <h3>CLOUD COMPUTING</h3>
                            <p> We help you harness the  power of the cloud with services like cloud migration,management and optimization.</p>
                        </div>
                    </div>
                    {/* support */}
                    <div className="col-lg-4">
                        <div className="support">
                          <img src={supportimg} alt="" />
                            <h3>24/7 SUPPORT</h3>
                            <p>Our dedicated support team is available around the clocks to resolve issues prompty and minimize downtime.</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
