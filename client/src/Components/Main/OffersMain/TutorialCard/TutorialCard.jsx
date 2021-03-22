import React from "react";
import "./TutorialCard.scss"
const TutorialCard = ({tutorial}) => {
  return <div className="Tutorial">
    <div>
      <h4>
        {tutorial.title}
      </h4>
    </div>
    <div>
      <p>{tutorial.desc}</p>
      <video controls="controls" src={tutorial.src}></video>
    </div>
  </div>;
};

export default TutorialCard;
