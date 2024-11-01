import React from "react";

const Dashboard = ({data}) => {
  return (
    <>
      <div className="pb-10">
        <div className="flex gap-3 justify-between items-center flex-nowrap">
          <div className="p-4 w-[55%] bg-blue-500 rounded-lg ">
            <h1 className="text-5xl p-2 text-center">
              {data.countTask.newTask}
            </h1>
            <h3 className="xl text-center">New Task</h3>
          </div>
          <div className="p-4 w-[55%] bg-green-500 rounded-lg ">
            <h1 className="text-5xl p-2 text-center">
              {data.countTask.complete}
            </h1>
            <h3 className="xl text-center">Complte Task</h3>
          </div>
          <div className="p-4 w-[55%] bg-yellow-500 rounded-lg">
            <h1 className="text-5xl p-2 text-center">
              {data.countTask.active}
            </h1>
            <h3 className="xl text-center"> Active Task</h3>
          </div>

          <div className="p-4 w-[55%] bg-red-500 rounded-lg ">
            <h1 className="text-5xl p-2 text-center">
              {data.countTask.failed}
            </h1>
            <h3 className="xl text-center">failed Task</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
