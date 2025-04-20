import React from "react";
import TodoList from "./TodoList";


//create your first component
function Home() {
	return (
	  <div className="Home container m-5">
		<h1>Mi Lista de Tareas</h1>
		<TodoList />
	  </div>
	);
  }
  
  export default Home;



