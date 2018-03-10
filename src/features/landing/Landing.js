import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../rice-logo.png'
import footerLogo from '../../ricepay-transparent.png'
import './Landing.css';
import 'animate.css';
import WOW from 'wowjs';


class Landing extends Component {

  componentDidMount() {
    new WOW.WOW({
      live: false,
      offset: 100,
    }).init();
  }

  render() {
    return (
      <div>
        <div>
          <div className="lightblue-flat font-neutral">
            <header className="header">
              <div className="container-lrg">
                <div className="flex col-12 spread">
                  <a className="logo"><img src={logo} style={{width: '50%'}} alt="RiceCompany Logo"/></a>
                  <div style={{margin: 'auto 0'}}>
                    <Link to="/signup" className="nav-link secondary-color">Sign Up</Link>
                    <Link to="/login" className="nav-link secondary-color">Login</Link>
                  </div>
                </div>
              </div>
            </header>
            <section className="section">
              <div className="container-lrg flex">
                <div className="col-6 flex flex-column center-vertical mobile-text-center mb40">
                  <h1 className="heading-lrg primary-color">Order food at restaurants with your phone</h1>
                  <div className="mt40">
                    <a target="_blank" className="button mobile-text-center mt10 mr10 primary-color mobile-text-center accent-bg fill-white wow tada" data-wow-delay="1.3s">
                      <svg width="15" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.55 9.543c-.02-2.232 1.827-3.317 1.912-3.368-1.046-1.525-2.668-1.733-3.238-1.75-1.361-.143-2.682.815-3.376.815-.708 0-1.776-.8-2.927-.777-1.482.022-2.868.88-3.628 2.212-1.569 2.716-.399 6.707 1.104 8.903.752 1.075 1.63 2.275 2.78 2.233 1.126-.046 1.546-.717 2.904-.717 1.345 0 1.74.717 2.912.69 1.208-.02 1.968-1.08 2.693-2.165.87-1.232 1.218-2.446 1.232-2.508-.029-.01-2.345-.894-2.368-3.568zM10.335 2.98c.605-.757 1.019-1.786.904-2.83-.876.038-1.971.605-2.602 1.345-.558.652-1.056 1.721-.927 2.726.983.074 1.993-.496 2.625-1.24z"></path>
                      </svg>
                      <span> Get on App Store </span>
                    </a>
                    <a target="_blank" className="button mobile-text-center mt10 wow tada" data-wow-delay="2s">
                      <svg width="76" height="80" viewBox="0 0 76 80" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.175 79.25c1.879.334 4.098-.077 6.471-1.355l41.613-22.406-12.106-12.05L6.175 79.25zM2.083 3.555C1.044 5.034.446 7.069.446 9.576v61.031c0 2.442.566 4.436 1.553 5.902L38.69 39.991 2.083 3.555zM54.181 24.572L12.653 2.275C10.346 1.037 8.184.612 6.341.896l35.812 35.646 12.028-11.97zM58.757 53.068l12.016-6.471c6.711-3.612 6.707-9.517-.008-13.122l-12.082-6.487-13.065 13.003 13.139 13.077z"></path>
                      </svg>
                      <span> Get on Play Store </span>
                    </a>
                  </div>
                </div>
                <div className="col-6 flex center-vertical wow fadeInUp" data-wow-duration="1.5s">
                  <div className="iphoneandroid noshrink">
                    <div className="iphoneandroid-android">
                      <div className="mask mask__noimage"><img alt="" className="mask-img"/></div>
                    </div>
                    <div className="iphoneandroid-iphone">
                      <div className="mask mask__noimage"><img alt="" className="mask-img"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section className="section lightblue-white font-neutral">
            <div className="container-lrg flex">
              <div className="col-6 flex flex-column center-vertical">
                <div className="flex mobile-flex-wrap mb20 mobile-text-center wow fadeInLeft">
                  <i className="icon secondary-bg mr20 mobile-center-icon">
                    <svg className="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path d="M16 3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5zm5-1v20a2.503 2.503 0 0 1-2.5 2.5h-11A2.503 2.503 0 0 1 5 22.5v-20A2.503 2.503 0 0 1 7.5 0h11A2.503 2.503 0 0 1 21 2.5zm-6 20a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm5-20A1.502 1.502 0 0 0 18.5 1h-11A1.502 1.502 0 0 0 6 2.5V20h14z"></path>
                    </svg>
                  </i>
                  <div>
                    <h3 className="bold primary-color">Easy</h3>
                    <p className="paragraph secondary-color">Just scan QR code, add items to your cart, and pay</p>
                  </div>
                </div>
                <div className="flex mobile-flex-wrap mb20 mobile-text-center wow fadeInLeft">
                  <i className="icon secondary-bg mr20 mobile-center-icon">
                    <svg className="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path d="M20 22.494v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0zm-14.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm7 1a10.924 10.924 0 0 1-2.494-.391l-.27 1.76a.528.528 0 0 0 .097.454.498.498 0 0 0 .387.183h4.56a.5.5 0 0 0 .49-.598l-.275-1.8a10.928 10.928 0 0 1-2.495.392zm9.06-7.44L18 11.995v9h2.5a1.5 1.5 0 0 0 1.5-1.5v-2.879a1.5 1.5 0 0 0-.44-1.06zM17 5.995v15a18.472 18.472 0 0 1-4 .974v-7.474a.5.5 0 0 0-1 0v7.474a18.47 18.47 0 0 1-4-.974v-15C8 3.67 11.553.244 12.5 0c.947.244 4.5 3.67 4.5 5.994zm-2.168 1.127A4.374 4.374 0 0 0 12.5 5.994a4.113 4.113 0 0 0-2.343 1.136.5.5 0 0 0 .686.729 3.213 3.213 0 0 1 1.657-.865 3.417 3.417 0 0 1 1.668.874.5.5 0 0 0 .664-.748zM3 16.614v2.88a1.5 1.5 0 0 0 1.5 1.5H7v-9l-3.56 3.56a1.5 1.5 0 0 0-.44 1.06z"></path>
                    </svg>
                  </i>
                  <div>
                    <h3 className="bold primary-color">Fast</h3>
                    <p className="paragraph secondary-color">Get food delivered to your table immediately</p>
                  </div>
                </div>
                <div className="flex mobile-flex-wrap mb20 mobile-text-center wow fadeInLeft">
                  <i className="icon secondary-bg mr20 mobile-center-icon">
                    <svg className="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path d="M20 22.494v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0zm-14.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm7 1a10.924 10.924 0 0 1-2.494-.391l-.27 1.76a.528.528 0 0 0 .097.454.498.498 0 0 0 .387.183h4.56a.5.5 0 0 0 .49-.598l-.275-1.8a10.928 10.928 0 0 1-2.495.392zm9.06-7.44L18 11.995v9h2.5a1.5 1.5 0 0 0 1.5-1.5v-2.879a1.5 1.5 0 0 0-.44-1.06zM17 5.995v15a18.472 18.472 0 0 1-4 .974v-7.474a.5.5 0 0 0-1 0v7.474a18.47 18.47 0 0 1-4-.974v-15C8 3.67 11.553.244 12.5 0c.947.244 4.5 3.67 4.5 5.994zm-2.168 1.127A4.374 4.374 0 0 0 12.5 5.994a4.113 4.113 0 0 0-2.343 1.136.5.5 0 0 0 .686.729 3.213 3.213 0 0 1 1.657-.865 3.417 3.417 0 0 1 1.668.874.5.5 0 0 0 .664-.748zM3 16.614v2.88a1.5 1.5 0 0 0 1.5 1.5H7v-9l-3.56 3.56a1.5 1.5 0 0 0-.44 1.06z"></path>
                    </svg>
                  </i>
                  <div>
                    <h3 className="bold primary-color">Convenient</h3>
                    <p className="paragraph secondary-color">No more time wasted with cash and calculating tips</p>
                  </div>
                </div>
              </div>
              <div className="col-6 flex center-horizontal center-vertical wow zoomIn" data-wow-offset="400">
                <div className="android2">
                  <div className="mask mask__noimage"><img alt="" className="mask-img"/></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="section lightblue-black font-neutral">
            <div className="container text-center mb75">
              <div className="col-12 wow fadeInUp">
                <h3 className="heading primary-color">Features</h3>
                <p className="subheading secondary-color mt20">The benefits of Rice</p>
              </div>
            </div>
            <div className="container flex">
              <ul className="checklist col-12">
                <li className="checklist-item flex center-horizontal spread pad20 wow fadeInUp">
                  <p className="bold primary-color mr20">No more time wasted waiting for bill</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad20 wow fadeInUp">
                  <p className="bold primary-color mr20">No more wrong or forgotten orders</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad20 wow fadeInUp">
                  <p className="bold primary-color mr20">No more problems splitting bills</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad20 wow fadeInUp">
                  <p className="bold primary-color mr20">No more need for wallet or cash</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <section id="testimonial-3" className="section lightblue-white font-neutral">
            <div className="container text-center">
              <div className="col-12">
                <blockquote className="heading-sml primary-color">"This is the future... No more awkwardly waiting to pay for your food. Just pay with your phone and go."</blockquote>
                <div className="mt20">
                  <p className="span secondary-color mb10">Christophe</p>
                  <span className="span secondary-color">Frequent restaurant goer</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*
        <div>
          <section className="section lightblue-flat font-neutral">
            <div className="container">
              <div className="col-12 text-center">
                <h3 className="heading primary-color">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
            <div className="container">
              <div className="col-12 mt40">
                <div className="faq pad20">
                  <b className="bold primary-color">
                  How does this work?
                  </b>
                  <p  className="paragraph secondary-color">
                    Participating restaurants are given special QR codes to place on all their tables. Once you scan a QR code using the Rice app, you are given exclusive access to the menu at the restaurant. Then you simply place an order for th food you want and the server delivers it to your table.
                  </p>
                </div>
                <div className="faq pad20">
                  <b className="bold primary-color">
                  I own a restaurant. How can I get this?
                  </b>
                  <p className="paragraph secondary-color">
                    Shoot us an email!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="section lightblue-white font-neutral">
            <div className="container text-center mb35">
              <h3 className="heading primary-color">Team</h3>
              <p className="subheading secondary-color mt20">The people who make it happen</p>
            </div>
            <div className="container flex wrap text-center">
              <div className="col-6 mt40 flex">
                <div className="team-card flex flex-column center-vertical center-horizontal w100">
                  <div id="dillion-img" className="user-image mb20"></div>
                  <div>
                    <b className="bold primary-color">Dillion Verma</b>
                    <p className="paragraph primary-color mt10">Co-Founder</p>
                    <p className="paragraph secondary-color mt20">Extremely passionate, focused and dedicated individual who turns ideas into reality.</p>
                  </div>
                  <div className="mt30">
                    <a href="https://twitter.com/dillionverma"     target="_blank" className="socialicons accent-bg twitter"></a>
                    <a href="https://github.com/dillionverma"      target="_blank" className="socialicons accent-bg github"></a>
                    <a href="https://instagram.com/dillionverma"   target="_blank" className="socialicons accent-bg instagram"></a>
                    <a href="https://linkedin.com/in/dillionverma" target="_blank" className="socialicons accent-bg linkedin"></a>
                  </div>
                </div>
              </div>
              <div className="col-6 mt40 flex">
                <div className="team-card flex flex-column center-vertical center-horizontal w100">
                  <div id="marc-img" className="user-image mb20"></div>
                  <div >
                    <b className="bold primary-color">Marc Li</b>
                    <p className="paragraph primary-color mt10">Co-Founder</p>
                    <p className="paragraph secondary-color mt20">Really awesome and cool guy.</p>
                  </div>
                  <div className="mt30">
                    <a href="https://github.com/marc-li" target="_blank" className="socialicons accent-bg github"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        */}
        <div >
          <section className="section lightblue-black font-neutral">
            <div className="container text-center">
              <div className="col-12">
                <h4 className="heading primary-color">Don't waste anymore time!</h4>
                <p className="paragraph mt20 secondary-color">Download the app today</p>
                <div className="mt40">
                  <a target="_blank" className="button mobile-text-center mt10 mr10 primary-color mobile-text-center accent-bg fill-white">
                    <svg width="15" height="18" viewBox="0 0 15 18">
                      <path d="M12.55 9.543c-.02-2.232 1.827-3.317 1.912-3.368-1.046-1.525-2.668-1.733-3.238-1.75-1.361-.143-2.682.815-3.376.815-.708 0-1.776-.8-2.927-.777-1.482.022-2.868.88-3.628 2.212-1.569 2.716-.399 6.707 1.104 8.903.752 1.075 1.63 2.275 2.78 2.233 1.126-.046 1.546-.717 2.904-.717 1.345 0 1.74.717 2.912.69 1.208-.02 1.968-1.08 2.693-2.165.87-1.232 1.218-2.446 1.232-2.508-.029-.01-2.345-.894-2.368-3.568zM10.335 2.98c.605-.757 1.019-1.786.904-2.83-.876.038-1.971.605-2.602 1.345-.558.652-1.056 1.721-.927 2.726.983.074 1.993-.496 2.625-1.24z"></path>
                    </svg>
                    <span> Get on App Store </span>
                  </a>
                  <a target="_blank" className="button mobile-text-center mt10">
                    <svg width="76" height="80" viewBox="0 0 76 80">
                      <path d="M6.175 79.25c1.879.334 4.098-.077 6.471-1.355l41.613-22.406-12.106-12.05L6.175 79.25zM2.083 3.555C1.044 5.034.446 7.069.446 9.576v61.031c0 2.442.566 4.436 1.553 5.902L38.69 39.991 2.083 3.555zM54.181 24.572L12.653 2.275C10.346 1.037 8.184.612 6.341.896l35.812 35.646 12.028-11.97zM58.757 53.068l12.016-6.471c6.711-3.612 6.707-9.517-.008-13.122l-12.082-6.487-13.065 13.003 13.139 13.077z"></path>
                    </svg>
                    <span> Get on Play Store </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <footer id="footer" className="section lightblue-white font-neutral">
            <div style={{display: 'flex', margin: '20px 0', flexWrap: 'wrap'}} className="secondary-color">
              <div className="text-center col-3">
                <a className="logo"><img src={footerLogo} style={{width: '30%'}} alt="RiceCompany Logo"/></a>
              </div>
              <div className="footer-col col-3">
                <h2>Products</h2>
                <ul>
                  <li><a>Android App</a></li>
                  <li><a>iOS App</a></li>
                  <li><a>Restaurant Dashboard</a></li>
                </ul>
              </div>
              <div className="footer-col col-3">
                <h2>Company</h2>
                <ul>
                  <li><a>About</a></li>
                  <li><a>Our Clients</a></li>
                  <li><a>Careers</a></li>
                  <li><a>Blog</a></li>
                  <li><a>Press</a></li>
                </ul>
              </div>
              <div className="footer-col col-3">
                <h2>Resources</h2>
                <ul>
                  <li><a>Support</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Privacy & Terms</a></li>
                </ul>
              </div>
              <div className="text-center col-3">
                <span className="span secondary-color">©</span> <span className="span secondary-color">Rice 2018</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Landing;
