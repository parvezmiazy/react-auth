import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
