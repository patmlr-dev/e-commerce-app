import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">
        Shop<span>Now</span>
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/checkout">Cart</NavLink>
      </div>
      {!user ? (
        <div className="nav-links-auth">
          <NavLink to="/auth">Login</NavLink>
          <NavLink to="/auth">Signup</NavLink>
        </div>
      ) : (
        <div>
          <span>Hello, {user.email}</span>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
