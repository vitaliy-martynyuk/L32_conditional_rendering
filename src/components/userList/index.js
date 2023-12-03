export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name || "John"} {user.secondName || "Doe"}
          {user.isAdmin && " - Admin"}
          {true}
          {undefined}
        </li>
      ))}
    </ul>
  );
};
