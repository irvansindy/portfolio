import React, { useState } from "react";
import { contactData } from "../../data/index";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      id: 1,
      name: "Maria W Ilvor",
      status: "Maria left 7 mins ago",
      image: "/assets/images/chat/profile_02.jpg", // ✅ public path
      isOnline: false,
      number: contactData.whatsappNumber,
      message: contactData.whatsappMessage,
    },
    {
      id: 2,
      name: "William Ilvor",
      status: "William is online",
      image: "/assets/images/chat/profile_01.jpg", // ✅ public path
      isOnline: true,
      number: contactData.whatsappNumber,
      message: contactData.whatsappMessage,
    },
  ];

  const handleWhatsApp = (number, message) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="ms-style ms-right-bottom">
      <div className={`ms-panel ${isOpen ? "active" : ""}`}>
        <div className="ms-header">
          <strong>Need Help?</strong>
          <p>Chat with us on WhatsApp</p>
        </div>
        <div className="ms-body">
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <a
                  className="ms-list"
                  onClick={() => handleWhatsApp(contact.number, contact.message)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex bd-highlight">
                    <div className="ms-img-cont">
                      <img
                        src={contact.image}
                        className="ms-user-img"
                        alt="Profile"
                      />
                      <span
                        className={`ms-status-icon ${contact.isOnline ? "ms-online" : ""}`}
                      ></span>
                    </div>
                    <div className="ms-user-info">
                      <span>{contact.name}</span>
                      <p>{contact.status}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ms-right-bottom">
        <div className="ms-box">
          <div
            className={`ms-button ${isOpen ? "rotateBackward" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;