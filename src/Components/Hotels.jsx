import { useState } from "react";
import { hotels } from "../data/hotels";
import HotelsFilter from "../components/HotelsFilter";
import HotelsList from "../components/HotelsList";

function Hotels() {
  const [location, setLocation] = useState("all");

  const filteredHotels =
    location === "all"
      ? hotels
      : hotels.filter(hotel => hotel.location === location);

  return (
    <div className="hotels-page">
      <h1>Available Hotels</h1>

      <HotelsFilter
        location={location}
        setLocation={setLocation}
      />

      <HotelsList hotels={filteredHotels} />
    </div>
  );
}

export default Hotels;
