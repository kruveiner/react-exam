import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Квест-Мастер</div>
      <ul className="nav-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/tasks">Задания</Link></li>
        <li><Link to="/game">Игра</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;