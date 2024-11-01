import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { set } from "mongoose";
import { setLocalStorage } from "../utils/LocalStorage";

const Form = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const data = userData.employees;
  const [titleTask, setTitleTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskAsignTo, setTaskAsignTo] = useState("");
  const [newTask, setNewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      titleTask,
      taskCategory,
      taskAsignTo,
      taskDate,
      taskDescription,
      active: false,
      complete: false,
      newTask: true,
      failed: false,
    });
    // console.log(newTask);

    // console.log('userData',data);
    data.forEach((employee) => {
      // console.log(employee);
      if (taskAsignTo == employee.firstName) {
        employee.tasks.push(newTask);
        employee.countTask.newTask += 1;
        // console.log(employee);
      }
    });

    console.log(data);
    localStorage.setItem("employees", JSON.stringify(data));

    setTitleTask("");
    setTaskAsignTo("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDescription("");
    // setLocalStorage();
  };

  return (
    <>
      <div className="bg-neutral-800 rounded-lg p-8 flex justify-center flex-col items-center">
        <div className="mb-5 m-auto w-[60%] px-10">
          <h1 className="text-2xl font-bold">Create Task ➡️</h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
          className="flex justify-between gap-8  pb-5  items-center w-[50%] rounded-lg m-auto font-bold "
        >
          <div>
            <div>
              <h3>Task Title</h3>
              <input
                value={titleTask}
                onChange={(e) => {
                  setTitleTask(e.target.value);
                }}
                type="text"
                placeholder="Make a Youtube video "
                className="bg-transparent outline-none border-2 border-emerald-100 w-[320px] p-2 mb-3 rounded-md"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                name=""
                id=""
                className="bg-transparent outline-none border-2 border-emerald-100 w-[320px] p-2 mb-3 rounded-md"
              />
            </div>
            <div>
              <h3>Asign to</h3>
              <input
                value={taskAsignTo}
                onChange={(e) => {
                  setTaskAsignTo(e.target.value);
                }}
                type="text"
                placeholder="employee name"
                className="bg-transparent outline-none border-2 border-emerald-100 w-[320px] p-2 mb-3 rounded-md"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                value={taskCategory}
                onChange={(e) => {
                  setTaskCategory(e.target.value);
                }}
                type="text"
                name=""
                id=""
                placeholder="enter cateory"
                className="bg-transparent outline-none border-2 border-emerald-100 w-[320px] p-2 mb-3 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <h3> Description </h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              rows={9}
              name=""
              id=""
              className="bg-transparent outline-none border-2 border-emerald-100 w-[320px] p-2 mb-3 rounded-md"
            ></textarea>
            <button className=" outline-none border-2 border-white-100 w-[320px] p-2 rounded-md bg-emerald-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
