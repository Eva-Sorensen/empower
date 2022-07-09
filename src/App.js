import "./css/App.css";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Signup from "./pages/Signup.js";
import NewOffer from "./pages/NewOffer.js";
import YourOffer from "./pages/YourOffer.js";
import Meetup from "./pages/Meetup";
import FoodResource from "./pages/FoodResource.js";
import WhereTo from "./pages/WhereTo.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="newoffer" element={<NewOffer />} />
        <Route path="youroffer" element={<YourOffer />} />
        <Route path="meetups" element={<Meetup />} />
        <Route path="food" element={<FoodResource />} />
        <Route path="whereto" element={<WhereTo />} />
      </Route>
    </Routes>
  );
}

export default App;
