import { Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HotelCard from "./Components/HotelCard";
import hotels from "./Data/Hotel";
import HotelDetails from "./Components/HotelDetails";
import Login from "./Components/LoginPage";
import Signup from "./Components/SignIn";
import MainHotel from "./Pages/MainHotel";
import Destinations from "./Pages/Destinations";
import Attractions from "./Pages/Attractions";
import About from "./Pages/About";
import DestinationGuide from "./Pages/DestinationGuide";
import AttractionsGuide from "./Pages/AttractionsGuide";

import "./App.css";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <section className="hotels-section">
                <h2 className="section-title">Available Hotels</h2>

                <div className="hotel-grid">
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
              </section>
            </>
          }
        />

        {/* HOTELS PAGE */}
        <Route path="/hotels" element={<MainHotel />} />

        {/* HOTEL DETAILS */}
        <Route path="/hotels/:id" element={<HotelDetails />} />

        {/* PAGES */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations/:city" element={<DestinationGuide />} />
        <Route path="/attractions/:type" element={<AttractionsGuide />} />


        {/* AUTH ROUTES  */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
