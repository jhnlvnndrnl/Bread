import React from "react";
import "./FourthSection.css";
import charity from "../../../../assets/charity.png"

const FourthSection = () => {
  return (
    <div className="fourth-position">
      <div className="container"> 
        <div className="donate2"> 
          <img className="donateClass" src={charity} alt="Support Our Cause" />
        </div>
        <div className="Description">
          <h2 className="Heading">
            Support Our Cause
          </h2>
          <p className="Paragraph">
            Your generous donation empowers us to support<br /> meaningful charity efforts and improve communities.
          </p>
          <button className="LearnMoreButton">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;