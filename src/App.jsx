import "./App.css";
import Header from "./MyComponents/Header.jsx";
import Footer from "./MyComponents/Footer.jsx";
import Todos from "./MyComponents/Todos.jsx";
import AddTodo from "./MyComponents/AddTodo.jsx";
import About from "./MyComponents/About.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <div className="app-container">
          <Header title="My Todos List" searchBar={false} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
