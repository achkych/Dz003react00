import React from "react";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h3>Конвертер температуры</h3>
      <TemperatureConverter />{" "}
      <hr></hr>
      <h3>Список дел</h3>
      <TodoList/>
    </div>
  );
};

export default App;
