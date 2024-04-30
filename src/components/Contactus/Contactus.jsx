import React from "react";
import "../Contactus/Contactus.css";
import entiregetintouchimg from "../../assets/entiregetintouchimg.png";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";


const Contactus = () => {
  return (
    <div>
      <div className="container">
        <div className="entirecontactus">
          <div className="contactus">
            <h1>Contact Us</h1>
          </div>
          <div className="row">
            <div className="bothcontactus">
              {/* getintouch */}
              <div className="col-lg-6">
                <div className="entiregetintouch">
                  {/* entiregetintouchimg */}
                  <img src={entiregetintouchimg} alt="entiregetintouchimg" />
                  <div className="getintouch">
                    <h1>Get in Touch</h1>
                    <p>
                      Our dedicated support team is 
                      available around the clock to 
                      resolve issues promptly and 
                      minimize downtime.
                    </p>

                    {/* chatus */}
                    <div className="chatus">
                      <h6>
                        <MdOutlineMail className="mailicon" />
                        CHAT TO US
                      </h6>
                      <p>
                        Our friendly team is here to help. alphagnitoo@gmail.com
                      </p>
                    </div>
                    {/* office */}
                    <div className="office">
                      <h6>
                        <FaLocationDot className="officeicon" />
                        OFFICE
                      </h6>

                      <p>
                        {" "}
                        Come say hello at our office. 5/517,Thiruvalluvar Street
                        Anna Nagar, Madurai-20
                      </p>
                    </div>
                    {/* phone */}
                    <div className="phone">
                      <h6>
                        {" "}
                        <FiPhone className="phoneicon" />
                        PHONE
                      </h6>
                      <p>
                        Mon-Sat from 9am to 6pm <br />
                        +91 63697 36093 <br />
                        +91 79049 68313
                      </p>
                    </div>
                    <div className="entireicons">
                    <div className="icontwitter">
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Falphagnito">
                          <FaTwitter className="icontwitter1"  />
                        </a>
                      </div>
                      <div className="iconinstagram">
                        <a href="https://www.instagram.com/alphagnito/?igsh=aGNkcGJreGQ1NXd5">
                          <FaInstagram />
                        </a>
                      </div>
                      <div className="iconlinkedin">
                        <a href="https://www.linkedin.com/company/alphagnito-technologies/">
                          <FaLinkedinIn />
                        </a>
                      </div>
                      <div className="iconfb">
                        <a href="https://www.facebook.com/profile.php?id=61553927464539&mibextid=PzaGJu">
                        <FaFacebookF />

                        </a>
                      </div>
                     
                      <div className="iconthreads">
                        <a href="https://www.threads.net/@alphagnito">
                          <FaThreads />
                        </a>
                      </div>
                      
                      
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="levelup">
                  <h2>Level up with ALPHAGNITO</h2>
                  <p>You can reach us anytime via alphagnitoo@gmail.com</p>
                  <div className="form">
                    <form>
                      <input placeholder="Name" type="text" />

                      <input placeholder="Email" type="email" />

                      <input placeholder="Phone" type="number" />

                      <textarea
                        placeholder="Quories ?"
                        type="message"
                        cols="100"
                        rows="5"
                        textarea
                      />
                    </form>
                    <div className="submitbutton">
                      <a href="#" role="button">
                        SUBMIT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
