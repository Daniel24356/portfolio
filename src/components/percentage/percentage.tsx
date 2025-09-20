import { useEffect, useRef, useState } from "react";
import "./percentage.css";

const skills = [
  { name: "Html5", percent: 96 },
  { name: "Css", percent: 90 },
  { name: "Mongo Db", percent: 83 },
  { name: "Javascript", percent: 92 },
  { name: "Typescript", percent: 78 },
  { name: "React", percent: 94 },
  { name: "Angular", percent: 92 },
  { name: "Next js", percent: 95 },
  { name: "Node js", percent: 91 },
];

const Percentage = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="percentage-box" ref={sectionRef}>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="load-box">
            <h4>{skill.name}</h4>
            <h4>{skill.percent}%</h4>
          </div>
          <div className="load-div">
            <div
              className="fir-fill"
              style={{
                width: animate ? `${skill.percent}%` : "0%",
                transition: "width 2s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Percentage;
