//! Proje importları
//! ----------------

import { Routes, Route, Outlet, NavLink } from "react-router";
import "./App.css";

//! Çalışma amaçlı oluşturulan users verisi.
const users = [
  { id: 1, name: "Abullah Muhammed Asaf", age: 40 },
  { id: 2, name: "Zübeyir Bin Avvam", age: 50 },
  { id: 3, name: "Osman İbn Afvan", age: 65 },
  { id: 4, name: "Ebu Ubeyde Bin Cerrah", age: 64 },
  { id: 5, name: "Ömer İbn'ul Hattab", age: 72 },
  { id: 6, name: "Ebu Zer", age: 92 },
];

//? Basit Bileşenler
const Settings = () => <h3>Sistem Ayarları</h3>;
const Profile = () => <h3>Kullanıcıların Profiler Bilgileri</h3>;
const NotFound = () => <h3>404 - Ooppss! Sayfa Bulunamadı!</h3>;
const Users = () => (
  <ul
    style={{
      backgroundColor: "black",
      padding: "20px 10px",
      color: "tomato",
      borderRadius: "5px",
      marginTop: "10px",
    }}
  >
    {users.map((u) => (
      <li key={u.id} style={{ listStyle: "none", marginBottom: "3px" }}>
        {" "}
        {u.name}
      </li>
    ))}
  </ul>
);

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "250px", background: "#000", padding: "20px" }}>
        <h3>Dashboard Menü</h3>
        <NavLink className="menu-link" to="/dashboard/profile">
          Profil
        </NavLink>
        <NavLink className="menu-link" to="/dashboard/settings">
          Ayarlar
        </NavLink>
      </aside>

      {/* Dinamik İçerik Alanı */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h2>Yönetim Paneli</h2>
        {/* Alt rotaalrın bileşenleri tam olarak bu Oulet'in olduğu yere basılacak */}
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>React Routers</h1>
      <div className="container">
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Users />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
