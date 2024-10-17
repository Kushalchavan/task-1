import { IoIosSearch } from "react-icons/io";
import "../index.css";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="nav-bar">
      <div>
        <input
          type="text"
          placeholder="Search here.."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button>
          <IoIosSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
