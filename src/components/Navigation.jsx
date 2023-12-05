import { Link } from "react-router-dom";
import "../styles/Nav.scss";

const Navigation = () => {
  return (
    <nav>
      <div className="Name">
        <h1>Photographer Name</h1>
      </div>
      <div className="Links">
        <Link className="link" to="/">
          <p>Home</p>
        </Link>
        <Link className="link" to="/about">
          <p>About</p>
        </Link>
        <Link className="link" to="/contact">
          <p>Contact Me</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation