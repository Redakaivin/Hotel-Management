import { Link } from "react-router-dom";


function Signup() {
  return (
    <section style={{ padding: "80px 40px" }}>
     <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "24px",
          color: "#6a0dad",
          fontWeight: "600",  }}>
        Back to Home
      </Link>
     
     
     
      <h1>Create Account</h1>
        
      <form style={{ maxWidth: "400px", marginTop: "24px" }}>
        <input type="text" placeholder="Name" />
        <br /><br />
        <input type="email" placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button className="btn-glow">Create Account</button>
      </form>
    </section>
  );
}

export default Signup;
