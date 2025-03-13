import React from "react";
import "./Barista.css"; // Criamos um CSS específico para ele

const Barista = () => {
  return (
    <div className="barista">
      <canvas id="baristaCanvas" width="300" height="300"></canvas>
    </div>
  );
};

export default Barista;