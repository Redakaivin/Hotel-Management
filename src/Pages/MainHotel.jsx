import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import hotelsData from "../Data/Hotel";
import Filters from "./Filters";
import HotelList from './HotelList';
import "./Hotel.css";

function MainHotel() {
  let navigate = useNavigate();
  let { state } = useLocation();

  let [filters, setFilters] = useState({
    location: "",
    price: 10000,
    rating: [],
  });

  //  Search Data from Home Page
  useEffect(() => {
    if (state?.searchData?.location) {
      setFilters((prev) => ({
        ...prev,
        location: state.searchData.location,
      }));
    }
  }, [state]);

  let filteredHotels = hotelsData.filter((hotel) => {
    let matchLocation = hotel.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());

    let matchPrice = hotel.price <= filters.price;

    let  matchRating =
      filters.rating.length === 0 ||
      filters.rating.includes(Math.floor(hotel.rating));

    return matchLocation && matchPrice && matchRating;
  });

  return (
    <div className="hotel-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Hotels List */}
      <HotelList hotels={filteredHotels} />
    </div>
  );
}

export default MainHotel;
