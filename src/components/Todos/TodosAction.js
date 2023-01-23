import styles from "./TodoList.module.css";
function TodoAction({ reset, deleteCompleted }) {
  return (
    <div>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
      <button className={styles.button} onClick={deleteCompleted}>
        DeleteCompleted
      </button>
    </div>
  );
}
export default TodoAction;
