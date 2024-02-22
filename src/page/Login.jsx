import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from "../firebase";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex felx-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Register</h1>
      <form className="felx flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mx-2 my-2 p-1 border border-x-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-x-gray-100 rounded-sm"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-black text-white p-1 rounded-md m-auto"
        >
          Login
        </button>
      </form>
      <p>
        Not have an account?
        <NavLink to="/register" className="underline">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
