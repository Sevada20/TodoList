function TodoAction({ reset, deleteCompleted }) {
  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={deleteCompleted}>DeleteCompleted</button>
    </div>
  );
}
export default TodoAction;
