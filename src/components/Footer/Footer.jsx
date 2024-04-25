import React from "react";
import "../Footer/Footer.css";
import footerimg from "../../assets/footerimg.png";
import alphagnitofooterlogo from "../../assets/Alphagnitofooterlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="footers container-fluid">
        <div className="entirefooter">
          <div className="row">
            <div className="footer">
              {/* alphagnito" */}

              <div className="col-lg-4 ">
                <div className="alphagnito">
                  <img src={alphagnitofooterlogo} alt="" />
                  <p className="para1">
                    Empowering Security,Extending
                     Possibilities:Your <br /> Data, Our Priority!
                  </p>
                  <p className="para2">
                    Copyright <LiaCopyrightSolid /> 2023
                    <span className="spanpara">
                      <a href="https://alphagnito.com/"> Alphagnito</a>
                    </span>. All Rights Reserved.
                   
                 
                  </p>
                  <h2>FOLLOW US</h2>
                  <div className="icons">
                    <div className="iconsfb">
                      <span>
                        {" "}
                        <a href="https://www.facebook.com/profile.php?id=61553927464539&mibextid=PzaGJu">
                          <FaFacebookF />
                        </a>
                      </span>
                    </div>
                    <div className="icontwitter">
                      <span>
                        {" "}
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Falphagnito">
                          <FaTwitter />
                        </a>
                      </span>
                    </div>
                    <div className="icongoogle">
                      <span>
                     
                        <a href="https://alphagnito.com/">
                          <FaGoogle />
                        </a>
                      </span>
                    </div>
                    <div className="iconinstagram">
                      <span>
                        <a href="https://www.instagram.com/alphagnito/?igsh=aGNkcGJreGQ1NXd5">
                          <FaInstagram />
                        </a>
                      </span>
                    </div>
                    <div className="iconlinkedin">
                      <span>
                        {" "}
                        <a href="https://www.linkedin.com/company/alphagnito-technologies/">
                          <FaLinkedinIn />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* menu */}
              <div className="col-lg-4">
                <div className="menu">
                  <h5>MENU</h5>
                  <a   target="_blank" href="/About">
                    <MdOutlineKeyboardDoubleArrowRight />
                    About Us
                  </a>
                  <a  target="_blank" href="/Services">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Services
                  </a>
                  <a target="_blank" href="/Ourclients">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Our Clients
                  </a>
                  <a  target="_blank" href="/Testimonials">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Testimonials
                  </a>
                  <a target="_blank" href="/Contactus">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Contact
                  </a>
                </div>
              </div>

              {/* solutions */}
              <div className="col-lg-4">
                <div className="solutions">
                  <h5>SOLUTIONS</h5>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight />
                    IT Management
                  </p>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight />
                    Cyber Security
                  </p>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight />
                    Cloud Computing
                  </p>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight />
                    IT Consulting
                  </p>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight />
                    Software Dev
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

export default Footer;
