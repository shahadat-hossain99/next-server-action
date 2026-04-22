import TaskCard from "@/components/TaskCard/TaskCard";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <h2>Tasks : {tasks.length}</h2>

      <div className=" container mx-auto  max-w-3/4   grid grid-cols-3 gap-7">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
