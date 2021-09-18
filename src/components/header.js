import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Core Training</Link>
        </li>
        <li>
          <Link to="/yoga">Yoga</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;