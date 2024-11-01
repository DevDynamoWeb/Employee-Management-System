import React, { useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div
      id="alltask"
      className="mt-4 flex-col flex gap-2  rounded-lg  bg-neutral-800  p-5 bg-lg"
    >
      <div className="bg-red-600 h-15 rounded-lg flex gap-3 justify-between p-3 items-center flex-shrink-0 overflow-auto">
        <h2 className=" w-1/5 text-xl font-bold text-justify">Employee</h2>
        <h2 className=" w-1/5 text-xl font-bold">New Task</h2>
        <h2 className=" w-1/5 text-xl font-bold">Active Task</h2>
        <h2 className=" w-1/5 text-xl font-bold">Complte Task</h2>
        <h2 className=" w-1/5 text-xl font-bold">Failed Task</h2>
      </div>
      {userData.employees && userData.employees.length > 0 ? (
        userData.employees.map((employee, index) => {
          return (
            <div
              key={index}
              className="bg-transparent rounded-lg flex gap-3 justify-between p-1 px-3  flex-shrink-0 border-2 border-emerald-600"
            >
              <h2 className="w-1/5 text-lg text-justify">
                {employee.firstName}
              </h2>
              <h2 className="w-1/5 text-lg ">
                {employee.countTask?.newTask || 0}
              </h2>
              <h2 className="w-1/5 text-lg ">
                {employee.countTask?.complte || 0}
              </h2>
              <h2 className="w-1/5 text-lg ">
                {employee.countTask?.active || 0}
              </h2>
              <h2 className="w-1/5 text-lg ">
                {employee.countTask?.failed || 0}
              </h2>
            </div>
          );
        })
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}

export default Alltask;
