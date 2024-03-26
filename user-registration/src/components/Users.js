import { useEffect, useState } from 'react';
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>List of users</h1>
      {/* map through users */}
      {users.map((user, index) => (
        <div key={index}>{user.username}</div>
      ))}
    </div>
  );
};

export default Users;
