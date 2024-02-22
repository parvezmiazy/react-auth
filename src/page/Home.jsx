import { singOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const [UserActivation, loading, error] = useAuthState(auth);
  if (loading) return <p>User info loading...</p>;

  const handleLogout = () => {
    singOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Sign out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>Welcome, {UserActivation.email}</div>

      <button
        className="bg-black text-white rounded p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
