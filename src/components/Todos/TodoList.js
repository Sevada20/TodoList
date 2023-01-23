import Todo from "./Todo";

function TodoList({ todos, deleteTodoHandler, changeItemIsCompleted }) {
  return !todos.length ? (
    <h2>Todo list is empty</h2>
  ) : (
    todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        changeItemIsCompleted={changeItemIsCompleted}
      />
    ))
  );
}
export default TodoList;
