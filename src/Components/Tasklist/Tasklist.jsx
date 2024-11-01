import React from "react";
import Accepttask from "./Accepttask";
import Failedtask from "./Failedtask";
import Completetask from "./Completetask";
import Newtask from "./Newtask";

const Tasklist = ({ data = {} }) => {
  return (
    <div
      id="tasklist"
      className="min-h-60 w-full flex justify-start mt-1 bg-[#1c1c1c] p-3 gap-5 overflow-x-auto rounded-lg"
    >
      {data.tasks &&
        data.tasks.map((item , idx) => {
         

          return (
            <div key={item.taskId}>
              {item.active && <Accepttask data={item} key={idx} />}
              {item.complete && <Completetask data={item} key={idx} />}
              {item.failed && <Failedtask data={item} key={idx} />}
              {item.newTask && <Newtask data={item} key={idx} />}
            </div>
          );
        })}
    </div>
  );
};

export default Tasklist;
