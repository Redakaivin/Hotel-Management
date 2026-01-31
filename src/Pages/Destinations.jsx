import { Link } from "react-router-dom";

function Destinations() {
  const destinations = [
    {
      name: "Goa",
      slug: "goa",
      image: "/rockybeach.jpg",
      desc: "Beaches, nightlife, and laid-back vibes.",
    },
    {
      name: "Manali",
      slug: "manali",
      image: "/sky.jpg",
      desc: "Snow-capped mountains and adventure.",
    },
    {
      name: "Jaipur",
      slug: "jaipur",
      image: "/jaipur.jpg",
      desc: "Royal palaces and rich culture.",
    },
  ];

  return (
    <section style={{ padding: "60px 40px" }}>
      <h1>Popular Destinations</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {destinations.map((d) => (
          <Link
            key={d.slug}
            to={`/destinations/${d.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img
                src={d.image}
                alt={d.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "16px" }}>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
