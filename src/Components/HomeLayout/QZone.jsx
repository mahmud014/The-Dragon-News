import React from "react";
import classImg from "../../assets/class.png";
import swimming from "../../assets/swimming.png";
import playgroundImg from "../../assets/playground.png";
const QZone = () => {
  return (
    <div>
      <h1 className="font-bold">Q-Zone</h1>
      <div className="bg-base-200 p-2 mt-2">
        <img className="mx-auto" src={swimming} alt="Swimming Image" />
        <img className="mx-auto my-2" src={classImg} alt="classImg Image" />
        <img className="mx-auto" src={playgroundImg} alt="Playground Image" />
      </div>
    </div>
  );
};

export default QZone;
