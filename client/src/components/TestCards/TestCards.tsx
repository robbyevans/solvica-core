import "./TestCardsStyles.css";

const TestCards = () => {
  const cards = [{}];
  return (
    <div className="landing-page">
      <div className="card-jane">
        <h1 className="title">Jane</h1>

        <p className="description">
          Senior Paramedic with extensive experience in emergency trauma
          response and patient stabilization during critical incidents.
        </p>
      </div>
      <div className="card-michael">
        <h1 className="title">Michael</h1>
        <p className="description">
          Healthcare Data Analyst who leverages data systems to improve
          emergency response efficiency and patient care outcomes.
        </p>
      </div>

      <div className="card-babra">
        <h1 className="title">Babra</h1>
        <p className="description">
          Paramedic educator and researcher focused on enhancing pre-hospital
          training and emergency preparedness in rural areas.
        </p>
      </div>
      <div className="card-faith">
        <h1 className="title">Faith</h1>
        <p className="description">
          Public health specialist working with local communities to strengthen
          health systems and disaster management programs.
        </p>
      </div>
      <div className="card-kevin">
        <h1 className="title">Kevin</h1>
        <p className="description">
          Emergency Medical Technician with a strong focus on rapid response and
          patient-centered pre-hospital interventions.
        </p>
      </div>
      <div className="card-alice">
        <h1 className="title">Alice</h1>
        <p className="description">
          Clinical researcher exploring new approaches to paramedic education
          and integration of technology in emergency care.
        </p>
      </div>
    </div>
  );
};

export default TestCards;
