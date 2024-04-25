import React from "react";
import "../Training/Training.css";
import Trainingimage from "../../assets/Training.png";

const Training = () => {
  return (
    <div>
      <div className="container">
      <div className="entiretraining">
        <div className="row">
          <div className="col-lg-6">
            <div className="trainingcontent">
              <h1>ALPHAGNITO'S</h1>
              <h2>Internship and Training</h2>
              <p>Unlock your potential with an internship at Alphagnito,where learning meets earning! We 
                are thirlled to offer dynamic internship opportunities that not only provide invaluable hands- 
                on training but also come with a stipend.At Alphagnito,we believe in investing in talent and 
                fostering growth.Our internship program in designed on equip you with practical skills in IT
                industries,ensuring a transformative experience that goes beyond the classroom.Join our 
                team and gain real-world insights while receiving a competitive stipend.Seize the chance to 
                kickstart your career with a company dedicated to your professional development.Apply 
                now for an internship that values your contribution and rewards your dedication!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="trainingimage">
              <img src={Trainingimage} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Training;
