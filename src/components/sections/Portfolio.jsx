import React, { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const data = cmsDataService.getPortfolioData();
    setPortfolioData(data);
  }, []);

  // const filters = ["all", "design", "development", "graphics", "templates"];
  // const filteredProjects =
  //   activeFilter === "all"
  //     ? portfolioData
  //     : portfolioData.filter((project) =>
  //         project.category.includes(activeFilter),
  //       );

  const filteredProjects = portfolioData;

  return (
    <section id="portfolio" className="ms-portfolio padding-tb-80">
      <div className="container">
        <div className="section-title">
          <h2>
            Proyek <span>Saya</span>
          </h2>
          <span className="ligh-title">Proyek</span>
        </div>
        <div className="row m-b-minus-24px">
          <div className="portfolio-content">
            <div>
              <div className="row">
                {/* Filter tabs - commented out */}
                {/* <div className="col-sm-12">
                  <div className="portfolio-tabs">
                    <ul>
                      {filters.map((filter) => (
                        <li
                          key={filter}
                          className={`filter ${activeFilter === filter ? "active" : ""}`}
                          onClick={() => setActiveFilter(filter)}
                          style={{ cursor: "pointer" }}
                        >
                          {filter === "all" ? "ALL" : filter.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <div className="col-md-12 col-sm-12">
                  <div className="portfolio-content-items">
                    <div className="row m-b-minus-30px">
                      {filteredProjects.map((project) => (
                        <div key={project.id} className="col-lg-6 mix">
                          <div className="ms-project-box">
                            <h3>{project.title}</h3>
                            <div className="links">
                              {project.category.map((cat, idx) => (
                                <span key={idx}>
                                  <a href="#">
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                  </a>
                                  {idx < project.category.length - 1 && " | "}
                                </span>
                              ))}
                            </div>
                            <p>
                              {project.description}
                              <a href="#">Read more</a>
                            </p>
                            <div className="ms-info">
                              <div className="portfolio-img">
                                <a
                                  className=""
                                  data-fancybox="gallery"
                                  href={project.largeImage}
                                  style={{
                                    backgroundImage: `url(${project.image})`,
                                  }}
                                >
                                  <span className="overlay">+</span>
                                </a>
                              </div>
                              <div className="ms-detail">
                                <ul>
                                  <li>Date : {project.date}</li>
                                  <li>Client : {project.client}</li>
                                  <li>Tech : {project.tech}</li>
                                  <li>Type : {project.type}</li>
                                  <li>
                                    URL : <a href="#">{project.url}</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
