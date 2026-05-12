import Navigation from "./Navigation.jsx";
import { Route, Routes } from "react-router";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import NoMatch from "./Nomatch.jsx";
import UserDetail from "./UserDetail.jsx";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Abullah Muhammed Asaf", age: 40 },
    { id: 2, name: "Zübeyir Bin Avvam", age: 50 },
    { id: 3, name: "Osman İbn Afvan", age: 65 },
    { id: 4, name: "Ebu Ubeyde Bin Cerrah", age: 64 },
    { id: 5, name: "Ömer İbn'ul Hattab", age: 72 },
  ];

  return (
    <>
      <h1>React Routers</h1>
      <div className="container">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="kullanicilar" element={<Users users={users} />}>
            <Route path=":userId" element={<UserDetail users={users} />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
