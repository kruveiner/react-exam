import React from 'react';

function Greeting({ name }) {
  return (
    <div className="greeting-card">
      <h1 className="main-title">
        Добро пожаловать, <span className="highlight">{name}</span>!
      </h1>
      <p className="subtitle">Ваш квест готов к началу</p>
    </div>
  );
}

export default Greeting;