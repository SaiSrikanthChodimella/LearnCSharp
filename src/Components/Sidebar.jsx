import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="p-2 cursor-pointer hover:bg-gray-700">
          <Link to="/" className="block">
            Home
          </Link>
        </li>
        <li className="p-2 cursor-pointer hover:bg-gray-700">
          <Link to="/Test" className="block">
            Profile
          </Link>
        </li>
        <li className="p-2 cursor-pointer hover:bg-gray-700">
          <Link to="/settings" className="block">
            Settings
          </Link>
        </li>
        <li className="p-2 cursor-pointer hover:bg-gray-700">
          <Link to="/about" className="block">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
