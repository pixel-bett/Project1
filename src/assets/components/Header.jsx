import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="desk">
      <img
        src="logo.png"
        alt="Ember House"
        style={{ width: "100px", height: "100px" }}
      />
      <Link to="/" style={{ color: "#000000" }}>
        Home
      </Link>
      <Link to="/aboutus" style={{ color: "#000000" }}>
        About Us
      </Link>
      <Link to="/Login" style={{ color: "#000000" }}>
        Login
      </Link>
    </header>
  );
}

export default Header;
