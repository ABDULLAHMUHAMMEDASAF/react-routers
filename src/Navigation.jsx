import { Link } from "react-router";

function Navigation() {
  const style = {
    borderBottom: "solid 1px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    backgroundColor: "#24283B",
    padding: "10px 24px",
    borderRadius: "5px",
  };

  return (
    <>
      <nav style={style}>
        <Link style={linkStyle} to="/">
          Anasayfa
        </Link>
        <Link style={linkStyle} to="/kullanicilar">
          Kullanıcılar
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
