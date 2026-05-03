import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Найти ключ от подвала", completed: false },
  { id: 2, text: "Разгадать шифр Билла", completed: false },
  { id: 3, text: "Пройти андертейл на все три концовки", completed: false },
];

function Challenges() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const resetTasks = () => setTasks(initialTasks);

  return (
    <div className="page">
      <h2>Список испытаний</h2>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ 
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
              color: task.completed ? "gray" : "black"
            }}
          >
            {task.text} {task.completed}
          </li>
        ))}
      </ul>
      <button className="btn-reset" onClick={resetTasks}>Сбросить прогресс</button>
    </div>
  );
}

export default Challenges;