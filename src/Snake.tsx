import React from "react";
import "./Snake.css";

export const Snake: React.FC = () => {
  return (
    <div className="snake-page">
      <h1>Snake game</h1>
      <div className="snake-page-content">
          <div className="snake-page-snake">
          ⬛
          </div>

      </div>
    </div>
  );
};
