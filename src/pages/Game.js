import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);

  return (
    <div className="page">
      <h2>Собери магические кристаллы</h2>
      <p>Счёт: {score}</p>
      
      <button className="game-btn" onClick={() => setScore(score + 1)}>
        Клик
      </button>

      <div className="message">
        {score < 20 ? (
          <p>Нужно минимум 20 очков, чтобы пройти дальше</p>
        ) : (
          <p className="success">Ты рееааально легееенда. Квест пройден!</p>
        )}
      </div>
    </div>
  );
}

export default Game;