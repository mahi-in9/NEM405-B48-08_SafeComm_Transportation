import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between m-1 border py-2 bg-gray-600 rounded">
      <div className="m-1">
        <Link to="/" className="font-bold">
          Home
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-400 border rounded"
        />
      </div>
      <div className="m-1 font-bold">
        <Link to="/register" className="mr-1">
          SignIn
        </Link>
        <Link to="/login" className="mr-1">
          LogIn
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
