import React, { useState, useEffect } from "react";
import { countersData } from "../../data/index";

const Counter = () => {
  const [counts, setCounts] = useState({});
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initialize counts
    const initialCounts = {};
    countersData.forEach((item) => {
      initialCounts[item.id] = 0;
    });
    setCounts(initialCounts);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    countersData.forEach((item) => {
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCount = prev[item.id] + Math.ceil(item.number / 30);
          return {
            ...prev,
            [item.id]: newCount >= item.number ? item.number : newCount,
          };
        });
      }, 30);

      return () => clearInterval(interval);
    });
  }, [hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("counter");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasStarted]);

  return (
    <section id="counters" className="ms-counter padding-tb-80 sec-bg">
      <div className="container">
        <div className="section-title d-none">
          <h2>
            My <span>Achievements</span>
          </h2>
          <span className="ligh-title">Achievements</span>
        </div>
        <div className="row achive m-tb-minus-12px" id="counter">
          {countersData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="count-block" data-tilt>
                <h3 className={item.active ? "active-num" : ""}>
                  <span className="counter counter-value">
                    {counts[item.id] || 0}
                  </span>
                  +
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
