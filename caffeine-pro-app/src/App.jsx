import React, { useState } from "react";
import CafeSelector from "./components/CafeSelector";
import Background from "./components/Background";
import styles from "./App.module.css";
import welcomeImage from "/images/welcome.jpg";

const App = () => {
  const [humor, setHumor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? styles.dark : styles.light}> {/* Aplica o tema na raiz */}
      <Background humor={humor} />
      
      <div className={styles.contentWrapper}>
        {/* Conteúdo principal */}
        <div className={styles.mainContent}>
          <h1 className={styles.title}>☕ Mood Coffee</h1>

          <div className={styles.baristaContainer}>
            <img src="./images/barista.png" alt="Barista" className={styles.barista} />
          </div>

          <CafeSelector onSelect={setHumor} darkMode={darkMode} />


          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={styles.toggleButton}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Imagem ao lado */}
        <div className={styles.imageContainer}>
          <img src={welcomeImage} alt="Bem-vindo ao Mood Coffee" />
        </div>
      </div>
    </div>
  );
};

export default App;