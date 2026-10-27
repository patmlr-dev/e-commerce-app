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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link selected" : "nav-link"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/checkout"
          className={({ isActive }) =>
            isActive ? "nav-link selected" : "nav-link"
          }
        >
          Cart
        </NavLink>
      </div>
      {!user ? (
        <div className="nav-links-auth">
          <NavLink to="/auth?auth=login">Login</NavLink>
          <NavLink to="/auth?auth=signup">Signup</NavLink>
        </div>
      ) : (
        <div>
          <span>Hello, {user}</span>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
