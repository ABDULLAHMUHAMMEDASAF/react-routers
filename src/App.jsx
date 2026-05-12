import Navigation from "./Navigation.jsx";
import { Route, Routes } from "react-router";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Routers</h1>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="anasayfa" element={<Home />} />
          <Route path="kullanicilar" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
