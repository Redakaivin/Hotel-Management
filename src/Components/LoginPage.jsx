import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(); // context logic overrides
    navigate("/"); // ye ghar le jayega user ko
  };

  return (
    <section style={{ padding: "120px 40px" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "24px",
          color: "#6a0dad",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>

      <h1>Login</h1>

      <form
        style={{ maxWidth: "400px", marginTop: "24px" }}
        onSubmit={handleSubmit}
      >
        <input type="email" placeholder="Email" required />
        <br /><br />

        <input type="password" placeholder="Password" required />
        <br /><br />

        <button type="submit" className="btn-glow">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
