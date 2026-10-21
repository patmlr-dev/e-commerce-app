import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">E-Comm-App</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
      </div>
      {!user ? (
        <div className="nav-links-auth">
          <Link to="/auth">Login</Link>
          <Link to="/auth">Signup</Link>
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
