import { useParams } from 'react-router-dom';
import useFetchHook from '../hooks/useFetchHook';

const EmployeeDetails = () => {
  const { id } = useParams();
  const { employee, loading } = useFetchHook();

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedEmployee = employee.find((emp) => emp.id === parseInt(id));

  if (!selectedEmployee) {
    return <p>Employee not found</p>;
  }

  return (
    <div className="employee-details">
      <img src={selectedEmployee.image} alt="employee" width={100} height={100} />
      <h2>
        {selectedEmployee.firstName} {selectedEmployee.lastName}
      </h2>
      <p>Email: {selectedEmployee.email}</p>
      <p>Phone: {selectedEmployee.phone}</p>
      <p>University: {selectedEmployee.university}</p>
      <p>Role: {selectedEmployee.role}</p>
      <p>City: {selectedEmployee.address.city}</p>
    </div>
  );
};

export default EmployeeDetails;
