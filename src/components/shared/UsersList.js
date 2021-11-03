export default function UsersList({ users }) {
  return (
    <ul className="view-list users-list">
      {users.map((user, index) => (
        <li className="view-list-item" key={user.id}>
          <div className="user-container">
            <div className="image-container">
              <img
                alt={user.name}
                className="abs-pos-img user-image"
                src={user.photo}
              />
            </div>
            <div className="user-name dark-text elips-overflow body-text">
              {user.first}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
