import React from "react";
import { profileData } from "../../data/index";

const Hero = () => {
  return (
    <section id="home" className="ms-hero margin-b-50">
      <div className="ms-diamond-1"></div>
      <div className="ms-diamond-2"></div>
      <div className="ms-diamond-3"></div>
      <div className="ms-diamond-4"></div>
      <div className="ms-diamond-5"></div>
      <div className="ms-diamond-6"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-item static">
            <div className="ms-hero-detail">
              <h2 className="ms-hero-title title-right-overflow">
                <span>
                  Hello, <br />
                  I am
                  <br />
                  <span className="name">&nbsp; {profileData.fullName}</span>
                </span>
              </h2>
              <p className="ms-hero-detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href={profileData.cvUrl} className="ms-learn-more-right">
                <span className="text">Download CV</span>
              </a>
            </div>
            <div className="ms-hero-img">
              <div className="ms-card" data-tilt>
                <img src={profileData.heroImage} alt={profileData.fullName} />
              </div>
            </div>
            <div className="ms-hero-name">
              <h3>
                <span>{profileData.title}</span>
              </h3>
            </div>
          </div>
          <div className="art"></div>
        </div>
      </div>
      <div className="scroll-next" data-scroll="about">
        <div className="ms-container">
          <span className="menu">
            <span className="text"></span>
            <span className="circle"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
