import PropTypes from "prop-types";
import { Link } from "react-router";

function Users({ users }) {
  const divStyle = {
    backgroundColor: "black",
    color: "crimson",
    padding: "15px",
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
    <>
      <h3 style={divStyle}>Merhaba USERS :)</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id} style={liStyle}>
            <Link to={`/kullanicilar/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </>
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
