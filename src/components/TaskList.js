import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, reminderTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          task={task}
          deleteTask={deleteTask}
          reminderTask={reminderTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
