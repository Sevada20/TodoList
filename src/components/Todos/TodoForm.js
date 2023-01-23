import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodoHandler }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodoHandler(text);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
        value={text}
      />
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
export default TodoForm;
