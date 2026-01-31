import { useParams, useNavigate } from "react-router-dom";

function AttractionGuide() {
  const { type } = useParams();
  const navigate = useNavigate();

  const guides = {
    beaches: {
      title: "Beaches",
      intro: "India offers some of the most diverse beaches, from lively party hubs to quiet retreats.",
      bestTime: "October to March",
      places: ["Goa", "Gokarna", "Andaman Islands"],
      tips: "Carry sunscreen, stay hydrated, and avoid peak afternoons.",
    },
    "hill-stations": {
      title: "Hill Stations",
      intro: "Perfect escapes from heat with breathtaking mountain views.",
      bestTime: "March to June",
      places: ["Manali", "Shimla", "Ooty"],
      tips: "Carry light woolens even in summer.",
    },
    heritage: {
      title: "Heritage Sites",
      intro: "Explore India's rich history through forts, palaces, and monuments.",
      bestTime: "October to March",
      places: ["Jaipur", "Agra", "Hampi"],
      tips: "Visit early morning to avoid crowds.",
    },
  };

  const data = guides[type];

  if (!data) return <h2 style={{ padding: "40px" }}>Attraction not found</h2>;

  return (
    <section style={{ padding: "60px 40px", maxWidth: "900px" }}>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>

      <p><strong>Best time to visit:</strong> {data.bestTime}</p>

      <h3>Popular Places</h3>
      <ul>
        {data.places.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <p><strong>Travel Tips:</strong> {data.tips}</p>

      <button
        className="btn-glow"
        onClick={() => navigate("/destinations")}
        style={{ marginTop: "24px" }}
      >
        Explore Destinations
      </button>
    </section>
  );
}

export default AttractionGuide;
