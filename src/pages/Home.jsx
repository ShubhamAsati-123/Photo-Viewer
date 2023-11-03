import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore what our website has to offer.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-2xl bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-2xl bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
