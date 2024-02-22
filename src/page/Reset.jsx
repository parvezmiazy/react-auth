import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendPasswordReset } from "../firebase";
const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex felx-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Password</h1>
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

        <button
          type="submit"
          onClick={() => sendPasswordReset(email)}
          className="bg-black text-white p-1 rounded-md m-auto"
        >
          Send Password Reset Email
        </button>
      </form>
      <p>
        Do not you have an account?
        <NavLink to="/register" className="underline">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Reset;
