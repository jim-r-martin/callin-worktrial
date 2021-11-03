export default function UsersList({ users }) {
  return (
    <ul className="view-list host-list">
      {users.map((user, index) => (
        <li className="view-list-item" key={user.id}>
          <div className="host-container">
            <div className="image-container">
              <img alt={user.name} className="host-image" src={user.photo} />
            </div>
            <div className="host-name">{user.first}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
