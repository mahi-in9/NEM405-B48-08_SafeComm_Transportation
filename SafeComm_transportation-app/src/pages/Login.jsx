import { useState } from "react";
import API from "../../api/api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "registeration failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button>LogIn</button>
      </form>

      {message && <p> {message}</p>}
    </>
  );
}

export default Login;
