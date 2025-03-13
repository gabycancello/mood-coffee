import React, { useState } from "react";
import cafes from "./Cafes";
import styles from "./CafeSelector.module.css";

const CafeSelector = ({ onSelect, darkMode }) => {
  const [humor, setHumor] = useState("");
  const [animando, setAnimando] = useState(false);
  const [bartenderFala, setBartenderFala] = useState("");
  const [contador, setContador] = useState(0);

  const getBartenderResponse = (humor) => {
    const responses = {
      feliz: "Ah, vejo que alguém acordou no modo 'dia perfeito'!",
      tranquilo: "Uma escolha delicada... aproveite esse instante só seu.",
      curioso: "Um segredo: quem prova o pistachio latte não volta atrás",
      cansado: "Precisa de um boost? Esse café vai te dar energia!",
      focado: "Boa escolha! Café perfeito para produtividade máxima!",
      nervoso: "Respira fundo... Esse café vai te acalmar.",
      romantico: "Alerta: esse café pode causar suspiros! Ah, o amor...",
      geek: "Preparado para uma dose de nostalgia e energia? Press start!"
    };
    return responses[humor] || "";
  };

  const handleSelect = (e) => {
    const value = e.target.value;

    if (value === humor) {
      setContador(contador + 1);
    } else {
      setContador(1);
    }

    setHumor(value);
    onSelect(value);
    setBartenderFala(getBartenderResponse(value));
    setAnimando(true);

    // Som ao selecionar
    const audio = new Audio("/public/sounds/select.mp3");
    audio.volume = 0.5;
    audio.play();

    // Reset da animação
    setTimeout(() => setAnimando(false), 500);
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <h2>Qual seu humor hoje?</h2>
      
      <label htmlFor="humor" className={styles.label}>Escolha seu humor:</label>
      <select id="humor" onChange={handleSelect} className={styles.select}>
        <option value="">Selecione...</option>
        <option value="feliz">Feliz</option>
        <option value="tranquilo">Tranquilo</option>
        <option value="curioso">Curioso</option>
        <option value="cansado">Cansado</option>
        <option value="focado">Focado</option>
        <option value="nervoso">Nervoso</option>
        <option value="romantico">Romântico</option>
        <option value="geek">Geek</option>
      </select>

      {bartenderFala && (
        <div className={styles.bartenderFala}>
          <p>{bartenderFala}</p>
        </div>
      )}

      {contador > 3 && <p className={styles.surpresa}>Você realmente ama esse café! ☕</p>}

      {humor && (
        <div className={`${styles.cafeCard} ${animando ? styles.pulse : ""} ${darkMode ? styles.darkCafeCard : ""}`}>
          <img src={cafes[humor].imagem} alt={cafes[humor].nome} />
          <h3>{cafes[humor].nome}</h3>
          <p>{cafes[humor].descricao}</p>
          <a href={cafes[humor].link} target="_blank" className={styles.link}>Saiba mais</a>
        </div>
      )}
    </div>
  );
};

export default CafeSelector;