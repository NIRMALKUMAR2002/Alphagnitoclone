import React from "react";
import "../Whatourclients/Whatourclients.css";
import leftupperquotes from "../../assets/leftupperquotes.png";



const Whatourclients = () => {
  return (
    <div>
      <div className="entirewhatourclients">
        <div className="container">
          <div className="whatourclients">
            <h1>What Our Client's Say</h1>
            <div className="row">
              <div className="ourclientsboxes"></div>
              {/* isrl */}
              <div className="col-lg-4">
                <div className="isrl">
                  <img src={leftupperquotes} alt="" />
                  <h3>INDIASPEAKS Research Labs</h3>
                  <h6>CO FOUNDER</h6>
                  <p>
                    Cost efficiency is paramount for us,and Alphagnito has
                    consistently delivered.Their managed IT services have
                    streamlined our operations and saved us both time and money.
                  </p>
                </div>
              </div>
              {/* .tcm */}
              <div className="col-lg-4">
                <div className="tcm">
                  <img src={leftupperquotes} alt="" />
                  <h3>The Chennai Mobiles</h3>
                  <h6>CEO OF THE COMPANY</h6>
                  <p>
                    Alphagnito has been an invaluable partner in our journey to
                    secure sensitive healthcare data.Their cybersecurity
                    expertise and dedication to complience have helped us
                    maintain th highest standards in the industry.
                  </p>
                </div>
              </div>
              {/* annular */}
              <div className="col-lg-4">
                <div className="annular">
                  <img src={leftupperquotes} alt="" />
                  <h3>Annular Technologies</h3>
                  <h6>COMPANY FOUNDER</h6>
                  <p>
                    Working with Alphagnito has been a game change for our
                    business.Their proactive IT management and cybersecurity
                    services have not only overall efficiency but also given us
                    peace of mind.We couldn't be happier with the level of
                    professionalism and expertise they bring to the table
                  </p>
                </div>
              </div>

              <div className="secondboxes">
                <div className="row">
                  {/* pepy */}
                  {/* <div className="col-lg-4">
                    <div className="pepy">
                      <img src={leftupperquotes} alt="" />
                      <h3>PEPY Technologies</h3>
                      <h6>CO-FOUNDER</h6>
                      <p>
                        Working with Alphagnito was a breeze.They kept us in the
                        loop throughout the entire web development process and
                        delivered a site that exceeded our expectations.
                      </p>
                    </div>
                  </div> */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatourclients;
