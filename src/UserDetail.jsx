import { useParams } from "react-router";
import PropTypes from "prop-types";

function UserDetail({ users }) {
  const { userId } = useParams();
  const user = users.find((u) => u.id === Number(userId));
  if (!user) return <p>Herhangi bir kullanıcı bulunamadı.</p>;

  return (
    <div>
      <h1>Kullanıcı Detay Bilgileri</h1>
      <p>Kullanıcı ID: {user.id}</p>
      <p>Kullanıcı Ad: {user.name}</p>
      <p>Kullanıcı Yaş: {user.age}</p>
    </div>
  );
}

UserDetail.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }),
  ),
};

export default UserDetail;
