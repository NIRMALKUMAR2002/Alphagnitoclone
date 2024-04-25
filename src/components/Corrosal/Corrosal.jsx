import React from "react";
import "../Corrosal/Corrosal.css";
import landingpage1 from "../../assets/landing-page1.png";
import thinikingimg from "../../assets/thinking.png";
import utilisingimg from "../../assets/utilising.png";



const Corrosal = () => {
  return (
    <div>
     <div className="container"></div>
      <div className="landing-pages">
          {/* landingpageimg */}
            <div className="landingpageimg">
              <img src={landingpage1} alt="" />
            </div>
            {/* landingpagecontent */}
             <div className="row">
          
              <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <div className="landingpagecontent">
              <h1>ALPHAGNITO</h1>
              <h3>A Trip to Tech World</h3>
              <p>
                We are experienced professionals who understand that it services
                is changing,and are  <br />
                true partners who care about your success.
              </p>
              {/* landingpagebutton" */}
              <div className="landingpagebutton">
                <a class="moreabout" href="#" role="button">
                  MORE ABOUT US
                </a>
                <a class="ourservices" href="#" role="button">
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="thinkingandutilising">
              <div className="thinking">
                <img src={thinikingimg} alt="hi" />
                <p>Thinking insights, 
                  verified research,
                  and make right decisions!
                </p>
              </div>
              {/* <div className="utilising">
                <img src={utilisingimg} alt="" />
                <p>Utilising the latest processing solutions & decades of experience.</p>
              </div> */}
            </div>


          </div>

        
   
        </div>
       </div>
     </div>
  );
};

export default Corrosal;
