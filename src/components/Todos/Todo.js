import styles from "./Todo.module.css";
import { RiDeleteBack2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, deleteTodoHandler, changeItemIsCompleted }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.item}</div>
      <RiDeleteBack2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodoHandler(todo.id)}
      />
      <FaCheck
        className={`${styles.checkIcon} ${
          todo.isCompleted ? styles.nestedCheckIcon : ""
        }`}
        onClick={() => changeItemIsCompleted(todo.id)}
      />
    </div>
  );
}
export default Todo;
