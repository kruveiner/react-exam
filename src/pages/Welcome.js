import React from 'react';
import { useNavigate } from 'react-router-dom';
import Greeting from '../components/Greeting';

function Welcome({ name }) {
  const navigate = useNavigate();

  return (
    <div className="page welcome-bg">
      <Greeting name={name} />
      
      <div className="welcome-content">
        <p>Мир полон загадок. Готов ли ты разгадать их все?</p>
        
        <button 
          className="start-btn" 
          onClick={() => navigate('/tasks')}
        >
          Начать квест
        </button>
      </div>
    </div>
  );
}

export default Welcome;