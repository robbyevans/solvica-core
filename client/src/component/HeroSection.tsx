import {} from "./HeroSection.css";
export const HeroSection = () => {
  return (
    <div className="hero">
      <h1>
        Data to enrich your <span>online business</span>
      </h1>

      <p className="subheader">
        When it comes to online business, the more data you have, the smarter
        your <br />
        busuness decisions can be.
      </p>

      <div className="button-section">
        <button className="primary-button">get started</button>
        <button className="secondary-button">live demo</button>
      </div>
    </div>
  );
};

export default HeroSection;
