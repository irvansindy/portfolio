import React, { useState } from "react";
import { contactData } from "../../data/index";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="ms-contact padding-tb-80 sec-bg">
      <div className="container d-block">
        <div className="section-title">
          <h2>
            Hubungi <span>Saya</span>
          </h2>
          <span className="ligh-title">Kontak</span>
        </div>
        <div className="row m-b-minus-30px">
          <div className="col-lg-5 col-md-12 m-b-991-20">
            {/* Email Box */}
            <div className="ms-box">
              <div className="detail">
                <div className="icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="info">
                  <h3 className="title">Email & Website</h3>
                  <p>
                    <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                    {contactData.email}
                  </p>
                  <p>
                    <i className="fa fa-globe" aria-hidden="true"></i> &nbsp;
                    {contactData.website}
                  </p>
                </div>
              </div>
              <div className="space"></div>
            </div>

            {/* Phone Box */}
            <div className="ms-box">
              <div className="detail">
                <div className="icon">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="info">
                  <h3 className="title">Telepon/WhatsApp</h3>
                  <p>
                    <i className="fa fa-mobile" aria-hidden="true"></i> &nbsp;
                    {contactData.phone1}
                  </p>
                  {/* <p>
                    <i className="fa fa-mobile" aria-hidden="true"></i> &nbsp;
                    {contactData.phone2}
                  </p> */}
                </div>
              </div>
              <div className="space"></div>
            </div>

            {/* Address Box */}
            <div className="ms-box">
              <div className="detail">
                <div className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="info">
                  <h3 className="title">Alamat</h3>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    &nbsp;
                    {contactData.address}
                  </p>
                </div>
              </div>
              <div className="space"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7 col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Nama Lengkap"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Pesan"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* <button type="submit" className="ms-learn-more-right">
                <span className="text">Kirim Pesan</span>
              </button> */}

              <a
                href="#"
                className="ms-learn-more-right"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <span className="text">Kirim Pesan</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
