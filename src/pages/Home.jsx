import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, error, loading] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);

  const handelLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading user....</h1>;
  if (error) return <h1>error occured</h1>;
  return (
    <div className="flex items-center gap-5 justify-center h-[92vh] bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800">
        Welcome, {user?.displayName ?? user?.email}
      </h1>
      <button
        onClick={handelLogout}
        className="bg-red-500 text-white w-28 px-4 py-2 rounded-md text-sm hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
