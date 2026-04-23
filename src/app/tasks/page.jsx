import AddTask from "@/components/AddTask/AddTask";
import TaskCard from "@/components/TaskCard/TaskCard";
import { addATask } from "@/lib/action";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTasks();

  return (
    <div className="space-y-10 mt-10">
      <div className=" container mx-auto  max-w-3/4  space-y-5 ">
        <h2 className="text-2xl font-bold">Tasks : {tasks.length}</h2>
        <AddTask addATask={addATask}></AddTask>
      </div>

      <div className=" container mx-auto  max-w-3/4   grid grid-cols-3 gap-7">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
