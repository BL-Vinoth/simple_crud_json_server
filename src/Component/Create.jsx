import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ 
        ...user, [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Name" 
        onChange={handleChange} 
        style={{margin:'10px'}}
    /><br/>

    <input 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
        style={{margin:'10px'}}
    /><br/>
      <button type="submit" style={{margin:'10px'}}>Add</button>
    </form>
  );
}

export default Create;