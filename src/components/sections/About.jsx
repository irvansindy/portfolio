import React, { useState, useEffect } from "react";
import { profileData } from "../../data/index";
import { cmsDataService } from "../../services/cmsDataService";

const About = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const data = cmsDataService.getSkillsData();
    setSkillsData(data);
  }, []);
  return (
    <section id="about" className="ms-about padding-tb-80 sec-bg">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              Tentang<span> Saya</span>
            </h2>
            <span className="ligh-title">Tentang</span>
          </div>
          <div className="col-lg-6">
            <div className="ms-about-detail m-b-991">
              <h4>{profileData.tagline}</h4>
              <p className="ms-text">{profileData.aboutText}</p>
              <p className="ms-text">{profileData.secondaryText}</p>
              <div className="ms-about-info">
                <ul className="m-r-30">
                  <li>
                    <span className="title">
                      Nama<b>:</b>
                    </span>
                    {profileData.fullName}
                  </li>
                  <li>
                    <span className="title">
                      Usia<b>:</b>
                    </span>
                    {profileData.age}
                  </li>
                  <li>
                    <span className="title">
                      Bahasa<b>:</b>
                    </span>
                    {profileData.languages}
                  </li>
                  <li>
                    <span className="title">
                      No Telepon<b>:</b>
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
                      Alamat<b>:</b>
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
                          style={{ strokeDashoffset: -28.598801879882814 }}
                        />
                        <text className="value" x="50%" y="58%">
                          {skill.percentage}%
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
