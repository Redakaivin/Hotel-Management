function HotelFilters({ filters, setFilters }) {
  // Handle Location Change
  const handleLocationChange = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  // Handle Price Change
  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, price: Number(e.target.value) }));
  };

  // Handle Rating Change
  const handleRatingChange = (rating) => {
    setFilters((prev) => {
      let newRatings = prev.rating.includes(rating)
        ? prev.rating.filter((r) => r !== rating)
        : [...prev.rating, rating];
      return { ...prev, rating: newRatings };
    });
  };

  return (
    <div className="filters">
      <h3>Filter</h3>

      <div className="filter-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter city"
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <input
          type="range"
          min="1000"
          max="10000"
          value={filters.price}
          onChange={handlePriceChange}
        />
        <span>₹1000 - ₹{filters.price}</span>
      </div>

      <div className="filter-group">
        <label>Rating</label>
        {[5, 4, 3].map((r) => (
          <div key={r}>
            <input
              type="checkbox"
              checked={filters.rating.includes(r)}
              onChange={() => handleRatingChange(r)}
            />{" "}
            {r} ⭐ & above
          </div>
        ))}
      </div>

      <div className="filter-group">
        <label>Amenities</label>
        <div>
          <input type="checkbox" /> Free WiFi
        </div>
        <div>
          <input type="checkbox" /> Pool
        </div>
        <div>
          <input type="checkbox" /> Breakfast
        </div>
      </div>

      <button className="apply-btn">Apply Filters</button>
    </div>
  );
}
export default HotelFilters;

