import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        Scrapsite
      </Link>
      <Link className="item" to="/">
        Home
      </Link>
      <Link className="item" to="/create">
        Create
      </Link>
      <Link className="item" to="/about">
        About
      </Link>
      <Link className="item" to="/">
        Support Us
      </Link>
    </div>
  );
}

export default Navbar;
