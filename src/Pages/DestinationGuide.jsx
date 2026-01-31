import { useParams, useNavigate } from "react-router-dom";

function DestinationGuide() {
  const { city } = useParams();
  const navigate = useNavigate();

  const guides = {
    manali: {
      name: "Manali",
      bestTime: "March to June",
      peakSeason: "May-June, December",
      budgetSeason: "July-September",
      climate: "Cool summers and snowy winters",
      attractions: ["Solang Valley", "Rohtang Pass", "Old Manali"],
    },
    goa: {
      name: "Goa",
      bestTime: "November to February",
      peakSeason: "December-January",
      budgetSeason: "June-September",
      climate: "Tropical and humid",
      attractions: ["Baga Beach", "Anjuna", "Fort Aguada"],
    },
    jaipur: {
      name: "Jaipur",
      bestTime: "October to March",
      peakSeason: "December-January",
      budgetSeason: "April-September",
      climate: "Hot summers, pleasant winters",
      attractions: ["Hawa Mahal", "Amber Fort", "City Palace"],
    },
  };

  let data = guides[city];

  if (!data) {
    return <h2 style={{ padding: "40px" }}>Destination not found</h2>;
  }

  return (
    <section style={{ padding: "60px 40px", maxWidth: "900px" }}>
      <h1>{data.name}</h1>

      <p><strong>Best time to visit:</strong> {data.bestTime}</p>
      <p><strong>Peak season:</strong> {data.peakSeason}</p>
      <p><strong>Budget season:</strong> {data.budgetSeason}</p>
      <p><strong>Climate:</strong> {data.climate}</p>

      <h3 style={{ marginTop: "24px" }}>Top Attractions</h3>
      <ul>
        {data.attractions.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <button
        className="btn-glow"
        style={{ marginTop: "24px" }}
        onClick={() => navigate("/hotels")}
      >
        Book Hotels in {data.name}
      </button>
    </section>
  );
}

export default DestinationGuide;
