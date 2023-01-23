import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoAction from "./components/Todos/TodosAction";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        item: text,
        isCompleted: false,
      },
    ]);
  }

  function changeItemIsCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return { ...todo };
      })
    );
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const reset = () => {
    setTodos([]);
  };

  const deleteCompleted = () => {
    setTodos(
      todos.filter((item) => {
        return item.isCompleted === false;
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoAction reset={reset} deleteCompleted={deleteCompleted} />
      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        changeItemIsCompleted={changeItemIsCompleted}
      />
    </div>
  );
}

export default App;
