import React, { useContext, useState, useEffect } from "react";
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./Context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  // Initialize local storage when the app loads
  useEffect(() => {
    setLocalStorage();
  }, []);

  const [user, setUser] = useState("");
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);



  // Check for an existing logged user in localStorage on initial render
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      setUser(loggedUser.role); // Set user role if logged in
      setLoggedUserData(loggedUser.data); // Set logged user's data
    }
  }, []);

  // Function to handle login process
  const handleLogin = (email, password) => {
    if (userData) {
      // Check if the provided credentials match the admin account
      const admin =
        userData.admin?.email === email &&
        userData.admin?.password === password;

      // Check if the provided credentials match any employee account
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );

      // If an employee is found, log them in as an "employee"
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedUserData(employee);

        // If admin credentials match, log in as an "admin"
      } else if (admin) {
        setUser("admin");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "admin", data: userData.admin })
        );
        setLoggedUserData(userData.admin); // Store admin data in state

        // If neither admin nor employee credentials match, show an error
      } else {
        alert('Invalid Credentials');
      }
    }
  }


  // Render the appropriate dashboard or login screen based on user role
  return (
    <div className="p-12">
      {/* Show login if no user */}
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {/* Show admin dashboard */}
      {user === "admin" && <AdminDashboard data={loggedUserData} />}

      {/* Show employee dashboard */}
      {user === "employee" && <EmployeeDashboard data={loggedUserData} />}
    </div>
  );
}
  ;

export default App;
