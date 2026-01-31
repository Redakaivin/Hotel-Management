import { Link } from "react-router-dom";

function Attractions() {
  let attractions = [
    {
      title: "Beaches",
      slug: "beaches",
      image: "/Beach.jpg",
      desc: "Relax by the sea and enjoy sunsets.",
    },
    {
      title: "Hill Stations",
      slug: "hill-stations",
      image: "/HillStation.jpg",
      desc: "Cool weather and scenic views.",
    },
    {
      title: "Heritage Sites",
      slug: "heritage",
      image: "/tajmahal.jpg",
      desc: "Explore history and architecture.",
    },
  ];

  return (
    <section style={{ padding: "60px 40px" }}>
      <h1>Top Attractions</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {attractions.map((a) => (
          <Link
            key={a.slug}
            to={`/attractions/${a.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img
                src={a.image}
                alt={a.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "16px" }}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Attractions;
