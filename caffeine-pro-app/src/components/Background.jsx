import React, { useEffect, useState } from "react";
import styles from "./Background.module.css"; // Adicionando um CSS separado para garantir que ele funcione corretamente

const cores = {
  feliz: "#ffcc00",
  tranquilo: "#6a5acd",
  curioso: "7cfc00",
  cansado: "#333",
  focado: "#737373",
  nervoso: "#b71c1c",
  romantico: "#fadadd",
  geek: "#a347ff",
};

const Background = ({ humor }) => {
  const [cor, setCor] = useState("#fff");

  useEffect(() => {
    if (humor) {
      setCor(cores[humor]);
    }
  }, [humor]);

  return (
    <div className={styles.background} style={{ backgroundColor: cor }}>
      {humor && <h1 className={styles.humorText}>Modo {humor.toUpperCase()}</h1>}
    </div>
  );
};

export default Background;