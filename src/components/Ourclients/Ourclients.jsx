import React from "react";
import "../Ourclients/Ourclients.css";
import tcmlogo from "../../assets/tcm.png";
import wrexalogo from "../../assets/wrexalogo.png";
import annularlogo from "../../assets/Annularlogo.png";
import pepylogo from "../../assets/pepy.png";
import spclogo from "../../assets/spclogo.png";
import isrllogo from "../../assets/isrl.png";
import myincorplogo from "../../assets/myincorplogo.png";
import meezarlogo from "../../assets/meezarlogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="container">
      <div className="ourclients">
        <h1>OUR CLIENTS</h1>
        <p>
          OUR COMMITMENT TO DELIVERING TOP-NOTCH IT SERVICES HAS EARNED US THE
          TRUST OF ORGANIZATIONS ACROSS THE BOARD.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <div className="entireourclients">
            <div className="ourclientsimages">
                 {/* meezarlogo */}
              <div>
              <div className="meezarlogo">
                <img src={meezarlogo} alt="" />
              </div>
              </div>
            
              {/* wrexalogo */}
      
                <div>
                  <div className="wrexalogo">
                    <img src={wrexalogo} alt="" />
                  </div>
                </div>
                {/* annularlogo */}
              <div>
                <div className="annularlogo">
                  <img src={annularlogo} alt="" />
                </div>
              </div>
                {/* tcmlogo */}
                <div>
                <div className="tcmlogo">
                  <img src={tcmlogo} alt="" />
                </div>
              </div>
              {/* pepylogo */}
              <div>
              <div className="pepylogo">
                <img src={pepylogo} alt="" />
              </div>
              </div>
              
              <br />
              {/* spclogo */}
              <div>
              <div className="spclogo">
                <img src={spclogo} alt="" />
              </div>

              </div>
              {/* isrllogo */}
              <div>
              <div className="isrllogo">
                <img src={isrllogo} alt="" />
              </div>
              </div>
              {/* myincorplogo */}
              <div>
              <div className="myincorplogo">
                <img src={myincorplogo} alt="" />
              </div>
              </div>
             
        
            </div>
          </div>
          {/* entireourclients end */} 
        
        </div>
        
        <div>{/* <h4>2</h4> */}</div>
        <div>{/* <h3>3</h3> */}</div>
        <div>
          {/* <h3>4</h3> */}
        </div>
        <div>
          {/* <h3>5</h3> */}
        </div>
        <div>
          {/* <h3>6</h3> */}
        </div>
    
      </Slider>
    </div>
  );
}

export default AutoPlay;
