import React from 'react';
import '../styles/Home.scss';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from './Slide';
import service4 from '../assets/service-4.jpeg';
import service5 from '../assets/service-5.jpeg';
import service6 from '../assets/service-6.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import pic from '../assets/pic.jpeg';




const Home = () => {
    const slides = [
        {
          title: 'Balasaranya Rehabilitation Center',
        //   subtitle: 'First subtitle',
          image: service4,
        },
        {
          title: 'Balasaranya Rehabilitation Center',
        //   subtitle: 'Second subtitle',
          image: service5,
        },
        {
          title: 'Balasaranya Rehabilitation Center',
        //   subtitle: 'Third subtitle',
          image: service6,
        },
      ];
    return (
        <>
            {/* PRE LOADER */}
            <section className="preloader">
                <div className="spinner">
                    <span className="spinner-rotate"></span>
                </div>
            </section>

            {/* HEADER */}
            {/* <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-5">
                            <p>Welcome to a Professional Health Care</p>
                        </div>
                        <div className="col-md-8 col-sm-7 text-align-right">
                            <span className="phone-icon"><i className="fa fa-phone"></i> 010-060-0160</span>
                            <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                            <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="#">info@company.com</a></span>
                        </div>
                    </div>
                </div>
            </header> */}
            
            <div className="home-container">
      <Carousel autoPlay={true} useRightLeftTriangles={true} slides={slides} />
    </div>

            {/* HOME */}
            <section id="home" className="slider" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="owl-carousel owl-theme">
                            <div className="item item-first">
                                <div className="caption">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3>Let's make your life happier</h3>
                                        <h1>Healthy Living</h1>
                                        <a href="#team" className="section-btn btn btn-default smoothScroll">Meet Our Doctors</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item item-second">
                                <div className="caption">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3>Aenean luctus lobortis tellus</h3>
                                        <h1>New Lifestyle</h1>
                                        <a href="#about" className="section-btn btn btn-default btn-gray smoothScroll">More About Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item item-third">
                                <div className="caption">
                                    <div className="col-md-offset-1 col-md-10">
                                        <h3>Pellentesque nec libero nisi</h3>
                                        <h1>Your Health Benefits</h1>
                                        <a href="#news" className="section-btn btn btn-default btn-blue smoothScroll">Read Stories</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    


            {/* ABOUT */}
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="about-info">
                                <h2 className="wow fadeInUp" data-wow-delay="0.6s">Welcome to Balasaranya Rehabilition Center</h2>
                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                                    <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                                </div>
                                <figure className="profile wow fadeInUp" data-wow-delay="1s">
                                    <img src={pic} className="img-responsive" alt="" />
                                    <figcaption>
                                        <h3>Dr.B. Ayyappan D P M.,
                                        </h3>
                                        <p>CONSULTANT PSYCHIATRIST</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section id="team" data-stellar-background-ratio="1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="about-info">
                                <h2 className="wow fadeInUp" data-wow-delay="0.1s">Our Doctors</h2>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        {/* Repeat for each doctor */}
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                <img src={pic} className="img-responsive" alt="" />
                                <div className="team-info">
                                    <h3>Dr.B. Ayyappan D P M.,</h3>
                                    <p>CONSULTANT PSYCHIATRIST</p>
                                    <div className="team-contact-info">
                                        <p><i className="fa fa-phone"></i> 010-020-0120</p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="#">general@company.com</a></p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="#">General Principal</a></p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="#">BalaSaranya Center</a></p>
                                    </div>
                                    <ul className="social-icon">
                                        <li><a href="#" className="fa fa-linkedin-square"></a></li>
                                        <li><a href="#" className="fa fa-envelope-o"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                <img src="https://media.gettyimages.com/id/1390886692/photo/homecare-visit-with-a-senior-gentleman.jpg?s=612x612&w=0&k=20&c=Nczw0lwNa2-j33GZgVPMrMl7jmY9XyyuFeBXk_nxj6k=" className="img-responsive" alt="" />
                                <div className="team-info">
                                    <h3>Nate Baston</h3>
                                    <p>General Principal</p>
                                    <div className="team-contact-info">
                                        <p><i className="fa fa-phone"></i> 010-020-0120</p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="#">general@company.com</a></p>
                                    </div>
                                    <ul className="social-icon">
                                        <li><a href="#" className="fa fa-linkedin-square"></a></li>
                                        <li><a href="#" className="fa fa-envelope-o"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                <img src="https://media.gettyimages.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CB3h3a-0yUBgaZHhF2Kd5ibfDv25Qcjsca-ia5gIWUM=" className="img-responsive" alt="" />
                                <div className="team-info">
                                    <h3>Nate Baston</h3>
                                    <p>General Principal</p>
                                    <div className="team-contact-info">
                                        <p><i className="fa fa-phone"></i> 010-020-0120</p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="#">general@company.com</a></p>
                                    </div>
                                    <ul className="social-icon">
                                        <li><a href="#" className="fa fa-linkedin-square"></a></li>
                                        <li><a href="#" className="fa fa-envelope-o"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Add more doctors similarly */}
                    </div>
                </div>
            </section>


            {/* TREATMENTS */}
            <section id="news" data-stellar-background-ratio="2.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                <h2>Treatments</h2>
                            </div>
                        </div>
                        {/* Repeat for each news item */}
                        <div className="col-md-4 col-sm-6">
                            <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                                <a href="news-detail.html">
                                    <img src={img1} className="img-responsive" alt="" />
                                </a>
                                <div className="news-info">
                                    <span>March 08, 2018</span>
                                    <h3><a href="news-detail.html">Alcohol Rehab</a></h3>
                                    <p>If you are struggling to control your alcohol consumption, your health is suffering and your drinking is causing problems at work and distress to your family, we can help. Alcohol addiction is complex, but it is also a highly treatable illness.</p>
                                    <div className="author">
                                        <img src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521422848/author-image_lhyszl.jpg" className="img-responsive" alt="" />
                                        <div className="author-info">
                                            <h5>Jeremie Carlson</h5>
                                            <p>CEO / Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-md-4 col-sm-6">
                            <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                                <a href="news-detail.html">
                                    <img src={img3} className="img-responsive" alt="" />
                                </a>
                                <div className="news-info">
                                    <span>March 08, 2018</span>
                                    <h3><a href="news-detail.html">Detoxification</a></h3>
                                    <p>We understand the challenges that come with addiction to drugs and prescription medications. Our detoxification centre is led by a Consultant Psychiatrist with a 24/7 team of doctors and nurses. Our goal is your safety and comfort during detox</p>
                                    <div className="author">
                                        <img src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521422848/author-image_lhyszl.jpg" className="img-responsive" alt="" />
                                        <div className="author-info">
                                            <h5>Jeremie Carlson</h5>
                                            <p>CEO / Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                                <a href="news-detail.html">
                                    <img src={img2} className="img-responsive" alt="" />
                                </a>
                                <div className="news-info">
                                    <span>March 08, 2018</span>
                                    <h3><a href="news-detail.html">Personalized Care</a></h3>
                                    <p>Castle Craig’s residential rehab programme is person-centered – this means that we put, you, the patient, at the centre of what we do each day. Each patient plan is personalised to suit your individual needs and to ensure the best start for a lasting recovery.</p>
                                    <div className="author">
                                        <img src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521422848/author-image_lhyszl.jpg" className="img-responsive" alt="" />
                                        <div className="author-info">
                                            <h5>Jeremie Carlson</h5>
                                            <p>CEO / Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                          {/* Add more news items similarly */}
                    </div>
                </div>
            </section>

            {/* Outstanding card */}

            <section className="treatment-section">
      <div className="row g-0 align-items-stretch">
        {/* Text Section */}
        <div className="col-12 col-md-6 d-flex align-items-center text-container">
          <div className="px-4 py-4">
            <h3 className="mb-3">Outstanding Treatment</h3>
            <p>
              Bala saranya has developed one of the most trusted and
              comprehensive treatment programmes in the UK recovery field. Our
              programme is rated Outstanding by inspecting body ISO Intertek
              9001.
            </p>
            <p>
              Compassion, expertly delivered evidence-based practices, and a
              patient-centred approach are at the heart of our{" "}
              <a href="https://www.castlecraig.co.uk/programmes/our-model/">
                treatment model
              </a>
              . We follow the research that indicates addiction is a chronic
              illness, but one which is highly treatable and where recovery is
              possible.
            </p>
            <p>
              The programme at Bala saranya is unique and enriching, nurturing
              your personal development and laying the foundations for a
              fulfilled life in recovery.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 image-container">
          <img
            src={img4}            
            alt="Alcohol rehab drug rehab clinic"
            className="img-fluid h-100"
          />
        </div>
      </div>
    </section>

    {/* GOOGLE MAP */}
    <section id="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5913037170712!2d77.72003770992426!3d8.730300991283372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411f34a11ad53%3A0x4cfb2f7bd801fc0b!2sBALASARANYA%20REHABILITATION%20CENTRE!5e0!3m2!1sen!2sin!4v1736503068787!5m2!1sen!2sin" width="100%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </section>

            {/* MAKE AN APPOINTMENT */}
            <section id="appointment" data-stellar-background-ratio="3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <img src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521422850/appointment-image_tkhgt9.jpg" className="img-responsive" alt="" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <form id="appointment-form" role="form" method="post" action="#">
                                <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                                    <h2>Make an appointment</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="date">Select Date</label>
                                        <input type="date" name="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="select">Select Department</label>
                                        <select className="form-control">
                                            <option>General Health</option>
                                            <option>Mental Health and Counseling </option>
                                            <option>Substance Abuse and Addiction Recovery</option>
                                            <option>Pediatric Rehabilitation</option>
                                            <option>Cardiac Rehabilitation</option>
                                            <option>Neurological Rehabilitation</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <label htmlFor="telephone">Phone Number</label>
                                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" />
                                        <label htmlFor="Message">Additional Message</label>
                                        <textarea className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                                        <button type="submit" className="form-control" id="cf-submit" name="submit">Submit Button</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;

