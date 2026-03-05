import React from "react";
import { clientsData } from "../../data/index";

const Clients = () => {
  return (
    <section className="ms-client padding-tb-80">
      <h2 className="d-none">Clients</h2>
      <div className="container">
        <div className="row">
          <div className="ms-client-outer">
            <ul id="ms-client-slider">
              {clientsData.map((client) => (
                <li
                  key={client.id}
                  className="ms-client-item"
                  data-animation="zoomIn"
                >
                  <div className="ms-client-img">
                    <a href="#">
                      <img alt="client" title="client" src={client.image} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
