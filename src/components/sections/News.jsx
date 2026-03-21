import React, { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const data = cmsDataService.getNewsData();
    setNewsData(data);
  }, []);
  return (
    <section id="news" className="ms-news padding-tb-80">
      <div className="container">
        <div className="section-title">
          <h2>
            Latest <span>News</span>
          </h2>
          <span className="ligh-title">Blogs</span>
        </div>
        <div className="row m-b-minus-30px">
          <div className="news-carousel">
            {newsData.map((news) => (
              <div key={news.id} className="ms-item">
                <div className="news-info">
                  <figure className="news-img">
                    <a href="#">
                      <img src={news.image} alt={news.title} />
                    </a>
                  </figure>
                  <div className="detail">
                    <label>
                      {news.date} - <a href="#">{news.category}</a>
                    </label>
                    <h3>
                      <a href="#">{news.title}</a>
                    </h3>
                    <div className="more-info">
                      <a href="#">
                        Read More<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
