import React, { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

const Service = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const data = cmsDataService.getServicesData();
    setServicesData(data);
  }, []);
  return (
    <section id="service" className="ms-service padding-tb-80 sec-bg">
      <div className="container">
        <div className="section-title d-none">
          <h2>
            Layanan<span> Saya</span>
          </h2>
          <span className="ligh-title">Layanan</span>
        </div>
        <div className="row service-box m-tb-minus-15px">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-xs-12">
              <div className="flipper">
                <div className="main-box">
                  <div className="box-front height-300 white-bg">
                    <div className="content-wrap">
                      <div className="icon">
                        <img
                          className="icofont icofont-headphone-alt font-40px dark-color svg_img"
                          src={service.icon}
                          alt={service.title}
                        />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="box-back height-300 gradient-bg">
                    <div className="content-wrap">
                      <h3>{service.title}</h3>
                      <p>{service.fullDescription}</p>
                      <a href="#" className="btn">
                        Baca Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
