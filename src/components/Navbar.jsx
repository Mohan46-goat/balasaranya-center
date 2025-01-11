import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from '../assets/service-3.jpeg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For small-screen menu toggle
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false); // For treatments dropdown
  const [isApproachDropdownOpen, setIsApproachDropdownOpen] = useState(false); // For our approach dropdown
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false); // For our approach dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // For our
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false); // For our contact dropdown
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); // For our services dropdown




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTreatmentsDropdown = () => {
    setIsTreatmentsDropdownOpen(!isTreatmentsDropdownOpen);
    setIsApproachDropdownOpen(false); // Close the other dropdown
    setIsAdmissionDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const toggleApproachDropdown = () => {
    setIsApproachDropdownOpen(!isApproachDropdownOpen);
    setIsTreatmentsDropdownOpen(false); // Close the other dropdown
    setIsAdmissionDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const toggleAdmissionDropdown = () => {
    setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen);
    setIsTreatmentsDropdownOpen(false); // Close the other dropdown
    setIsApproachDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsContactDropdownOpen(false); // Close the other dropdown
    setIsResourcesDropdownOpen(false);
    setIsTreatmentsDropdownOpen(false); // Close the other dropdown
    setIsApproachDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
  };
  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
    setIsAboutDropdownOpen(false); // Close the other dropdown
    setIsResourcesDropdownOpen(false);
    setIsTreatmentsDropdownOpen(false); // Close the other dropdown
    setIsApproachDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
  };
  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close the other dropdown
    setIsContactDropdownOpen(false);
    setIsTreatmentsDropdownOpen(false); // Close the other dropdown
    setIsApproachDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
  };


  return (
    <>
    <nav className="navbar navbar-default navbar-sticky-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          {/* Navbar Brand */}
  <Link to="/" className="navbar-brand d-flex align-items-center">
    {/* Logo */}
    <img src={logo} alt="Logo" className="logo" />
    
    {/* Text */}
    <span>Balasaranya Rehabilitation Center</span>
  </Link>
        </div>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""
            }`} // Toggle menu display
        >
          <ul className="nav navbar-nav navbar-right">
  
{/* Admission */}
            <li
              className={`dropdown ${isAdmissionDropdownOpen ? "open" : ""}`}
              onClick={toggleAdmissionDropdown}
            >
              <a href="#" className="dropdown-toggle">
                Admissions
              </a>
              {isAdmissionDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="inner-wrapper">
                    <div className="columns">
                      <div className="column">
                        <h3>Admissions</h3>
                        <ul>
                          <li className="sketch">
                            <Link to="/admission">
                              Admission Inquiry
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/admission">
                              Payments & Insurance
                          </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/admission">
                              FAQs
                          </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/admission">
                              What to Bring
                          </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/admission">
                              Transportation
                          </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/admission">
                              For Referring Professionals
                          </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
{/* Expertise */}
            <li
              className={`dropdown ${isTreatmentsDropdownOpen ? "open" : ""}`}
              onClick={toggleTreatmentsDropdown}
            >
              <a href="#" className="dropdown-toggle">
                Expertise
              </a>
              {isTreatmentsDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="inner-wrapper">
                    <div className="columns">
                      <div className="column">
                        <h3>Who We Are</h3>
                        <ul>
                          <li className="sketch">
                          <Link to="/expertise">
                              Our Campus
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Care & Recovery
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Accommodations
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Amenities
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h3>Medicated Support Recovery</h3>
                        <ul>
                          <li className="sketch">
                          <Link to="/expertise">
                              Our Team
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Outpatient Care
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Extended Care
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Family Services
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/expertise">
                              Mental Health
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

{/* our focus */}
            <li
              className={`dropdown ${isApproachDropdownOpen ? "open" : ""}`}
              onClick={toggleApproachDropdown}
            >
              <a href="#" className="dropdown-toggle">
                Our Focus
              </a>
              {isApproachDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="inner-wrapper">
                    <div className="columns">
                      <div className="column">
                        <h3>Our Focus</h3>
                        <ul>
                          <li className="sketch">
                          <Link to="/ourfocus">
                              Rehabilation Longterm Care
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/ourfocus">
                              Medicated Recovery
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
{/* about */}
            <li
              className={`dropdown ${isAboutDropdownOpen ? "open" : ""}`}
              onClick={toggleAboutDropdown}
            >
              <a href="#" className="dropdown-toggle">
                About Us
              </a>
              {isAboutDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="inner-wrapper">
                    <div className="columns">
                      <div className="column">
                        <h3>About Us</h3>
                        <ul>
                          <li className="sketch">
                          <Link to="/about">
                              Our Mission and Vision
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/about">
                              History
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/about">
                              Leadership
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/about">
                              Careers at Balasarnya
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
{/* resources */}
            <li
              className={`dropdown ${isResourcesDropdownOpen ? "open" : ""}`}
              onClick={toggleResourcesDropdown}
            >
              <a href="#" className="dropdown-toggle">
                Resources
              </a>
              {isResourcesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="inner-wrapper">
                    <div className="columns">
                      <div className="column">
                        <h3>Resources</h3>
                        <ul>
                          <li  className="sketch">
                          <Link to="/resources">
                              Events
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/resources">
                              Research
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/resources">
                              Research Outcomes
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/resources">
                              Blog
                            </Link>
                          </li>
                          <li className="sketch">
                          <Link to="/resources">
                              News
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="appointment-btn">
              <Link to="/appointment">Make an appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
