import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [user, setUser] = useState({ name: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };

  const handleChange = (e) => {
    setUser({ 
        ...user, [e.target.name]: e.target.value
    });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
  };

  return (
    <form onSubmit={updateUser}>
      <input name="name" value={user.name} onChange={handleChange} style={{margin:'5px'}} /> <br/>
      <input name="email" value={user.email} onChange={handleChange} style={{margin:'5px'}} /><br/>
      <button type="submit" style={{margin:'5px'}}>Update</button>
    </form>
  );
}

export default Edit;