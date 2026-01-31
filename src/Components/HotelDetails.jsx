import { useParams } from "react-router-dom";
import hotels from "../Data/Hotel";


// Hotel dhundhega id se
function HotelDetails() {
  let { id } = useParams();
  let hotel = hotels.find(h => h.id === Number(id));

  if (!hotel) {
    return <h2 style={{ padding: "40px" }}>Hotel not found</h2>;
  }

  return (
    <section style={{ padding: "60px 40px" }}>
      <img
        src={hotel.image}
        alt={hotel.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
      />

      <h1 style={{ marginTop: "24px" }}>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p style={{ fontSize: "18px", margin: "12px 0" }}>
        <strong>₹{hotel.price}</strong> / night
      </p>

      <p>{hotel.description}</p>

      <h3 style={{ marginTop: "24px" }}>Amenities</h3>
      <ul>
        {hotel.amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button
        className="btn-glow"
      >
        Proceed to Booking (Coming Soon)
      </button>
    </section>
  );
}

export default HotelDetails;
