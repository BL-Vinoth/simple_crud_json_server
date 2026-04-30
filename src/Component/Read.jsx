import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    getUsers();
  };

  return (
    <div>
      <h2>User List</h2>
      <Link to="/create">Add User</Link>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
          <Link to={`/edit/${user.id}`}>Edit</Link>
          <button onClick={() => deleteUser(user.id)} style={{margin:'10px'}}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Read;