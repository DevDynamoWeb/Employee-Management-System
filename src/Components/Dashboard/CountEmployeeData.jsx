import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { data } from "autoprefixer";

const CountEmployeeData = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [totalTask, setTotalTask] = useState(0);
  const data = userData.employees;

  useEffect(() => {
    const computeTotalTask = data.reduce((total, employee) => {
      const empTaskTotal =
        (employee.countTask?.newTask || 0) +
        (employee.countTask?.complte || 0) +
        (employee.countTask?.active || 0) +
        (employee.countTask?.failed || 0);
      return total + empTaskTotal;
    }, 0);
    setTotalTask(computeTotalTask);
  }, [data]);

  return (
    <div className="pb-10 mt-5">
      <div className="flex gap-3 justify-between items-center flex-nowrap">
        <div className="p-4 w-[55%]  rounded-lg ">
          <h1 className="text-8xl p-2 text-center font-bold">{data.length}</h1>
          <h3 className="xl text-center font-bold">Total Employeesk</h3>
        </div>
        <div className="p-4 w-[55%]  rounded-lg ">
          <h1 className="text-8xl p-2 text-center font-bold">{totalTask}</h1>
          <h3 className="xl text-center">Total Task</h3>
        </div>
      </div>
    </div>
  );
};

export default CountEmployeeData;
