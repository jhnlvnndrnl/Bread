import React, { useState, useEffect, useRef } from 'react';
import './NumberSection.css';

const NumbersSection = () => {
  // State variables to hold the count values for each statistic
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  
  // State to track if the section is in the viewport
  const [isInView, setIsInView] = useState(false);
  
  // Reference for the section to observe its visibility
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to trigger animation when the section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Start counting when the section is in view
    if (!isInView) return;

    const interval = setInterval(() => {
      if (count1 < 120) setCount1(prev => prev + 1);
      if (count2 < 250) setCount2(prev => prev + 1);
      if (count3 < 800) setCount3(prev => prev + 1);
      if (count4 < 500) setCount4(prev => prev + 1);
    }, 20); // Increment every 20ms

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isInView, count1, count2, count3, count4]);

  return (
    <div className="fourth-layer" ref={sectionRef}>
      <section id="numbers" className="numbers-intro">
        <h1>Bread by the Numbers</h1>
        <p>Bread is a growing community dedicated to making a difference through charitable efforts and donations.</p>
        <p><span>As of September, 2024</span></p>
      </section>

      <main className="cards">
        <div className="card">
          <h2 className="count">{count1}K</h2>
          <p className="label">Donations Made</p>
        </div>
        <div className="card">
          <h2 className="count">{count2}K</h2>
          <p className="label">Volunteers Involved</p>
        </div>
        <div className="card">
          <h2 className="count">{count3}K</h2>
          <p className="label">Projects Funded</p>
        </div>
        <div className="card">
          <h2 className="count">{count4}K</h2>
          <p className="label">Communities Reached</p>
        </div>
      </main>
    </div>
  );
};

export default NumbersSection;
