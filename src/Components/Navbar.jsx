import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  let navigate = useNavigate();
  const { loggedIn, logout } = useAuth();

  return (
    <nav
      style={{
        padding: "16px 40px",
        backgroundColor: "rgba(106, 13, 173, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* logo */}
      <div className="logo">
        <span>Stay</span>
        <span className="logo-primary">Ease</span>
        <span className="logo-dot"></span>
      </div>

      {/* navbar ke  links */}
      <div style={{ display: "flex", gap: "32px" }}>
        <Link to="/hotels" className="nav-link">Hotels</Link>
        <Link to="/destinations" className="nav-link">Destinations</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/attractions" className="nav-link">Attractions</Link>
      </div>

      {/* login and signup */}
      <div style={{ display: "flex", gap: "12px" }}>
        {!loggedIn ? (
          <>
            <Link to="/login">
              <button className="btn-glow" style={loginBtn}>
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="btn-glow" style={signupBtn}>
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <button
            className="btn-glow"
            style={loginBtn}
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

let loginBtn = {
  background: "E9D5FF",
  border: "1px solid black",
  color: "black",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};

let signupBtn = {
  background: "E9D5FF",
  border: "none",
  color: "black",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Navbar;
