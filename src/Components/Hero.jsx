import SearchCard from "./SearchCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  let navigate = useNavigate();

  let [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  let handleSearch = () => {
    navigate("/hotels", { state: { searchData } });
  };

  return (
    <section style={{ padding: "64px 0 48px", backgroundColor: "#ffffff" }}>

      {/* Carousel  */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/hero1.jpg"
              className="d-block w-100"
              alt="Hotel view"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/hero2.jpg"
              className="d-block w-100"
              alt="Resort"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/hero3.jpg"
              className="d-block w-100"
              alt="Luxury stay"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/hero4.jpg"
              className="d-block w-100"
              alt="Luxury stay"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/hero5.jpg"
              className="d-block w-100"
              alt="Luxury stay"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/hero6.jpg"
              className="d-block w-100"
              alt="Luxury stay"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Find your perfect stay</h1>
        <p className="hero-sub">Browse hotels and book your stay easily.</p>
      </motion.div>

      {/* Search Card */}
      <SearchCard
        searchData={searchData}
        setSearchData={setSearchData}
        onSearch={handleSearch}
      />
    </section>
  );
}

export default Hero;
