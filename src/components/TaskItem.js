import React from "react";
import { FaTrash } from "react-icons/fa";

function TaskItem({
  task: { id, text, day, reminder, category },
  deleteTask,
  reminderTask,
}) {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => reminderTask(id)}
    >
      <h3>
        {text}
        <div>
          <FaTrash
            style={{ color: "red", fontSize: "14px" }}
            onClick={() => deleteTask(id)}
          />
        </div>
      </h3>
      <p>{day}</p>
      <span>{category}</span>
    </div>
  );
}

export default TaskItem;
