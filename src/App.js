import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <main>
      <Form handler={setTodos} currentNum={todos.length + 1} />
      <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;
