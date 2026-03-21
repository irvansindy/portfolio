import React, { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    const data = cmsDataService.getExperienceData();
    setExperienceData(data);
  }, []);

  if (!experienceData) return null;
  return (
    <section id="experience" className="ms-experience padding-tb-80">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              Resume <span>Saya</span>
            </h2>
            <span className="ligh-title">Resume</span>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="education ms-ex-box m-b-991">
              <h4>Pendidikan</h4>
              <ul className="timeline">
                {experienceData.education.map((edu) => (
                  <li
                    key={edu.id}
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="timeline-info">
                      <span>{edu.date}</span>
                    </div>
                    <div className="timeline-content">
                      <h5 className="timeline-title">
                        {edu.title}
                        <span className="sub">- {edu.subtitle}</span>
                      </h5>
                      <p>{edu.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="experiense ms-ex-box">
              <h4>Pengalaman</h4>
              <ul className="timeline">
                {experienceData.experience.map((exp) => (
                  <li key={exp.id} className="timeline-item">
                    <div className="timeline-info">
                      <span>{exp.date}</span>
                    </div>
                    <div className="timeline-content">
                      <h5 className="timeline-title">
                        {exp.company}
                        <span className="sub">- {exp.position}</span>
                      </h5>
                      <p>{exp.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
