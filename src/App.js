import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { myTasks } from "./MyTasks";

const allCategories = ["all", ...new Set(myTasks.map((item) => item.category))];
//console.log(allCategories);

function App() {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState(myTasks);
  // eslint-disable-next-line
  const [showFromAdd, setShowFromAdd] = useState(false);
  // eslint-disable-next-line
  const [showFilterTask, setShowFilterTask] = useState(false);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  // Delete a task
  const deleteTask = (idSelected) => {
    //console.log("idSelected to be deleted:" + idSelected);
    // eslint-disable-next-line
    setTasks(tasks.filter((task) => task.id != idSelected));
  };

  //Toggle the reminder-value of the task
  const reminderTask = (idToggle) => {
    //console.log("idToggle to be reminder:" + idToggle);
    setTasks(
      tasks.map((task) =>
        task.id === idToggle ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add a new task
  const AddNewTask = (task) => {
    //tasks.push(newTask);
    //console.log(tasks);
    const newTask = { ...task };
    setTasks([...tasks, newTask]);
  };

  //Toggle to show the form-add-task
  const showForm = () => {
    setShowFromAdd(!showFromAdd);
  };

  //Toggle to show the form-add-task
  const showFilter = () => {
    setShowFilterTask(!showFilterTask);
  };

  //Filter Tasks
  const filterItem = (category) => {
    if (category === "all") {
      setTasks(myTasks);
      return;
    }
    setTasks(myTasks.filter((task) => task.category === category));
  };
  return (
    <div className="container">
      <Header
        showForm={showForm}
        showFromAdd={showFromAdd}
        showFilterTask={showFilterTask}
        showFilter={showFilter}
      />
      {showFilterTask && (
        <FilterTask categories={categories} filterItem={filterItem} />
      )}
      {showFromAdd && <AddTask AddNewTask={AddNewTask} />}

      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          reminderTask={reminderTask}
        />
      ) : (
        <p>There is no task to show</p>
      )}
    </div>
  );
}

export default App;
