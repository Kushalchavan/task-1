import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import EmployeeDetails from "./pages/EmployeeDetails";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [genderFilter, setGenderFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <div className="main-section">
          <Aside setGenderFilter={setGenderFilter} />
          <Routes>
            <Route path="/" element={<Card genderFilter={genderFilter} searchQuery={searchQuery}/>} />
            <Route path="/:id" element={<EmployeeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
