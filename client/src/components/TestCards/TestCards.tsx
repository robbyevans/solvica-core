import React from "react";
import "./TestCardsStyles.css";

const TestCards: React.FC = () => {
  return (
    <div className="cards-container">
      <div className="card" style={{ backgroundColor: "#B71C1C" }}>
        <h3 className="card-title">Jane</h3>
        <p className="card-text">
          Senior Paramedic with extensive experience in emergency trauma
          response and patient stabilization during critical incidents.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: "#E65100" }}>
        <h3 className="card-title">Michael</h3>
        <p className="card-text">
          Healthcare Data Analyst who leverages data systems to improve
          emergency response efficiency and patient care outcomes.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: "#F9A825" }}>
        <h3 className="card-title">Babra</h3>
        <p className="card-text">
          Paramedic educator and researcher focused on enhancing pre-hospital
          training and emergency preparedness in rural areas.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: "#2E7D32" }}>
        <h3 className="card-title">Faith</h3>
        <p className="card-text">
          Public health specialist working with local communities to strengthen
          health systems and disaster management programs.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: "#1565C0" }}>
        <h3 className="card-title">Kevin</h3>
        <p className="card-text">
          Emergency Medical Technician with a strong focus on rapid response and
          patient-centered pre-hospital interventions.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: "#4A148C" }}>
        <h3 className="card-title">Alice</h3>
        <p className="card-text">
          Clinical researcher exploring new approaches to paramedic education
          and integration of technology in emergency care.
        </p>
      </div>
    </div>
  );
};

export default TestCards;
