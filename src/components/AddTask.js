import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

const AddTask = ({ AddNewTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");
  const [category, setCategory] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100),
      text,
      day,
      reminder,
      category,
    };
    AddNewTask(newTask);
    setText("");
    setDay("");
    setReminder("");
    setCategory("");
  };

  return (
    <div className="add-form">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-control">
          <label>Task description :</label>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Add task text"
            onChange={(e) => setText(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="form-control">
          <label>Day :</label>
          <input
            type="text"
            name="day"
            value={day}
            placeholder="Add task date & time"
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="form-control-check">
          <input
            type="checkbox"
            name="reminder"
            value={reminder}
            label="Check me out"
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label>Reminder</label>
        </FormGroup>
        <FormGroup className="form-control">
          <label>
            Category :
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue="Select" disabled>
                Select
              </option>
              <option value="food">food</option>
              <option value="sport">sport</option>
              <option value="education">education</option>
              <option value="health">health</option>
            </select>
          </label>
        </FormGroup>
        <button className="btn-v1 addTask">Save the new task</button>
      </Form>
    </div>
  );
};

export default AddTask;
