import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { motion } from "framer-motion";

function HotelCard({ id, name, location, price, image }) {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  let handleBookNow = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      navigate(`/hotels/${id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "16px", flexGrow: 1 }}>
        <h3 style={{ marginBottom: "6px" }}>{name}</h3>

        <p
          style={{
            color: "#400071ff",
            fontSize: "14px",
            marginBottom: "12px",
          }}
        >
          {location}
        </p>

        <span
          style={{
            display: "inline-block",
            backgroundColor: "rgba(77, 9, 125, 0.8)",
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "13px",
          }}
        >
          ₹{price} / night
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        <button
          className="btn-glow"
          onClick={handleBookNow}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#E9D5FF",
            color: "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}

export default HotelCard;
