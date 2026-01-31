function HotelsFilter({ location, setLocation }) {
  return (
    <div className="hotels-filter">
      <label>Select Location:</label>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Goa">Goa</option>
        <option value="Manali">Manali</option>
      </select>
    </div>
  );
}

export default HotelsFilter;
