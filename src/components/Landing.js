import React from 'react';

const Landing = () => (


  <section className="landing">
    <header id="header">
  <nav id="nav-menu-container">
    <ul className="nav-menu">
      <li className="menu-active"><a href="/">Home</a></li>
      <li><a href="/#about">About Us</a></li>
      <li><a href="/#services">Services</a></li>
      <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#pricing">Pricing</a></li>


      <li><a href="/#contact">Contact Us</a></li>



    </ul>
  </nav>

    <div className="container">

      <div id="logo" className="pull-left">

        <h1><a href="#hero">LCWD</a></h1>
      </div>

    </div>
</header>


  <section id="hero">
    <div className="hero-container">
      <h1>Welcome to Lost Coast Web Develoment</h1>
      <h2>Building integrated bussiness solutions on the Lost Coast</h2>
      <a href="#about" className="btn-get-started">Get Started</a>
    </div>
  </section>

  <main id="main">



    <section id="about">
      <div className="container">
        <div className="row about-container">

          <div className="col-lg-6 content order-lg-1 order-2">
            <h2 className="title">Why Choose Us?</h2>
            <p>
            As long time residents we understand the community and its needs.
             We are commited to helping you solve problems and grow your bussiness.
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon"><i className="fa fa-line-chart"></i></div>
              <h4 className="title">Strategy and Planning</h4>
              <p className="description">We start by analyzing your bussiness and identifying strengths and weaknessess.</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon"><i className="fa fa-building"></i></div>
              <h4 className="title">Flexible Architecture</h4>
              <p className="description">Get the features you need to streamline your processess. Solutions that grow along with your bussiness</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon"><i className="fa fa-level-up"></i></div>
              <h4 className="title">Optimization</h4>
              <p className="description">Ongoing maintenance and Search Engine Optimization ensure you stay in the mix</p>
            </div>

          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
        </div>

      </div>
    </section>




    <section id="services">
      <div className="container wow fadeIn">
        <div className="section-header">
          <h3 className="section-title">Services</h3>
          <p className="section-description">Check out some of our services</p>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <div className="icon"><i className="fa fa-desktop"></i></div>
              <h4 className="title">Responsive Web Design and Develoment</h4>
              <p className="description">Great looking functional websites built with the latest technologies</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="box">
              <div className="icon"><i className="fa fa-mobile-phone"></i></div>
              <h4 className="title">Mobile App Development</h4>
              <p className="description">Build an app for your bussiness or deploy it to an app store </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="box">
              <div className="icon"><i className="fa fa-dollar"></i></div>
              <h4 className="title">E-Commerce Platform Development</h4>
              <p className="description">Custom E-commerce stores for your product or service</p>
            </div>
          </div>
        </div>

    </section>

    <section id="call-to-action">
      <div className="container wow fadeIn">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3 className="cta-title">Is your website outdated?</h3>
            <p className="cta-text">Your website is the face your company shows the world. Don't neglect it!</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#contact">Get a Free Quote</a>
          </div>
        </div>

      </div>
    </section>


    <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-description">Have a look at some of our projects</p>
        </div>


        <div className="row" id="portfolio-wrapper">


          <div className="col-lg-4  portfolio-item filter-web">
            <a href="https://cristiangpr-cropdoc.herokuapp.com/" target="_blank">
              <img src="/assets/img/portfolio/cropdoc.png" alt=""/>
              <div className="details">
                <h4>The Crop Doctor</h4>
                <span>Local bussiness site</span>
              </div>
            </a>

          </div>

          <div className="col-lg-4 portfolio-item filter-web">
            <a href="https://cristiangpr-bloccit.herokuapp.com/" target="_blank">
              <img src="/assets/img/portfolio/bloccit.png" alt=""/>
              <div className="details">
                <h4>Bloccit</h4>
                <span>Reddit style site</span>
              </div>
            </a>
          </div>

                    <div className="col-lg-4 portfolio-item filter-web">
                      <a href="https://cristiangpr-loco-jams-b.herokuapp.com/" target="_blank">
                        <img src="/assets/img/portfolio/jams.png" alt=""/>
                        <div className="details">
                          <h4>Loco Jams</h4>
                          <span>Demo React music app</span>
                        </div>
                      </a>
                    </div>
                  </div>


         </div>
    </section>



    <section id="pricing" className="home-section bg-gray paddingbot-60">
      <div className="section-header">
        <h3 className="section-title">Pricing</h3>
        <p className="section-description">Pricing is dependant on features. Here are some popular packages. Contact us to get a free quote</p>
      </div>

      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-4 pricing-box">
            <div className="wow bounceInUp" data-wow-delay="0.1s">
              <div className="pricing-content general">
                <h2>Bussiness Card Website</h2>
                <h3>$499<sup>.99</sup> </h3>
                <ul>
                  <li>Responsive design that looks great on any device<i className="fa fa-check icon-success"></i></li>
                  <li>Cool animations<i className="fa fa-check icon-success"></i></li>
                  <li>Contanct form sends message to your e-mail <i className="fa fa-check icon-success"></i></li>

                </ul>

                <div className="price-bottom">
                  <a href="#contact" className="btn btn-skin btn-lg">Purchase</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 pricing-box">
            <div className="wow bounceInUp" data-wow-delay="0.3s">
              <div className="pricing-content general">
                <h2>Small Bussiness Website</h2>
                <h3>899<sup>.99</sup></h3>
                <ul>
                  <li>Multiple Pages<i className="fa fa-check icon-success"></i></li>
                  <li>Multiple E-mail addresses<i className="fa fa-check icon-success"></i></li>
                  <li>Blog page engages your clients<i className="fa fa-check icon-success"></i></li>
                  <li>Social media integration<i className="fa fa-check icon-success"></i></li>

                </ul>

                <div className="price-bottom">
                  <a href="#contact" className="btn btn-skin btn-lg">Purchase</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 pricing-box">
            <div className="wow bounceInUp" data-wow-delay="0.2s">
              <div className="pricing-content general last">
                <h2>Full Featured Website</h2>
                <h3>$1500<sup>.00</sup> <span>/ and up</span></h3>
                <ul>
                  <li>E-commerce <i className="fa fa-check icon-success"></i></li>
                  <li>Video blogging<i className="fa fa-check icon-success"></i></li>
                  <li>Paid membership<i className="fa fa-check icon-success"></i></li>
                  <li>Admin dashboard<i className="fa fa-check icon-success"></i></li>
                </ul>

                <div className="price-bottom">
                  <a href="#contact" className="btn btn-skin btn-lg">Purchase</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>



    <section id="contact">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h3 className="section-title">Contact</h3>
          <p className="section-description">We'd love to hear from you!</p>
        </div>
      </div>



     <div className="container wow fadeInUp mt-5">
        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-4">

            <div className="info">
              <div>
                <i className="fa fa-map-marker"></i>
                <p>P.O. Box 579 Whitethorn, California 95589</p>
              </div>



              <div>
                <i className="fa fa-phone"></i>
                <p>707-223-6317</p>
              </div>
            </div>


          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">

              <form action="messages/create" method="post" role="form" className="contactForm">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="content" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>

  <footer id="footer">
    <div className="footer-top">
      <div className="container">

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>LCWD</strong>. All Rights Reserved
      </div>
      <div className="credits">

      </div>
    </div>
</footer>

  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

  </section>

);

export default Landing;
