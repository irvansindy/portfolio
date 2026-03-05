import React from "react";
import { profileData, skillsData } from "../../data/index";

const About = () => {
  return (
    <section id="about" className="ms-about padding-tb-80 sec-bg">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              About<span> Me</span>
            </h2>
            <span className="ligh-title">About</span>
          </div>
          <div className="col-lg-6">
            <div className="ms-about-detail m-b-991">
              <h4>{profileData.tagline}</h4>
              <p className="ms-text">
                I am your client Consultant having <b>8+ years</b> of experience
                in this field provides complete range of marketing materials and
                clienting solution to any industry as well as corporate clients
                maintaining their reputation and increasing the client awareness
                using PR & other print media & online marketing activities.
              </p>
              <p className="ms-text">{profileData.secondaryText}</p>
              <div className="ms-about-info">
                <ul className="m-r-30">
                  <li>
                    <span className="title">
                      Full Name<b>:</b>
                    </span>
                    {profileData.fullName}
                  </li>
                  <li>
                    <span className="title">
                      Age<b>:</b>
                    </span>
                    {profileData.age}
                  </li>
                  <li>
                    <span className="title">
                      Language<b>:</b>
                    </span>
                    {profileData.languages}
                  </li>
                  <li>
                    <span className="title">
                      Phone No<b>:</b>
                    </span>
                    {profileData.phone}
                  </li>
                  <li>
                    <span className="title">
                      Email<b>:</b>
                    </span>
                    {profileData.email}
                  </li>
                  <li>
                    <span className="title">
                      Address<b>:</b>
                    </span>
                    <span>{profileData.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ms-skill-progress">
              <div className="row m-b-minus-30px">
                {skillsData.map((skill) => (
                  <div key={skill.id} className="col-md-6">
                    <div className="ms-box">
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            marginBottom: "10px",
                          }}
                        />
                      )}
                      <svg
                        className={`progress noselect ${skill.active ? "active" : ""}`}
                        data-progress={skill.percentage}
                        x="0px"
                        y="0px"
                        viewBox="0 0 80 80"
                      >
                        <path
                          className="track"
                          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                        />
                        <path
                          className="fill"
                          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                        />
                        <text className="value" x="50%" y="58%">
                          0%
                        </text>
                      </svg>
                      <h3>{skill.name}</h3>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
