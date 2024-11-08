import React from "react";
import "./FourthSection.css";
import charity from "../../../../assets/charity.png"


// be ready for pagination if you're going to go beyond 5 articles
// also, you can just create 1 section component and make the content dynamic (using variables instead of hard-coded html text)
// this wastes the modularity of components.
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