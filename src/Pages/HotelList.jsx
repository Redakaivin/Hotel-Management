import HotelCard from './../Components/HotelCard';

function HotelList({ hotels }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          image={hotel.image}
        />
      ))}
    </div>
  );
}

export default HotelList;
