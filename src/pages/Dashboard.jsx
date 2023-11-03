import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
     // Simulate an asynchronous operation (e.g., fetching data)
     setTimeout(() => {
       setLoading(false); // Set loading to false when data is loaded
     }, 2000);
   }, []); 



  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch an action to update authentication status to false
    dispatch({ type: "LOGOUT", isAuthenticated: false });
  };

  // If not authenticated, redirect to the login page

  return (
    <div>
      {loading ? (
        <Loader /> // Render the loader while loading is true
      ) : (
        <>
        <Navbar />
          <div className="flex flex-col h-screen justify-center items-center">
            <h2 className="text-5xl text-center">Welcome to the Dashboard!</h2>
            {/* Add your dashboard content here */}
            <Link to="/">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-3xl text-white p-2 rounded hover:bg-red-600 mt-4"
              >
                Logout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
