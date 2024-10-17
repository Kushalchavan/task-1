import { useEffect, useState } from "react";

const useFetchHook = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setEmployee(data.users);
        console.log(data.users)
      } catch (error) {
        console.error("Error occur while fetching the data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  return { employee, loading };
};

export default useFetchHook;
