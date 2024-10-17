import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useFetchHook from "../hooks/useFetchHook";
import { useNavigate } from "react-router-dom"; 

const Card = ({ searchQuery, genderFilter }) => {
  const { employee, loading } = useFetchHook();
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (employee) {
      setEmployees(employee);
    }
  }, [employee]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredEmployees = employees
    .filter((emp) => (genderFilter ? emp.gender.toLowerCase() === genderFilter : true))
    .filter((emp) =>
      `${emp?.firstName ?? ""} ${emp?.lastName ?? ""}`
        .toLowerCase()
        .includes(searchQuery?.toLowerCase() ?? "")
    );

  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
  };

  const handleCardClick = (id) => {
    navigate(`${id}`);
  }

  return (
    <div className="main-card-section">
      {filteredEmployees.map((emp) => (
        <div key={emp.id} className="card" onClick={() => handleCardClick(emp.id)}>
          <img src={emp.image} alt="employee image" width={60} height={60} />
          <h4 className="username">
            {emp.firstName} {emp.lastName}
          </h4>
          <b>{emp.gender}</b>
          <p className="email">{emp.email}</p>
          <p>{emp.phone}</p>
          <p>{emp.university}</p>
          <p>{emp.role}</p>
          <p>{emp.address?.city}</p>

          <div className="buttons">
            <MdDelete onClick={() => handleDelete(emp.id)} />
            <FaEdit />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
