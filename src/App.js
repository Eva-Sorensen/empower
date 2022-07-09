import "./css/App.css";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
