import PropTypes from "prop-types";
import { Link, Outlet } from "react-router";

function Users({ users }) {
  const divStyle = {
    backgroundColor: "black",
    color: "crimson",
    padding: "15px",
    display: "flex",
    gap:"20px"
  };

  const liStyle = {
    backgroundColor: "orange",
    color: "black",
    padding: "5px",
    listStyle: "none",
    margin: "5px 0",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={divStyle}>
      <div style={{ flexGrow: "1" }}>
        <h3>Merhaba USERS :)</h3>
        <ul>
          {users.map((u) => (
            <li key={u.id} style={liStyle}>
              <Link to={`/kullanicilar/${u.id}`}>{u.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flexGrow: "1" }}>
        <Outlet />
      </div>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }),
  ),
};

export default Users;
