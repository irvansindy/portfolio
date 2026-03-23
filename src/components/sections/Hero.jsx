import React, { useState, useEffect } from "react";
import { profileData } from "../../data/index";
import { cvService } from "../../services/cvService";

const Hero = () => {
  const [cvAvailable, setCvAvailable] = useState(false);
  useEffect(() => {
    setCvAvailable(!!cvService.getCV());
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cv = cvService.getCV();
    if (cv) {
      const link = document.createElement("a");
      link.href = cv.base64;
      link.download = cv.name;
      link.click();
    } else if (profileData.cvUrl) {
      // Fallback ke URL statis jika ada
      window.open(profileData.cvUrl, "_blank");
    } else {
      alert("CV belum tersedia. Silakan hubungi saya.");
    }
  };

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
                  Halo, <br />
                  Saya
                  <br />
                  <span className="name">&nbsp; {profileData.fullName}</span>
                </span>
              </h2>
              <p className="ms-hero-detail">{profileData.shortDetail}</p>
              {/* Tombol CV yang dinamis */}

              <a href="#"
                className="ms-learn-more-right"
                onClick={handleDownloadCV}
                title={cvAvailable ? "Unduh CV" : "CV belum tersedia"}
              >
                <span className="text">Unduh CV</span>
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

      {/* scroll-next: arrow sudah otomatis muncul via CSS ::after pada .text */}
      <div
        className="scroll-next"
        onClick={handleScrollToAbout}
        style={{ cursor: "pointer" }}
      >
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
