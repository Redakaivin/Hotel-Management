function SearchCard({
  searchData = {
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  },
  setSearchData = () => {},
  onSearch = () => {},
}) {
  return (
    <div className="search-card">
      <input
        type="text"
        placeholder="Where are you going?"
        value={searchData.location}
        onChange={(e) =>
          setSearchData({ ...searchData, location: e.target.value })
        }
      />

      <input
        type="date"
        value={searchData.checkIn}
        onChange={(e) =>
          setSearchData({ ...searchData, checkIn: e.target.value })
        }
      />

      <input
        type="date"
        value={searchData.checkOut}
        onChange={(e) =>
          setSearchData({ ...searchData, checkOut: e.target.value })
        }
      />

      <input
        type="number"
        min="1"
        value={searchData.guests}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            guests: Number(e.target.value),
          })
        }
      />

      <button className="btn-glow" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchCard;
